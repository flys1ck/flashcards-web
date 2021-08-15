<template>
  <teleport to="body">
    <div class="absolute bottom-0 p-2 bg-red-300 border border-red-500 rounded">
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts"></script>
