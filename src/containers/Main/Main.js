import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';


const Main = () => {

    // window.open(<LoginModal/>);
    // setTimeout(() => (<LoginModal/>), 2000);
            
    return (
        <div className="Main">
            <Logo/>
            <p>
            <h1>Jagan Institute of Management Studies</h1>
            <h2>Pre-placement Portal</h2>
            </p>
            <br/>
            <LoginModal/>
            <Slider/>
            <Footer/>
        </div>
    );
}

export default Main;