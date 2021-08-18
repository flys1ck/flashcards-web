<template>
  <Menu as="div" class="relative">
    <MenuButton>{{ userStore.username }}</MenuButton>
    <MenuItems
      class="absolute right-0 p-4 mt-2 bg-gray-300 border border-gray-500 rounded shadow"
    >
      <MenuItem>
        <a class="flex" href="#">Settings</a>
      </MenuItem>
      <MenuItem>
        <a class="flex" @click="userStore.signout">Logout</a>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useUserStore } from "@stores/user";

const userStore = useUserStore();
</script>
