/**
 * 多品牌构建：通过环境变量 DOC_BRAND 选择（默认 atomflow）。
 * 构建：DOC_BRAND=minitoken npm run docs:build
 *
 * 各品牌 **仅需配置必选字段**（见 BRAND_INPUTS）；其余由公共配置 + 推导规则生成。
 * 主题、页脚版权等差异见 brand-personalization.ts；共用常量见 brand-common.ts。
 *
 * 正文 Markdown 占位符见 applyBrandPlaceholdersToMarkdown。
 */

import {
  apiOriginFromMainSite,
  BRAND_DEFAULT_META_DESCRIPTION,
  BRAND_DEFAULT_QQ_GROUP,
  BRAND_DEFAULT_QQ_GROUP_URL,
  BRAND_DEFAULT_THEME,
  BRAND_LEGAL_BODY,
  BRAND_SCREENSHOTS,
  buildFooterLegalText,
  domainFromMainSite,
  siteTitleHtml,
  type BrandId,
  type BrandThemePalette,
} from "./brand-common";
import { BRAND_PERSONALIZATION } from "./brand-personalization";

export type { BrandId, BrandPersonalization, BrandThemePalette } from "./brand-common";

export interface BrandScreenshots {
  landingArchitecture: string;
  contactHero: string;
}

/** 各品牌必填：中文名、英文名、主站 URL、Logo、联系邮箱 */
export interface BrandInput {
  id: BrandId;
  nameZh: string;
  nameEn: string;
  mainSiteUrl: string;
  logo: string;
  email: string;
  /** QQ 客服群号（可选；未填用 brand-common 默认；`""` 表示不展示） */
  qqGroup?: string;
  /** QQ 入群链接（可选；有群号、无链接时仅展示群号） */
  qqGroupUrl?: string;
}

/** 构建后的完整品牌配置（供 VitePress / 占位符替换使用） */
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
  /** 已配置群号时存在；无 QQ 联系渠道时为 undefined */
  qqGroup?: string;
  /** 入群链接；未配置时 undefined */
  qqGroupUrl?: string;
  screenshots: BrandScreenshots;
  theme: BrandThemePalette;
  footerLegalText: string;
  footerCopyright: string;
}

const DISPLAY_NAME: Record<BrandId, (i: BrandInput) => string> = {
  atomflow: ({ nameEn, nameZh }) => `${nameEn}（${nameZh}）`,
  minitoken: ({ nameEn, nameZh }) => `${nameEn} ${nameZh}`,
};

const NAV_TITLE: Record<BrandId, (i: BrandInput) => string> = {
  atomflow: ({ nameEn }) => nameEn,
  minitoken: ({ nameZh }) => nameZh,
};

/** 各品牌必选字段（新增品牌在此追加一行，并在 brand-personalization 中按需加覆盖） */
const BRAND_INPUTS: BrandInput[] = [
  {
    id: "atomflow",
    nameZh: "原流",
    nameEn: "AtomFlow",
    mainSiteUrl: "https://atomflow.vip",
    logo: "https://i.imgur.com/iOhm0Zv.png",
    email: "atomflow.vip@gmail.com",
  },
  {
    id: "minitoken",
    nameZh: "微词元",
    nameEn: "MiniToken",
    mainSiteUrl: "https://minitoken.vip",
    logo: "https://i.imgur.com/OiMS4BR.png",
    email: "atomflow.vip@gmail.com",
  },
];

function resolveQqContact(
  input: BrandInput,
  p: (typeof BRAND_PERSONALIZATION)[BrandId],
): Pick<BrandProfile, "qqGroup" | "qqGroupUrl"> {
  const groupRaw = input.qqGroup ?? p?.qqGroup ?? BRAND_DEFAULT_QQ_GROUP;
  const group = groupRaw.trim();
  if (!group) return {};
  const urlRaw = input.qqGroupUrl ?? p?.qqGroupUrl ?? BRAND_DEFAULT_QQ_GROUP_URL;
  const url = urlRaw.trim();
  return {
    qqGroup: group,
    ...(url ? { qqGroupUrl: url } : {}),
  };
}

/** 关于我们页 QQ 渠道整块 HTML；无群号时为空 */
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

/** 公告内嵌页 QQ 行；无群号时为空 */
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
  const p = BRAND_PERSONALIZATION[input.id] ?? {};
  const mainSiteUrl = trimOrigin(input.mainSiteUrl);
  const domainLabel = domainFromMainSite(mainSiteUrl);
  const apiGatewayUrl = apiOriginFromMainSite(mainSiteUrl);
  const displayName = p.displayName ?? DISPLAY_NAME[input.id](input);
  const navTitle = p.navTitle ?? NAV_TITLE[input.id](input);

  return {
    id: input.id,
    nameZh: input.nameZh,
    nameEn: input.nameEn,
    siteTitleHtml: siteTitleHtml(navTitle),
    docTitle: p.docTitle ?? `${input.nameEn} 文档`,
    metaDescription: p.metaDescription ?? BRAND_DEFAULT_META_DESCRIPTION,
    logo: input.logo,
    displayName,
    apiProductTableLabel:
      p.apiProductTableLabel ??
      (input.id === "minitoken" ? `${displayName} API (本站)` : `${input.nameEn} API (本站)`),
    domainLabel,
    mainSiteUrl,
    apiGatewayUrl,
    portalUrl: mainSiteUrl,
    supportEmail: input.email,
    ...resolveQqContact(input, p),
    screenshots: { ...BRAND_SCREENSHOTS },
    theme: p.theme ?? BRAND_DEFAULT_THEME,
    footerLegalText: buildFooterLegalText(displayName),
    footerCopyright: p.footerCopyright ?? `© 2026 ${input.nameEn}.${input.nameZh}`,
  };
}

const BRANDS: Record<BrandId, BrandProfile> = Object.fromEntries(
  BRAND_INPUTS.map((input) => [input.id, buildBrandProfile(input)]),
) as Record<BrandId, BrandProfile>;

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
  const id = (raw || "atomflow").trim().toLowerCase() as BrandId;
  if (id !== "atomflow" && id !== "minitoken") {
    throw new Error(
      `[brands] 未知的 DOC_BRAND="${raw}"。允许值：atomflow、minitoken。示例：DOC_BRAND=minitoken npm run docs:build`,
    );
  }
  return BRANDS[id];
}

export { BRAND_INPUTS };
export { BRAND_LEGAL_BODY, BRAND_DEFAULT_QQ_GROUP, BRAND_DEFAULT_QQ_GROUP_URL } from "./brand-common";
