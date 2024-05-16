import './SingInPage.css'
import peopleIcon from '../../assets/people.jpg'
import SingIn from '../../components/SingIn/SingIn'

const SingInPage = () => {
  return (
    <div className="sing-in">
        <div className='sing-in__item' style={{display: 'flex'}}>
            <img className='sing-in__image' src={peopleIcon} alt="people"/>
        </div>
        <div className='sing-in__item'>
            <SingIn/>
        </div>
    </div>
  )
}

export default SingInPage