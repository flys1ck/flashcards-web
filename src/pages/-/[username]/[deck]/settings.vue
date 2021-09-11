<template>
  <BaseButton
    type="destructive"
    hierarchy="secondary"
    :is-loading="fetching"
    @click="onClick"
    >Delete deck</BaseButton
  >
  {{ data }}
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { CombinedError, useMutation } from "@urql/vue";

import { DeleteDeckDocument } from "@generated/graphql";
import { handleApiError } from "@utilities/handleApiError";
import { useActiveDeckStore } from "@stores/useActiveDeckStore";

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

const router = useRouter();
const activeDeckStore = useActiveDeckStore();

const { data, fetching, executeMutation: deleteDeck } = useMutation(
  DeleteDeckDocument
);

const onClick = async () => {
  try {
    const { error } = await deleteDeck({ id: activeDeckStore.id });
    if (error) throw error;
    activeDeckStore.id = "";
    router.push("/");
  } catch (e) {
    handleApiError(e as CombinedError);
  }
};
</script>

<route>
{
  name: "deck-settings",
}
</route>
