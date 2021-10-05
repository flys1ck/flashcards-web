<template>Select Card to ebgin</template>

<script setup lang="ts">
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

<route>
{
  name: "deck-cards",
  meta: {
    requiresAuth: true,
  }
}
</route>
