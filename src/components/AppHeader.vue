<template>
  <header
    class="bg-gray-50 flex items-center justify-between flex-none h-20 px-8"
  >
    <!-- Search -->
    <div>
      <BaseInput type="search" name="search" :icon="icon" />
    </div>
    <!-- Account -->
    <div>
      <!-- Profile -->
      <AccountMenu v-if="userStore.isSignedIn"></AccountMenu>
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
