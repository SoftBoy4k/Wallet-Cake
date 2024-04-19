import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ITransaction {
    id: number,
    comment: string,
    date: string, 
    amount: number,
    icon: string,
    whatAccount: string,
    transferOperations: 0 | 1
}

export interface TransactionsState {
    transactions: ITransaction[]
}

const initialState: TransactionsState = {
    transactions: []
}

export const transactionsSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<{ comment: string, date: string, amount: number, icon: string, whatAccount: string, transferOperations: 0 | 1}>) => {
            const currentTransactions = {
                id: state.transactions.length,
                comment: action.payload.comment,
                date: action.payload.date, 
                amount: action.payload.amount,
                icon: action.payload.icon,
                whatAccount: action.payload.whatAccount,
                transferOperations: action.payload.transferOperations
            }
            state.transactions.push(currentTransactions);
        },
        
        removeTransaction: (state, action: PayloadAction<number>) => {
            state.transactions = state.transactions.filter((_, i) => i !== action.payload);
        },

        editTransaction: (state, action: PayloadAction<ITransaction>) => {
            const currentTransactions = {
                id: action.payload.id,
                comment: action.payload.comment,
                date: action.payload.date, 
                amount: action.payload.amount,
                icon: action.payload.icon,
                whatAccount: action.payload.whatAccount,
                transferOperations: action.payload.transferOperations
            }
            state.transactions = state.transactions.map(el => el.id === currentTransactions.id ? currentTransactions : el);
        },
    }
})

export const {addTransaction, removeTransaction, editTransaction} = transactionsSlice.actions
export default transactionsSlice.reducer