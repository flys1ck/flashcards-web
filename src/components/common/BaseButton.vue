<template>
  <component
    :is="as"
    class="focus:ring ring-teal-400/30 inline-block font-medium text-white rounded"
    :class="computedClasses"
    :disabled="isLoading"
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
    default: "default",
    validator: (value: string) => ["default", "destructive"].includes(value),
  },
  /**
   * Type of the button.
   * @values default, destructive
   */
  hierarchy: {
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
  /**
   * Indicate button loading state.
   */
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const computedClasses = computed(() => {
  return {
    "hover:bg-teal-500 focus:ring-teal-600/50 active:bg-teal-700 text-teal-50 bg-teal-600 transition-colors duration-100 border border-teal-700":
      props.variant === "default" && props.hierarchy === "primary",
    "hover:bg-teal-50 focus:ring-teal-100 active:bg-teal-900 text-teal-500 bg-transparent border border-teal-500":
      props.variant === "default" && props.hierarchy === "secondary",
    "hover:bg-red-500 focus:ring-red-600/50 active:bg-red-700 text-red-50 bg-red-600 transition-colors duration-100 border border-red-700":
      props.variant === "destructive" && props.hierarchy === "primary",
    "hover:bg-red-50 focus:ring-red-100 active:bg-red-600 active:text-red-50 text-red-500 bg-transparent border border-red-500":
      props.variant === "destructive" && props.hierarchy === "secondary",
    "px-3 py-1 text-lg": props.size === "sm",
    "px-4 py-2 text-lg": props.size === "md",
    "px-5 py-3 text-xl": props.size === "lg",
    "opacity-50 cursor-wait": props.isLoading,
  };
});
</script>
