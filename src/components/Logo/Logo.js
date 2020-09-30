import React from 'react';
import logo from '../../assets/JIMSLogo.jpg';
import './Logo.css';

//This is the main logo of JIMS

const Logo = () => {
    return (
        <div>
            <img className="logo" src={logo} height="120" alt="Jims Logo" align="left"  />
        </div>
    );
}

export default Logo;

