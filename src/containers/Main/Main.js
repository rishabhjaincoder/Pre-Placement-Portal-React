import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import { Jumbotron } from 'reactstrap';

const Main = () => {

    // window.open(<LoginModal/>);
    // setTimeout(() => (<LoginModal/>), 2000);
            
    return (
        <div className="Main">
            <Logo/>
            <Jumbotron/>
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