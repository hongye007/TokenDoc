<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const API_URL = "https://atomflow.vip/v1/chat/completions";

const open = ref(false);
const token = ref("");
const model = ref("gpt-5.4-mini");
const userContent = ref("Hello!");

const sending = ref(false);
const sendError = ref("");
const sendResult = ref("");

function shellSingleQuoted(payload: string): string {
  return `'${payload.replace(/'/g, `'\\''`)}'`;
}

/** Pretty-print JSON bodies; leave non-JSON unchanged. */
function formatResponseBody(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return raw;
  try {
    return JSON.stringify(JSON.parse(trimmed), null, 2);
  } catch {
    return raw;
  }
}

const requestBody = computed(() =>
  JSON.stringify({
    model: model.value.trim() || "gpt-5.4-mini",
    messages: [{ role: "user", content: userContent.value }],
  }),
);

const bearerPreview = computed(() => {
  const t = token.value.trim();
  return t.length ? t : "sk-your-api-key";
});

const curlCommand = computed(() => {
  const d = shellSingleQuoted(requestBody.value);
  return `curl ${API_URL} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${bearerPreview.value}" \\
  -d ${d}`;
});

function close() {
  open.value = false;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && open.value) {
    e.preventDefault();
    close();
  }
}

watch(open, (v) => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("td-qs-playground-lock", v);
});

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.documentElement.classList.remove("td-qs-playground-lock");
});

async function copyCurl() {
  try {
    await navigator.clipboard.writeText(curlCommand.value);
  } catch {
    /* ignore */
  }
}

async function sendRequest() {
  sendError.value = "";
  sendResult.value = "";
  const t = token.value.trim();
  if (!t) {
    sendError.value = "请先填写令牌。";
    return;
  }
  sending.value = true;
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
      },
      body: requestBody.value,
    });
    const text = await res.text();
    sendResult.value = formatResponseBody(text);
    if (!res.ok) {
      sendError.value = `HTTP ${res.status}`;
    }
  } catch (err) {
    sendError.value = err instanceof Error ? err.message : String(err);
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <div class="td-qs-playground">
    <button type="button" class="td-btn td-btn--primary td-qs-playground__trigger" @click="open = true">
      试一试
    </button>

    <Teleport to="body">
      <div
        v-show="open"
        class="td-qs-playground__backdrop"
        role="presentation"
        @click.self="close"
      />
      <div
        v-show="open"
        class="td-qs-playground__modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="td-qs-playground-title"
      >
        <header class="td-qs-playground__top">
          <div class="td-qs-playground__method-path">
            <span class="td-qs-playground__pill">POST</span>
            <code class="td-qs-playground__path">{{ API_URL }}</code>
          </div>
          <div class="td-qs-playground__top-actions">
            <button
              type="button"
              class="td-btn td-btn--primary td-qs-playground__send"
              :disabled="sending"
              @click="sendRequest"
            >
              <span class="td-qs-playground__play" aria-hidden="true">▶</span>
              发送
            </button>
            <button type="button" class="td-qs-playground__icon-btn" aria-label="关闭" @click="close">
              ×
            </button>
          </div>
        </header>

        <div class="td-qs-playground__body">
          <div class="td-qs-playground__form">
            <h2 id="td-qs-playground-title" class="td-qs-playground__title">创建聊天补全</h2>
            <p class="td-qs-playground__desc">填写参数后，右侧 cURL 会同步更新；也可直接发送请求（受浏览器跨域策略影响）。响应正文显示在 cURL 下方。</p>

            <details class="td-qs-playground__collapse" open>
              <summary>请求参数</summary>
              <div class="td-qs-playground__fields">
                <label class="td-qs-playground__field">
                  <span class="td-qs-playground__field-head">
                    <span class="td-qs-playground__name">令牌</span>
                    <span class="td-qs-playground__type">string</span>
                    <span class="td-qs-playground__req">必填</span>
                  </span>
                  <span class="td-qs-playground__hint">对应请求头 <code>Authorization: Bearer …</code></span>
                  <input
                    v-model="token"
                    class="td-qs-playground__input"
                    type="password"
                    autocomplete="off"
                    placeholder="输入 sk-…"
                  />
                </label>
                <label class="td-qs-playground__field">
                  <span class="td-qs-playground__field-head">
                    <span class="td-qs-playground__name">model</span>
                    <span class="td-qs-playground__type">string</span>
                  </span>
                  <span class="td-qs-playground__hint">请求体中的模型 ID</span>
                  <input v-model="model" class="td-qs-playground__input" type="text" autocomplete="off" />
                </label>
                <label class="td-qs-playground__field">
                  <span class="td-qs-playground__field-head">
                    <span class="td-qs-playground__name">用户消息 content</span>
                    <span class="td-qs-playground__type">string</span>
                  </span>
                  <span class="td-qs-playground__hint">作为 <code>messages[0].content</code>（role 固定为 user）</span>
                  <textarea v-model="userContent" class="td-qs-playground__textarea" rows="4" />
                </label>
              </div>
            </details>
          </div>

          <div class="td-qs-playground__code-col">
            <div class="td-qs-playground__code">
              <div class="td-qs-playground__code-bar">
                <span>cURL</span>
                <button type="button" class="td-qs-playground__icon-btn" aria-label="复制 cURL" @click="copyCurl">
                  ⧉
                </button>
              </div>
              <pre class="td-qs-playground__pre"><code>{{ curlCommand }}</code></pre>
            </div>
            <p v-if="sendError" class="td-qs-playground__alert td-qs-playground__alert--err">{{ sendError }}</p>
            <div v-if="sendResult" class="td-qs-playground__response">
              <div class="td-qs-playground__response-bar">响应</div>
              <pre class="td-qs-playground__response-pre">{{ sendResult }}</pre>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.td-qs-playground__trigger {
  margin-top: 0.75rem;
}

.td-qs-playground__backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
}

.td-qs-playground__modal {
  position: fixed;
  z-index: 201;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(960px, calc(100vw - 2rem));
  max-height: min(720px, calc(100vh - 2rem));
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.td-qs-playground__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  flex-shrink: 0;
}

.td-qs-playground__method-path {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  flex: 1;
}

.td-qs-playground__pill {
  flex-shrink: 0;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.dark .td-qs-playground__pill {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.td-qs-playground__path {
  font-size: 0.72rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--vp-c-text-2);
}

.td-qs-playground__top-actions {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.td-qs-playground__send {
  font-size: 0.7rem;
  padding: 0.45rem 0.75rem;
}

.td-qs-playground__play {
  font-size: 0.65rem;
  margin-right: 0.15rem;
}

.td-qs-playground__icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
}

.td-qs-playground__icon-btn:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.td-qs-playground__body {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0;
  min-height: 0;
  flex: 1;
  overflow: hidden;
}

@media (max-width: 720px) {
  .td-qs-playground__body {
    grid-template-columns: 1fr;
    overflow: auto;
  }
}

.td-qs-playground__form {
  padding: 1rem 1.1rem;
  border-right: 1px solid var(--vp-c-divider);
  overflow: auto;
  min-height: 0;
}

@media (max-width: 720px) {
  .td-qs-playground__form {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
  }
}

.td-qs-playground__title {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 600;
}

.td-qs-playground__desc {
  margin: 0 0 1rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.td-qs-playground__collapse {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  padding: 0.35rem 0.65rem;
}

.td-qs-playground__collapse summary {
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  list-style: none;
}

.td-qs-playground__collapse summary::-webkit-details-marker {
  display: none;
}

.td-qs-playground__fields {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 0.65rem 0 0.35rem;
}

.td-qs-playground__field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.td-qs-playground__field-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.td-qs-playground__name {
  font-weight: 600;
  font-size: 0.8rem;
}

.td-qs-playground__type {
  font-size: 0.65rem;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
}

.td-qs-playground__req {
  font-size: 0.6rem;
  font-weight: 700;
  padding: 0.12rem 0.4rem;
  border-radius: 4px;
  background: rgba(244, 63, 94, 0.15);
  color: #f43f5e;
}

.td-qs-playground__hint {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.td-qs-playground__hint code {
  font-size: 0.68rem;
}

.td-qs-playground__input,
.td-qs-playground__textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  font-size: 0.8rem;
  font-family: var(--vp-font-family-mono);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.td-qs-playground__input:focus,
.td-qs-playground__textarea:focus {
  outline: none;
  border-color: #22c55e;
  box-shadow: 0 0 0 1px #22c55e;
}

.td-qs-playground__textarea {
  resize: vertical;
  min-height: 5rem;
  line-height: 1.45;
}

.td-qs-playground__code-col {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  background: var(--vp-code-block-bg);
}

.td-qs-playground__code-col .td-qs-playground__alert {
  margin: 0;
  padding: 0.5rem 0.75rem 0;
  flex-shrink: 0;
  font-size: 0.78rem;
}

.td-qs-playground__alert--err {
  color: #f43f5e;
}

.td-qs-playground__code-col .td-qs-playground__response {
  margin: 0.5rem 0.75rem 0.75rem;
  flex-shrink: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.td-qs-playground__response-bar {
  padding: 0.35rem 0.6rem;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  border-bottom: 1px solid var(--vp-c-divider);
}

.td-qs-playground__response-pre {
  margin: 0;
  padding: 0.6rem 0.75rem;
  font-size: 0.72rem;
  line-height: 1.5;
  max-height: 200px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

.td-qs-playground__code {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 0;
}

.td-qs-playground__code-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.65rem;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.td-qs-playground__pre {
  margin: 0;
  padding: 0.85rem;
  overflow: auto;
  max-height: min(38vh, 300px);
  font-size: 0.72rem;
  line-height: 1.55;
}

.td-qs-playground__pre code {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-code-block-color);
  white-space: pre;
}
</style>
