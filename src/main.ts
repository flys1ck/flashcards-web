import { createApp } from "vue";
import router from "@modules/router";
import urql from "@urql/vue";
import App from "@/App.vue";
import "@assets/styles/tailwind.css";

createApp(App)
  .use(router)
  .use(urql, { url: "http://localhost:3000/graphql" })
  .mount("#app");
