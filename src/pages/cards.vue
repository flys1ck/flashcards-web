<template>
  <div class="grid grid-cols-2 gap-8">
    <CardEditor />
  </div>
</template>

<script setup lang="ts">
import CardEditor from "@/components/CardEditor.vue";
</script>

<route>
  {
    meta: {
      requiresAuth: true
    }
  }
  </route>
