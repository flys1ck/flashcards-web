<template>
  <BaseHeading as="h1" size="xl">Sign In</BaseHeading>
  <SigninForm class="mt-4" />
  <BaseLink class="mt-4 text-center" as="router-link" to="/signup"
    >Not a member? Sign up now</BaseLink
  >
</template>

<script setup lang="ts">
import BaseHeading from "@components/common/BaseHeading.vue";
import BaseLink from "@components/common/BaseLink.vue";
import SigninForm from "@components/forms/SigninForm.vue";
</script>

<route>
{
  meta: {
    layout: "auth"
  }
}
</route>
