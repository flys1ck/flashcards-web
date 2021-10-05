<template>
  <div class="p-4">
    <BaseHeading as="h3" size="sm">Question</BaseHeading>
    <CardEditor />
    <BaseHeading as="h3" size="sm" class="mt-4">Answer</BaseHeading>
    <CardEditor />
  </div>
</template>

<script setup lang="ts">
import CardEditor from "@components/CardEditor.vue";

defineProps({
  username: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
  },
  cardId: {
    type: String,
    required: true,
  },
});
</script>

<route>
{
  name: "card",
  meta: {
    requiresAuth: true,
  }
}
</route>
