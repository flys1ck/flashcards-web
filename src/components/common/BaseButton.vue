<template>
  <component
    :is="as"
    class="focus:ring ring-teal-400/30 px-4 py-2 font-medium text-white bg-teal-600 rounded"
    :class="computedClasses"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    /**
     * Tag or component name.
     * @values primary, secondary
     */
    as: { type: [Object, String], default: "button" },
    /**
     * Visual style of the button.
     * @values primary, secondary
     */
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary"].includes(value),
    },
    /**
     * Size of the button.
     * @values md, lg
     */
    size: {
      type: String,
      default: "md",
      validator: (value) => ["md", "lg"].includes(value),
    },
  },
  setup(props) {
    const computedClasses = computed(() => {
      return {
        "hover:bg-teal-600 focus:ring-teal-600 active:bg-teal-600 text-white bg-teal-800":
          props.variant === "primary",
        "hover:bg-teal-200 focus:ring-teal-100 active:bg-teal-900 text-teal-500 bg-teal-100":
          props.variant === "secondary",
        "px-4 py-2 text-lg": props.size === "md",
        "px-5 py-3 text-xl": props.size === "lg",
      };
    });

    return { computedClasses };
  },
});
</script>
