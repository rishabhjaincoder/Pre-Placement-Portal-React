import React from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import {Button} from 'reactstrap';
import NavBar from '../../components/Navbar/NavBar';

const Dashboard = (props) => {

    // const onClickHandler = () => {
    //     props.history.push('/');
    // }

    return (
        <div>
            <NavBar/>
             <br/><br/>
            <RegisterModal/> <br/>
            {/* <Button onClick={() => onClickHandler()}> LOGOUT</Button> <br/> <br/> */}
            <Button>EDIT PROFILE</Button>
        </div>
    );
}

export default Dashboard;