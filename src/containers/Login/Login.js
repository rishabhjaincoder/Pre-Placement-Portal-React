import React from 'react';
// import {Route} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./Login.css";

const Login = (props) => {

  const onClickHandler = () => {
    
    console.log(props.history.push('/studentlogin'));

  }
    
    return(
        <div>
        <Form className="login-form" autoComplete="off">
        <FormGroup>
          <Label for="Email">Email </Label>
          <Input type="email" name="email" id="Email" placeholder="Enter Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password </Label>
          <Input type="password" name="password" id="Password" placeholder="Enter Password" />
        </FormGroup>
        <FormGroup>
        <Label for="role">I am a </Label>
        <Input type="select" name="role" id="role">
          <option>Student</option>
          <option>Faculty</option>
        </Input>
      </FormGroup>
        
        <Button onClick={() => onClickHandler()}>Submit</Button>
        <Button>Forgot Password</Button>
        <Button>Sign Up</Button>
      </Form>
      </div>
    );
}

export default Login;