import './Transactions.css'
import dropDownArrow from '../../icons/dropDown.png'
import aliExpressIcon from '../../icons/aliexpress.png'
import arrowUpIcon from '../../icons/arrowUP.png'
import greenCircleIcon from '../../icons/green-circle.png'

export const Transactions = () => {
  return (
    <div className='transactions'>
        <div className='block__header'>
          <h4>Transactions</h4>
          <div className='transactions__header__btns'>
            <div className='transactions__header__btn transactions__header__btn-1'>
              <p>All transactions</p>
              <img src={dropDownArrow} alt="dropDownArrow" />
            </div>
            <div className='transactions__header__btn transactions__header__btn-2'>
              <p>Last month</p>
              <img src={dropDownArrow} alt="dropDownArrow" />
            </div>
          </div>
        </div>
        <ul className='transactions__content'>
          <li>
            <div className='transactions__content__title'>
              <img src={aliExpressIcon} alt="AliExpress icon"/>
              <p>AliExpress</p>
            </div>
            <div className='transactions__content__info'>
              <div>
                <p>$ 1.99</p>
                <img className='transactions__content__info__arrow' src={arrowUpIcon} alt="arrow up" />
              </div>
              <p>**8434</p>
              <div>
                <p>Complete</p>
                <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
              </div>
              <p>20.03.2024</p>
            </div>
          </li>
          <li>
            <div className='transactions__content__title'>
              <img src={aliExpressIcon} alt="AliExpress icon"/>
              <p>AliExpress</p>
            </div>
            <div className='transactions__content__info'>
              <div>
                <p>$ 1.99</p>
                <img className='transactions__content__info__arrow' src={arrowUpIcon} alt="arrow up" />
              </div>
              <p>**8434</p>
              <div>
                <p>Complete</p>
                <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
              </div>
              <p>20.03.2024</p>
            </div>
          </li>
          <li>
            <div className='transactions__content__title'>
              <img src={aliExpressIcon} alt="AliExpress icon"/>
              <p>AliExpress</p>
            </div>
            <div className='transactions__content__info'>
              <div>
                <p>$ 1.99</p>
                <img className='transactions__content__info__arrow' src={arrowUpIcon} alt="arrow up" />
              </div>
              <p>**8434</p>
              <div>
                <p>Complete</p>
                <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
              </div>
              <p>20.03.2024</p>
            </div>
          </li>
          <li>
            <div className='transactions__content__title'>
              <img src={aliExpressIcon} alt="AliExpress icon"/>
              <p>AliExpress</p>
            </div>
            <div className='transactions__content__info'>
              <div>
                <p>$ 1.99</p>
                <img className='transactions__content__info__arrow' src={arrowUpIcon} alt="arrow up" />
              </div>
              <p>**8434</p>
              <div>
                <p>Complete</p>
                <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
              </div>
              <p>20.03.2024</p>
            </div>
          </li>
          <li>
            <div className='transactions__content__title'>
              <img src={aliExpressIcon} alt="AliExpress icon"/>
              <p>AliExpress</p>
            </div>
            <div className='transactions__content__info'>
              <div>
                <p>$ 1.99</p>
                <img className='transactions__content__info__arrow' src={arrowUpIcon} alt="arrow up" />
              </div>
              <p>**8434</p>
              <div>
                <p>Complete</p>
                <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
              </div>
              <p>20.03.2024</p>
            </div>
          </li>
          <li>
            <div className='transactions__content__title'>
              <img src={aliExpressIcon} alt="AliExpress icon"/>
              <p>AliExpress</p>
            </div>
            <div className='transactions__content__info'>
              <div>
                <p>$ 1.99</p>
                <img className='transactions__content__info__arrow' src={arrowUpIcon} alt="arrow up" />
              </div>
              <p>**8434</p>
              <div>
                <p>Complete</p>
                <img className='transactions__content__info__circle' src={greenCircleIcon} alt="green circle"/>
              </div>
              <p>20.03.2024</p>
            </div>
          </li>
        </ul>
    </div>
  )
}