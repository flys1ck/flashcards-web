<template>
  <component :is="as" class="font-semibold" :class="computedClasses">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "BaseHeading",
  props: {
    /**
     * Tag or component name. Start with `h1` for accessibility.
     * @values h1, h2, h3, h4, h5, h6
     */
    as: {
      type: String,
      default: "h1",
      validator: (value: string) =>
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
    },
    /**
     * Size of the heading.
     * @values xs, sm, md, lg, xl, 2xl
     */
    size: {
      type: String,
      default: "2xl",
      validator: (value: string) =>
        ["xs", "sm", "md", "lg", "xl", "2xl"].includes(value),
    },
  },
  setup(props) {
    const computedClasses = computed(() => {
      return {
        "text-lg": props.size === "xs",
        "text-xl": props.size === "sm",
        "text-2xl": props.size === "md",
        "text-3xl": props.size === "lg",
        "text-4xl": props.size === "xl",
        "text-5xl": props.size === "2xl",
      };
    });

    return { computedClasses };
  },
});
</script>
