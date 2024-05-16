import './SingIn.css'

const SingIn = () => {

    const isSingIn = true;

    return (
        <div className='sing-in__form'>
            <h2>{isSingIn ? 'Sing In' : 'Log In'}</h2>

            <div className='sing-in__form__block'>
                <label htmlFor="login">Login</label>
                <input type="text" id="login"/>
            </div>

            <div className='sing-in__form__block'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
            </div>

            <button className='sing-in__btn'>{isSingIn ? 'Sing In' : 'Log In'}</button>
        </div>
    )
}

export default SingIn