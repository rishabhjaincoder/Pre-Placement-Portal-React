import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import Modal from '../../components/LoginModal/LoginModal';
import logo from '../../assets/JimsLogo.jpg';

const Main = () => {
    return (
        <div className="Main">
            <img className="logo" src={logo} height="130" alt="Jims Logo" align="left"  />
            <h1> Jagan Institute of Management Studies </h1>
            <br/>
            <Modal/>
            <br/><br/>
            <Slider/>
            
        </div>
    );
}

export default Main;