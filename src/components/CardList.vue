<template>
  <div class="h-full flex flex-col border-r overflow-hidden">
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
    <div class="bg-gray-200 divide-y overflow-y-auto">
      <!-- card -->
      <div
        v-for="(card, index) in cardsMatchingSearchQuery()"
        :key="card.id"
        class="group flex px-2 py-2 bg-white justify-between hover:bg-gray-50"
      >
        <div class="flex">
          <span class="w-12 text-4xl text-gray-200">{{ index + 1 }}</span>
          <div class="flex flex-col overflow-hidden">
            <router-link
              class="font-medium truncate hover:underline"
              :to="{
                name: 'card',
                params: { cardId: card.id },
              }"
            >
              {{ card.title }}
            </router-link>
            <span class="font-light text-xs italic">{{ card.createdAt }}</span>
          </div>
        </div>
        <button class="hidden group-hover:block" @click="deleteCard(card.id)">
          <DotsVerticalIcon class="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DotsVerticalIcon } from "@heroicons/vue/outline";
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
