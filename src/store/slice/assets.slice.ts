import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBags, ICities, ICountries, IOffices, IParcelTypes, IServices } from '../../types/assets.types'
import { assetsInitialState } from '../system/assets.system'
import { getLocationCitiesInformationThunk, getLocationsCountriesInformationThunk, getOfficesInformationThunk, getServicesInformationThunk, getLocationCitiesInformationByIdThunk, getBagsInformationThunk, getParcelTypesInformationThunk } from '../thunk/assets.thunk'

const assetsSlice = createSlice({
    name: 'assetsSlice',
    initialState: assetsInitialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getServicesInformationThunk.fulfilled,
            (state, action: PayloadAction<IServices[]>) => {
                if (action.payload) {
                    return {
                        ...state,
                        serivce: action.payload
                    }
                }
            }
        ).addCase(
            getOfficesInformationThunk.fulfilled,
            (state, action: PayloadAction<IOffices[]>) => {
                if (action.payload) {
                    return {
                        ...state,
                        offices: action.payload
                    }
                }
            }
        ).addCase(
            getLocationCitiesInformationThunk.fulfilled,
            (state, action: PayloadAction<ICities[]>) => {
                if (action.payload) {
                    return {
                        ...state,
                        cities: action.payload
                    }
                }
            }
        ).addCase(
            getLocationCitiesInformationByIdThunk.fulfilled,
            (state, action: PayloadAction<ICities>) => {
                if (action.payload) {
                    return {
                        ...state,
                        citiesbyid: action.payload
                    }
                }
            }
        ).addCase(
            getLocationsCountriesInformationThunk.fulfilled,
            (state, action: PayloadAction<ICountries[]>) => {
                if (action.payload) {
                    return {
                        ...state,
                        countries: action.payload
                    }
                }
            }
        ).addCase(
            getBagsInformationThunk.fulfilled,
            (state, action: PayloadAction<IBags[]>) => {
                if (action.payload) {
                    return {
                        ...state,
                        bags: action.payload
                    }
                }
            }
        ).addCase(
            getParcelTypesInformationThunk.fulfilled,
            (state, action: PayloadAction<IParcelTypes[]>) => {
                if (action.payload) {
                    return {
                        ...state,
                        parceltype: action.payload
                    }
                }
            }
        )
    }
})

const { actions, reducer } = assetsSlice

export { reducer as AssetsReducer, actions }