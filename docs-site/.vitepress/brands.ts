/**
 * 多品牌构建：通过环境变量 DOC_BRAND 选择（默认 atomflow）。
 * 构建：DOC_BRAND=minitoken npm run docs:build
 *
 * 正文 Markdown 中可使用占位符（构建时由 Vite 插件替换），见 `applyBrandPlaceholdersToMarkdown`。
 */

export type BrandId = "atomflow" | "minitoken";

/** 覆盖 palette.css 中的 --td-p-*（及需同步的少量派生），按品牌注入到页面 head */
export interface BrandThemePalette {
  /** `<meta name="theme-color">` 浅色方案 */
  themeColorLight?: string;
  /** `<meta name="theme-color">` 深色方案 */
  themeColorDark?: string;
  /** 浅色 :root 变量 */
  root?: Record<string, string>;
  /** 深色 .dark 变量 */
  dark?: Record<string, string>;
}

export interface BrandScreenshots {
  /** 首页「架构可视化」大图 */
  landingArchitecture: string;
  /** 预留：Markdown 中 @TD_SCREENSHOT_CONTACT@ 等配图 URL */
  contactHero: string;
}

const SCREENSHOT_ATOMFLOW_ARCH =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7ibk5jGluZPOPJM68vhwapVtf5hLZysIRCm5rg4qXeRP9PkrLzFwPBHnSVHi2eUB0o0PWKA-vI6f2hHskghevMcuNPlrLf09tGElXi_7QloFc6DZtpVTItq7hmHbh3eQlL6vMsQpNLX2pb3rCx1FuVZxwX_kYkGQ8DT-6VJDtjNNopFcByIBFLP30eQdhrr9LP5BtTrKh3ZntrRteA-4yWhwmAa4fdQGPiYcdUED8S9c2k7o8_XWFCSc2Whz70x0cf2kFDEGeEo";

const SCREENSHOT_ATOMFLOW_CONTACT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwTKOBz__1IernRXQXk-SCLJkfBmIunImEJXFbJBg4lG934jFFyafBD4M7zOn2Un00HD5-8tXsL-yFOxvhCbr7KKFA7hA_UNZc4ph-ka0twjdLQ4K_kT7llSu89nQcLpou0bs1Xi7uK4uB6bV0lcCVBicDZa7GmVCkmDNJqds5sgnv7266jmRN23v4vZqQqvsiqumWx_wJB5lcU_ewpMNwo6iQF1Bx6c0pRitHdwvSJUb9hQGSElM3W0sK1A6lKUrNqq5wHZEniSQ";

export interface BrandProfile {
  id: BrandId;
  /** 顶栏 HTML（已含 class，写入 themeConfig.siteTitle） */
  siteTitleHtml: string;
  /** 浏览器标签页标题（VitePress title） */
  docTitle: string;
  metaDescription: string;
  /** 顶栏 Logo（URL，与 themeConfig.logo 一致） */
  logo: string;
  /** 正文中的品牌展示名，如 AtomFlow（原流）、微词元 */
  displayName: string;
  /** 首页对比表「本站 API」列标题 */
  apiProductTableLabel: string;
  /** 对比表域名小字，如 atomflow.vip */
  domainLabel: string;
  /**
   * 产品主站 origin（注册/控制台、@TD_MAIN_SITE@ 等 Markdown 占位符均基于此）。
   * 勿填第三方文档或演示站域名。
   */
  mainSiteUrl: string;
  /**
   * OpenAI 兼容 API 网关 origin（文档 `@TD_GATEWAY_V1@`、`@TD_API_GATEWAY_ORIGIN@`、构建期 `__TD_GATEWAY_V1__`）。
   * AtomFlow / 微词元均使用 `https://api.<品牌主域>`；缺省则回退为 mainSiteUrl。
   */
  apiGatewayUrl?: string;
  /**
   * 顶栏「主站入口」链接（自有官网或控制台根地址）。
   * 缺省时同 mainSiteUrl。勿填 New API 等第三方站点（例如 www.newapi.ai 文档站）。
   */
  portalUrl?: string;
  /** 关于我们 / 页脚等联系邮箱 */
  supportEmail: string;
  screenshots: BrandScreenshots;
  /** 留空则沿用 theme/palette.css 默认 AtomFlow 蓝 */
  theme: BrandThemePalette;
  footerLegalText: string;
  footerCopyright: string;
}

