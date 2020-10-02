import React from 'react';
import './FacultyDashboard.css';
import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
//import AddNewResModal from '../../components/AddNewResModal/AddNewResModal';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';

const FacultyDashboard = (props) => {

    return (
        <div>
            <FacultyNavBar/>
            <div className="functions"> 
                <button className="functionButtons">ADD NEW RESOURCES</button>
                <hr/>
                <button className="functionButtons">ADD NEW JOB POSTINGS</button>
                <hr/>
                <button className="functionButtons">VIEW STUDENT PROFILE</button>
                <hr/>
                <button className="functionButtons">VIEW NEW JOB/POSTINGS</button> 
                <hr/>
                <button className="functionButtons">ADD NEW TEST</button> 
                <hr/>
            </div>
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
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    );
}

export default FacultyDashboard;