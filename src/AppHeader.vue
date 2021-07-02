<template>
  <header
    class="flex items-center justify-between flex-none h-20 px-8 bg-gray-900 border-b"
  >
    <div class="text-2xl font-bold text-teal-400">Flashcards.io</div>
    <div>
      <BaseButton>Sign Up</BaseButton>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "./components/common/BaseButton.vue";

export default defineComponent({
  name: "AppHeader",
  components: { BaseButton },
});
</script>
