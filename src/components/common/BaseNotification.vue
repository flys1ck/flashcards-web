<template>
  <div class="group bg-gray-50 relative border rounded shadow">
    <div class="flex items-center justify-between px-2 py-2">
      <div class="flex items-stretch">
        <div class="w-1 rounded" :class="accentbackgroundClass"></div>
        <div class="flex items-center justify-center px-3">
          <component :is="icon" class="w-7 h-7" :class="accentTextClass" />
        </div>
        <span
          class="overflow-ellipsis w-56 py-2 overflow-hidden font-medium text-gray-600"
        >
          {{ notification.content }}
        </span>
      </div>
      <button
        class="hover:bg-white active:bg-gray-500 p-1 ml-2 rounded-lg"
        @click="notification.onDismiss"
      >
        <XIcon class="w-7 h-7 text-gray-400" />
      </button>
    </div>
    <div
      class="animate-progress absolute bottom-0 h-0.5 group-hover:animation-paused"
      :class="accentbackgroundClass"
      :style="progressbarStyles"
      @animationend="notification.onDismiss"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { Notification } from "@stores/useNotificationStore";
import { XIcon } from "@heroicons/vue/outline";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/solid";

const props = defineProps({
  notification: {
    type: Object as PropType<Notification>,
    required: true,
  },
});

const accentbackgroundClass = computed(() => {
  return {
    "bg-green-600": props.notification.type === "success",
    "bg-yellow-400":
      props.notification.type === "warning" ||
      props.notification.type === "error",
    "bg-blue-400": props.notification.type === "info",
  };
});

const accentTextClass = computed(() => {
  return {
    "text-green-600": props.notification.type === "success",
    "text-yellow-400":
      props.notification.type === "warning" ||
      props.notification.type === "error",
    "text-blue-400": props.notification.type === "info",
  };
});

const icon = computed(() => {
  if (props.notification.type === "info") return InformationCircleIcon;
  else if (
    props.notification.type === "warning" ||
    props.notification.type === "error"
  )
    return ExclamationCircleIcon;
  else if (props.notification.type === "success") return CheckCircleIcon;
  return null;
});

const progressbarStyles = computed(() => {
  return {
    animationDuration: `${props.notification.timeout}ms`,
  };
});
</script>
