import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./Slices/accountsSlice"
import popupReducer from './Slices/popupSlice'

export const store = configureStore({
    reducer: {
        accounts: accountsReducer,
        popup: popupReducer
    },
})

export type RootState = ReturnType<typeof store.getState>


