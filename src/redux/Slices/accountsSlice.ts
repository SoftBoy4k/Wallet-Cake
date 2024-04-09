import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export interface AccountsState {
    accounts: {name: string, amount: number, id: number}[]
}

const initialState: AccountsState = {
    accounts: []
}

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addAccounts: (state, action: PayloadAction<{ name: string, amount: number}>) => {
            const currentAccounts = {
                name: action.payload.name,
                amount: action.payload.amount,
                id: state.accounts.length
            }
            state.accounts.push(currentAccounts);
        },
        
        removeAccounts: (state, action: PayloadAction<number>) => {
            state.accounts = state.accounts.filter((_, i) => i !== action.payload);
        },

        editAccounts: (state, action: PayloadAction<{ name: string, amount: number, id: number }>) => {
            const currentAccounts = {
                name: action.payload.name,
                amount: action.payload.amount,
                id: action.payload.id,
            }
            state.accounts = state.accounts.map(el => el.id === currentAccounts.id ? currentAccounts : el);
        },
    }
})

export const {addAccounts, removeAccounts, editAccounts} = accountsSlice.actions
export default accountsSlice.reducer