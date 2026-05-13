import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";
import {
  apiGatewayOrigin,
  applyBrandPlaceholdersToMarkdown,
  buildBrandThemeStyleCss,
  gatewayV1Base,
  navPortalOrigin,
  resolveBrand,
  trimOrigin,
  type BrandProfile,
} from "./brands";

const brand = resolveBrand(process.env.DOC_BRAND);

function tdBrandMarkdownPlugin(b: BrandProfile, docsRootAbs: string): Plugin {
  const rootNorm = path.resolve(docsRootAbs).split(path.sep).join("/");
  return {
    name: "td-brand-md-placeholders",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".md")) return null;
      const idNorm = id.split(path.sep).join("/");
      if (idNorm !== rootNorm && !idNorm.startsWith(`${rootNorm}/`)) return null;
      return applyBrandPlaceholdersToMarkdown(code, b);
    },
  };
}

/** API docs use angle-bracket placeholders like `<token>`; Vue otherwise treats them as components. */
const DOC_PLACEHOLDER_TAGS = new Set([
  "token",
  "string",
  "model",
  "boolean",
  "number",
  "object",
  "integer",
  "file",
  "id",
  "key",
  "type",
  "name",
  "value",
  "url",
  "body",
  "header",
]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(__dirname, "..");

type SidebarHttpMethod = "GET" | "POST" | "DELETE" | "PUT";

/**
 * api/ai-model 下相对路径（POSIX）→ 侧栏项。
 * 以 index.md 结尾的路径使用带尾部斜杠的链接，与 VitePress `normalize()` 对 index 页一致，避免 `isActive` 不匹配、无指示条。
 * 标题后附 HTTP 方法徽标（HTML，由主题样式渲染）。
 */
function apiAiModelItem(
  relPosix: string,
  label: string,
  method: SidebarHttpMethod,
): DefaultTheme.SidebarItem {
  const m = method.toLowerCase();
  const text = `${label}<span class="td-sidebar-method td-sidebar-method--${m}" aria-hidden="true">${method}</span>`;
  let route = relPosix.replace(/\.md$/, "");
  if (route === "index" || route.endsWith("/index")) {
    route = route.replace(/\/index$|^index$/, "").replace(/\/$/, "");
    const link = route === "" ? "/api/ai-model/" : `/api/ai-model/${route}/`;
    return { text, link };
  }
  return { text, link: `/api/ai-model/${route}` };
}

/** 侧栏「音频」分组：false 为暂时隐藏 */
const sidebarShowAudio = false;

const apiAudioSection: DefaultTheme.SidebarItem = {
  text: "音频",
  collapsed: true,
  items: [
    apiAiModelItem("audio/create-speech.md", "创建音频", "POST"),
    apiAiModelItem("audio/create-transcription.md", "创建转录", "POST"),
    apiAiModelItem("audio/create-translation.md", "音频翻译", "POST"),
  ],
};

const apiItems: DefaultTheme.SidebarItem[] = [
  {
    text: "模型",
    collapsed: true,
    items: [
      apiAiModelItem("models/index.md", "模型列表", "GET"),
      apiAiModelItem("models/get-model.md", "获取模型", "GET"),
    ],
  },
  {
    text: "文本",
    collapsed: true,
    items: [
      apiAiModelItem("chat/openai/createchatcompletion.md", "聊天补全", "POST"),
      apiAiModelItem("chat/openai/createresponse.md", "创建响应", "POST"),
      apiAiModelItem("chat/createmessage.md", "创建消息", "POST"),
      apiAiModelItem("embeddings/createembedding.md", "创建 Embedding", "POST"),
      apiAiModelItem("rerank/creatererank.md", "重排序文档", "POST"),
    ],
  },
  {
    text: "图像",
    collapsed: true,
    items: [
      apiAiModelItem("images/create-image.md", "创建图像", "POST"),
      apiAiModelItem("images/edit-image.md", "编辑图像", "POST"),
      apiAiModelItem("images/create-variation.md", "获取图像变体", "POST"),
    ],
  },
  ...(sidebarShowAudio ? [apiAudioSection] : []),
];

const settingsSidebarItems: DefaultTheme.SidebarItem[] = [
  { text: "登陆注册", link: "/settings/user/auth" },
  { text: "个人设置", link: "/settings/user/personal-setting" },
  { text: "令牌管理", link: "/settings/user/token" },
  { text: "模型广场", link: "/settings/user/pricing" },
  { text: "使用日志", link: "/settings/user/log" },
  { text: "钱包管理", link: "/settings/user/topup" },
  { text: "任务日志", link: "/settings/user/task" },
];

const sidebarShowFaq = true;
const navShowGithubSocial = false;

const docSidebar: DefaultTheme.SidebarItem[] = [
  { text: "平台介绍", link: "/" },
  { text: "极速入门", link: "/quickstart" },
  {
    text: "用户指南",
    collapsed: false,
    items: settingsSidebarItems,
  },
  {
    text: "API参考",
    collapsed: false,
    items: apiItems,
  },
  ...(sidebarShowFaq ? [{ text: "常见问题", link: "/faq" } satisfies DefaultTheme.SidebarItem] : []),
];

const sidebarForDocs: DefaultTheme.Sidebar = docSidebar;

const themeColorDark = brand.theme.themeColorDark ?? "#08132a";
const themeColorLight = brand.theme.themeColorLight ?? "#ffffff";

export default defineConfig({
  title: brand.docTitle,
  description: brand.metaDescription,
  /** 多品牌产物分目录，避免互相覆盖 */
  outDir: path.join(SITE, `.vitepress/dist-${brand.id}`),
  transformHtml(code) {
    if (!code.includes("<html")) {
      return code;
    }
    return code.replace(/<html\b/i, `<html data-doc-brand="${brand.id}"`);
  },
  transformHead() {
    const css = buildBrandThemeStyleCss(brand);
    if (!css) return [];
    return [["style", {}, css]];
  },
  head: [
    ["meta", { name: "theme-color", content: themeColorDark, media: "(prefers-color-scheme: dark)" }],
    ["meta", { name: "theme-color", content: themeColorLight, media: "(prefers-color-scheme: light)" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
      },
    ],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => DOC_PLACEHOLDER_TAGS.has(tag.toLowerCase()),
      },
    },
  },
  vite: {
    define: {
      __TD_GATEWAY_V1__: JSON.stringify(gatewayV1Base(brand)),
      __TD_MAIN_SITE__: JSON.stringify(trimOrigin(brand.mainSiteUrl)),
      __TD_API_GATEWAY_ORIGIN__: JSON.stringify(apiGatewayOrigin(brand)),
    },
    plugins: [tdBrandMarkdownPlugin(brand, SITE)],
  },
  themeConfig: {
    logo: brand.logo,
    siteTitle: brand.siteTitleHtml,
    sidebarMenuLabel: "文档目录",
    nav: [
      { text: "平台文档", link: "/", activeMatch: "^/(?!contact)" },
      { text: "关于我们", link: "/contact" },
      {
        text: "主站入口",
        link: navPortalOrigin(brand),
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    sidebar: {
      "/": sidebarForDocs,
      "/quickstart": sidebarForDocs,
      "/settings/": sidebarForDocs,
      "/api/": sidebarForDocs,
      "/faq": sidebarForDocs,
    },
    socialLinks: navShowGithubSocial
      ? [{ icon: "github", link: "https://github.com/QuantumNous/new-api" }]
      : [],
    search: { provider: "local" },
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    tdBrand: {
      id: brand.id,
      footerLegalText: brand.footerLegalText,
      footerCopyright: brand.footerCopyright,
      displayName: brand.displayName,
      mainSiteUrl: trimOrigin(brand.mainSiteUrl),
      portalUrl: navPortalOrigin(brand),
      registerUrl: `${trimOrigin(brand.mainSiteUrl)}/register`,
      supportEmail: brand.supportEmail,
      logo: brand.logo,
    },
  },
});
