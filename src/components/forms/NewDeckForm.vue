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
    <VisibilityRadioGroup />
    <BaseButton type="submit" class="w-full mt-6">Create deck</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

// import { useRouter } from "vue-router";

import BaseInput from "@components/common/BaseInput.vue";
import BaseButton from "@components/common/BaseButton.vue";
import BaseTextarea from "@components/common/BaseTextarea.vue";
import VisibilityRadioGroup from "@components/VisibilityRadioGroup.vue";

// import { useUserStore } from "@/stores/user";

const formData = reactive({
  name: "",
  description: "",
});

// const userStore = useUserStore();
// const router = useRouter();

const onSubmit = async () => {
  return;
};
</script>
