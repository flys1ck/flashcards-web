<template>
  <div
    class="group flex px-2 py-2 bg-white justify-between hover:bg-gray-50"
    @contextmenu.prevent="onContextMenu"
  >
    <div class="flex">
      <div class="flex flex-col">
        <router-link
          class="font-medium hover:underline"
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
    <!--         class="hidden group-hover:block"
        @click="$emit('deleteCard', card.id)" -->
    <Menu v-slot="{ open }" as="div" class="relative">
      <MenuButton
        class="h-full group-hover:flex group-hover:items-center group-hover:justify-center"
        :class="{
          'flex items-center justify-center': open,
          hidden: !open,
        }"
      >
        <DotsVerticalIcon class="w-6 h-6 text-gray-800" />
      </MenuButton>
      <MenuItems
        class="whitespace-nowrap absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow w-56 z-10"
      >
        <MenuItem v-slot="{ active }">
          <button
            class="flex w-full p-2"
            :class="{ 'bg-gray-200': active }"
            @click="$emit('deleteCard', card.id)"
          >
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { DotsVerticalIcon } from "@heroicons/vue/outline";

interface Card {
  id: number;
  title: string;
  createdAt: string;
}

defineProps({
  // Card data.
  card: {
    type: Object as PropType<Card>,
    required: true,
  },
});

defineEmits({
  deleteCard(cardId: number) {
    return cardId > 0;
  },
});
</script>
