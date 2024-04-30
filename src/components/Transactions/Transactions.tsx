import './Transactions.css'
import dropDownArrow from '../../icons/dropDown.png'
import { Transaction } from './Transaction/Transaction'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import { ITransaction } from '../../redux/Slices/transactionsSlice';

type isActiveFilterType = 0 | 1 | 2;

export const Transactions = () => {

  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const [displayFilter, setDisplayFilter] = useState<string>("All transactions");
  const [dateFilter, setDateFilter] = useState<string>("Last month");
  const [isActiveFilter, setIsActiveFilter] = useState<isActiveFilterType>(0);
  const [filteredTransactions, setFilteredTransactions] = useState<ITransaction[]>(transactions);

  const handleBtnsClick = (e: React.MouseEvent<HTMLElement>, id: isActiveFilterType): void => {
    const target = e.target as HTMLElement;
    const parent = target.parentElement;
    const isBtnClicked = target.classList.contains("transactions__header__btn") ||
                        (parent && parent.classList.contains("transactions__header__btn"));
    setIsActiveFilter(prev => (isBtnClicked && prev === id) ? 0 : id);
};

const handleFilterListClick = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    const parentClassList = (target.parentElement && target.parentElement.classList);

    if (parentClassList) {
        if (parentClassList.contains('transactions__header__btn-1__dropdown')) {
            setDisplayFilter(target.innerText);
            filter(target.innerText, dateFilter);
        } else if (parentClassList.contains('transactions__header__btn-2__dropdown')) {
            setDateFilter(target.innerText);
            filter(displayFilter, target.innerText);
        }
    }
    setIsActiveFilter(0);
};
  
  const sortByDateFromOld = (fromOld:boolean, currentFilteredTransactions:ITransaction[]) => {
    return currentFilteredTransactions.slice().sort((a: ITransaction, b: ITransaction): number => {
      const firstDateParts = a.date.split('.');
      const secondDateParts = b.date.split('.');
      
      const firstDay = Number(firstDateParts[0]);
      const firstMonth = Number(firstDateParts[1]);
      const firstYear = Number(firstDateParts[2]);
  
      const secondDay = Number(secondDateParts[0]);
      const secondMonth = Number(secondDateParts[1]);
      const secondYear = Number(secondDateParts[2]);
  
      const firstElement = firstYear * 365 + firstMonth * 30 + firstDay;
      const secondElement = secondYear * 365 + secondMonth * 30 + secondDay;
      
      return fromOld ? firstElement - secondElement : secondElement - firstElement;
    });  
  }
  
  const displayFilterFunc = (text:string, currentFilteredTransactions:ITransaction[]):ITransaction[] => {
    if ( text === "Only expenses" ) {
      currentFilteredTransactions = currentFilteredTransactions.filter(el => el.transferOperations == 0)
    } else if ( text === "Only income" ) {
      currentFilteredTransactions = currentFilteredTransactions.filter(el => el.transferOperations === 1)
    } else if ( text === "Starting from old" ) {
      currentFilteredTransactions = sortByDateFromOld(true, currentFilteredTransactions);
    } else if ( text === "Starting from new" ) {
      currentFilteredTransactions = sortByDateFromOld(false, currentFilteredTransactions);
    }

    return currentFilteredTransactions
  }

  const dateFilterFuncForDay = ():ITransaction[] => {
    return transactions.filter(el => {
      const arrTransactionDate = el.date.split('.');
      const currentDate = new Date();
      return Number(arrTransactionDate[0]) === currentDate.getDate() && Number(arrTransactionDate[1]) === currentDate.getMonth() + 1 && Number(arrTransactionDate[2]) === currentDate.getFullYear();
    })
  }

  const dateFilterFuncForWeek = ():ITransaction[] => {
    return transactions.filter(el => {
      const arrTransactionDate = el.date.split('.');
      const currentDate = new Date();
      const numberTransactionDate = Number(arrTransactionDate[0]) + Number(arrTransactionDate[1]) * 30 + Number(arrTransactionDate[2]) * 365;
      const numberCurrentDate = currentDate.getDate() + (currentDate.getMonth() + 1) * 30 + currentDate.getFullYear() * 365
      return numberTransactionDate <= numberCurrentDate && numberTransactionDate >= numberCurrentDate - 7
    })
  }

  const dateFilterFuncForMonth = ():ITransaction[] => {
    return transactions.filter(el => {
      const arrTransactionDate = el.date.split('.');
      const currentDate = new Date();
      return Number(arrTransactionDate[1]) === currentDate.getMonth() + 1 && Number(arrTransactionDate[2]) === currentDate.getFullYear();
    })
  }

  const dateFilterFuncForYear = ():ITransaction[] => {
    return transactions.filter(el => {
      const arrTransactionDate = el.date.split('.');
      const currentDate = new Date();
      return Number(arrTransactionDate[2]) === currentDate.getFullYear();
    })
  }

  const dateFilterFunc = (text:string, currentFilteredTransactions:ITransaction[]):ITransaction[] => {
    if ( text === "Last day" ) {
      currentFilteredTransactions = dateFilterFuncForDay();
    } else if ( text === "Last week" ) {
      currentFilteredTransactions = dateFilterFuncForWeek();
    } else if ( text === "Last month" ) {
      currentFilteredTransactions = dateFilterFuncForMonth();
    } else if ( text === "Last year" ) {
      currentFilteredTransactions = dateFilterFuncForYear();
    }

    return currentFilteredTransactions 
  }

  const filter = (textFirstFilter: string, textSecondFilter: string): void => {
    let currentFilteredTransactions: ITransaction[] = transactions;
    
    currentFilteredTransactions = displayFilterFunc(textFirstFilter, dateFilterFunc(textSecondFilter, currentFilteredTransactions));

    setFilteredTransactions(currentFilteredTransactions);
  }

  useEffect(() => {
    filter(displayFilter, dateFilter);
  }, [transactions])

  return (
    <div className='transactions'>
        <div className='block__header'>
          <h4>Transactions</h4>
          <div className='transactions__header__btns'>
            <div className='transactions__header__btn transactions__header__btn-1' onClick={(e:React.MouseEvent<HTMLElement>) => handleBtnsClick(e, 1)}>
              <p>{displayFilter}</p>
              <img src={dropDownArrow} alt="dropDownArrow" />
            </div>
            <div className='transactions__header__btn transactions__header__btn-2' onClick={(e:React.MouseEvent<HTMLElement>) => handleBtnsClick(e, 2)}>
              <p>{dateFilter}</p>
              <img src={dropDownArrow} alt="dropDownArrow" />
            </div>
            <div 
              className='transactions__header__btn__dropdown transactions__header__btn-1__dropdown' 
              style={isActiveFilter == 1 ? {display: "block"} : {display: "none"}}
              onClick={(e:React.MouseEvent<HTMLElement>) => handleFilterListClick(e)}
              >
              <p>All transactions</p>
              <p>Only expenses</p>
              <p>Only income</p>
              <p>Starting from old</p>
              <p>Starting from new</p>
            </div>
            <div 
              className='transactions__header__btn__dropdown transactions__header__btn-2__dropdown' 
              style={isActiveFilter == 2 ? {display: "block"} : {display: "none"}}
              onClick={(e:React.MouseEvent<HTMLElement>) => handleFilterListClick(e)}
            >
              <p>Last day</p>
              <p>Last week</p>
              <p>Last month</p>
              <p>Last year</p>
              <p>All transactions</p>
            </div>
          </div>
        </div>
        <ul className='transactions__content'>
          {filteredTransactions.map((el) => <Transaction transactionId={el.id} key={el.id}/>)}
        </ul>
    </div>
  )
}