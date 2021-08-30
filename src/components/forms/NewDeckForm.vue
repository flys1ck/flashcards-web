<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      v-model="formData.name"
      type="text"
      label="Name"
      name="username"
    />
    <BaseTextarea
      v-model="formData.description"
      class="mt-2"
      type="text"
      label="Description"
      name="password"
    >
    </BaseTextarea>
    <VisibilityRadioGroup v-model="formData.visibility" />
    <BaseButton type="submit" class="w-full mt-6" :is-loading="fetching"
      >Create deck</BaseButton
    >
  </form>
  {{ data }}
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useMutation } from "@urql/vue";
import BaseInput from "@components/common/BaseInput.vue";
import BaseButton from "@components/common/BaseButton.vue";
import BaseTextarea from "@components/common/BaseTextarea.vue";
import VisibilityRadioGroup from "@components/VisibilityRadioGroup.vue";

import { CreateDeckMutationDocument } from "@generated/graphql";
import { handleApiError } from "@/utilities/handleApiError";

const formData = reactive({
  name: "",
  description: "",
  visibility: "private",
});

const { data, error, fetching, executeMutation: createDeck } = useMutation(
  CreateDeckMutationDocument
);

const onSubmit = async () => {
  // TODO validate
  try {
    await createDeck(formData);
    if (error.value) throw error.value;
  } catch (e) {
    handleApiError(e);
  }
  return;
};
</script>
