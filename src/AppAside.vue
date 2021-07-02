<template>
  <aside
    class="flex flex-none flex-col justify-between bg-gray-900 border-r border-white truncate"
  >
    <div>
      <DeckSelect />
      <router-link :to="{ name: 'Cards' }" class="block">Cards</router-link>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeckSelect from "./components/DeckSelect.vue";

export default defineComponent({
  name: "AppAside",
  components: { DeckSelect },
});
</script>
