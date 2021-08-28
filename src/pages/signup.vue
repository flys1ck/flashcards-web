<template>
  <BaseHeading as="h1" size="xl">Create your account</BaseHeading>
  <SignupForm class="mt-4" />
  <BaseLink class="mt-4 text-center" as="router-link" to="/signin"
    >Already a member? Sign in</BaseLink
  >
</template>

<script setup lang="ts">
import BaseHeading from "@components/common/BaseHeading.vue";
import BaseLink from "@components/common/BaseLink.vue";
import SignupForm from "@components/forms/SignupForm.vue";
import { useUserStore } from "@stores/useUserStore";

const userStore = useUserStore();
userStore.signout();
</script>

<route>
{
  meta: {
    layout: "auth"
  }
}
</route>
