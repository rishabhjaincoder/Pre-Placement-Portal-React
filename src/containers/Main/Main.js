import React, { useState } from 'react';
import './Main.css';
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import GalleryLogo from '../../components/GalleryLogo/GalleryLogo';
import { Jumbotron, Container } from 'reactstrap';

const Main = () => {
    return (
        <>
            <Header />
            <div>
                <Jumbotron fluid style={{
                    fontFamily: "Poppins",
                    fontSize: "200%",
                    fontWeight: "bold",
                    padding: "50px"
                }} className="bg-dark mb-3" >
                    <div className="row">
                        <Container fluid className="col-12 col-sm-6">
                            <h1 className="display-4">Jagan Institute of Management Studies</h1>
                            <p className="lead"> 3, Institutional Area, Sector-5, Rohini (Near Rithala Metro Station), Delhi-110085 </p>
                        </Container>
                    </div>
                </Jumbotron>
                <Slider />
                <div className="row">

                    <div className="col-12 acc" align='center'>
                        <h2 style={{
                            fontFamily: "initial",
                            fontWeight: 'bold'
                        }}>
                            ACCREDITATION AND APPROVALS
                </h2>
                        <GalleryLogo />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Main;