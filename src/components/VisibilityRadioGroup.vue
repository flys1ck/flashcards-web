<template>
  <RadioGroup
    :model-value="modelValue"
    @update:model-value="onUpdateModelValue"
  >
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

const emit = defineEmits(["update:modelValue"]);

defineProps({
  /** A model value. Don't use this prop directly, use `v-model` instead. */
  modelValue: {
    type: String,
    default: "",
  },
});

const visibilities = ref([
  {
    name: "Private",
    value: "private",
  },
  {
    name: "Public",
    value: "public",
  },
]);

function onUpdateModelValue(nextValue: string) {
  emit("update:modelValue", nextValue);
}
</script>
