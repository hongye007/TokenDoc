<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { computed, onUnmounted, ref, watch } from "vue";
import { resolveAsidePreset, type AsideLang } from "../api-aside-presets";

type SnippetMap = Partial<Record<AsideLang, string>>;

/**
 * apiBaseUrl 常为 `https://host/v1`，apiPath 又为 `/v1/models`，拼在一起会出现 `/v1/v1/`。
 * 仅在 base 以 `/v1` 结尾且 path 以 `/v1` 开头时去掉 path 的前缀 `/v1`（不误伤 `/v1beta/...`）。
 */
function joinApiBasePath(base: string, apiPath: string): string {
  const b = base.replace(/\/$/, "");
  let p = apiPath.startsWith("/") ? apiPath : `/${apiPath}`;
  if (/\/v1$/i.test(b) && /^\/v1(\/|$)/.test(p) && !/^\/v1beta/i.test(p)) {
    p = p.replace(/^\/v1(\/|$)/, "/");
    if (p === "") p = "/";
  }
  return `${b}${p}`;
}

const TAB_ORDER: AsideLang[] = ["curl", "python", "javascript", "go", "php"];

const TAB_LABEL: Record<AsideLang, string> = {
  curl: "cURL",
  python: "Python",
  javascript: "JavaScript",
  go: "Go",
  php: "PHP",
};

const route = useRoute();
const { frontmatter } = useData();

const copied = ref<"req" | "res" | null>(null);
let copyTimer: ReturnType<typeof setTimeout> | null = null;

function flash(kind: "req" | "res") {
  copied.value = kind;
  if (copyTimer) clearTimeout(copyTimer);
  copyTimer = setTimeout(() => {
    copied.value = null;
    copyTimer = null;
  }, 1600);
}

async function copyText(text: string, kind: "req" | "res") {
  try {
    await navigator.clipboard.writeText(text);
    flash(kind);
  } catch {
    /* ignore */
  }
}

const defaultApiBase = computed(
  () => (frontmatter.value.apiBaseUrl ?? "https://atomflow.vip/v1").toString().replace(/\/$/, ""),
);

const fmAside = computed(() => frontmatter.value.apiAside);

const routePreset = computed(() => resolveAsidePreset(route.path));

const mergedSnippets = computed<SnippetMap>(() => {
  const fm = fmAside.value;
  if (fm === false) return {};

  const fromFm = fm && typeof fm === "object" && fm.snippets && typeof fm.snippets === "object"
    ? (fm.snippets as SnippetMap)
    : {};

  const preset = routePreset.value;
  if (preset) {
    return { ...preset.snippets, ...fromFm };
  }

  return { ...fromFm };
});

const mergedResponse = computed(() => {
  const fm = fmAside.value;
  if (fm && typeof fm === "object" && typeof fm.response === "string" && fm.response.trim()) {
    return fm.response.trim();
  }
  const preset = routePreset.value;
  if (preset) {
    return preset.response;
  }
  return '{\n  "note": "响应示例见正文"\n}';
});

const autoCurl = computed(() => {
  const method = (frontmatter.value.apiMethod ?? frontmatter.value.method ?? "")
    .toString()
    .trim()
    .toUpperCase();
  const path = (frontmatter.value.apiPath ?? "").toString().trim();
  if (!method || !path || !/^GET|POST|PUT|PATCH|DELETE|HEAD$/.test(method)) {
    return "";
  }
  const url = joinApiBasePath(defaultApiBase.value, path);
  if (method === "GET" || method === "HEAD") {
    return `curl "${url}" \\\n  -H "Authorization: Bearer sk-your-api-key"`;
  }
  return `curl -X ${method} "${url}" \\\n  -H "Authorization: Bearer sk-your-api-key" \\\n  -H "Content-Type: application/json" \\\n  -d '{}'`;
});

const effectiveSnippets = computed<SnippetMap>(() => {
  const m = { ...mergedSnippets.value };
  const keys = TAB_ORDER.filter((k) => m[k] && m[k]!.trim());
  if (keys.length === 0 && autoCurl.value) {
    return { curl: autoCurl.value };
  }
  return m;
});

const tabs = computed(() => TAB_ORDER.filter((k) => effectiveSnippets.value[k]?.trim()));

const activeTab = ref<AsideLang>("curl");

watch(
  tabs,
  (t) => {
    if (t.length && !t.includes(activeTab.value)) {
      activeTab.value = t[0]!;
    }
  },
  { immediate: true },
);

