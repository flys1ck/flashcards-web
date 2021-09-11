<template>
  <div>
    <label :for="name">
      <div :class="labelClasses">
        <BaseLabel>
          {{ label }}
        </BaseLabel>
        <span v-if="isOptional" class="ml-1 text-xs text-gray-500"
          >(optional)</span
        >
      </div>
      <div :class="inputWrapperClasses">
        <div
          v-if="icon"
          class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
        >
          <Component :is="icon" class="w-5 h-5 text-gray-400" />
        </div>
        <input
          :id="name"
          :type="type"
          class="focus:ring-2 w-full text-lg rounded shadow-sm"
          :class="inputClasses"
          :value="modelValue"
          @input="onInput"
        />
      </div>
    </label>

    <!-- Help Text -->
    <small v-if="$slots.helpText" class="block text-xs text-gray-500">
      <!-- @slot A help text, which gets rendered below the input. -->
      <slot name="helpText" />
    </small>
    <!-- Input Errors -->
    <ul v-if="errors">
      <li
        v-for="error of errors"
        :key="error.$uid"
        class="block text-xs text-red-500"
      >
        {{ error.$message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref } from "vue";
import { ErrorObject } from "@vuelidate/core";

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

const emit = defineEmits(["update:modelValue"]);

const labelClasses = computed(() => {
  return {
    "sr-only": !props.label,
  };
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
const inputWrapperClasses = computed(() => {
  return {
    relative: props.icon !== null,
  };
});

const label = ref(props.label ? props.label : props.name);

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<style></style>
