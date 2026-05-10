<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import { computed } from "vue";
import ApiAsideTryIt from "./components/ApiAsideTryIt.vue";
import ApiDocChrome from "./components/ApiDocChrome.vue";
import SiteLegalFooter from "./components/SiteLegalFooter.vue";

const BaseLayout = DefaultTheme.Layout;
const route = useRoute();

const sidebarNavLabel = computed(() => (route.path.startsWith("/api/") ? "API 参考" : "文档导航"));
</script>

<template>
  <BaseLayout>
    <template #sidebar-nav-before>
      <div class="td-sidebar-heading" role="heading" aria-level="2">{{ sidebarNavLabel }}</div>
    </template>
    <template #doc-before>
      <ApiDocChrome />
    </template>
    <template #aside-outline-before>
      <ApiAsideTryIt />
    </template>
    <template #doc-after>
      <SiteLegalFooter />
    </template>
    <template #page-bottom>
      <SiteLegalFooter />
    </template>
  </BaseLayout>
</template>
