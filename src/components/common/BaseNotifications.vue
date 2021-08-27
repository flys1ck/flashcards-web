<template>
  <div v-if="notificationStore.notificationCount" class="relative">
    <div class="absolute bottom-0 right-0 mb-12 mr-12 space-y-2">
      <div
        v-for="notification in notificationStore.notifications"
        :key="notification.id"
        :type="notification.type"
        class="flex justify-end shadow"
      >
        <button
          class="px-4 py-2 rounded"
          :class="notificationClasses(notification.type)"
          @click="notificationStore.popNotification(notification.id)"
        >
          {{ notification.content }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from "@stores/useNotificationStore";
const notificationStore = useNotificationStore();
notificationStore.pushNotification({ content: "hi", type: "warning" });

const notificationClasses = (type: "warning" | "error" | "success") => {
  return {
    "bg-green-200 border border-green-600": type === "success",
    "bg-yellow-300 border border-yellow-500": type === "warning",
    "bg-red-200 border border-red-500": type === "error",
  };
};
</script>
