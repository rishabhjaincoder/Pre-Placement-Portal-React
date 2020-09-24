import React from 'react';
import Slider from '../../components/Slider/Slider';
import Modal from '../../components/Modal/Modal';
import logo from '../../assets/JimsLogo.jpg';

const Main = () => {
    return (
        <div className="Main">
            <img src={logo} height="130" alt="Jims Logo" align="left" />
            <h1> Jagan Institute of Management Studies </h1>
            <br/>
            <Modal/>
            <br/><br/>
            <Slider/>
            
        </div>
    );
}

export default Main;