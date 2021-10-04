<template>
  <div class="grid h-full grid-cols-3">
    <CardList />
    <div class="col-span-2">
      <div class="p-4">
        <BaseHeading as="h3" size="sm">Question</BaseHeading>
        <CardEditor />
        <BaseHeading as="h3" size="sm" class="mt-4">Answer</BaseHeading>
        <CardEditor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardEditor from "@components/CardEditor.vue";
import CardList from "@components/CardList.vue";
</script>

<route>
{
  name: "deck-cards",
  meta: {
    requiresAuth: true,
  }
}
</route>
