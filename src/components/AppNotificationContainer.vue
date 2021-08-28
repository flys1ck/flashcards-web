<template>
  <div v-if="notificationStore.notificationCount" class="relative">
    <div class="absolute bottom-0 right-0 mb-12 mr-12 space-y-2">
      <transition-group
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-500 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
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
