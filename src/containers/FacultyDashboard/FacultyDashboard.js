import React from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';
const FacultyDashboard = (props) => {

    return (
        <div>
            <FacultyNavBar/>
            <br/><br/>
            <Calendar/>
            <AddNote/>
            <br/><br/><br/>
            <div align="right">
                NOTICES
            </div>
            <RegisterModal/> 
            <br/>
            <Footer/>
        </div>
    );
}

export default FacultyDashboard;