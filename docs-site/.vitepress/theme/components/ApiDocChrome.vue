<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { computed, nextTick, onUnmounted, ref, watch } from "vue";

const route = useRoute();
const { frontmatter } = useData();

const showFallback = ref(false);

let mo: MutationObserver | null = null;

const method = computed(() => {
  const raw = (frontmatter.value.apiMethod ?? frontmatter.value.method ?? "").toString().trim().toUpperCase();
  if (!raw) return "";
  return /^GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS$/.test(raw) ? raw : "";
});

const apiPath = computed(() => (frontmatter.value.apiPath ?? "").toString().trim());

function teardownObserver() {
  mo?.disconnect();
  mo = null;
}

function injectPills() {
  if (typeof document === "undefined") return;

  const m = method.value;
  const isApi = route.path.startsWith("/api/");
  if (!isApi || !m) {
    showFallback.value = false;
    return;
  }

  const groups = document.querySelectorAll(".vp-doc .vp-code-group");
  showFallback.value = groups.length === 0;

  groups.forEach((group) => {
    const tabs = group.querySelector(":scope > .tabs");
    if (!tabs || !(tabs instanceof HTMLElement)) return;
    if (tabs.querySelector(".td-api-http-method-pill")) return;

    const pill = document.createElement("span");
    pill.className = `td-api-http-method-pill td-api-http-method-pill--${m.toLowerCase()}`;
    pill.textContent = m;
    pill.setAttribute("aria-label", `HTTP ${m}`);
    tabs.insertBefore(pill, tabs.firstChild);
  });
}

async function syncApiChrome() {
  const isApi = route.path.startsWith("/api/");
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("td-api-reference", isApi);
  }

  teardownObserver();

  if (!isApi) {
    showFallback.value = false;
    return;
  }

  if (typeof document === "undefined") return;

  await nextTick();
  injectPills();

  const doc = document.querySelector(".vp-doc");
  if (doc) {
    mo = new MutationObserver(() => {
      injectPills();
    });
    mo.observe(doc, { childList: true, subtree: true });
  }
}

watch(
  () => [route.path, frontmatter.value.apiMethod, frontmatter.value.method, frontmatter.value.apiPath],
  () => {
    void syncApiChrome();
  },
  { flush: "post", immediate: true },
);

onUnmounted(() => {
  teardownObserver();
  if (typeof document !== "undefined") {
    document.documentElement.classList.remove("td-api-reference");
  }
});
</script>

<template>
  <div
    v-if="showFallback && route.path.startsWith('/api/') && method"
    class="td-api-endpoint-fallback"
  >
    <span
      class="td-api-http-method-pill"
      :class="`td-api-http-method-pill--${method.toLowerCase()}`"
      >{{ method }}</span>
    <code v-if="apiPath" class="td-api-endpoint-fallback__path">{{ apiPath }}</code>
  </div>
</template>
