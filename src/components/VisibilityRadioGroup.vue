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
          class="px-4 py-2 border-2 rounded"
          :class="{ 'bg-teal-50 border-teal-500': checked }"
        >
          <span class="font-medium">{{ visibility.name }}</span>
          <p class="text-gray-500">{{ visibility.description }}</p>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

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
    description: "Only you and collaborators can access this project.",
  },
  {
    name: "Public",
    value: "public",
    description: "This project is available to everyone.",
  },
]);

function onUpdateModelValue(nextValue: string) {
  emit("update:modelValue", nextValue);
}
</script>