const BRANDS: Record<BrandId, BrandProfile> = {
  atomflow: {
    id: "atomflow",
    siteTitleHtml: '<span class="td-nav-site-title-doc">AtomFlow 文档系统</span>',
    docTitle: "AtomFlow 文档",
    metaDescription: "API 网关文档：介绍、入门、设置与 API 参考",
    logo: "https://i.imgur.com/iOhm0Zv.png",
    displayName: "AtomFlow（原流）",
    apiProductTableLabel: "AtomFlow API (本站)",
    domainLabel: "atomflow.vip",
    mainSiteUrl: "https://atomflow.vip",
    apiGatewayUrl: "https://api.atomflow.vip",
    portalUrl: "https://atomflow.vip",
    supportEmail: "atomflow.vip@gmail.com",
    screenshots: {
      landingArchitecture: SCREENSHOT_ATOMFLOW_ARCH,
      contactHero: SCREENSHOT_ATOMFLOW_CONTACT,
    },
    theme: {
      themeColorLight: "#ffffff",
      themeColorDark: "#08132a",
    },
    footerLegalText:
      "AtomFlow（原流）致力于为合法合规的业务需求提供技术基础设施。用户在使用本服务时必须遵守当地法律法规。本平台不提供任何违反特定国家政策的非法访问途径。所有模型接口均通过官方正规渠道聚合，我们仅作为技术中间层提供优化加速与管理工具。如有任何疑问或合规需求，请联系我们的法务部门。",
    footerCopyright: "© 2026 AtomFlow.原子流动",
  },
  minitoken: {
    id: "minitoken",
    siteTitleHtml: '<span class="td-nav-site-title-doc">微词元 文档系统</span>',
    docTitle: "MiniToken 文档",
    metaDescription: "微词元（minitoken.vip）API 与控制台说明文档",
    logo: "https://i.imgur.com/OiMS4BR.png",
    displayName: "MiniToken 微词元",
    apiProductTableLabel: "MiniToken 微词元 API (本站)",
    domainLabel: "minitoken.vip",
    mainSiteUrl: "https://minitoken.vip",
    apiGatewayUrl: "https://api.minitoken.vip",
    portalUrl: "https://minitoken.vip",
    supportEmail: "atomflow.vip@gmail.com",
    screenshots: {
      landingArchitecture: SCREENSHOT_ATOMFLOW_ARCH,
      contactHero: SCREENSHOT_ATOMFLOW_CONTACT,
    },
    theme: {
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
    },
    footerLegalText:
      "MiniToken 微词元致力于为合法合规的业务需求提供技术基础设施。用户在使用本服务时必须遵守当地法律法规。本平台不提供任何违反特定国家政策的非法访问途径。所有模型接口均通过官方正规渠道聚合，我们仅作为技术中间层提供优化加速与管理工具。如有任何疑问或合规需求，请联系我们的法务部门。",
    footerCopyright: "© 2026 MiniToken.微词元",
  },
};

export function trimOrigin(url: string): string {
  return url.replace(/\/$/, "");
}

/** 顶栏「主站入口」应指向的 URL（trim 后），与文档内 API 示例用的 mainSiteUrl 可分开配置 */
export function navPortalOrigin(b: BrandProfile): string {
  return trimOrigin(b.portalUrl ?? b.mainSiteUrl);
}

/** OpenAI 兼容 API 网关 origin（与 `apiGatewayUrl` 一致；缺省同 mainSiteUrl） */
export function apiGatewayOrigin(b: BrandProfile): string {
  return trimOrigin(b.apiGatewayUrl ?? b.mainSiteUrl);
}

/** OpenAI 兼容网关 `…/v1` 前缀 */
export function gatewayV1Base(b: BrandProfile): string {
  return `${apiGatewayOrigin(b)}/v1`;
}

/** 将 Markdown 中的 @TD_*@ 占位符替换为当前品牌值（构建时） */
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
  ];
  let out = src;
  for (const [token, value] of pairs) {
    out = out.split(token).join(value);
  }
  return out;
}

/** 生成注入 head 的 `<style>` 内联 CSS；无覆盖时返回 null */
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
