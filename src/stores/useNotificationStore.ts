import { defineStore } from "pinia";

interface NotificationOptions {
  content: string | undefined;
  type: "warning" | "error" | "success";
}

interface Notification extends NotificationOptions {
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
      this.notifications.push({
        id: this.nextId++,
        content: options.content,
        type: options.type,
      });
    },
    popNotification(notificationId: number) {
      const i = this.notifications.findIndex((n) => n.id === notificationId);
      if (i > -1) this.notifications.splice(i, 1);
    },
  },
});

export { useNotificationStore };
