import { createAsyncThunk } from "@reduxjs/toolkit";
import { assetsApi } from "../../api/assets.api";

export const getUserInformationThunk = createAsyncThunk(
    'getUserInformationThunk',
    async () => (await assetsApi.getUserInformation())
)