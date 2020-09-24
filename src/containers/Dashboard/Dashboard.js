import React from 'react';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import {Button} from 'reactstrap';

const Dashboard = (props) => {

    const onClickHandler = () => {
        props.history.push('/');
    }

    return (
        <div>
            HELLO THIS IS THE DASHBOARD <br/>
            Here we will edit profile and do many more things.<br/><br/>
            <RegisterModal/> <br/>
            <Button onClick={() => onClickHandler()}> LOGOUT</Button> <br/> <br/>
            <Button>EDIT PROFILE</Button>
        </div>
    );
}

export default Dashboard;