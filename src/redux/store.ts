import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./Slices/accountsSlice"
import popupReducer from './Slices/accountsPopupSlice'
import transactionsReducer from './Slices/transactionsSlice'

export const store = configureStore({
    reducer: {
        accounts: accountsReducer,
        popup: popupReducer,
        transactions: transactionsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>


