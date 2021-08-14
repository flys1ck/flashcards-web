<template>Henlo {{ data }}</template>

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { GetFeedQuery } from "@/generated/graphql";

const { data } = useQuery({ query: GetFeedQuery });
</script>

<route>
{
  name: "Home",
  meta: {
    requiresAuth: false
  }
}
</route>
