<template>
  <div class="flex h-screen">
    <AppAside />
    <div class="flex flex-col flex-grow overflow-hidden">
      <AppHeader />
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
