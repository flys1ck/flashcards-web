import {
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
  makeOperation,
  ClientOptions,
  CombinedError,
  Client,
} from "@urql/vue";
import { cacheExchange } from "@urql/exchange-graphcache";
import { authExchange, AuthConfig } from "@urql/exchange-auth";

import { useUserStore } from "@stores/useUserStore";

interface AuthState {
  accessToken: string;
}

const AUTH_EXCHANGE_CONFIG: AuthConfig<AuthState> = {
  getAuth: async () => {
    return null;
  },
  addAuthToOperation: ({ operation }) => {
    const userStore = useUserStore();
    if (!userStore.accessToken) return operation;

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
          Authorization: `Bearer ${userStore.accessToken}`,
        },
      },
    });
  },
  didAuthError: ({ error }) => {
    // when an forbidden error is detected getAuth() is called again
    return error.graphQLErrors.some((e) => e.extensions?.code === "FORBIDDEN");
  },
};

const ERROR_EXCHANGE_CONFIG = {
  onError: (error: CombinedError) => {
    const isAuthError = error.graphQLErrors.some(
      (e) => e.extensions?.code === "FORBIDDEN"
    );

    if (isAuthError) {
      console.log("We should probably log you out lol");
    }
  },
};

const URQL_OPTIONS: ClientOptions = {
  url: "http://localhost:3000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange({}),
    errorExchange(ERROR_EXCHANGE_CONFIG),
    authExchange<AuthState>(AUTH_EXCHANGE_CONFIG),
    fetchExchange,
  ],
};

const client: Client = createClient(URQL_OPTIONS);

export { client, URQL_OPTIONS };
