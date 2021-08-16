import { createApp } from "vue";
import router from "@modules/router";
import pinia from "@modules/pinia";
import urql from "@urql/vue";
import App from "@/App.vue";
import "@assets/styles/tailwind.css";

createApp(App)
  .use(router)
  .use(pinia)
  .use(urql, { url: "http://localhost:3000/graphql" })
  .mount("#app");
