import { defineStore } from "pinia";

const useActiveDeckStore = defineStore("activeDeck", {
  state: () => {
    return {
      id: "",
    };
  },
  getters: {},
  actions: {
    updateActiveDeckId(deckId: string | undefined) {
      this.$patch({
        id: deckId,
      });
    },
  },
});

export { useActiveDeckStore };
