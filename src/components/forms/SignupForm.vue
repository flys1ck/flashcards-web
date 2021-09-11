<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      v-model="formData.username"
      type="text"
      label="Username"
      name="username"
      :errors="v$.username.$errors"
      :is-invalid="v$.username.$dirty && v$.username.$invalid"
    />
    <BaseInput
      v-model="formData.password"
      class="mt-2"
      type="password"
      label="Password"
      name="password"
      :errors="v$.password.$errors"
      :is-invalid="v$.password.$dirty && v$.password.$invalid"
    >
      <template #helpText
        >Your password must include at least 12 characters.</template
      >
    </BaseInput>
    <BaseInput
      v-model="formData.email"
      class="mt-2"
      type="email"
      label="E-Mail"
      name="email"
      :errors="v$.email.$errors"
      :is-invalid="v$.email.$dirty && v$.email.$invalid"
    />
    <BaseButton type="submit" class="w-full mt-6" :is-loading="fetching"
      >Register</BaseButton
    >
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useMutation, CombinedError } from "@urql/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import { SignupMutationDocument } from "@generated/graphql";
import { useUserStore } from "@stores/useUserStore";
import { handleApiError } from "@utilities/handleApiError";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = reactive({
  username: "",
  password: "",
  email: "",
});

const rules = {
  username: { required },
  password: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, formData, { $autoDirty: true });

const userStore = useUserStore();
const { data, error, fetching, executeMutation: signup } = useMutation(
  SignupMutationDocument
);

const onSubmit = async () => {
  v$.value.$touch();
  if (v$.value.$error) return;

  try {
    await signup(formData);
    if (error.value) throw error.value;
    userStore.signup(data.value);
    router.push("/");
  } catch (e) {
    handleApiError(e as CombinedError);
  }
};
</script>
