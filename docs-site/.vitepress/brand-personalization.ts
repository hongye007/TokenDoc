/**
 * 各品牌个性化覆盖（主题、文案模板差异等）。
 * 未列出的字段由 brands.ts 中 buildBrandProfile 从必选字段推导。
 */

import type { BrandId, BrandPersonalization } from "./brand-common";

/** 微词元紫色主题（AtomFlow 使用 brand-common 默认主题） */
const MINITOKEN_THEME: BrandPersonalization["theme"] = {
  themeColorLight: "#faf8ff",
  themeColorDark: "#1a1028",
  root: {
    "--td-p-brand-strong": "#6d5ae8",
    "--td-p-brand": "#8b7cf8",
    "--td-p-brand-bright": "#c4b5fd",
    "--td-p-brand-soft": "rgba(139, 124, 248, 0.14)",
    "--td-p-brand-solid": "#6d5ae8",
    "--td-p-brand-solid-hover": "#5b4ad6",
    "--td-p-brand-solid-active": "#4a3ab8",
    "--td-p-brand-on-dark-light": "#e9d5ff",
    "--td-p-brand-on-dark-mid": "#d8b4fe",
    "--td-p-brand-soft-on-dark": "rgba(216, 180, 254, 0.22)",
    "--td-p-brand-solid-on-dark": "#a78bfa",
    "--td-p-brand-solid-hover-on-dark": "#8b7cf8",
    "--td-p-brand-solid-active-on-dark": "#7c6ee8",
    "--td-p-landing-primary": "#ddd6fe",
    "--td-p-landing-on-primary": "#1a1028",
    "--td-p-landing-accent": "#c4b5fd",
    "--td-p-api-primary": "#ddd6fe",
    "--td-p-api-default-method": "#c4b5fd",
    "--td-p-api-method-soft": "rgba(196, 181, 253, 0.16)",
    "--td-p-api-aside-accent": "#a78bfa",
  },
  dark: {
    "--td-p-brand-strong": "#5b4ad6",
    "--td-p-brand": "#a78bfa",
    "--td-p-brand-bright": "#ddd6fe",
    "--td-p-brand-soft": "rgba(167, 139, 250, 0.16)",
    "--td-p-brand-solid": "#8b7cf8",
    "--td-p-brand-solid-hover": "#7c6ee8",
    "--td-p-brand-solid-active": "#6d5ae8",
    "--td-p-brand-on-dark-light": "#f3e8ff",
    "--td-p-brand-on-dark-mid": "#e9d5ff",
    "--td-p-brand-soft-on-dark": "rgba(233, 213, 255, 0.22)",
    "--td-p-brand-solid-on-dark": "#c4b5fd",
    "--td-p-brand-solid-hover-on-dark": "#a78bfa",
    "--td-p-brand-solid-active-on-dark": "#8b7cf8",
    "--td-p-landing-primary": "#f3e8ff",
    "--td-p-landing-on-primary": "#1a1028",
    "--td-p-landing-accent": "#e9d5ff",
    "--td-p-api-primary": "#f3e8ff",
    "--td-p-api-default-method": "#e9d5ff",
    "--td-p-api-method-soft": "rgba(233, 213, 255, 0.18)",
    "--td-p-api-aside-accent": "#c4b5fd",
  },
};

export const BRAND_PERSONALIZATION: Partial<Record<BrandId, BrandPersonalization>> = {
  atomflow: {
    footerCopyright: "© 2026 AtomFlow.原子流动",
  },
  minitoken: {
    metaDescription: "微词元（minitoken.vip）API 与控制台说明文档",
    theme: MINITOKEN_THEME,
  },
};
