<template>
  <component :is="as" class="font-semibold text-teal-600">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLink",
  props: {
    /**
     * Tag or component name.
     * @values a, router-link
     */
    as: {
      type: String,
      default: "a",
      validator: (value: string) => ["a", "router-link"].includes(value),
    },
  },
});
</script>
