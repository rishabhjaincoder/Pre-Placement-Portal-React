import React from 'react';
import logo from '../../assets/JIMSLogo.png';

//This is the main logo of JIMS

const Logo = () => {
    return (
        <div>
            <img className="logo" src={logo} height="130" alt="Jims Logo" align="left"  />
        </div>
    );
}

export default Logo;

