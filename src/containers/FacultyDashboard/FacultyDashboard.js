import React from 'react';
import './FacultyDashboard.css';
import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';
const FacultyDashboard = (props) => {

    return (
        <div>
            <FacultyNavBar/>
            <br/>
            <div className="schedule" align="center">
                SCHEDULES <br/>
            </div>
            <div className="notices" align="center">
                    NOTICE 1 <br/>
                    NOTICE 2 <br/>
                    NOTICE 3 <br/>
            </div>
            <br/>
            <Calendar/>
            <AddNote/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default FacultyDashboard;