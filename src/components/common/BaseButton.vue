<template>
  <button
    class="px-4 py-2 bg-teal-600 rounded text-white font-medium focus:ring ring-teal-400/30"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
});
</script>
