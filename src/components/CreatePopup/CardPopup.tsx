import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addAccounts, editAccounts } from '../../redux/Slices/accountsSlice';
import { closePopup } from '../../redux/Slices/accountsPopupSlice';
import './CardPopup.css'
import background_1 from '../../assets/account_bg1.png'
import background_2 from '../../assets/account_bg2.png'
import background_3 from '../../assets/account_bg3.png'

export const CardPopup: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.popup.isOpen);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [background, setBackground] = useState<string>(background_1);
    const dispatch = useDispatch();
    const editingCardId = useSelector((state: RootState) => state.popup.editingCardId);
    const accounts = useSelector((state: RootState) => state.accounts.accounts);

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>):void => {
        if((e.target as HTMLDivElement).className === 'card-popup__wrapper'){
            dispatch(closePopup());
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            const card = {
                id: editingCardId ?? accounts.length-1, // Если нет editingCardId, создаем новую карточку
                name,
                amount,
                background
            };
            if (editingCardId !== null) {
                dispatch(editAccounts(card));
            } else {
                dispatch(addAccounts(card));
            }
            dispatch(closePopup());
            setName('');
            setAmount(0);
        }
    };

    if (!isOpen) return null; // Если попап не открыт, ничего не рендерим

    return (
        <div className="card-popup__wrapper" onClick={(e) => clickHandler(e)}>
            <div className='card-popup'>
                <h2 className='card-popup__header'>{editingCardId !== null ? 'Edit Card' : 'Add Card'}</h2>
                <form className='card-popup__form' onSubmit={handleSubmit}>
                    <div className='card-popup__form__amount'>
                        <p className='card-popup__input__title'>Amount</p>
                        <input
                        className='card-popup__input'
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        />
                        <p className='card-popup__form__amount__currency'>USD</p>
                    </div>
                    <div className='card-popup__form__name'>
                        <p className='card-popup__input__title'>Name</p>
                        <input
                        className='card-popup__input'
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='card-popup__background__wrapper'>
                        <p className='card-popup__input__title'>Background</p>
                        <div className='card-popup__background'>
                            {[background_1, background_2, background_3].map((el, i) => (
                            <img 
                                key={i}
                                className={background === el ? "card-popup__background--active" : undefined}
                                src={el} 
                                alt={`background ${i}`} 
                                onClick={() => setBackground(el)}
                            />))}
                        </div>
                    </div>
                    <button className='card-popup__btn' type="submit">{editingCardId !== null ? 'Edit Card' : 'Add Card'}</button>
                </form>
            </div>
        </div>
        
    );
};
