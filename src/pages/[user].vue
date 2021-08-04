<template>Henlo Mr {{ user }}</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    user: {
      type: String,
      required: true,
    },
  },
});
</script>
