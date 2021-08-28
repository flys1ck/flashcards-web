import { createRouter, createWebHistory, START_LOCATION } from "vue-router";

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import { useUserStore } from "@stores/useUserStore";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  //refresh access token when the app gets initialized
  if (from === START_LOCATION) {
    await userStore.refreshAccessToken();
  }
  if (to.meta.requiresAuth && !userStore.isSignedIn) return "/signin";
});

export default router;
