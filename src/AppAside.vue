<template>
  <aside
    class="flex flex-col justify-between flex-none truncate bg-gray-900 border-r border-white"
  >
    <div>
      <DeckSelect />
      <router-link :to="{ name: 'Cards' }" class="block">Cards</router-link>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeckSelect from "@components/DeckSelect.vue";

export default defineComponent({
  name: "AppAside",
  components: { DeckSelect },
});
</script>