const activeSnippet = computed(() => {
  const t = activeTab.value;
  return effectiveSnippets.value[t]?.trim() ?? "";
});

const showPanel = computed(() => {
  if (!route.path.startsWith("/api/")) return false;
  if (frontmatter.value.aside === false) return false;
  if (fmAside.value === false) return false;
  return tabs.value.length > 0;
});

watch(
  () => [route.path, showPanel.value],
  () => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("td-api-aside-tryit", showPanel.value);
  },
  { immediate: true },
);

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.remove("td-api-aside-tryit");
  }
});
</script>

<template>
  <div v-if="showPanel" class="td-api-aside-tryit">
    <div class="td-api-aside-card td-api-aside-card--request">
      <div class="td-api-aside-card__toolbar">
        <div class="td-api-aside-tabs" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab"
            type="button"
            role="tab"
            :aria-selected="activeTab === tab"
            class="td-api-aside-tab"
            :class="{ 'is-active': activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ TAB_LABEL[tab] }}
          </button>
        </div>
        <button
          type="button"
          class="td-api-aside-icon-btn"
          :aria-label="copied === 'req' ? '已复制' : '复制请求示例'"
          @click="copyText(activeSnippet, 'req')"
        >
          <span class="td-api-aside-copy-icon" aria-hidden="true" />
          <span v-if="copied === 'req'" class="td-api-aside-copied">已复制</span>
        </button>
      </div>
      <pre class="td-api-aside-pre td-api-aside-pre--request"><code>{{ activeSnippet }}</code></pre>
    </div>

    <div class="td-api-aside-card td-api-aside-card--response">
      <div class="td-api-aside-card__toolbar">
        <div class="td-api-aside-tabs td-api-aside-tabs--single" role="presentation">
          <span class="td-api-aside-tab is-active is-static" role="heading">Response</span>
        </div>
        <button
          type="button"
          class="td-api-aside-icon-btn"
          :aria-label="copied === 'res' ? '已复制' : '复制响应示例'"
          @click="copyText(mergedResponse, 'res')"
        >
          <span class="td-api-aside-copy-icon" aria-hidden="true" />
          <span v-if="copied === 'res'" class="td-api-aside-copied">已复制</span>
        </button>
      </div>
      <pre class="td-api-aside-pre td-api-aside-pre--response"><code>{{ mergedResponse }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.td-api-aside-tryit {
  width: 100%;
  min-height: 0;
}

.td-api-aside-card {
  border-radius: 10px;
  border: 1px solid var(--td-api-aside-border, var(--vp-c-divider));
  background: var(--td-api-aside-surface, var(--vp-c-bg-soft));
  overflow: hidden;
  min-height: 0;
}

.td-api-aside-card__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 40px;
  padding: 0 8px 0 4px;
  border-bottom: 1px solid var(--td-api-aside-border, var(--vp-c-divider));
  background: var(--td-api-aside-toolbar, var(--vp-c-bg-alt));
}

.td-api-aside-tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 0;
  min-width: 0;
}

.td-api-aside-tabs--single {
  padding-left: 4px;
}

.td-api-aside-tab {
  position: relative;
  margin: 0;
  padding: 8px 10px 6px;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: color 0.15s ease;
}

.td-api-aside-tab:hover:not(.is-static) {
  color: var(--vp-c-text-2);
}

.td-api-aside-tab.is-active {
  color: var(--td-api-aside-accent, var(--vp-c-brand-1));
}

.td-api-aside-tab.is-active:not(.is-static)::after {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 2px;
  border-radius: 2px 2px 0 0;
  background: var(--td-api-aside-accent, var(--vp-c-brand-1));
}

.td-api-aside-tab.is-static {
  cursor: default;
  padding-left: 8px;
}

.td-api-aside-icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 6px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.td-api-aside-icon-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.td-api-aside-copy-icon {
  display: block;
  width: 16px;
  height: 16px;
  background: currentColor;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E")
    center / contain no-repeat;
}

.td-api-aside-copied {
  font-size: 11px;
  font-weight: 600;
  color: var(--td-api-aside-accent, var(--vp-c-brand-1));
}

.td-api-aside-pre {
  margin: 0;
  padding: 12px 12px 14px;
  overflow: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  background: var(--td-api-aside-code-bg, var(--vp-c-bg));
}

.td-api-aside-pre code {
  display: block;
  font-family: inherit;
  white-space: pre;
  min-width: min-content;
}
</style>
