import { Statistics } from '../../components/Statistics/Statistics'
import { AvailableRevenue } from '../../components/AvailableRevenue/AvailableRevenue'
import { Accounts } from '../../components/Accounts/Accounts'
import { Transactions } from '../../components/Transactions/Transactions'
import { Transfer } from '../../components/Transfer/Transfer'
import { CardPopup } from '../../components/CreatePopup/CardPopup'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
        <div className='content'>
            <Statistics/>
            <AvailableRevenue/>
            <Accounts/>
            <Transactions/>
            <Transfer/>
        </div>
        <CardPopup/>
    </>
  )
}

export default HomePage