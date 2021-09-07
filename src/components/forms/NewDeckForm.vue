<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      v-model="formData.name"
      type="text"
      label="Name"
      name="username"
      :errors="v$.name.$errors"
      :is-invalid="v$.name.$dirty && v$.name.$invalid"
    />
    <BaseTextarea
      v-model="formData.description"
      class="mt-2"
      type="text"
      label="Description"
      name="password"
      :is-optional="true"
    >
    </BaseTextarea>
    <VisibilityRadioGroup v-model="formData.visibility" />
    <BaseButton type="submit" class="w-full mt-6" :is-loading="fetching"
      >Create deck</BaseButton
    >
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { CombinedError, useMutation } from "@urql/vue";
import BaseInput from "@components/common/BaseInput.vue";
import BaseButton from "@components/common/BaseButton.vue";
import BaseTextarea from "@components/common/BaseTextarea.vue";
import VisibilityRadioGroup from "@components/VisibilityRadioGroup.vue";

import { CreateDeckMutationDocument } from "@generated/graphql";
import { handleApiError } from "@/utilities/handleApiError";
import { useUserStore } from "@/stores/useUserStore";

const formData = reactive({
  name: "",
  description: "",
  visibility: "private",
});

const rules = {
  name: { required },
  visibility: { required },
};

const router = useRouter();
const userStore = useUserStore();

const v$ = useVuelidate(rules, formData, { $autoDirty: true });
const { error, fetching, executeMutation: createDeck } = useMutation(
  CreateDeckMutationDocument
);

const onSubmit = async () => {
  v$.value.$touch();
  if (v$.value.$error) return;

  try {
    await createDeck(formData);
    if (error.value) throw error.value;
    router.push({
      name: "deck",
      params: {
        username: userStore.username,
        deck: formData.name,
      },
    });
  } catch (e) {
    handleApiError(e as CombinedError);
  }
};
</script>
