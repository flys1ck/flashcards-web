import { defineStore } from "pinia";

const useUserStore = defineStore("User", {
  state: () => {
    return {
      id: "",
      username: "",
      email: "",
    };
  },
  getters: {
    isSignedIn: (state) => {
      return !!state.username;
    },
  },
});

export { useUserStore };
