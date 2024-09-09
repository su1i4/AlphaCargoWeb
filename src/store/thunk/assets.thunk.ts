import { createAsyncThunk } from "@reduxjs/toolkit";
import { assetsApi } from "../../api/assets.api";

export const getServicesInformationThunk = createAsyncThunk(
    'getServicesInformationThunk',
    async () => (await assetsApi.getServicesInformation())
)

export const getOfficesInformationThunk = createAsyncThunk(
    'getOfficesInformationThunk',
    async (id?: string) => (await assetsApi.getOffiesInformation(id))
)

export const getLocationCitiesInformationThunk = createAsyncThunk(
    'getLocationCitiesInformationThunk',
    async () => (await assetsApi.getLocationsCitiesInformation())
)

export const getLocationCitiesInformationByIdThunk = createAsyncThunk(
    'getLocationCitiesInformationByIdThunk',
    async (id: number) => (await assetsApi.getLocationsCitiesInformationById(id))
)

export const getLocationsCountriesInformationThunk = createAsyncThunk(
    'getLocationsCountriesInformationThunk',
    async () => (await assetsApi.getLocationsCountiresInformation())
)

export const getBagsInformationThunk = createAsyncThunk(
    'getBagsInformationThunk',
    async () => (await assetsApi.getBagsInformation())
)

export const getParcelTypesInformationThunk = createAsyncThunk(
    'getParcelTypesInformationThunk',
    async () => (await assetsApi.getParcelTypesInformation())
)