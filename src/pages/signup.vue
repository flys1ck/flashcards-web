<template>
  <div class="grid flex-grow grid-cols-3 bg-gray-100">
    <!-- sign up form -->
    <div class="px-12 my-auto">
      <router-link to="/" class="font-medium text-teal-600"
        >&larr; Back to Home</router-link
      >
      <BaseHeading as="h1" size="xl">Create your account</BaseHeading>
      <SignupForm />
    </div>
    <!-- image -->
    <div class="max-h-screen col-span-2">
      <img
        :src="heroImage"
        alt="man wearing a book as head"
        class="brightness-75 object-cover h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeading from "@components/common/BaseHeading.vue";
import SignupForm from "@/components/forms/SignupForm.vue";

import heroImage from "@assets/images/learn.jpg";
</script>

<route>
{
  meta: {
    layout: "blank"
  }
}
</route>
