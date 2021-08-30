<template>
  <div>
    <label :for="name">
      <BaseLabel>{{ label }}</BaseLabel>
      <span v-if="isOptional" class="ml-1 text-xs text-gray-500"
        >(optional)</span
      >
      <textarea
        :id="name"
        name="heyo"
        class="focus:ring-2 w-full text-lg rounded shadow-sm"
        :class="inputClasses"
        :value="modelValue"
        @input="onInput"
      ></textarea>
    </label>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { ErrorObject } from "@vuelidate/core";

import BaseLabel from "@components/common/BaseLabel.vue";

const props = defineProps({
  /** An error object from vuelidate, e.g. `v$.name.$errors`. */
  errors: {
    type: Array as PropType<Array<ErrorObject>>,
    default: null,
  },
  icon: {
    type: [String, Function],
    default: null,
  },
  /** An indicator if the input is invalid, e.g. `v$.username.$dirty && v$.username.$invalid`. */
  isInvalid: {
    type: Boolean,
    default: false,
  },
  /** An indicator if the input field is optional. */
  isOptional: {
    type: Boolean,
    default: false,
  },
  /** The label of the input field. */
  label: {
    type: String,
    default: null,
  },
  /** A model value. Don't use this prop directly, use `v-model` instead. */
  modelValue: {
    type: String,
    default: "",
  },
  /**
   * The name of the input for form submission. The name will also be used as id, which the label references.
   * If no label is set, the name will still be used as label for screen readers.
   */
  name: {
    type: String,
    required: true,
  },
  /** The placeholder of the input. */
  placeholder: {
    type: String,
    default: "",
  },
  /**
   * The type of the input.
   * @values text, mail, password, search
   */
  type: {
    type: String,
    default: "text",
    validator: (value: string) =>
      ["text", "email", "password", "search"].includes(value),
  },
  /**
   * Size of the input.
   * @values md, lg
   */
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["md", "lg"].includes(value),
  },
});

const inputClasses = computed(() => {
  return {
    "border-gray-300 focus:border-teal-600 focus:ring-teal-600/50": !props.isInvalid,
    "border-red-400 text-red-500 focus:border-red-400 focus:ring-red-400/50":
      props.isInvalid,
    "py-2 text-lg": props.size === "md",
    "py-3 text-xl": props.size === "lg",
    "pl-8": props.icon !== null,
  };
});

const emit = defineEmits(["update:modelValue"]);
function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>
