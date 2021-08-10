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
      <BaseButton as="router-link" :to="{ name: 'SignUp' }">Sign Up</BaseButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseButton from "@components/common/BaseButton.vue";
import BaseInput from "@components/common/BaseInput.vue";
import { SearchIcon } from "@heroicons/vue/solid";

const icon = SearchIcon;
</script>
