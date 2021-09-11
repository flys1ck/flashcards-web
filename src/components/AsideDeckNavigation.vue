<template>
  <div>
    <div class="px-4">
      <!-- deck select heading -->
      <div class="flex items-baseline justify-between">
        <BaseHeading as="h2" size="xs">Decks</BaseHeading>
        <BaseLink as="router-link" to="/decks/new">New</BaseLink>
      </div>
      <!-- brand and deck selection -->
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
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
import {
  CollectionIcon,
  CogIcon,
  UsersIcon,
  ChartPieIcon,
  PlayIcon,
} from "@heroicons/vue/solid";

import AsideLink from "@components/AsideLink.vue";

import DeckSelect from "@components/DeckSelect.vue";

const route = useRoute();

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
    to: {
      name: "deck-settings",
      params: {
        username: route.params.username,
        deck: route.params.deck,
      },
    },
    icon: CogIcon,
  },
]);
</script>
