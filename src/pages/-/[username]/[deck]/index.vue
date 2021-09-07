<template>
  <span>Hello {{ deckStore.name }}</span>
</template>

<script setup lang="ts">
import { onBeforeUpdate } from "vue";
import { useRoute } from "vue-router";
import { useDeckStore } from "@stores/useDeckStore";

const route = useRoute();
const deckStore = useDeckStore();

deckStore.getDeck({
  author: route.params.username as string,
  name: route.params.deck as string,
});

onBeforeUpdate(() => {
  deckStore.getDeck({
    author: route.params.username as string,
    name: route.params.deck as string,
  });
});
</script>

<route>
{
  name: "deck",
}
</route>
