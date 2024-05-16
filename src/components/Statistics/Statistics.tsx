import './Statistics.css'
import calendarIcon from '../../icons/calendar.png'
import dropDownIcon from '../../icons/dropDown.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'

const allOperations: string[] = ['Spend', 'Earn'];

export const Statistics = () => {

  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [isYearSelectionActived, setIsYearSelectionActived] = useState(false);
  const [isOperationsSelectionActived, setIsOperationsSelectionActived] = useState(false);
  const [currentOperation, setCurrentOperation] = useState<string>(allOperations[0]);

  const currentYear = new Date().getFullYear();
  const years: number[] = [];

  for (let year = currentYear - 3; year <= currentYear; year++) {
    years.push(year);
  }

  const yearChangeHandler = (el: HTMLElement): void => {

    if (el.localName === 'li') {
      setSelectedYear(Number(el.innerText))
      setIsYearSelectionActived(false);
    }
  }

  return (
    <div className="statistics">
        <div className='block__header'>
          <h4>Statistics</h4>
          <div className='statistics__header-options'>
            <p 
              className={isOperationsSelectionActived ? 'statistics__operations statistics__operations-active' : 'statistics__operations'}
              onClick={() => {setIsOperationsSelectionActived(!isOperationsSelectionActived)}}
            >
              {currentOperation} 
              <img 
                className='statistics__drop-down__icon' 
                src={dropDownIcon} 
                alt="arrow down"
              />
            </p>
            <div 
              className='statistics__operations-selection'
              style={!isOperationsSelectionActived ? {display: 'none'} : undefined}
            >
              {allOperations.map((el, i) => {
                if ( el !== currentOperation ) {
                  return (
                    <p 
                      key={i}
                      onClick={(e: React.MouseEvent<HTMLElement>) => {
                        const target = e.target as HTMLElement;
                        const currentOp: string = target.innerText;

                        if (allOperations.includes(currentOp)) {
                          setCurrentOperation(currentOp);
                          setIsOperationsSelectionActived(false);
                        }
                      }}
                    >{el}</p>
                  )
                }
              })}
            </div>
            <img 
              className={isYearSelectionActived ? "statistics__calendar statistics__calendar-active" : 'statistics__calendar' }
              src={calendarIcon} 
              alt="year selection" 
              onClick={() => setIsYearSelectionActived(!isYearSelectionActived)}
            />
            <div 
              className='statistics__year-selection' 
              style={!isYearSelectionActived ? {display: 'none'}: undefined}
              onClick={(e: React.MouseEvent<HTMLElement>) => yearChangeHandler(e.target as HTMLElement)}
            >
              <ul>
                {years.map(year => {
                  return (
                    <li 
                      key={year} 
                      className={selectedYear === year ? 
                        'statistics__year--active' : 
                        'statistics__year'}
                    >
                      {year}
                    </li>)
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='statistics__content'>
          {['Jun', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((el, i) => {
            let monthlyIncome = 0;
            let monthlyExpenses = 0;
            let value = 0;

            transactions.forEach(el => {
              const dateInArray: string[] = el.date.split('.')
              const month = Number(dateInArray[1]) - 1;
              const year = Number(dateInArray[2]);

              if (month === i && year === selectedYear) {
                el.transferOperations === 0 ? monthlyExpenses += el.amount : monthlyIncome += el.amount
              }
            })

            let arg1;
            let arg2;

            switch(currentOperation){
              case 'Spend':
                arg1 = monthlyIncome;
                arg2 = monthlyExpenses;
                break;
              case 'Earn':
                arg1 = monthlyExpenses;
                arg2 = monthlyIncome;
                break;
              default:
                break;
            }

            if (arg1 && arg2) {
              value = 140 * (arg2/arg1);
              value = value > 140 ? 140 : value;
            } else if (!arg1 && arg2){
              value = 140;
            } else {
              value = 0;
            }

            return (
              <div className='statistics__wrapper' key={i}>
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