import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import Modal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';

const Main = () => {
    return (
        <div className="Main">
            <Logo/>
            <h1> Jagan Institute of Management Studies </h1>
            <br/>
            <Modal/>
            <br/><br/>
            <Slider/>
            
        </div>
    );
}

export default Main;