<template>
  <Menu as="div" class="relative">
    <MenuButton>{{ userStore.username }}</MenuButton>
    <MenuItems
      class="whitespace-nowrap absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow"
    >
      <MenuItem
        v-for="(accountMenuLink, index) in accountMenuLinks"
        :key="index"
        v-slot="{ active }"
      >
        <router-link
          class="hover:bg-gray-200 flex px-4 py-2"
          :class="{ 'bg-gray-200': active }"
          :to="accountMenuLink.to"
          >{{ accountMenuLink.name }}</router-link
        >
      </MenuItem>
      <hr />
      <MenuItem>
        <router-link class="hover:bg-gray-200 flex px-4 py-2" to="/signin"
          >Sign Out</router-link
        >
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore();

const accountMenuLinks = reactive([
  {
    name: "Profile",
    to: `/u/${userStore.username}`,
  },
  {
    name: "Settings",
    to: "/settings",
  },
]);
</script>
