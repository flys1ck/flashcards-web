import { defineStore } from "pinia";

const useUserStore = defineStore("User", {
  state: () => {
    return {
      id: "",
      username: "",
      email: "",
      accessToken: "",
    };
  },
  getters: {
    isSignedIn: (state) => {
      return !!state.accessToken;
    },
  },
});

export { useUserStore };
