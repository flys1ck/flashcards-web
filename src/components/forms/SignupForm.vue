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
  <BaseNotification v-for="(err, index) in error?.graphQLErrors" :key="index">{{
    err
  }}</BaseNotification>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useMutation } from "@urql/vue";

import router from "@modules/router";

import BaseInput from "@components/common/BaseInput.vue";
import BaseButton from "@components/common/BaseButton.vue";
import BaseNotification from "@components/common/BaseNotification.vue";

import { SignupMutationDocument } from "@/generated/graphql";

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

const { data, error, fetching, executeMutation: signup } = useMutation(
  SignupMutationDocument
);
const onSubmit = async () => {
  v$.value.$touch();
  if (v$.value.$error) return;
  try {
    await signup(formData);
    if (error.value) throw new Error("TODO: Oh no!");
    // TODO
    console.log(data.value);
    // redirect to new page
    router.push("/");
  } catch (e) {
    // TODO
    console.log(e);
  }
};
</script>
