<template>
  <router-view></router-view>
  <BaseNotifications />
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useQuery } from "@urql/vue";
import { RefreshAccessTokenDocument } from "@generated/graphql";
import { useUserStore } from "@stores/useUserStore";
import BaseNotifications from "@components/common/BaseNotifications.vue";

const userStore = useUserStore();

onBeforeMount(async () => {
  const { data } = await useQuery({ query: RefreshAccessTokenDocument });
  userStore.$patch({
    id: data.value?.refreshAccessToken?.user?.id,
    username: data.value?.refreshAccessToken?.user?.username,
    email: data.value?.refreshAccessToken?.user?.email,
    accessToken: data.value?.refreshAccessToken?.accessToken,
  });
});
</script>
