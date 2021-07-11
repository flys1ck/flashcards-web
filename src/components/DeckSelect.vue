<template>
  <Listbox v-model="selectedPerson" as="div">
    <div class="relative">
      <ListboxButton
        class="flex items-center justify-between w-full px-3 py-3 text-left bg-white border rounded"
      >
        {{ selectedPerson.name }}
        <SelectorIcon class="w-5 h-5 text-teal-600" />
      </ListboxButton>
      <transition
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="absolute w-full mt-2 bg-white border rounded">
          <ListboxOption
            v-for="person in people"
            v-slot="{ selected, active }"
            :key="person.id"
            :value="person"
            :disabled="person.unavailable"
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
              <span class="pl-6" :class="{ 'font-medium': selected }">{{
                person.name
              }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { SelectorIcon, CheckIcon } from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    SelectorIcon,
    CheckIcon,
  },

  setup() {
    const people = [
      { id: 1, name: "Durward Reynolds", unavailable: false },
      { id: 2, name: "Kenton Towne", unavailable: false },
      { id: 3, name: "Therese Wunsch", unavailable: false },
      { id: 5, name: "Katelyn Rohan", unavailable: false },
    ];
    const selectedPerson = ref(people[0]);

    return {
      people,
      selectedPerson,
    };
  },
});
</script>
