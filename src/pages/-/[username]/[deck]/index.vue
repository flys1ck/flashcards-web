<template>
  <div>{{ data?.getDeckBySlugAndAuthor }}</div>
  <div v-if="error">{{ error }}</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@urql/vue";

import { GetDeckBySlugAndAuthorDocument } from "@generated/graphql";

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
const slug = ref<string>(route.params.deck as string);
const { data, error } = useQuery({
  query: GetDeckBySlugAndAuthorDocument,
  variables: {
    /* @ts-expect-error urql handles Ref<string> instead of string correctly */
    author,
    /* @ts-expect-error urql handles Ref<string> instead of string correctly */
    slug,
  },
});

watch(
  [() => route.params.username as string, () => route.params.deck as string],
  ([u, d]) => {
    author.value = u;
    slug.value = d;
  }
);
</script>

<route>
{
  name: "deck",
}
</route>
