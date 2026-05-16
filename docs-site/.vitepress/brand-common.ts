/**
 * 品牌类型定义与纯函数（不含业务数据；数据见 config/brands/*.json）。
 */

export type BrandId = string;

export interface BrandThemePalette {
  themeColorLight?: string;
  themeColorDark?: string;
  root?: Record<string, string>;
  dark?: Record<string, string>;
}

export interface BrandSharedConfig {
  defaultMetaDescription: string;
  legalBody: string;
  defaultQqGroup: string;
  defaultQqGroupUrl: string;
  screenshots: {
    landingArchitecture: string;
    contactHero: string;
  };
  defaultTheme: BrandThemePalette;
}

export function buildFooterLegalText(displayName: string, legalBody: string): string {
  return `${displayName}${legalBody}`;
}

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

export function formatDisplayName(nameEn: string, nameZh: string): string {
  return `${nameEn}（${nameZh}）`;
}
