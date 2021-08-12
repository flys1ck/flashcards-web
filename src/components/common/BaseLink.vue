<template>
  <component :is="as" class="font-semibold text-teal-600">
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  /**
   * Tag or component name.
   * @values a, router-link
   */
  as: {
    type: String,
    default: "a",
    validator: (value: string) => ["a", "router-link"].includes(value),
  },
});
</script>
