<template>
  <router-view></router-view>
  <AppNotificationContainer />
</template>

<script setup lang="ts">
import { provideClient } from "@urql/vue";

import AppNotificationContainer from "@components/AppNotificationContainer.vue";
import { client } from "@modules/urql";

provideClient(client);
</script>
