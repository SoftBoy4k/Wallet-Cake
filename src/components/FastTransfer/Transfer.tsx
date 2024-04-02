import './Transfer.css'
import moreIcon from '../../icons/more.png'
import arrowIcon from '../../icons/arrow.png'
import spotifyIcon from '../../icons/spotify.png'
import calendarIcon from '../../icons/calendar.png'
import { ShortCard } from './ShortCard/ShortCard'

export const Transfer = () => {
  return (
    <div className="transfer">
        <div className='transfer__arrow-next'>
          <img src={arrowIcon} alt="arrow" />
        </div>
        <div className='block__header'>
          <h4>Transfer</h4>
          <img className='transfer__icon' src={moreIcon} alt="more" />
        </div>
        <div className='transfer__cards'>
          <ShortCard/>
          <ShortCard/>
        </div>
        <div className='transfer__pages'>
          <div className='transfer__page transfer__page-active'/>
          <div className='transfer__page'/>
          <div className='transfer__page'/>
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