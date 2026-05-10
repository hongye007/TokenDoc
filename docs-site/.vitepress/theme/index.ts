import DefaultTheme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";
import Layout from "./Layout.vue";
import QuickStartChatPlayground from "./components/QuickStartChatPlayground.vue";
import "./custom.css";
import "./td-landing.css";
import "./api-reference.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component("QuickStartChatPlayground", QuickStartChatPlayground);
  },
};
