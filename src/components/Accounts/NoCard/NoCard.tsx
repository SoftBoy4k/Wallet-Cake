import './NoCard.css'
import plusIcon from '../../../icons/plus.png'
import { useDispatch } from 'react-redux'
import { openPopup } from '../../../redux/Slices/accountsPopupSlice';


export const NoCard = () => {

  const dispatch = useDispatch();

  const clickHandler = ():void => {
    dispatch(openPopup(null));
  }

  return (
    <div className='nocard'>
        <img src={plusIcon} alt="plus" onClick={() => clickHandler()}/>
    </div>
  )
}