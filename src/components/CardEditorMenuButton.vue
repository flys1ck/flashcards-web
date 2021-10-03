<template>
  <button
    class="flex items-center justify-center p-2 rounded-sm"
    :class="computedClasses"
    @click="onClick"
  >
    <component :is="icon" v-if="icon" class="w-5 h-5" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  /** Icon Component, to be displayed */
  icon: {
    type: [Function, Object],
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  onClick: {
    type: Function as PropType<() => void>,
    required: true,
  },
});

const computedClasses = computed(() => {
  return {
    "bg-gray-400 text-gray-100": props.isActive,
    "hover:bg-gray-200": !props.isActive,
  };
});
</script>
