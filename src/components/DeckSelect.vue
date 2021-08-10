<template>
  <Listbox v-model="selectedPerson" as="div">
    <div class="relative">
      <ListboxButton
        class="flex items-center justify-between w-full px-3 py-3 text-left bg-white border rounded"
      >
        <span class="overflow-ellipsis w-full overflow-hidden">{{
          selectedPerson.name
        }}</span>
        <SelectorIcon class="w-5 h-5 text-teal-600" />
      </ListboxButton>
      <transition
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 w-full mt-2 overflow-x-hidden bg-white border rounded shadow"
        >
          <ListboxOption
            v-for="person in people"
            v-slot="{ selected, active }"
            :key="person.id"
            :value="person"
            as="template"
          >
            <li
              class="hover:bg-gray-200 relative flex items-center px-3 py-3"
              :class="{ 'bg-gray-200': active }"
            >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-2"
              >
                <CheckIcon class="w-5 h-5 text-teal-600"></CheckIcon>
              </span>
              <span
                class="overflow-ellipsis pl-6 overflow-hidden"
                :class="{ 'font-medium': selected }"
                >{{ person.name }}</span
              >
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { SelectorIcon, CheckIcon } from "@heroicons/vue/solid";

const people = [
  { id: 1, name: "Training für Programmierwettbewerbe" },
  { id: 2, name: "Analysis" },
];
const selectedPerson = ref(people[0]);
</script>
