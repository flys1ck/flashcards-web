import { createApp } from "vue";
import pinia from "@modules/pinia";
import urql, { URQL_OPTIONS } from "@modules/urql";
import router from "@modules/router";
import App from "@/App.vue";
import "@assets/styles/tailwind.css";

const app = createApp(App);
app.use(urql, URQL_OPTIONS);
app.use(pinia);
app.use(router);
app.mount("#app");
