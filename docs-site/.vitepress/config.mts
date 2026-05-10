import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";

/** 主站入口（顶栏）；请改为你的正式门户地址。 */
const MAIN_SITE_URL = "https://www.newapi.ai/zh";

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

/** 侧栏「音频」分组：false 为暂时隐藏（页面路径仍可直接访问） */
const sidebarShowAudio = false;

/**
 * API 参考二级目录：按开放路径能力分组（与 `/v1/chat/completions` 等路径对齐）。
 * 「文本」下含聊天补全、Responses、Claude Messages、Embedding、Rerank。
 * 「图像」等为精简后的 OpenAI 兼容能力分组；视频与其它接口侧栏项已暂时移除（旧页面文件仍可保留在仓库）。
 */
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

/** 「用户指南」侧栏条目（内容由 npm run docs:sync 写入 /settings/；不含「概述」页） */
const settingsSidebarItems: DefaultTheme.SidebarItem[] = [
  { text: "登陆注册", link: "/settings/user/auth" },
  { text: "个人设置", link: "/settings/user/personal-setting" },
  { text: "令牌管理", link: "/settings/user/token" },
  { text: "模型广场", link: "/settings/user/pricing" },
  { text: "使用日志", link: "/settings/user/log" },
  { text: "钱包管理", link: "/settings/user/topup" },
  { text: "任务日志", link: "/settings/user/task" },
];

/** 侧栏「常见问题」入口：false 为暂时隐藏 */
const sidebarShowFaq = true;

/** 顶栏右侧 GitHub 图标链接：false 为暂时隐藏 */
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

/** 顶栏左侧 logo（右侧主导航仍为「平台文档」文案） */
const SITE_BRAND_MARK = "https://i.imgur.com/iOhm0Zv.png";

export default defineConfig({
  title: "平台文档",
  description: "API 网关文档：介绍、入门、设置与 API 参考",
  head: [
    ["meta", { name: "theme-color", content: "#08132a", media: "(prefers-color-scheme: dark)" }],
    ["meta", { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" }],
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
  themeConfig: {
    /** 左侧：图标 + Doc；右侧菜单首项仍为「平台文档」 */
    logo: SITE_BRAND_MARK,
    siteTitle: '<span class="td-nav-site-title-doc">AtomFlow 文档系统</span>',
    sidebarMenuLabel: "文档目录",
    nav: [
      { text: "平台文档", link: "/", activeMatch: "^/(?!contact)" },
      { text: "关于我们", link: "/contact" },
      { text: "主站入口", link: MAIN_SITE_URL, target: "_blank", rel: "noopener noreferrer" },
    ],
    /** 文档区统一左侧目录；关于我们页为独立 page 布局，不渲染侧栏 */
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
  },
});
