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
        <button class="px-4 py-2" @click="onSignOut" @keydown="onSignOut">
          Sign Out
        </button>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useUserStore } from "@stores/user";

const router = useRouter();
const userStore = useUserStore();

const onSignOut = () => {
  userStore.$reset();
  document.cookie = "jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  router.go(0);
};

const accountMenuLinks = reactive([
  {
    name: "Profile",
    to: "/profile",
  },
  {
    name: "Settings",
    to: "/settings",
  },
]);
</script>
