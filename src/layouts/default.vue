<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <div class="flex flex-grow overflow-hidden">
      <AppAside />
      <main class="flex-grow overflow-auto bg-teal-900">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../AppHeader.vue";
import AppAside from "../AppAside.vue";

export default defineComponent({
  components: { AppHeader, AppAside },
});
</script>
