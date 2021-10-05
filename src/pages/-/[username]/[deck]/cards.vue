<template>
  <div class="flex items-stretch h-full">
    <CardList />
    <router-view class="flex-grow" />
  </div>
</template>

<script setup lang="ts">
import CardList from "@components/CardList.vue";

defineProps({
  username: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
  },
});
</script>
