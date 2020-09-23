import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const StudentLogin = () => {
    return (
        <div>
            <Form className="student-login" autoComplete="off">
            <FormGroup>
                <Label for="Newpass">New Password </Label>
            <Input type="password" name="Newpass" id="Newpass" placeholder="Enter New password" />
            </FormGroup>
            <FormGroup>
                <Label for="ConfPass">Confirm Password </Label>
            <Input type="password" name="ConfPass" id="ConfPass" placeholder="Confirm Password" />
            </FormGroup>
            <FormGroup>
                <Label for="Firstname">First Name </Label>
            <Input type="text" name="Firstname" id="Firstname" placeholder="Enter First Name" />
            </FormGroup>
            <FormGroup>
                <Label for="LastName">Last Name </Label>
            <Input type="text" name="LastName" id="LastName" placeholder="Enter Last Name" />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone Number </Label>
            <Input type="text" name="phone" id="phone" placeholder="Enter Phone Number" />
            </FormGroup>
            <FormGroup>
                <Label for="address">Address </Label>
            <Input type="textarea" name="address" id="address" placeholder="Enter Address" />
            </FormGroup>
            <FormGroup>
                <Label for="semester"/>
            <Input type="select" name="semester" id="semester">
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
            </Input>
            </FormGroup>
        
            <Button>Register</Button>
            </Form>
        </div>
    );
}

export default StudentLogin;