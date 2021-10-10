<template>
  <div class="flex items-center justify-between">
    <BaseHeading as="h1" size="lg">Your decks</BaseHeading>
    <BaseButton as="router-link" to="/decks/new" size="sm">New Deck</BaseButton>
  </div>
  <div class="mt-2 space-y-2">
    <div v-for="deck in data?.getDecks" :key="deck.id">
      <router-link
        :to="{
          name: 'deck',
          params: { username: deck.author.username, deck: deck.slug },
        }"
        class="flex items-center justify-between p-4 border-2 rounded"
      >
        <div>
          <div>
            <span class="font-medium">{{ deck.name }}</span>
            <span
              class="px-2 py-0.5 border border-gray-300 bg-gray-50 rounded-full text-sm text-gray-700 ml-2"
              >{{ deck.visibility }}</span
            >
          </div>
          <div class="flex items-center mt-2">
            <UserIcon class="w-5 h-5 text-gray-400" />
            <span class="ml-1 text-sm font-medium text-gray-400">{{
              deck.author.username
            }}</span>
          </div>
        </div>
        <ChevronRightIcon class="w-6 h-6 text-gray-500" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CombinedError, useQuery } from "@urql/vue";
import { ChevronRightIcon } from "@heroicons/vue/outline";
import { UserIcon } from "@heroicons/vue/solid";

import { GetDecksDocument } from "@generated/graphql";
import { handleApiError } from "@utilities/handleApiError";

const { data, error } = useQuery({ query: GetDecksDocument });
try {
  if (error.value) throw error.value;
} catch (e) {
  handleApiError(e as CombinedError);
}
</script>

<route>
{
  meta: {
    layout: "header",
    requiresAuth: true
  }
}
</route>
