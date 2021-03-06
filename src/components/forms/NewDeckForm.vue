<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      v-model="formData.name"
      type="text"
      label="Name"
      name="username"
      :errors="v$.name.$errors"
      :is-invalid="v$.name.$dirty && v$.name.$invalid"
    >
      <template v-if="generatedSlug" #helpText>
        Your deck will be available under
        <span class="font-mono">
          {{ userStore.username }}/{{ generatedSlug }} </span
        >.
      </template>
    </BaseInput>
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
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import { CombinedError, useMutation } from "@urql/vue";

import VisibilityRadioGroup from "@components/VisibilityRadioGroup.vue";

import { CreateDeckDocument } from "@generated/graphql";
import { handleApiError } from "@utilities/handleApiError";
import { useUserStore } from "@stores/useUserStore";

const formData = reactive({
  name: "",
  description: "",
  visibility: "private",
});

const generatedSlug = computed(() => {
  // NOTE: needs to be in sync with the backend slug generation
  return formData.name.toLowerCase().replace(/[^A-Za-z-]+/g, "-");
});

const rules = {
  name: { required, maxLength: maxLength(72) },
  visibility: { required },
};

const router = useRouter();
const userStore = useUserStore();

const v$ = useVuelidate(rules, formData, { $autoDirty: true });
const { error, fetching, executeMutation: createDeck } = useMutation(
  CreateDeckDocument
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
