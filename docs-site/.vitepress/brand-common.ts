/**
 * 多品牌公共配置：各站点相同或按统一模板生成的部分。
 * 各品牌仅需在 brands.ts 填写必选字段，差异项见 brand-personalization.ts。
 */

export type BrandId = "atomflow" | "minitoken";

/** 覆盖 palette.css 中的 --td-p-*（及需同步的少量派生），按品牌注入到页面 head */
export interface BrandThemePalette {
  themeColorLight?: string;
  themeColorDark?: string;
  root?: Record<string, string>;
  dark?: Record<string, string>;
}

/** 单品牌可选覆盖（未填则由必选字段 + 公共模板推导） */
export interface BrandPersonalization {
  displayName?: string;
  /** 顶栏「文档系统」标题用词，默认 atomflow 用英文名、minitoken 用中文名 */
  navTitle?: string;
  docTitle?: string;
  metaDescription?: string;
  apiProductTableLabel?: string;
  footerCopyright?: string;
  theme?: BrandThemePalette;
  /** QQ 客服群号；覆盖 brand-common 默认；设为空字符串表示不展示 QQ */
  qqGroup?: string;
  /** QQ 入群链接；有群号、无链接时仅展示群号 */
  qqGroupUrl?: string;
}

/** 各品牌默认 QQ（未在 BRAND_INPUTS / 个性化中指定时使用） */
export const BRAND_DEFAULT_QQ_GROUP = "1103370311";
export const BRAND_DEFAULT_QQ_GROUP_URL =
  "https://qun.qq.com/universal-share/share?ac=1&authKey=gUV7ogEcA3IzuPcz2fa3u/NAPvo/DlZkd8XkuLg3GoaS7Tcq6ndnqCwbSTEYCdtf&busi_data=eyJncm91cENvZGUiOiIxMTAzMzcwMzExIiwidG9rZW4iOiJyNzNpUnZDanRJbHFUMVd1WmNFWHFQeWNHOG0zZE1oQllXQzkxWGU2TWdOWmNUbkNJdUgva0hnTWFZYW5iUEpkIiwidWluIjoiOTM1NzYzMzY3In0=&data=w4FFcLX89f32nv68biGsuKKNwqTeU2XigqdGljSk63qmVEY6E9uJE_8CVmOmMId3Md8UGguG3vdr90lPvTZI7Q&svctype=4&tempid=h5_group_info";

/** 首页 / 关于我们等配图（各品牌共用） */
export const BRAND_SCREENSHOTS = {
  landingArchitecture:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7ibk5jGluZPOPJM68vhwapVtf5hLZysIRCm5rg4qXeRP9PkrLzFwPBHnSVHi2eUB0o0PWKA-vI6f2hHskghevMcuNPlrLf09tGElXi_7QloFc6DZtpVTItq7hmHbh3eQlL6vMsQpNLX2pb3rCx1FuVZxwX_kYkGQ8DT-6VJDtjNNopFcByIBFLP30eQdhrr9LP5BtTrKh3ZntrRteA-4yWhwmAa4fdQGPiYcdUED8S9c2k7o8_XWFCSc2Whz70x0cf2kFDEGeEo",
  contactHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBwTKOBz__1IernRXQXk-SCLJkfBmIunImEJXFbJBg4lG934jFFyafBD4M7zOn2Un00HD5-8tXsL-yFOxvhCbr7KKFA7hA_UNZc4ph-ka0twjdLQ4K_kT7llSu89nQcLpou0bs1Xi7uK4uB6bV0lcCVBicDZa7GmVCkmDNJqds5sgnv7266jmRN23v4vZqQqvsiqumWx_wJB5lcU_ewpMNwo6iQF1Bx6c0pRitHdwvSJUb9hQGSElM3W0sK1A6lKUrNqq5wHZEniSQ",
} as const;

/** 未单独配置 meta 时的默认站点描述 */
export const BRAND_DEFAULT_META_DESCRIPTION = "API 网关文档：介绍、入门、设置与 API 参考";

/** 未单独配置主题时的默认 palette（AtomFlow 蓝，见 theme/palette.css） */
export const BRAND_DEFAULT_THEME: BrandThemePalette = {
  themeColorLight: "#ffffff",
  themeColorDark: "#08132a",
};

/** 页脚合规声明正文（品牌名由调用方传入） */
export const BRAND_LEGAL_BODY =
  "致力于为合法合规的业务需求提供技术基础设施。用户在使用本服务时必须遵守当地法律法规。本平台不提供任何违反特定国家政策的非法访问途径。所有模型接口均通过官方正规渠道聚合，我们仅作为技术中间层提供优化加速与管理工具。如有任何疑问或合规需求，请联系我们的法务部门。";

export function buildFooterLegalText(displayName: string): string {
  return `${displayName}${BRAND_LEGAL_BODY}`;
}

/** API 网关固定为 https://api.<主域> */
export function apiOriginFromMainSite(mainSiteUrl: string): string {
  const host = domainFromMainSite(mainSiteUrl);
  return `https://api.${host}`;
}

export function domainFromMainSite(mainSiteUrl: string): string {
  try {
    return new URL(mainSiteUrl.replace(/\/$/, "")).hostname;
  } catch {
    return mainSiteUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  }
}

export function siteTitleHtml(navTitle: string): string {
  return `<span class="td-nav-site-title-doc">${navTitle} 文档系统</span>`;
}
