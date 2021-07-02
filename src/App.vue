<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const isAsideExpanded = ref(true);

    return { isAsideExpanded };
  },
});
</script>
