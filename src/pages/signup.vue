<template>
  <div class="grid flex-grow grid-cols-3 bg-gray-100">
    <!-- sign up form -->
    <div class="px-12 my-auto">
      <router-link to="/" class="font-medium text-teal-600"
        >&larr; Back to Home</router-link
      >
      <BaseHeading as="h1" size="xl">Create your account</BaseHeading>
      <form class="p-2" @submit.prevent="v$.$touch()">
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
        <BaseButton type="submit" class="w-full mt-6">Register</BaseButton>
      </form>
    </div>
    <!-- image -->
    <div class="max-h-screen col-span-2">
      <img
        :src="heroImage"
        alt="man wearing a book as head"
        class="brightness-75 object-cover h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import BaseInput from "@components/common/BaseInput.vue";
import BaseHeading from "@/components/common/BaseHeading.vue";
import BaseButton from "@/components/common/BaseButton.vue";

import heroImage from "@assets/images/learn.jpg";

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
</script>

<route>
{
  name: "SignUp",
  meta: {
    requiresAuth: false,
    layout: "blank"
  }
}
</route>
