import { defineStore } from "pinia";
import { createClient, useMutation } from "@urql/vue";
import { useNotificationStore } from "@/stores/useNotificationStore";
import {
  SignupMutationMutation,
  SigninMutationMutation,
  SignoutMutationDocument,
  RefreshAccessTokenDocument,
} from "@/generated/graphql";
import { handleApiError } from "@/utilities/handleApiError";

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
    signup(data: SignupMutationMutation | undefined) {
      this.$patch({
        id: data?.signup?.user?.id,
        username: data?.signup?.user?.username,
        email: data?.signup?.user?.email,
        accessToken: data?.signup?.accessToken,
      });
    },
    signin(data: SigninMutationMutation | undefined) {
      this.$patch({
        id: data?.signin?.user?.id,
        username: data?.signin?.user?.username,
        accessToken: data?.signin?.accessToken,
      });
    },
    async refreshAccessToken() {
      const client = createClient({ url: "http://localhost:3000/graphql" });
      try {
        const { data, error } = await client
          .query(RefreshAccessTokenDocument)
          .toPromise();
        if (error) throw error;
        this.$patch({
          id: data?.refreshAccessToken?.user?.id,
          username: data?.refreshAccessToken?.user?.username,
          email: data?.refreshAccessToken?.user?.email,
          accessToken: data?.refreshAccessToken?.accessToken,
        });
      } catch (e) {
        handleApiError(e);
      }
      return;
    },
    async signout() {
      if (this.isSignedIn) {
        const notificationStore = useNotificationStore();
        const { error, executeMutation: signout } = useMutation(
          SignoutMutationDocument
        );
        try {
          await signout({});
          if (error) throw error;
        } catch (e) {
          handleApiError(e);
        }
        this.$reset();
        notificationStore.pushNotification({
          content: "You have been signed out!",
          type: "info",
        });
      }
    },
  },
});

export { useUserStore };
