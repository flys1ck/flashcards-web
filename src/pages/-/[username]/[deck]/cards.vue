<template>
  <div class="grid h-full grid-cols-3">
    <div class="h-full flex flex-col border-r overflow-hidden">
      <div class="p-2">
        <div class="flex justify-between items-center">
          <BaseHeading as="h1" size="md">Cards</BaseHeading>
          <BaseButton hierarchy="secondary" size="sm"
            >+ Create new card</BaseButton
          >
        </div>
        <!-- search -->
        <div class="mt-4">
          <p>Search {{ staticCards.length }} cards</p>
          <BaseInput v-model="searchQuery" type="search" name="search" />
        </div>
      </div>
      <hr class="mt-4" />
      <div class="bg-gray-200 divide-y overflow-y-auto">
        <div
          v-for="(card, index) in cardsMatchingSearchQuery()"
          :key="card.id"
          class="flex px-4 py-2 bg-white items-center"
        >
          <span class="w-12 text-4xl text-gray-200">{{ index + 1 }}</span>
          <div class="flex flex-col overflow-hidden">
            <span class="font-medium truncate">{{ card.title }}</span>
            <span class="font-light text-xs italic">{{ card.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
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
import { ref } from "vue";
import CardEditor from "@components/CardEditor.vue";
import BaseHeading from "@/components/common/BaseHeading.vue";

const searchQuery = ref("");
const cardsMatchingSearchQuery = () => {
  return staticCards.filter((card) => card.title.includes(searchQuery.value));
};

const staticCards = [
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application? But now with a really long title",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
];
</script>

<route>
{
  name: "deck-cards",
  meta: {
    requiresAuth: true
  }
}
</route>
