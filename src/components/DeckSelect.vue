<template>
  <Listbox v-model="selectedPerson">
    <ListboxButton
      class="focus-visible:ring-offset-orange-300 focus-visible:border-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default"
    >
      {{ selectedPerson.name }}
    </ListboxButton>
    <ListboxOptions>
      <ListboxOption
        v-for="person in people"
        :key="person.id"
        :value="person"
        :disabled="person.unavailable"
      >
        {{ person.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  components: { Listbox, ListboxButton, ListboxOptions, ListboxOption },

  setup() {
    const people = [
      { id: 1, name: "Durward Reynolds", unavailable: false },
      { id: 2, name: "Kenton Towne", unavailable: false },
      { id: 3, name: "Therese Wunsch", unavailable: false },
      { id: 4, name: "Benedict Kessler", unavailable: true },
      { id: 5, name: "Katelyn Rohan", unavailable: false },
    ];
    const selectedPerson = ref(people[0]);

    return {
      people,
      selectedPerson,
    };
  },
};
</script>
