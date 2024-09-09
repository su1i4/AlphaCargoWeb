interface NotificationState {
    successMessage: string | null;
    errorMessage: string | null;
  }

export const initialState: NotificationState = {
    successMessage: null,
    errorMessage: null,
  };