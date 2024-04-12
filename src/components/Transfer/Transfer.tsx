import './Transfer.css'
import moreIcon from '../../icons/more.png'
import spotifyIcon from '../../icons/spotify.png'
import calendarIcon from '../../icons/calendar.png'
import { ShortCard } from './ShortCard/ShortCard'
import { ShortNoCard } from './ShortNoCard/ShortNoCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'

export const Transfer = () => {

  const accounts = useSelector((state: RootState) => state.accounts.accounts);
  const [selectedShortCard, setSelectedShortCard] = useState<number>(0);

  const shortCardSelectHandler = (i:number) => {
    setSelectedShortCard(i)
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
          <div className='transfer__div transfer__div-data-categories'>
            <div className='transfer__div-data'>
              <p className='transfer__text'>Data</p>
              <div>
                <input className='transfer__input' type="text"/>
                <img src={calendarIcon} alt="calendar" />
              </div>
            </div>
            <div className='transfer__div-categories'>
              <p className='transfer__text'>Categories</p>
              <div>
                {/* <p>Choice icon</p> */}
                <img src={spotifyIcon} alt="icon" />
              </div>
            </div>
          </div>
          <div className='transfer__div transfer__div-amount'>
            <div>
              <p className='transfer__text'>Amount ($)</p>
              <input className='transfer__input' type="text" />
            </div>
            <button>Send</button>
          </div>
        </div>
    </div>
  )
}