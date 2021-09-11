import { defineStore } from "pinia";
import { CombinedError } from "@urql/vue";
import {
  SigninMutation,
  RefreshAccessTokenDocument,
  SignupMutation,
} from "@/generated/graphql";
import { handleApiError } from "@/utilities/handleApiError";
import { client } from "@modules/urql";

const useUserStore = defineStore("user", {
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
  actions: {
    signup(data: SignupMutation | undefined) {
      this.$patch({
        id: data?.signup?.user?.id,
        username: data?.signup?.user?.username,
        email: data?.signup?.user?.email,
        accessToken: data?.signup?.accessToken,
      });
    },
    signin(data: SigninMutation | undefined) {
      this.$patch({
        id: data?.signin?.user?.id,
        username: data?.signin?.user?.username,
        accessToken: data?.signin?.accessToken,
      });
    },
    async refreshAccessToken() {
      try {
        const { data, error } = await client
          .mutation(RefreshAccessTokenDocument)
          .toPromise();
        if (error) throw error;
        this.$patch({
          id: data?.refreshAccessToken?.user?.id,
          username: data?.refreshAccessToken?.user?.username,
          email: data?.refreshAccessToken?.user?.email,
          accessToken: data?.refreshAccessToken?.accessToken,
        });
      } catch (e) {
        handleApiError(e as CombinedError);
      }
      return;
    },
    signout() {
      this.$reset();
    },
  },
});

export { useUserStore };
