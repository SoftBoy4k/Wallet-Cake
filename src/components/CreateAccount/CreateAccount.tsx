import { useState } from 'react'
import { IAccount } from '../../App'
import './CreateAccount.css'

interface Props {
  setAccounts: (account: IAccount[] ) => void,
  setIsCreateAccount: (flag:boolean) => void,
}


export const CreateAccount = ({setAccounts, setIsCreateAccount}: Props) => {

  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>):void => {
    if((e.target as HTMLDivElement).className === 'create-account__wrapper'){
      setIsCreateAccount(false);
    }
  }

  const btnClickHandler = (): void => {
    setAccounts((prev: IAccount[]): IAccount[] => {
      return [...prev, { name: name, amount: amount }];
    });
    setIsCreateAccount(false);
  }
 
  return (
    <div className="create-account__wrapper" onClick={(e) => clickHandler(e)}>
      <div className="create-account">
        <div className="create-account__money">
            <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
            <p>BYN</p>
        </div>
        <input className="create-account__name" type="text" placeholder="Account name" value={name} onChange={(e) => setName(e.target.value)}/>
        <button className="create-account__btn" onClick={() => btnClickHandler()}>Create</button>
      </div>
    </div>
  )
}