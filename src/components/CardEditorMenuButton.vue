<template>
  <button class="hover:bg-teal-900 w-8 h-8 rounded" :class="computedClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const computedClasses = computed(() => {
      return {
        "bg-teal-900 text-teal-50": props.isActive,
      };
    });

    return { computedClasses };
  },
});
</script>
