/**
 * 多品牌构建：通过环境变量 DOC_BRAND 选择（默认见 config/brands/index.json）。
 *
 * 品牌数据：config/brands/shared.json（公共）+ config/brands/<id>.json（各品牌）
 * 本文件：加载配置、推导 BrandProfile、占位符替换。
 */

import {
  apiOriginFromMainSite,
  buildFooterLegalText,
  domainFromMainSite,
  formatDisplayName,
  resolveNavTitle,
  siteTitleHtml,
  type BrandId,
  type BrandPersonalization,
  type BrandSharedConfig,
  type BrandThemePalette,
  type DisplayNameFormat,
  type NavTitleFrom,
} from "./brand-common";
import {
  brandIds,
  defaultBrandId,
  loadBrandConfigBundle,
  personalizationFor,
  toBrandInput,
} from "./load-brand-config";

export type {
  BrandId,
  BrandPersonalization,
  BrandThemePalette,
  DisplayNameFormat,
  NavTitleFrom,
} from "./brand-common";

export interface BrandScreenshots {
  landingArchitecture: string;
  contactHero: string;
}

/** 各品牌必填字段（由 JSON 加载） */
export interface BrandInput {
  id: BrandId;
  nameZh: string;
  nameEn: string;
  mainSiteUrl: string;
  logo: string;
  email: string;
  qqGroup?: string;
  qqGroupUrl?: string;
  displayNameFormat?: DisplayNameFormat;
  navTitleFrom?: NavTitleFrom;
}

export interface BrandProfile {
  id: BrandId;
  nameZh: string;
  nameEn: string;
  siteTitleHtml: string;
  docTitle: string;
  metaDescription: string;
  logo: string;
  displayName: string;
  apiProductTableLabel: string;
  domainLabel: string;
  mainSiteUrl: string;
  apiGatewayUrl: string;
  portalUrl: string;
  supportEmail: string;
  qqGroup?: string;
  qqGroupUrl?: string;
  screenshots: BrandScreenshots;
  theme: BrandThemePalette;
  footerLegalText: string;
  footerCopyright: string;
}

const DEFAULT_DISPLAY_FORMAT: DisplayNameFormat = "enParenZh";
const DEFAULT_NAV_FROM: NavTitleFrom = "nameEn";

function sharedConfig(): BrandSharedConfig {
  return loadBrandConfigBundle().shared;
}

function resolveQqContact(
  input: BrandInput,
  p: BrandPersonalization,
  shared: BrandSharedConfig,
): Pick<BrandProfile, "qqGroup" | "qqGroupUrl"> {
  const groupRaw = input.qqGroup ?? p.qqGroup ?? shared.defaultQqGroup;
  const group = groupRaw.trim();
  if (!group) return {};
  const urlRaw = input.qqGroupUrl ?? p.qqGroupUrl ?? shared.defaultQqGroupUrl;
  const url = urlRaw.trim();
  return {
    qqGroup: group,
    ...(url ? { qqGroupUrl: url } : {}),
  };
}

export function buildContactQqChannelBlock(b: BrandProfile): string {
  if (!b.qqGroup) return "";
  const link = b.qqGroupUrl
    ? `
            <a
              href="${b.qqGroupUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >点击入群立享优惠</a>`
    : "";
  return `      <div class="td-contact__channel" role="group" aria-label="QQ 客服群">
        <div class="td-contact__channel-icon">
          <span class="td-icon" aria-hidden="true">groups</span>
        </div>
        <div class="td-contact__channel-text">
          <span class="td-contact__channel-k">QQ 客服群</span>
          <span class="td-contact__channel-v td-contact__channel-v--qq">
            <span class="td-contact__channel-v-qq-num">${b.qqGroup}</span>${link}
          </span>
        </div>
      </div>`;
}

export function buildAnnouncementQqRowBlock(b: BrandProfile): string {
  if (!b.qqGroup) return "";
  const linkPart = b.qqGroupUrl
    ? `
          ·
          <a
            href="${b.qqGroupUrl}"
            target="_blank"
            rel="noopener noreferrer"
            >点击入群立享优惠</a>`
    : "";
  return `      <div class="td-ann__contact-row">
        <span class="td-ann__contact-k">QQ 客服群</span>
        <div class="td-ann__contact-v">
          <span>${b.qqGroup}</span>${linkPart}
        </div>
      </div>`;
}

