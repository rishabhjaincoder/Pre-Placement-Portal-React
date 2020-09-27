import React from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';
const Dashboard = (props) => {

    return (
        <div>
            <NavBar/>
             <br/><br/>
             <Calendar/>
             <AddNote/>
             <br/><br/><br/>
            
            <RegisterModal/> 
            <br/>
            
           
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default Dashboard;