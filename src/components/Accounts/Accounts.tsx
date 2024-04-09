import './Accounts.css'
import trashIcon from '../../icons/trash.png'
import arrowIcon from '../../icons/arrow.png'
import editIcon from '../../icons/edit.png'
import { Card } from './Card/Card'
import { NoCard } from './NoCard/NoCard'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/Slices/popupSlice'
import { RootState } from '../../redux/store'
import { removeAccounts } from '../../redux/Slices/accountsSlice'


export interface IAccount {
  name: string,
  amount: number
}


export const Accounts = () => {

  const [accountPageNumber, setAccountPageNumber] = useState<number>(1);
  const cards = useSelector((state: RootState) => state.accounts.accounts);
  const dispatch = useDispatch();
  const accounts = useSelector((state: RootState) => state.accounts.accounts);


  const accountPageHandler = (num: number): void => {
    setAccountPageNumber(num);
  }

  const nextHandler = (): void => {
    setAccountPageNumber(accountPageNumber + 1)
  }


  const prevHandler = (): void => {
    setAccountPageNumber(accountPageNumber - 1)
  }

  const removeAccount = (): void => {
    dispatch(removeAccounts(accountPageNumber-1))
  }

  const handleEditClick = (id: number) => {
    dispatch(openPopup(id));
  };

  console.log(cards);

  return (
    <div className="accounts">
        <div className='block__header'>
          <h4>Accounts</h4>
          {accounts[accountPageNumber-1] ? <div className='accounts__icons'>
            <div className='accounts__icon'> 
              <img  src={editIcon} alt="edit" onClick={() => handleEditClick(accountPageNumber - 1)}/>
            </div>
            <div className='accounts__icon' onClick={() => removeAccount()}>
              <img src={trashIcon} alt="remove card"/>
            </div>
          </div> : undefined}
        </div>
        {accounts[accountPageNumber-1] ? <Card accountData={accounts[accountPageNumber - 1]}/> : <NoCard/>}
        {
          accountPageNumber > 1  ? 
          <div className='accounts__arrow accounts__arrow-prev' onClick={prevHandler}>
            <img src={arrowIcon} alt="arrow" />
          </div>
          : undefined
        }
        {
          accountPageNumber < 3 ? 
          <div className='accounts__arrow accounts__arrow-next' onClick={nextHandler}>
            <img src={arrowIcon} alt="arrow" />
          </div>
          : undefined
        }
        
        <div className='accounts__pages'>
          {[1, 2, 3].map(el => {
              return el === accountPageNumber ?
              <div key={el} id={String(el)} onClick={() => accountPageHandler(el)} className='accounts__page accounts__page-active'/> :
              <div key={el} id={String(el)} onClick={() => accountPageHandler(el)} className='accounts__page'/>
            }
          )}
        </div>
    </div>
  )
}