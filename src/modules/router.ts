import { createRouter, createWebHistory } from "vue-router";

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import { useUserStore } from "@stores/useUserStore";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isSignedIn) return "/signin";
});

export default router;
