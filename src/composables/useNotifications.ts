import { Ref, ref } from "vue";

interface UseNotificationsReturn {
  notifications: Ref<Array<Notification>>;
  pushNotification(notificationOptions: NotificationOptions): void;
}

interface Notification extends NotificationOptions {
  id: number;
  onDismiss(id: number): void;
}

interface NotificationOptions {
  content: string | undefined;
  type: "warning" | "error" | "success";
}

const notifications: Ref<Array<Notification>> = ref([]);
const notificationId = ref(0);

export function useNotifications(): UseNotificationsReturn {
  function pushNotification(options: NotificationOptions): void {
    notifications.value.push({
      id: notificationId.value,
      content: options.content,
      type: options.type,
      onDismiss: (id: number) => {
        notifications.value = notifications.value.filter(
          (notification) => notification.id !== id
        );
      },
    });

    ++notificationId.value;
    return;
  }

  return {
    notifications,
    pushNotification,
  };
}
