<template>
  <aside
    class="w-72 flex flex-col justify-between flex-none truncate bg-gray-100"
  >
    <div>
      <!-- brand and deck selection -->
      <div class="px-4 mt-6">
        <div class="flex items-baseline justify-between mt-6">
          <BaseHeading as="h2" size="xs">Decks</BaseHeading>
          <BaseLink as="router-link" to="/decks/new">New</BaseLink>
        </div>
        <DeckSelect class="mt-1" />
      </div>
      <!-- deck navigation -->
      <div class="mt-6">
        <AsideLink
          v-for="link in navigationLinks"
          :key="link.name"
          :to="link.to"
          :icon="link.icon"
        >
          {{ link.name }}
        </AsideLink>
      </div>
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

import {
  CollectionIcon,
  AnnotationIcon,
  CogIcon,
  UsersIcon,
  ChartPieIcon,
  PlayIcon,
} from "@heroicons/vue/solid";
import BaseButton from "@components/common/BaseButton.vue";
import BaseLink from "@components/common/BaseLink.vue";
import BaseHeading from "@components/common/BaseHeading.vue";
import DeckSelect from "@components/DeckSelect.vue";
import AsideLink from "@components/AsideLink.vue";

const navigationLinks = reactive([
  {
    name: "Study",
    to: "/study",
    icon: PlayIcon,
  },
  {
    name: "Cards",
    to: "/cards",
    icon: CollectionIcon,
  },
  {
    name: "Statistics",
    to: "/statistics",
    icon: ChartPieIcon,
  },
  {
    name: "Collaborators",
    to: "/collaborators",
    icon: UsersIcon,
  },
  {
    name: "Settings",
    to: "/settings",
    icon: CogIcon,
  },
]);

const supportLinks = reactive([
  {
    name: "Help & Feedback",
    to: "/feedback",
    icon: AnnotationIcon,
  },
]);
</script>
