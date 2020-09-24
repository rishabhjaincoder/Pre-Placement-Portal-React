import React, {useState} from 'react';
import './StudentLogin.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const StudentLogin = (props) => {

    const [newPassword, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState("");
    const [firstName, setFistName] = useState("");
    const [lastName, setLastName] = useState("");

    // const validateForm = () => {
    //     return (firstName.length >0 && 
    //             lastName.length > 0 && 
    //             newPassword.length > 0 && 
    //             newPassword===confirm
    //     ); 
    // }

    const onClickHandler = () => {
        console.log("Registered");
        // props.history.push('/dashboard');
    }

    return (
        <div>
            <Form className="student-login" autoComplete="off">
            <FormGroup>
                <Label for="Newpass">New Password </Label>
            <Input type="password" name="Newpass" id="Newpass" value={newPassword} placeholder="Enter New password" onChange={e => setPassword(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="ConfPass">Confirm Password </Label>
            <Input type="password" name="ConfPass" id="ConfPass" value={confirm} placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="Firstname">First Name </Label>
            <Input type="text" name="Firstname" id="Firstname" value={firstName} placeholder="Enter First Name" onChange={e => setFistName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="LastName">Last Name </Label>
            <Input type="text" name="LastName" id="LastName" value={lastName} placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone Number </Label>
            <Input type="text" name="phone" id="phone" placeholder="Enter Phone Number" />
            </FormGroup>
        
            <Button onClick={() => onClickHandler()}>Register</Button>
            </Form>
        </div>
    );
}

export default StudentLogin;