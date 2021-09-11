<template>
  <Menu as="div" class="relative">
    <MenuButton class="rounded-xl p-2 font-bold text-teal-900 bg-teal-200">{{
      userStore.username
    }}</MenuButton>
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
        <button class="hover:bg-gray-200 flex px-4 py-2" @click="onSignout">
          Sign Out
        </button>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { CombinedError, useMutation } from "@urql/vue";

import { SignoutDocument } from "@generated/graphql";
import { useNotificationStore } from "@stores/useNotificationStore";
import { useUserStore } from "@stores/useUserStore";

import { handleApiError } from "@utilities/handleApiError";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const notificationStore = useNotificationStore();
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
const { executeMutation: signoutMutation } = useMutation(SignoutDocument);

const onSignout = async () => {
  try {
    const { error } = await signoutMutation({});
    if (error) throw error;
    router.push("/signin");
    userStore.signout();
    notificationStore.pushNotification({
      content: "You have been signed out!",
      type: "info",
    });
  } catch (e) {
    handleApiError(e as CombinedError);
  }
};
</script>
