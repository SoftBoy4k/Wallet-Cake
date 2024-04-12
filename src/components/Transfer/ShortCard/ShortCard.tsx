import { IAccount } from '../../../redux/Slices/accountsSlice'
import './ShortCard.css'

interface Props {
  account: IAccount,
  isSelected: boolean,
  shortCardSelectHandler: (i:number) => void,
}

export const ShortCard = ({account, isSelected, shortCardSelectHandler}: Props) => {

  return (
    <div className={isSelected ? 'short-card short-card--active' :'short-card'} style={{background: `url(${account.background}) no-repeat center`}} onClick={() => {shortCardSelectHandler(account.id)}}>
        <p className='short-card__balance'>$ {account.amount}</p>
        <p className='short-card__info'>{account.name}</p>
    </div>
  )
}