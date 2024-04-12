import './ShortNoCard.css'
import plusIcon from '../../../icons/plus.png'
import { useDispatch } from 'react-redux';
import { openPopup } from '../../../redux/Slices/popupSlice';

export const ShortNoCard = () => {

    const dispatch = useDispatch();

    const clickHandler = ():void => {
        dispatch(openPopup(null));
    }
    
    return (
        <div className='short-no-card'>
            <img src={plusIcon} alt="plus" onClick={() => clickHandler()}/>
        </div>
    )
}