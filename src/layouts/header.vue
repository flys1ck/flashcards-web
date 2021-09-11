<template>
  <div class="flex flex-col h-screen">
    <AppHeader />
    <main class="flex-grow p-8 overflow-hidden">
      <div class="container mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@components/AppHeader.vue";
</script>
