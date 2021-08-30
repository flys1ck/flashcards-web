import urql, {
  dedupExchange,
  cacheExchange,
  fetchExchange,
  makeOperation,
} from "@urql/vue";
import { authExchange, AuthConfig } from "@urql/exchange-auth";

import { useUserStore } from "@/stores/useUserStore";

interface AuthState {
  accessToken: string;
}

export const AUTH_EXCHANGE_CONFIG: AuthConfig<AuthState> = {
  getAuth: async ({ authState }) => {
    if (!authState) {
      const userStore = useUserStore();
      await userStore.refreshAccessToken();
      console.log("getAuth:", userStore.$state);
      const accessToken = userStore.accessToken;
      if (accessToken) return { accessToken };
    }
    return null;
  },
  addAuthToOperation: ({ authState, operation }) => {
    if (!authState || !authState.accessToken) return operation;

    const fetchOptions =
      typeof operation.context.fetchOptions === "function"
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${authState.accessToken}`,
        },
      },
    });
  },
  didAuthError: ({ error }) => {
    // TODO
    return error.graphQLErrors.some((e) => e.extensions?.code === "FORBIDDEN");
  },
};

const URQL_OPTIONS = {
  url: "http://localhost:3000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange<AuthState>(AUTH_EXCHANGE_CONFIG),
    fetchExchange,
  ],
};

export { urql as default, URQL_OPTIONS };
