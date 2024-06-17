import React, { useState } from 'react';
import './loginPopup.scss'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin, toggleLoginPopup}) => {
    const [currState, setCurrtState] = useState('Login')

    const handleClose=()=>{
        setShowLogin(false)
        toggleLoginPopup()

    }

    return (
        <div className='login-popup '>
            <form  className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={handleClose} src={assets.cross_icon} alt=""/>
                </div>
                <div className="login-popup-inputs">
                {currState  === 'Login' ? <></> : <input type="text" placeholder='Yor name' required />}
                    
                    <input type="email"  placeholder='Your email' required/>
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState === 'Sign Up'? 'Create account': 'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currState === 'Login' ? <p> Create a new account? <span onClick={()=> setCurrtState('Sign Up')}>Click here</span></p> : <p>Alredy have an account ? <span onClick={()=> setCurrtState('Login')}>Login here</span></p>}
                
                
            </form>
        </div>
    );
}

export default LoginPopup;
