import './Transactions.css'
import dropDownArrow from '../../icons/dropDown.png'
import { Transaction } from './Transaction/Transaction'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Transactions = () => {

  const transactions = useSelector((state: RootState) => state.transactions.transactions);

  return (
    <div className='transactions'>
        <div className='block__header'>
          <h4>Transactions</h4>
          <div className='transactions__header__btns'>
            <div className='transactions__header__btn transactions__header__btn-1'>
              <p>All transactions</p>
              <img src={dropDownArrow} alt="dropDownArrow" />
            </div>
            <div className='transactions__header__btn transactions__header__btn-2'>
              <p>Last month</p>
              <img src={dropDownArrow} alt="dropDownArrow" />
            </div>
          </div>
        </div>
        <ul className='transactions__content'>
          {transactions.map((_,i) => <Transaction transactionId={i} key={i}/>)}
        </ul>
    </div>
  )
}