import { defineStore } from "pinia";

interface NotificationOptions {
  content: string | undefined;
  type: "warning" | "error" | "success" | "info";
  timeout?: number;
  onDismiss?(): void;
}

export interface Notification extends NotificationOptions {
  id: number;
}

const useNotificationStore = defineStore("notifications", {
  state: () => {
    return {
      notifications: [] as Notification[],
      nextId: 0,
    };
  },
  getters: {
    notificationCount(): number {
      return this.notifications.length;
    },
  },
  actions: {
    pushNotification(options: NotificationOptions) {
      const id = this.nextId++;
      const notification: Notification = {
        id: id,
        content: options.content,
        type: options.type,
        timeout: options.timeout || 5000,
        onDismiss: () => {
          if (options.onDismiss) options.onDismiss();
          this.popNotification(id);
        },
      };
      this.notifications.push(notification);
    },
    popNotification(notificationId: number) {
      const i = this.notifications.findIndex((n) => n.id === notificationId);
      if (i > -1) this.notifications.splice(i, 1);
    },
  },
});

export { useNotificationStore };
