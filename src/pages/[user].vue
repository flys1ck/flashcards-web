<template>Henlo Mr {{ user }}</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  user: {
    type: String,
    required: true,
  },
});
</script>
