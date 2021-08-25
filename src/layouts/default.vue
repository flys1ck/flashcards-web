<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <div class="flex flex-grow overflow-hidden">
      <AppAside />
      <main class="flex-grow p-8 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@components/AppHeader.vue";
import AppAside from "@components/AppAside.vue";
</script>
