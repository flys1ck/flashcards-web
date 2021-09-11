<template>
  <div>{{ data?.getDeckByNameAndAuthor }}</div>
  <div v-if="error">{{ error }}</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@urql/vue";

import { GetDeckByNameAndAuthorDocument } from "@generated/graphql";

defineProps({
  username: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
  },
});

const route = useRoute();
const author = ref<string>(route.params.username as string);
const name = ref<string>(route.params.deck as string);
const { data, error } = useQuery({
  query: GetDeckByNameAndAuthorDocument,
  variables: {
    /* @ts-expect-error urql handles Ref<string> instead of string correctly */
    author,
    /* @ts-expect-error urql handles Ref<string> instead of string correctly */
    name,
  },
});

watch(
  [() => route.params.username as string, () => route.params.deck as string],
  ([u, d]) => {
    author.value = u;
    name.value = d;
  }
);
</script>

<route>
{
  name: "deck",
}
</route>
