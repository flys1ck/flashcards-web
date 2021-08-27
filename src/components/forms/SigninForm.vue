<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      v-model="formData.username"
      type="text"
      label="Username"
      name="username"
    />
    <BaseInput
      v-model="formData.password"
      class="mt-2"
      type="password"
      label="Password"
      name="password"
    >
    </BaseInput>
    <BaseButton type="submit" class="w-full mt-6" :is-loading="fetching"
      >Login</BaseButton
    >
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useMutation } from "@urql/vue";

import { useRouter } from "vue-router";

import BaseInput from "@components/common/BaseInput.vue";
import BaseButton from "@components/common/BaseButton.vue";

import { SigninMutationDocument } from "@/generated/graphql";

import { useUserStore } from "@stores/useUserStore";
import { useNotificationStore } from "@stores/useNotificationStore";

const { pushNotification } = useNotificationStore();

const formData = reactive({
  username: "",
  password: "",
});

const { data, error, fetching, executeMutation: signin } = useMutation(
  SigninMutationDocument
);

const userStore = useUserStore();
const router = useRouter();

const onSubmit = async () => {
  try {
    await signin(formData);
    if (error.value) throw new Error("TODO: Oh no!");
    // TODO
    userStore.$patch({
      id: data.value?.signin?.user?.id,
      username: data.value?.signin?.user?.username,
      accessToken: data.value?.signin?.accessToken,
    });
    // redirect to new page
    router.push("/");
  } catch (e) {
    pushNotification({ content: error.value?.message, type: "error" });
  }
};
</script>
