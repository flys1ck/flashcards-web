<template>
  <div class="relative">
    <div class="absolute bottom-0 right-0 mb-12 mr-12 space-y-2">
      <transition-group
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-x-1/4 transform opacity-0"
        enter-to-class="transform translate-x-0 opacity-100"
        leave-active-class="transition duration-300 ease-out"
        leave-from-class="transform translate-x-0 opacity-100"
        leave-to-class="translate-x-1/4 transform opacity-0"
      >
        <BaseNotification
          v-for="notification in notificationStore.notifications"
          :key="notification.id"
          :notification="notification"
        >
        </BaseNotification>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseNotification from "@components/common/BaseNotification.vue";
import { useNotificationStore } from "@stores/useNotificationStore";
const notificationStore = useNotificationStore();
</script>
