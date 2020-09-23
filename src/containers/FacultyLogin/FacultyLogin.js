import React from 'react';

const FacultyLogin = () => {
    return (
        <div>
            <Form className="faculty-login" autoComplete="off">
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
        
            <Button>Register</Button>
            </Form>
        </div>
    );
}

export default FacultyLogin;