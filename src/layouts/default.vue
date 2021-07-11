<template>
  <div class="flex h-screen">
    <AppAside />
    <div class="flex flex-col flex-grow overflow-hidden">
      <AppHeader />
      <main class="flex-grow overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@components/AppHeader.vue";
import AppAside from "@components/AppAside.vue";

export default defineComponent({
  components: { AppHeader, AppAside },
});
</script>
