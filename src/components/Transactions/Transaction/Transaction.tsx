import './Transaction.css'
import arrowUpIcon from '../../../icons/arrowUP.png'
import arrowDownIcon from '../../../icons/arrowDOWN.png'
import greenCircleIcon from '../../../icons/green-circle.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

interface Props {
    transactionId: number
}

export const Transaction = ({transactionId}:Props) => {
    
    const transactions = useSelector((state: RootState) => state.transactions.transactions);

    const {comment, date, amount, icon, whatAccount, transferOperations} = transactions[transactionId];

    return (
        <li className='transactions__content__item'>
            <div className='transactions__content__title'>
                <img src={icon} alt="icon"/>
                <p>{comment}</p>
            </div>
            <div className='transactions__content__info'>
                <div>
                    <span style={{"marginRight": "3px"}}>$</span>
                    <p className='transactions__content__amount'>{amount}</p>
                    <img className='transactions__content__info__arrow' src={ transferOperations === 0 ? arrowUpIcon : arrowDownIcon } alt="arrow up" />
                </div>
                <div>
                    <p>{whatAccount}</p>
                </div>
                <div className='transactions__content__complete'>
                    <p>Complete</p>
                    <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
                </div>
                <div className='transactions__content__date'>
                    <p>{date}</p>
                </div>
            </div>
        </li>
    )
}