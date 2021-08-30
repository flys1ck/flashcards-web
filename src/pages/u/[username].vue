<template>
  <div>Hello Mr. {{ userStore.username }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from "@stores/useUserStore";

const userStore = useUserStore();
// TODO: do not use data from store, instead fetch data from API
</script>

<route>
{
  meta: {
    layout: "header",
    requiresAuth: true
  }
}
</route>
