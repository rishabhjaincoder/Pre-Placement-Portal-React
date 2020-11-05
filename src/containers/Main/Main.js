import React from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import GalleryLogo from '../../components/GalleryLogo/GalleryLogo';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const Main = () => {

    return (
        <div>
            <div className="Main row justify-content-center">
                <div className="col-12 col-md-2">
                    <Logo />
                </div>
                <div className="col-12 col-md-8">

                    <div className="row justify-content-center">
                        <b>
                            <div className="col-12">                                          {/*Title of Website*/}
                                <h1 style={{
                                    fontFamily: "Poppins",
                                    fontSize: "300%",
                                    fontWeight: "bold",
                                    color: "midnightblue",
                                }}> Jagan Institute of Management Studies </h1>
                            </div>
                            <div className="col-12">
                                <h3 style={{ fontSize: "120%" }}> 3, Institutional Area, Sector-5, Rohini (Near Rithala Metro Station), Delhi-110085 </h3>
                            </div>

                            <div className="col-12 text-center">                              {/* Heading margin */}
                                <h2 style={{
                                    fontFamily: "initial",
                                    fontWeight: "bold",
                                }}> Pre-Placement Portal </h2>
                            </div>
                        </b>

                    </div>
                </div>
                <div className="col-12 col-md-2 button">
                    <LoginModal />                                              {/*About Login Button */}
                </div>
            </div>

            <Slider />                                                      {/* For access the slider */}
            <div className="row">

                <div className="col-12 acc" align='center'>
                    <h2 style={{
                        fontFamily: "initial",
                        fontWeight: 'bold'
                    }}>
                        ACCREDITATION AND APPROVALS
                </h2>                                                      {/* College info */}
                    <GalleryLogo />
                </div>
            </div>
            <Footer />                                                      {/* For access the footer file*/}
        </div>
    );
}

export default Main;