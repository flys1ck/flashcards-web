<template>
  <aside
    class="w-72 flex flex-col justify-between flex-none truncate bg-gray-100"
  >
    <!-- Brand and Deck Navigation -->
    <div>
      <div class="p-4 text-4xl font-bold text-teal-600">Flashcards.io</div>
      <DeckSelect class="px-4 mt-8" />
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
          <span class="text-lg"> Free Plan </span>
          <BaseButton size="sm">Upgrade</BaseButton>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import {
  CollectionIcon,
  AnnotationIcon,
  CogIcon,
  UsersIcon,
  ChartPieIcon,
} from "@heroicons/vue/solid";
import BaseButton from "@components/common/BaseButton.vue";
import DeckSelect from "@components/DeckSelect.vue";
import AsideLink from "@components/AsideLink.vue";

export default defineComponent({
  name: "AppAside",
  components: {
    BaseButton,
    DeckSelect,
    AsideLink,
  },
  setup() {
    const navigationLinks = reactive([
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

    return { navigationLinks, supportLinks };
  },
});
</script>
