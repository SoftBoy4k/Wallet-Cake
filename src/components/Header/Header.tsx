import logo from '../../assets/logo.png'
import './Header.css'
import profileIcon from '../../icons/profile.png'

export const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="logo"/>
            <p>Wallet Cake</p>
        </div>

        <div className='profile'>
          <img className='profile__icon' src={profileIcon} alt='profile icon'/>
          <p className='profile__text'>something@gmail.com</p>
        </div>
    </div>
  )
}