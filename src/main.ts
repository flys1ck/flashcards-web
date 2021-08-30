import { createApp } from "vue";
import pinia from "@modules/pinia";
import urql, { URQL_OPTIONS } from "@modules/urql";
import { useUserStore } from "@/stores/useUserStore";
import router from "@modules/router";
import App from "@/App.vue";
import "@assets/styles/tailwind.css";

const app = createApp(App);
app.use(pinia);

(async () => {
  // try to refresh access token on initial load
  const userStore = useUserStore();
  await userStore.refreshAccessToken();

  app.use(urql, URQL_OPTIONS);
  app.use(router);
  app.mount("#app");
})();
