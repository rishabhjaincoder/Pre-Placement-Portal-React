import React from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const Dashboard = (props) => {

    return (
        <div>
            <NavBar/>
             <br/><br/>
            <RegisterModal/> <br/>
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Dashboard;