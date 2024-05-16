import { useState } from 'react';
import './SingIn.css'

const SingIn = () => {

    const [isSingIn, setIsSingIn] = useState(false);

    return (
        <div className='sing-in__form'>
            <h2>{isSingIn ? 'Sing in' : 'Create Account'}</h2>

            <input className='sing-in__form__input' type="text" id="login" placeholder='Login'/>

            <input className='sing-in__form__input' type="password" id="password" placeholder='Password'/>

            <button className='sing-in__btn'>{isSingIn ? 'Sing In' : 'Get Started'}</button>

            <p style={{color: "#grey", fontSize: "14px"}}>
                {isSingIn ? "Don't have an account yet? " : 'Already a member? '} 
                <span 
                    style={{color: "#2C55D4", cursor: "pointer", fontWeight: "600"}}
                    onClick={() => setIsSingIn(!isSingIn)}
                >
                    {isSingIn ? "Sing up" : 'Sing in'}
                </span>
            </p>
        </div>
    )
}

export default SingIn