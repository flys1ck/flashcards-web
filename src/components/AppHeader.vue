<template>
  <header
    class="flex items-center justify-between flex-none h-20 px-8 bg-teal-900"
  >
    <!-- Brand -->
    <div class="flex items-center space-x-4">
      <router-link class="text-4xl font-bold text-teal-100" to="/"
        >Kartaki</router-link
      >
    </div>
    <!-- Search -->
    <BaseInput type="search" name="search" :icon="icon" />
    <!-- Account -->
    <div>
      <!-- Profile -->
      <div v-if="userStore.isSignedIn">
        <AccountMenu></AccountMenu>
      </div>
      <!-- Signup Button -->
      <div v-else class="space-x-2">
        <BaseButton as="router-link" to="/signup" hierarchy="secondary"
          >Sign Up</BaseButton
        >
        <BaseButton as="router-link" to="/signin">Sign In</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AccountMenu from "@components/AccountMenu.vue";

import { SearchIcon } from "@heroicons/vue/solid";

import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore();
const icon = SearchIcon;
</script>
