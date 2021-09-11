<template>
  <BaseLink as="router-link" to="/decks/new">New</BaseLink>

  <div class="space-y-2">
    <div v-for="deck in data?.getDecks" :key="deck.id">
      <div class="p-2 bg-gray-200 border rounded">
        <router-link
          :to="{
            name: 'deck',
            params: { username: deck.author.username, deck: deck.name },
          }"
          class="font-medium"
        >
          {{ deck.name }}
        </router-link>
      </div>
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
