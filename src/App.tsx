import './App.css'
import { AvailableRevenue } from './components/AvailableRevenue/AvailableRevenue'
import { Transfer } from './components/FastTransfer/Transfer'
import { Header } from './components/Header/Header'
import { Accounts } from './components/Accounts/Accounts'
import { Statistics } from './components/Statistics/Statistics'
import { Transactions } from './components/Transactions/Transactions'

function App() {

  return (
    <div className='main'>
      <Header/>
      <div className='content'>
        <Statistics/>
        <AvailableRevenue/>
        <Accounts/>
        <Transactions/>
        <Transfer/>
      </div>
    </div>
  )
}

export default App
