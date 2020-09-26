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
            <h1> Jagan Institute Of Management Studies </h1>
            <h2> Pre - Placement Portal </h2>
            <br/>
           
            <LoginModal/>

            {/* <LoginModal/> */}
            <br/>
            <Slider/>
            <Footer/>
        </div>
    );
}

export default Main;