import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../system/notifications.system';

const notificationSlice = createSlice({
    name: 'notificationSlice',
    initialState,
    reducers: {
        setSuccessMessage(state, action: PayloadAction<string>) {
            state.successMessage = action.payload;
        },
        clearSuccessMessage(state) {
            state.successMessage = null;
        },
        setErrorMessage(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
        },
        clearErrorMessage(state) {
            state.errorMessage = null;
        },
    },
});

export const { actions } = notificationSlice;

export default notificationSlice.reducer;
