import React, {useState} from 'react';
// import {Route} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // }

  const onClickHandler = () => {
    console.log("hello");
    props.history.push('/studentlogin');
  }
    
    return(
        <div>
        <Form className="login-form" autoComplete="off">
        <FormGroup>
          <Label for="Email">Email </Label>
          <Input type="email" name="email" id="Email" value={email} placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password </Label>
          <Input type="password" name="password" id="Password" value={password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
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