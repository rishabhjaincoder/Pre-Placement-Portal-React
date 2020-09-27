import React from 'react';
import './StudentDashboard.css';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import StudentNavBar from '../../components/StudentNavbar/StudentNavBar';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';
const StudentDashboard = (props) => {

    return (
        <div>
            <StudentNavBar/>

            <br/>

            <div align="right">
                <RegisterModal/> 
            </div>

            <br/><br/>

            <div className="schedule" align="right">
                SCHEDULES
            </div>

            <br/>

            <div className="notices">
                <p align="right">NOTICES</p>
                <Calendar/>
            </div>

            <AddNote/>
            
            <Footer/>
        </div>
    );
}

export default StudentDashboard;