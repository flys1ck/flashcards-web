<template>
  <button class="hover:bg-teal-900 w-8 h-8 rounded" :class="computedClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});

const computedClasses = computed(() => {
  return {
    "bg-teal-900 text-teal-50": props.isActive,
  };
});
</script>
