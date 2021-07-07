<template>
  <div>
    <label>
      <div>
        <span class="text-sm font-medium">
          {{ label }}
        </span>
        <span v-if="isOptional" class="ml-1 text-xs text-gray-500"
          >(optional)</span
        >
      </div>
      <input
        :type="type"
        class="focus:ring-2 w-full text-lg rounded shadow-sm"
        :class="computedClasses"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
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

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { ErrorObject } from "@vuelidate/core";
export default defineComponent({
  name: "InputGroup",
  props: {
    /** An error object from vuelidate, e.g. `v$.name.$errors`. */
    errors: {
      type: Array as PropType<Array<ErrorObject>>,
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
      required: true,
    },
    /** A model value. Don't use this prop directly, use `v-model` instead. */
    modelValue: {
      type: String,
      default: "",
    },
    /** The name of the input for form submission. */
    name: {
      type: String,
      required: true,
    },
    /** The placeholder of the input. */
    placeholder: {
      type: String,
      default: "",
    },
    /** The type of the input. */
    type: {
      type: String,
      default: "text",
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
  },
  emits: ["update:modelValue"],
  setup(props) {
    const computedClasses = computed(() => {
      return {
        "border-gray-300 focus:border-teal-600 focus:ring-teal-600/50": !props.isInvalid,
        "border-red-400 text-red-500 focus:border-red-400 focus:ring-red-400/50":
          props.isInvalid,
        "py-2 text-lg": props.size === "md",
        "py-3 text-xl": props.size === "lg",
      };
    });
    return { computedClasses };
  },
});
</script>

<style></style>
