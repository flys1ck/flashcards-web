import { useNotificationStore } from "@stores/useNotificationStore";
import { CombinedError } from "@urql/vue";

function handleApiError(error: CombinedError): void {
  const { pushNotification } = useNotificationStore();
  if (error.networkError) {
    pushNotification({ type: "error", content: "Network Error" });
  } else if (error.message) {
    pushNotification({ type: "error", content: error.message });
  } else {
    pushNotification({ type: "error", content: "Ooops! Something went wrong" });
    console.log(error);
  }

  return;
}

export { handleApiError };
