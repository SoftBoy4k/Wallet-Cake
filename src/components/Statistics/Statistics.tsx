import './Statistics.css'
import calendarIcon from '../../icons/calendar.png'
import dropDownIcon from '../../icons/dropDown.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export const Statistics = () => {

  const transactions = useSelector((state: RootState) => state.transactions.transactions);

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
          {['Jun', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((el, i) => {
            let monthlyIncome = 0;
            let monthlyExpenses = 0;
            let value = 0;
            transactions.forEach(el => {
              const month = Number(el.date.split('.')[1]) - 1
              if (month === i) {
                el.transferOperations === 0 ? monthlyExpenses += el.amount : monthlyIncome += el.amount
              }
            })

            if (monthlyIncome && monthlyExpenses) {
              value = 140 * (monthlyExpenses/monthlyIncome);
              value = value > 140 ? 140 : value;
            } else if (monthlyIncome && !monthlyExpenses){
              value = 0;
            } else if (!monthlyIncome && monthlyExpenses){
              value = 140;
            } else {
              value = 0;
            }

            return (
              <div className='statistics__wrapper'>
                <div className='statistics__inner'>
                  <div style={value === 140 ? {height: value, borderRadius: "5px"} : {height: value}} />
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