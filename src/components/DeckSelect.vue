<template>
  <Listbox v-if="data" v-model="selectedDeck" as="div">
    <div class="relative">
      <ListboxButton
        class="flex items-center justify-between w-full px-3 py-3 text-left bg-white border rounded"
      >
        <span class="overflow-ellipsis w-full overflow-hidden">{{
          selectedDeck?.name
        }}</span>
        <SelectorIcon class="w-5 h-5 text-teal-600" />
      </ListboxButton>
      <transition
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 w-full mt-2 overflow-x-hidden bg-white border rounded shadow"
        >
          <ListboxOption
            v-for="deck in data.getDecks"
            v-slot="{ selected, active }"
            :key="deck.id"
            :value="deck"
            as="template"
          >
            <li
              class="hover:bg-gray-200 relative flex items-center px-3 py-3"
              :class="{ 'bg-gray-200': active }"
            >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-2"
              >
                <CheckIcon class="w-5 h-5 text-teal-600"></CheckIcon>
              </span>
              <span
                class="overflow-ellipsis pl-6 overflow-hidden"
                :class="{ 'font-medium': selected }"
                >{{ deck.name }}</span
              >
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { SelectorIcon, CheckIcon } from "@heroicons/vue/solid";
import { useQuery } from "@urql/vue";
import { GetDecksDocument } from "@generated/graphql";
import { useRouter, useRoute } from "vue-router";
import { useActiveDeckStore } from "@stores/useActiveDeckStore";

const activeDeckStore = useActiveDeckStore();
const router = useRouter();
const route = useRoute();
const { data } = await useQuery({ query: GetDecksDocument });

const _deck = data.value?.getDecks.find(
  (deck) =>
    deck.name === route.params.deck &&
    deck.author.username === route.params.username
);

const selectedDeck = ref(_deck);
// navigate route to selected deck, when value changes
watch(
  selectedDeck,
  (activeDeck) => {
    activeDeckStore.updateActiveDeckId(activeDeck?.id);
    router.push({
      name: "deck",
      params: {
        username: data.value?.getDecks.find((deck) => deck.id === deck.id)
          ?.author.username,
        deck: activeDeck?.name,
      },
    });
  },
  { immediate: true }
);
</script>
