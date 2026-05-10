<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useData, withBase } from "vitepress";

const { theme } = useData();

type TdBrandTheme = {
  id: string;
  footerLegalText: string;
  footerCopyright: string;
};

const tdBrand = computed(() => (theme.value as { tdBrand?: TdBrandTheme }).tdBrand);

type LegalKind = "privacy" | "terms" | null;

const open = ref<LegalKind>(null);
const iframeRef = ref<HTMLIFrameElement | null>(null);

const dialogTitleId = "td-legal-modal-title";

const iframeSrc = computed(() => {
  if (open.value === "privacy") {
    return `${withBase("/legal-privacy-standalone.html")}?embed=1`;
  }
  if (open.value === "terms") {
    return `${withBase("/legal-terms-standalone.html")}?embed=1`;
  }
  return "";
});

const dialogTitle = computed(() =>
  open.value === "privacy" ? "隐私政策" : open.value === "terms" ? "用户协议" : "",
);

/** 记录打开弹窗前 body 的内联样式，关闭时还原，避免残留 */
let bodyScrollSnapshot: { overflow: string; paddingRight: string } | null = null;

function lockBodyScroll() {
  if (typeof document === "undefined" || bodyScrollSnapshot) {
    return;
  }
  const body = document.body;
  bodyScrollSnapshot = {
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
  };
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  body.style.overflow = "hidden";
  if (scrollbar > 0) {
    body.style.paddingRight = `${scrollbar}px`;
  }
}

function unlockBodyScroll() {
  if (typeof document === "undefined" || !bodyScrollSnapshot) {
    return;
  }
  const body = document.body;
  body.style.overflow = bodyScrollSnapshot.overflow;
  body.style.paddingRight = bodyScrollSnapshot.paddingRight;
  bodyScrollSnapshot = null;
}

function openPrivacy() {
  open.value = "privacy";
}

function openTerms() {
  open.value = "terms";
}

function close() {
  open.value = null;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    close();
  }
}

function onIframeMessage(e: MessageEvent) {
  if (!e.data || e.data.type !== "td-legal-doc-height") {
    return;
  }
  const el = iframeRef.value;
  if (!el || e.source !== el.contentWindow) {
    return;
  }
  const cap = Math.floor(window.innerHeight * 0.78);
  el.style.height = `${Math.min(Math.ceil(e.data.height), cap)}px`;
}

watch(open, (v, prev) => {
  if (typeof document === "undefined") {
    return;
  }
  if (v && !prev) {
    lockBodyScroll();
    document.addEventListener("keydown", onKeydown);
  } else if (!v && prev) {
    unlockBodyScroll();
    document.removeEventListener("keydown", onKeydown);
  }
});

onMounted(() => {
  window.addEventListener("message", onIframeMessage);
});

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  window.removeEventListener("message", onIframeMessage);
  unlockBodyScroll();
});
</script>

<template>
  <footer class="td-site-legal-footer td-lp-new__footer" role="contentinfo">
    <div class="td-lp-new__section-head td-lp-new__footer-head">
      <span class="td-icon td-lp-new__footer-icon" aria-hidden="true">policy</span>
      <h2 class="td-lp-new__label td-lp-new__label--mute">合规与声明</h2>
    </div>
    <div class="td-lp-new__legal">
      <p>
        {{ tdBrand?.footerLegalText }}
      </p>
      <div class="td-lp-new__legal-links">
        <span>{{ tdBrand?.footerCopyright }}</span>
        <button type="button" class="td-legal-footer-link" @click="openPrivacy">Privacy Policy</button>
        <button type="button" class="td-legal-footer-link" @click="openTerms">Terms of Service</button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="open"
        class="td-legal-modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="dialogTitleId"
      >
        <div class="td-legal-modal__backdrop" aria-hidden="true" @click="close" />
        <div class="td-legal-modal__panel">
          <header class="td-legal-modal__head">
            <h2 :id="dialogTitleId" class="td-legal-modal__title">{{ dialogTitle }}</h2>
            <button type="button" class="td-legal-modal__close" aria-label="关闭" @click="close">
              关闭
            </button>
          </header>
          <div class="td-legal-modal__frame-wrap">
            <iframe
              ref="iframeRef"
              :key="open"
              class="td-legal-modal__iframe"
              :title="dialogTitle"
              :src="iframeSrc"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>
