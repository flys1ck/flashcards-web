<template>Henlo {{ data }}</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { GetFeedDocument } from "@generated/graphql";

const { data } = useQuery({ query: GetFeedDocument });
</script>

<route>
{
  name: "Home",
  meta: {
    requiresAuth: false
  }
}
</route>
