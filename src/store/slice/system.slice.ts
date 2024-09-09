import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { systemInitialState } from '../system/system.system'
import { getUserInformationThunk } from '../thunk/system.thunk'
import { IUserInfo } from '../../types/assets.types'

const systemSlice = createSlice({
    name: 'systemSlice',
    initialState: systemInitialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getUserInformationThunk.fulfilled,
            (state, action: PayloadAction<IUserInfo>) => {
                if (action.payload) {
                    return {
                        ...state,
                        user: action.payload
                    }
                }
            }
        )
    }
})

const { actions, reducer } = systemSlice

export { reducer as SystemReducer, actions }