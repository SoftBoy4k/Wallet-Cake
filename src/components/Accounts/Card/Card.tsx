import './Card.css'

export const Card = () => {
  return (
    <div className='card'>
        <div className='card__header'>
            <div>
                <p className='card__name-attribute'>Total balance</p>
                <p className='card__header__balance'>$ 1,500.00</p>
            </div>
        </div>
        <div className='card__info'>
            <div>
                <p className='card__name-attribute'>Name</p>
                <p>CASH</p>
            </div>
        </div>
    </div>
  )
}