import logo from '../../assets/logo.png'
import './Header.css'

export const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="logo"/>
            <p>Wallet Cake</p>
        </div>
    </div>
  )
}