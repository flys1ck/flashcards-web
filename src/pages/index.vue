<template>
  <div class="flex justify-between">
    <BaseHeading as="h1" size="xl">Your decks</BaseHeading>
    <BaseButton as="router-link" to="/decks/new" size="sm">New Deck</BaseButton>
  </div>
  <div class="mt-2 space-y-2">
    <div v-for="deck in data?.getDecks" :key="deck.id">
      <router-link
        :to="{
          name: 'deck',
          params: { username: deck.author.username, deck: deck.name },
        }"
        class="flex items-center p-4 bg-gray-100 border rounded"
      >
        <span class="font-medium">{{ deck.name }}</span>
        <span
          class="px-2 py-0.5 ml-2 border border-gray-400 bg-gray-300 rounded-full"
          >{{ deck.visibility }}</span
        >
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CombinedError, useQuery } from "@urql/vue";
import { GetDecksDocument } from "@generated/graphql";
import { handleApiError } from "@/utilities/handleApiError";

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
