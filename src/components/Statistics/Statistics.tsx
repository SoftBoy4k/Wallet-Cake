import './Statistics.css'
import calendarIcon from '../../icons/calendar.png'
import dropDownIcon from '../../icons/dropDown.png'

export const Statistics = () => {
  return (
    <div className="statistics">
        <div className='block__header'>
          <h4>Statistics</h4>
          <div className='statistics__header-options'>
            <p>Spend <img className='statistics__drop-down__icon' src={dropDownIcon} alt="arrow down"/></p>
            <img src={calendarIcon} alt="more" />
          </div>
        </div>
        <div className='statistics__content'>
          {['Jun', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(el => {
            return (
              <div className='statistics__wrapper'>
                <div className='statistics__inner'>
                  <div style={{height: Math.random()*50 + 50}} />
                </div>
                <p className='statistics__text'>
                  {el}
                </p>
              </div>)
          })}
        </div>
    </div>
  )
}