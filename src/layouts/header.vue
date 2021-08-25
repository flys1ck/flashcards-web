<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-grow p-8 overflow-hidden">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@components/AppHeader.vue";
</script>
