import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import { createClient } from "@urql/vue";

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import { useUserStore } from "@stores/useUserStore";
import { RefreshAccessTokenDocument } from "@generated/graphql";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  //refresh access token when the app gets initialized
  if (from === START_LOCATION) {
    const client = createClient({ url: "http://localhost:3000/graphql" });
    const { data } = await client.query(RefreshAccessTokenDocument).toPromise();
    userStore.$patch({
      id: data?.refreshAccessToken?.user?.id,
      username: data?.refreshAccessToken?.user?.username,
      email: data?.refreshAccessToken?.user?.email,
      accessToken: data?.refreshAccessToken?.accessToken,
    });
  }
  if (to.meta.requiresAuth && !userStore.isSignedIn) return "/signup";
});

export default router;
