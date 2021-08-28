<template>
  <div class="md:grid md:grid-cols-2 xl:grid-cols-3 h-screen bg-gray-100">
    <!-- sign up form -->
    <div class="px-12 my-auto">
      <router-view />
    </div>
    <!-- image -->
    <div class="md:block xl:col-span-2 hidden max-h-screen">
      <img
        :src="heroImage"
        alt="man wearing a book as head"
        class="brightness-75 object-cover h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import heroImage from "@assets/images/learn.jpg";
</script>
