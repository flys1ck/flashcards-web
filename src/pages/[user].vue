<template>Henlo Mr {{ user }}</template>

<script setup lang="ts">
defineProps({
  user: {
    type: String,
    required: true,
  },
});
</script>

<route>
{
  meta: {
    requiresAuth: true
  }
}
</route>
