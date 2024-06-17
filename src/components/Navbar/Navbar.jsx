import React, { useContext, useState, useRef } from 'react';
import './navbar.scss';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, toggleLoginPopup, showLogin }) => {
    const [menu, setMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const {scrollToItem}= useContext(StoreContext)
    const handleClose = () => {
        setShowLogin(true)
        toggleLoginPopup()

    }
    const { getTotalCartAmount } = useContext(StoreContext)
    // =========================
   
    // =============
    return (
        
        <div className='navbar'>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className="logo" />
            </Link>



            <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>

                <li onClick={() => { setMenu('home'); setMenuOpen(false); scrollToItem(0) }} className={menu === "home" ? "active" : ""}>
                    <Link to='/'>
                        home
                    </Link>

                </li>
                <li onClick={() => { setMenu('menu'); setMenuOpen(false); scrollToItem(1)}} className={menu === "menu" ? "active" : ""}>menu</li>
                <li onClick={() => { setMenu('mobile-app'); setMenuOpen(false);scrollToItem(2)}} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
                <li onClick={() => { setMenu('contact-us'); setMenuOpen(false);scrollToItem(2)}} className={menu === "contact-us" ? "active" : ""}>contact us</li>

            </ul>



            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="basket icon" />
                    </Link>

                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <button className='sign-in' onClick={handleClose} >sign in</button>

            </div>
            <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
       
    );
};

export default Navbar;
