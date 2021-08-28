<template>
  <SigninForm />
</template>

<script setup lang="ts">
import SigninForm from "@components/forms/SigninForm.vue";
import { useUserStore } from "@stores/useUserStore";
import { useNotificationStore } from "@/stores/useNotificationStore";

const userStore = useUserStore();
const notificationStore = useNotificationStore();
if (userStore.isSignedIn) {
  userStore.$reset();
  notificationStore.pushNotification({
    content: "You have been signed out!",
    type: "info",
  });
}
</script>

<route>
{
  meta: {
    layout: "blank"
  }
}
</route>
