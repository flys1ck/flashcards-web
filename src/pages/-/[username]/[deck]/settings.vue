<template>
  <BaseHeading as="h2" size="md">Deck Settings</BaseHeading>
  <BaseHeading as="h3" size="sm" class="mt-4">Danger Zone</BaseHeading>
  <div class="flex items-center justify-between p-4 mt-2 border rounded">
    <div class="">
      <BaseHeading as="h4" size="xs">Delete deck</BaseHeading>
      <p>Once you delete this deck, there is no way to recover it.</p>
    </div>
    <BaseButton
      variant="destructive"
      hierarchy="secondary"
      :is-loading="fetching"
      @click="onClick"
      >Delete deck</BaseButton
    >
  </div>
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

const { fetching, executeMutation: deleteDeck } = useMutation(
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
