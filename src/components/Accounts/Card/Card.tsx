import { IAccount } from '../../../App'
import './Card.css'

interface Props {
    accountData: IAccount,
}

export const Card = ({accountData}: Props) => {
  return (
    <div className='card'>
        <div className='card__header'>
            <div>
                <p className='card__name-attribute'>Total balance</p>
                <p className='card__header__balance'>$ {accountData.amount}</p>
            </div>
        </div>
        <div className='card__info'>
            <div>
                <p className='card__name-attribute'>Name</p>
                <p>{accountData.name}</p>
            </div>
        </div>
    </div>
  )
}