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
          
            <b>
            <div align="center">
            <h1 style= {{
                        fontFamily: "Poppins", 
                        fontSize: "300%", 
                        fontWeight: "bold"
                        }}> Jagan Institute of Management Studies </h1>
            <h3 style={{fontSize: "100%"}}> 3, Institutional Area, Sector-5, Rohini (Near Rithala Metro Station), Delhi-110085 </h3>
            <h2 style= {{fontFamily: "initial",
                        fontWeight: "bold"
                        }}> Pre-Placement Portal </h2> 
            </div>
            </b>

            <div className="button" align="right" >
                <LoginModal/>
             </div>
            
            <Slider/>
            <Footer/>
        </div>
    );
}

export default Main;