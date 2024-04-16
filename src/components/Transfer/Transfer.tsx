import './Transfer.css'
import { ShortCard } from './ShortCard/ShortCard'
import { ShortNoCard } from './ShortNoCard/ShortNoCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'
import { SelectionIcons } from './SelectionIcons/SelectionIcons'
import { editAccounts } from '../../redux/Slices/accountsSlice'

export const Transfer = () => {

  const dispatch = useDispatch();
  const accounts = useSelector((state: RootState) => state.accounts.accounts);
  const [selectedShortCard, setSelectedShortCard] = useState<number>(0);
  const [isSelectedIcon, setIsSelectedIcon] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>();
  const [transferOperations, setTransferOperations] = useState<0 | 1>(0); // 0 - Expenses, 1 - Income
  const [transferAmount, setTransferAmount] = useState<number>(0);

  const shortCardSelectHandler = (i:number) => {
    setSelectedShortCard(i)
  }

  const selectionIconsHandler = () => {
    setIsSelectedIcon(!isSelectedIcon);
  }

  const sendHandler = ():void => {
    const currentAccounts = {
      id: selectedShortCard,
      name: accounts[selectedShortCard].name,
      background: accounts[selectedShortCard].background,
      amount: transferOperations === 0 ? accounts[selectedShortCard].amount - transferAmount : accounts[selectedShortCard].amount + transferAmount
    }
    dispatch(editAccounts(currentAccounts))
  }
 
  return (
    <div className="transfer">
        <div className='block__header'>
          <h4>Transfer</h4>
          <div className='transfer__operations'>
            <p 
            className={transferOperations === 0 ? 'transfer__operation--active' : undefined}
            onClick={() => setTransferOperations(0)}>
              Expenses
            </p>
            <p 
            className={transferOperations === 1 ? 'transfer__operation--active' : undefined} 
            onClick={() => setTransferOperations(1)}>
              Income
            </p>
          </div>
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
                <input 
                  className='transfer__input' 
                  type="text" 
                  value={transferAmount} 
                  onChange={e => setTransferAmount(Number(e.target.value))}/>
              </div>
            </div>
            <button onClick={sendHandler}>Send</button>
          </div>
        </div>
    </div>
  )
}