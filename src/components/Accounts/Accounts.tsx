import './Accounts.css'
import trashIcon from '../../icons/trash.png'
import arrowIcon from '../../icons/arrow.png'
import editIcon from '../../icons/edit.png'
import { Card } from './Card/Card'
import { IAccount } from '../../App'
import { NoCard } from './NoCard/NoCard'
import { useState } from 'react'

interface Props {
  accounts: IAccount[],
  setAccounts: (accounts: IAccount[]) => void,
  setIsCreateAccount: (flag: boolean) => void,
}


export const Accounts = ({accounts, setAccounts, setIsCreateAccount}: Props) => {

  const [accountPageNumber, setAccountPageNumber] = useState<number>(1);


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
    setAccounts((prev: IAccount[]): IAccount[] => prev.filter((_, i) => i !== accountPageNumber - 1))
  }

  return (
    <div className="accounts">
        <div className='block__header'>
          <h4>Accounts</h4>
          {accounts[accountPageNumber-1] ? <div className='accounts__icons'>
            <div className='accounts__icon'> 
              <img  src={editIcon} alt="edit" />
            </div>
            <div className='accounts__icon' onClick={() => removeAccount()}>
              <img src={trashIcon} alt="remove card"/>
            </div>
          </div> : undefined}
        </div>
        {accounts[accountPageNumber-1] ? <Card accountData={accounts[accountPageNumber - 1]}/> : <NoCard setIsCreateAccount={setIsCreateAccount}/>}
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