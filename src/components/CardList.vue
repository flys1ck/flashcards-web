<template>
  <div class="h-full flex flex-col border-r w-96">
    <div class="p-2">
      <div class="flex justify-between items-center">
        <BaseHeading as="h1" size="md">Cards</BaseHeading>
        <BaseButton hierarchy="secondary" size="sm" @click="addCard"
          >+ new card</BaseButton
        >
      </div>
      <!-- search -->
      <div class="mt-4">
        <p>Search {{ staticCards.length }} cards</p>
        <BaseInput v-model="searchQuery" type="search" name="search" />
      </div>
    </div>
    <hr class="mt-4" />
    <!-- cards -->
    <div class="divide-y h-full">
      <CardListItem
        v-for="card in cardsMatchingSearchQuery()"
        :key="card.id"
        :card="card"
        @delete-card="deleteCard($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CardListItem from "@components/CardListItem.vue";

const searchQuery = ref("");
const cardsMatchingSearchQuery = () => {
  return staticCards.value.filter((card) =>
    card.title.includes(searchQuery.value)
  );
};

const addCard = () => {
  staticCards.value.push({
    id: 4,
    title: "My new card",
    createdAt: new Date().toUTCString(),
  });
};

const deleteCard = (id: number) => {
  const cardIndex = staticCards.value.findIndex((card) => card.id === id);
  staticCards.value.splice(cardIndex, 1);
};

const staticCards = ref([
  {
    id: 1,
    title: "How to create a web application?",
    createdAt: new Date().toUTCString(),
  },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
  // {
  //   id: 1,
  //   title: "How to create a web application?",
  //   createdAt: new Date().toUTCString(),
  // },
]);
</script>
