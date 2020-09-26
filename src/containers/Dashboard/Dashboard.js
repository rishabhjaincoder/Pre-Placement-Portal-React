import React from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from 'react-calendar';
const Dashboard = (props) => {

    return (
        <div>
            <NavBar/>
             <br/><br/>
            
            <RegisterModal/> 
            <AddNote/>
            <Calendar/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Dashboard;