interface ApiErrorLike {
  message?: string;
  data?: {
    message?: string;
    statusMessage?: string;
    code?: string;
  };
  statusMessage?: string;
}

export function getApiErrorMessage(
  error: unknown,
  fallbackMessage: string
): string {
  const candidate = error as ApiErrorLike | null;

  if (candidate?.data?.message) {
    return candidate.data.message;
  }

  if (candidate?.message) {
    return candidate.message;
  }

  if (candidate?.data?.statusMessage) {
    return candidate.data.statusMessage;
  }

  if (candidate?.statusMessage) {
    return candidate.statusMessage;
  }

  return fallbackMessage;
}
