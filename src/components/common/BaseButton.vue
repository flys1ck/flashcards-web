<template>
  <component
    :is="as"
    class="focus:ring ring-teal-400/30 inline-block font-medium text-white bg-teal-600 rounded"
    :class="computedClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  /**
   * Tag or component name.
   * @values button, a, router-link
   */
  as: {
    type: String,
    default: "button",
    validator: (value: string) =>
      ["button", "a", "router-link"].includes(value),
  },
  /**
   * Visual style of the button.
   * @values primary, secondary
   */
  variant: {
    type: String,
    default: "primary",
    validator: (value: string) => ["primary", "secondary"].includes(value),
  },
  /**
   * Size of the button.
   * @values md, lg
   */
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["sm", "md", "lg"].includes(value),
  },
});

const computedClasses = computed(() => {
  return {
    "hover:bg-teal-500 focus:ring-teal-600/50 active:bg-teal-700 text-teal-50 bg-teal-600 transition-colors":
      props.variant === "primary",
    "hover:bg-teal-200 focus:ring-teal-100 active:bg-teal-900 text-teal-500 bg-teal-100":
      props.variant === "secondary",
    "px-3 py-1 text-lg": props.size === "sm",
    "px-4 py-2 text-lg": props.size === "md",
    "px-5 py-3 text-xl": props.size === "lg",
  };
});
</script>
