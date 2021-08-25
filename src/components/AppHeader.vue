<template>
  <header
    class="flex items-center justify-between flex-none h-20 px-8 bg-gray-200"
  >
    <!-- Search -->
    <div class="flex items-center space-x-4">
      <router-link class="text-4xl font-bold text-teal-600" to="/"
        >Flashcards.io</router-link
      >
      <BaseInput type="search" name="search" :icon="icon" />
    </div>
    <!-- Account -->
    <div>
      <!-- Profile -->
      <div v-if="userStore.isSignedIn">
        <AccountMenu></AccountMenu>
      </div>
      <!-- Signup Button -->
      <div v-else class="space-x-2">
        <BaseButton as="router-link" to="/signup" variant="secondary"
          >Sign Up</BaseButton
        >
        <BaseButton as="router-link" to="/signin">Sign In</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AccountMenu from "@components/AccountMenu.vue";
import BaseButton from "@components/common/BaseButton.vue";
import BaseInput from "@components/common/BaseInput.vue";

import { SearchIcon } from "@heroicons/vue/solid";

import { useUserStore } from "@stores/user";

const userStore = useUserStore();
const icon = SearchIcon;
</script>
