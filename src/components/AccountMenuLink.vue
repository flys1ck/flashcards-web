<template>
  <router-link
    active-class="after:absolute after:inset-y-0 after:right-0 after:w-1.5 after:bg-teal-500 relative after:rounded-l"
    class="hover:bg-gray-200 group flex items-center px-4 py-2.5 text-lg"
  >
    <Component
      :is="icon"
      v-if="icon"
      class="group-hover:text-teal-700 w-6 h-6 text-teal-600"
    />
    <span class="ml-2"><slot /></span>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  /** Icon Component, to be displayed */
  icon: {
    type: Function,
    default: null,
  },
});
</script>
