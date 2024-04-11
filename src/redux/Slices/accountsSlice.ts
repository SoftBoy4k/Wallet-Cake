import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IAccount {
    id: number,
    name: string, 
    amount: number, 
    background: string
}

export interface AccountsState {
    accounts: IAccount[]
}

const initialState: AccountsState = {
    accounts: []
}

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addAccounts: (state, action: PayloadAction<{ name: string, amount: number, background: string}>) => {
            const currentAccounts = {
                name: action.payload.name,
                amount: action.payload.amount,
                id: state.accounts.length,
                background: action.payload.background,
            }
            state.accounts.push(currentAccounts);
        },
        
        removeAccounts: (state, action: PayloadAction<number>) => {
            state.accounts = state.accounts.filter((_, i) => i !== action.payload);
        },

        editAccounts: (state, action: PayloadAction<{ name: string, amount: number, id: number, background: string }>) => {
            const currentAccounts = {
                name: action.payload.name,
                amount: action.payload.amount,
                id: action.payload.id,
                background: action.payload.background
            }
            state.accounts = state.accounts.map(el => el.id === currentAccounts.id ? currentAccounts : el);
        },
    }
})

export const {addAccounts, removeAccounts, editAccounts} = accountsSlice.actions
export default accountsSlice.reducer