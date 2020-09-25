import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    return (
        <div className="Main">
            <Logo/>
            <h1> Jagan Institute of Management Studies </h1>
            <br/>
            <LoginModal/>
            <br/><br/>
            <Slider/>
            <Footer/>
        </div>
    );
}

export default Main;