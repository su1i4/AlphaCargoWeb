import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SystemReducer } from "./slice/system.slice";
import { AssetsReducer } from "./slice/assets.slice";
import NotificationReducer from './slice/notifications.slice'

const combineReducer = combineReducers({
    system: SystemReducer,
    assets: AssetsReducer,
    notifications: NotificationReducer
})

export const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

const { getState, dispatch } = store

export type RooteState = ReturnType<typeof getState>
export type AppDispatch = typeof dispatch