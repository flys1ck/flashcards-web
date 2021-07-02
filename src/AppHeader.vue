<template>
  <header
    class="bg-gray-900 h-20 flex-none border-b flex items-center justify-between px-8"
  >
    <div class="text-teal-400 text-2xl font-bold">Flashcards.io</div>
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
