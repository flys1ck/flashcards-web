<template>
  <aside
    class="w-72 flex flex-col justify-between flex-none truncate bg-gray-100"
  >
    <!-- Brand and Deck Navigation -->
    <div>
      <div class="p-4 text-4xl font-bold text-teal-600">Flashcards.io</div>
      <DeckSelect class="px-4 mt-8" />
      <div class="mt-6">
        <router-link
          v-for="link in navigationLinks"
          :key="link.name"
          :to="link.to"
          class="hover:bg-gray-200 group flex items-center px-4 py-2.5 text-lg"
        >
          <Component
            :is="link.icon"
            class="group-hover:text-teal-700 w-6 h-6 text-teal-600"
          />
          <span class="ml-2">{{ link.name }}</span>
        </router-link>
      </div>
    </div>
    <!-- Support Navigation -->
    <div>
      <router-link
        v-for="link in supportLinks"
        :key="link.name"
        :to="link.to"
        class="hover:bg-gray-200 focus:bg-yellow-400 flex items-center px-4 py-2 text-lg"
      >
        <Component :is="link.icon" class="w-6 h-6 text-teal-600" />
        <span class="ml-2">{{ link.name }}</span>
      </router-link>
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
  MapIcon,
  ChartPieIcon,
} from "@heroicons/vue/solid";
import BaseButton from "@components/common/BaseButton.vue";
import DeckSelect from "@components/DeckSelect.vue";

export default defineComponent({
  name: "AppAside",
  components: {
    CollectionIcon,
    AnnotationIcon,
    CogIcon,
    UsersIcon,
    MapIcon,
    ChartPieIcon,
    BaseButton,
    DeckSelect,
  },
  setup() {
    const navigationLinks = reactive([
      {
        name: "Cards",
        to: "/cards",
        icon: "CollectionIcon",
      },
      {
        name: "Statistics",
        to: "/statistics",
        icon: "ChartPieIcon",
      },
      {
        name: "Collaborators",
        to: "/cards",
        icon: "UsersIcon",
      },
      {
        name: "Settings",
        to: "/settings",
        icon: "CogIcon",
      },
    ]);
    const supportLinks = reactive([
      {
        name: "Help & Feedback",
        to: "/feedback",
        icon: "AnnotationIcon",
      },
    ]);

    return { navigationLinks, supportLinks };
  },
});
</script>
