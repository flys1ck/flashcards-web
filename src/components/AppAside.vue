<template>
  <aside
    class="w-72 flex flex-col justify-between flex-none truncate bg-gray-100"
  >
    <div class="mt-6">
      <suspense>
        <template #default>
          <AsideDeckNavigation />
        </template>
        <template #fallback>
          <AsideDeckNavigationSkeleton />
        </template>
      </suspense>
    </div>
    <!-- Support Navigation -->
    <div>
      <AsideLink
        v-for="link in supportLinks"
        :key="link.name"
        :to="link.to"
        :icon="link.icon"
      >
        {{ link.name }}
      </AsideLink>
      <div class="px-4 py-2 border-t border-gray-300">
        <span class="text-xs text-gray-500">You are currently on</span>
        <div class="flex items-center justify-between">
          <span class="text-lg">Free Plan</span>
          <BaseButton size="sm">Upgrade</BaseButton>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { AnnotationIcon } from "@heroicons/vue/solid";

import AsideLink from "@components/AsideLink.vue";
import AsideDeckNavigation from "@components/AsideDeckNavigation.vue";
import AsideDeckNavigationSkeleton from "@components/skeletons/AsideDeckNavigationSkeleton.vue";

const supportLinks = reactive([
  {
    name: "Help & Feedback",
    to: "/feedback",
    icon: AnnotationIcon,
  },
]);
</script>
