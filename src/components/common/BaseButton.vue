<template>
  <button
    class="focus:ring ring-teal-400/30 px-4 py-2 font-medium text-white bg-teal-600 rounded"
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
