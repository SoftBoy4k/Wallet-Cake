import './Transfer.css'
import moreIcon from '../../icons/more.png'
import { ShortCard } from './ShortCard/ShortCard'
import { ShortNoCard } from './ShortNoCard/ShortNoCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'
import { SelectionIcons } from './SelectionIcons/SelectionIcons'

export const Transfer = () => {

  const accounts = useSelector((state: RootState) => state.accounts.accounts);
  const [selectedShortCard, setSelectedShortCard] = useState<number>(0);
  const [isSelectedIcon, setIsSelectedIcon] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>();

  const shortCardSelectHandler = (i:number) => {
    setSelectedShortCard(i)
  }

  const selectionIconsHandler = () => {
    setIsSelectedIcon(!isSelectedIcon);
  }
 
  return (
    <div className="transfer">
        <div className='block__header'>
          <h4>Transfer</h4>
          <img className='transfer__icon' src={moreIcon} alt="more" />
        </div>
        <div className='transfer__cards'>
          {[0, 1, 2].map(i => accounts[i] ? <ShortCard account={accounts[i]} key={i} isSelected={selectedShortCard === i} shortCardSelectHandler={shortCardSelectHandler}/> : <ShortNoCard key={i}/>)}
        </div>
        <div className='transfer__form'>
          <div className='transfer__div transfer__div-comment'>
            <p className='transfer__text'>Comment</p>
            <input className='transfer__input' type="text"/>
          </div>
          <div className='transfer__div transfer__div-date-icon'>
            <div className='transfer__div-date'>
              <p className='transfer__text'>Date</p>
              <input className='transfer__input' type="date"/>
            </div>
            <div className='transfer__div-icon'>
              <p className='transfer__text'>Icon</p>
              <div onClick={() => selectionIconsHandler()}>
                {!isSelectedIcon && !selectedIcon ? <p>Choice icon</p> : !isSelectedIcon && selectedIcon ? <img src={selectedIcon} alt="icon" style={{width: "35px"}}/> : <SelectionIcons setSelectedIcon={setSelectedIcon}/>}
              </div>
            </div>
          </div>
          <div className='transfer__div transfer__div-amount'>
            <div>
              <p className='transfer__text'>Amount ($)</p>
              <div>
                <input className='transfer__input' type="text" />
              </div>
            </div>
            <button>Send</button>
          </div>
        </div>
    </div>
  )
}