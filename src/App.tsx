import './App.css'
import { AvailableRevenue } from './components/AvailableRevenue/AvailableRevenue'
import { Transfer } from './components/FastTransfer/Transfer'
import { Header } from './components/Header/Header'
import { Accounts } from './components/Accounts/Accounts'
import { Statistics } from './components/Statistics/Statistics'
import { Transactions } from './components/Transactions/Transactions'
import { CreateAccount } from './components/CreateAccount/CreateAccount'
import { useState } from 'react'

export interface IAccount {
  name: string,
  amount: number
}


function App() {

  const [isCreateAcount, setIsCreateAccount] = useState(false);
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  return (
    <div className='main'>
      <Header/>
      <div className='content'>
        <Statistics/>
        <AvailableRevenue/>
        <Accounts accounts={accounts} setAccounts={setAccounts} setIsCreateAccount={setIsCreateAccount}/>
        <Transactions/>
        <Transfer/>
      </div>
      {isCreateAcount && <CreateAccount setAccounts={setAccounts} setIsCreateAccount={setIsCreateAccount}/>}
    </div>
  )
}

export default App
