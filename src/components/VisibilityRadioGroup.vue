<template>
  <RadioGroup v-model="plan">
    <RadioGroupLabel><BaseLabel>Visibility</BaseLabel></RadioGroupLabel>
    <div class="space-y-2">
      <RadioGroupOption
        v-for="(visibility, index) in visibilities"
        :key="index"
        v-slot="{ checked }"
        :value="visibility.value"
      >
        <div
          class="p-4 border-2 rounded"
          :class="checked ? 'bg-teal-50 border-teal-500' : ''"
        >
          {{ visibility.name }}
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

import BaseLabel from "@components/common/BaseLabel.vue";

const plan = ref("public");
const visibilities = ref([
  {
    name: "Public",
    value: "public",
  },
  {
    name: "Private",
    value: "private",
  },
]);
</script>
