import './NoCard.css'
import plusIcon from '../../../icons/plus.png'

interface Props {
    setIsCreateAccount: (flag: boolean) => void,
}

export const NoCard = ({setIsCreateAccount}: Props) => {
  return (
    <div className='nocard'>
        <img src={plusIcon} alt="plus" onClick={() => setIsCreateAccount(true)}/>
    </div>
  )
}