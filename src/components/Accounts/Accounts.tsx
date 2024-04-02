import './Accounts.css'
import addMoneyIcon from '../../icons/add-dollar.png'
import arrowIcon from '../../icons/arrow.png'
import editIcon from '../../icons/edit.png'
import { Card } from './Card/Card'

export const Accounts = () => {
  return (
    <div className="accounts">
        <div className='block__header'>
          <h4>Accounts</h4>
          <div className='accounts__icons'>
            <div className='accounts__icon'> 
              <img  src={editIcon} alt="edit" />
            </div>
            <div className='accounts__icon'>
              <img src={addMoneyIcon} alt="add card" />
            </div>
            
          </div>
        </div>
        <Card/>
        <div className='accounts__arrow-next'>
          <img src={arrowIcon} alt="arrow" />
        </div>
        <div className='accounts__pages'>
          <div className='accounts__page accounts__page-active'/>
          <div className='accounts__page'/>
          <div className='accounts__page'/>
        </div>
    </div>
  )
}