function buildBrandProfile(input: BrandInput): BrandProfile {
  const shared = sharedConfig();
  const p = personalizationFor(input.id);
  const mainSiteUrl = trimOrigin(input.mainSiteUrl);
  const domainLabel = domainFromMainSite(mainSiteUrl);
  const apiGatewayUrl = apiOriginFromMainSite(mainSiteUrl);
  const displayName =
    p.displayName ??
    formatDisplayName(
      input.displayNameFormat ?? DEFAULT_DISPLAY_FORMAT,
      input.nameEn,
      input.nameZh,
    );
  const navTitle =
    p.navTitle ?? resolveNavTitle(input.navTitleFrom ?? DEFAULT_NAV_FROM, input.nameEn, input.nameZh);

  return {
    id: input.id,
    nameZh: input.nameZh,
    nameEn: input.nameEn,
    siteTitleHtml: siteTitleHtml(navTitle),
    docTitle: p.docTitle ?? `${input.nameEn} 文档`,
    metaDescription: p.metaDescription ?? shared.defaultMetaDescription,
    logo: input.logo,
    displayName,
    apiProductTableLabel:
      p.apiProductTableLabel ??
      (input.displayNameFormat === "enSpaceZh"
        ? `${displayName} API (本站)`
        : `${input.nameEn} API (本站)`),
    domainLabel,
    mainSiteUrl,
    apiGatewayUrl,
    portalUrl: mainSiteUrl,
    supportEmail: input.email,
    ...resolveQqContact(input, p, shared),
    screenshots: { ...shared.screenshots },
    theme: p.theme ?? shared.defaultTheme,
    footerLegalText: buildFooterLegalText(displayName, shared.legalBody),
    footerCopyright: p.footerCopyright ?? `© 2026 ${input.nameEn}.${input.nameZh}`,
  };
}

const BRAND_INPUTS: BrandInput[] = loadBrandConfigBundle().files.map(toBrandInput);

const BRANDS: Record<string, BrandProfile> = Object.fromEntries(
  BRAND_INPUTS.map((input) => [input.id, buildBrandProfile(input)]),
);

export function trimOrigin(url: string): string {
  return url.replace(/\/$/, "");
}

export function navPortalOrigin(b: BrandProfile): string {
  return trimOrigin(b.portalUrl);
}

export function apiGatewayOrigin(b: BrandProfile): string {
  return trimOrigin(b.apiGatewayUrl);
}

export function gatewayV1Base(b: BrandProfile): string {
  return `${apiGatewayOrigin(b)}/v1`;
}

export function applyBrandPlaceholdersToMarkdown(src: string, b: BrandProfile): string {
  const origin = trimOrigin(b.mainSiteUrl);
  const apiOrigin = apiGatewayOrigin(b);
  const pairs: [string, string][] = [
    ["@TD_MAIN_SITE@", origin],
    ["@TD_API_GATEWAY_ORIGIN@", apiOrigin],
    ["@TD_REGISTER_URL@", `${origin}/register`],
    ["@TD_LOGIN_URL@", `${origin}/login`],
    ["@TD_CONSOLE@", `${origin}/console`],
    ["@TD_GATEWAY_V1@", gatewayV1Base(b)],
    ["@TD_BRAND_DISPLAY@", b.displayName],
    ["@TD_API_PRODUCT_LABEL@", b.apiProductTableLabel],
    ["@TD_DOMAIN_LABEL@", b.domainLabel],
    ["@TD_SCREENSHOT_ARCH@", b.screenshots.landingArchitecture],
    ["@TD_SCREENSHOT_CONTACT@", b.screenshots.contactHero],
    ["@TD_SUPPORT_EMAIL@", b.supportEmail],
    ["@TD_QQ_GROUP@", b.qqGroup ?? ""],
    ["@TD_QQ_GROUP_URL@", b.qqGroupUrl ?? ""],
    ["@TD_QQ_CHANNEL_BLOCK@", buildContactQqChannelBlock(b)],
    ["@TD_QQ_ANN_ROW_BLOCK@", buildAnnouncementQqRowBlock(b)],
  ];
  let out = src;
  for (const [token, value] of pairs) {
    out = out.split(token).join(value);
  }
  return out;
}

export function buildBrandThemeStyleCss(b: BrandProfile): string | null {
  const { root, dark } = b.theme;
  const chunks: string[] = [];
  if (root && Object.keys(root).length) {
    const body = Object.entries(root)
      .map(([k, v]) => `${k}:${v};`)
      .join("");
    chunks.push(`:root{${body}}`);
  }
  if (dark && Object.keys(dark).length) {
    const body = Object.entries(dark)
      .map(([k, v]) => `${k}:${v};`)
      .join("");
    chunks.push(`.dark{${body}}`);
  }
  return chunks.length ? chunks.join("\n") : null;
}

export function resolveBrand(raw: string | undefined): BrandProfile {
  const allowed = brandIds();
  const id = (raw || defaultBrandId()).trim().toLowerCase();
  if (!allowed.includes(id)) {
    throw new Error(
      `[brands] 未知的 DOC_BRAND="${raw}"。允许值：${allowed.join("、")}。示例：DOC_BRAND=${allowed[1] ?? allowed[0]} npm run docs:build`,
    );
  }
  const profile = BRANDS[id];
  if (!profile) {
    throw new Error(`[brands] 未找到品牌配置：${id}.json`);
  }
  return profile;
}

export { BRAND_INPUTS };

export function getBrandSharedConfig(): BrandSharedConfig {
  return sharedConfig();
}
