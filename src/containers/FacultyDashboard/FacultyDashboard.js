import React from 'react';
import './FacultyDashboard.css';
import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar';
import AddNewResModal from '../../components/AddNewResModal/AddNewResModal';
import Footer from '../../components/Footer/Footer';
import AddNote from '../../components/AddNote/AddNote';
import Calendar from '../../components/Calender/Calendar';

const FacultyDashboard = (props) => {

    const onAddRes = () => {
        console.log("add res button clicked");
        return (<AddNewResModal/>); 
    } 

    const onAddJob = () => {
        console.log("add job button clicked");
        
    } 

    const onViewJob = () => {
        console.log("view job button clicked");
        
    } 

    const onViewProfile = () => {
        console.log("view profile button clicked");
        
    } 

    const onAddTest = () => {
        console.log("add test button clicked");
       
    } 

    return (
        <div>
            <FacultyNavBar/>
            <div className="functions" style={{marginTop: '-3%', marginRight: '30px'}}> 
                  
                <button className="functionButtons" onClick={onAddRes}>ADD NEW RESOURCES</button>
                <hr/>
                <button className="functionButtons" onClick={onAddJob}>ADD NEW JOB POSTINGS</button>
                <hr/>
                <button className="functionButtons" onClick={onViewJob}>VIEW NEW JOB POSTINGS</button>
                <hr/>
                <button className="functionButtons" onClick={onViewProfile}>VIEW STUDENT PROFILE</button> 
                <hr/>
                <button className="functionButtons" onClick={onAddTest}>ADD NEW TEST</button> 
                <hr/>
            </div>
            <br/>
            <div className="schedule" align="center" style={{marginTop: '-1%'}}>
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
            <br/> <br/>
            <Footer/>
        </div>
    );
}

export default FacultyDashboard;