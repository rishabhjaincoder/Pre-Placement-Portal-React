import React, {useState} from 'react';
import "./Login.css";
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // }

  const onClickHandler = () => {

    const AuthData = {
      email: email, 
      password: password
    }

    fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify( AuthData ),
    })
      .then(response => response.json())
      .then((result) => {
        if(result.role === 'faculty') {
          props.history.push('/facultydashboard');
          console.log(result);
        }
        else {
          props.history.push('/studentdashboard');
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return(
        <div>
        <Form className="login-form" autoComplete="off">
          <h2 className="text-center"> <b> Login </b></h2>
        <FormGroup >
          <Label for="Email">Email </Label>
          <Input type="email" name="email" id="Email" value={email} placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password </Label>
          <Input type="password" name="password" id="Password" value={password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>   
      <Button 
        color="secondary" 
        className=" btn-block" 
        onClick={onClickHandler}
      > 
        Submit 
      </Button> &nbsp;
      <Button 
        color="danger" 
        className="btn-block" 
        onClick={oncancel}
      > 
        Cancel 
      </Button> &nbsp;
        
      {/*<div className= "text-right">
          <a href="/sign-up"> Forgot the password? </a>
      </div>*/}
      
      </Form>
      </div>
    );
}

export default withRouter(Login);