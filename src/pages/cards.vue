<template>
  <div class="grid grid-cols-2 gap-8">
    <CardEditor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardEditor from "@/components/CardEditor.vue";

export default defineComponent({
  components: { CardEditor },
});
</script>
