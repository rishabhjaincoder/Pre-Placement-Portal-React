import React, {useState} from 'react';
import "./Login.css";
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       // callMyFunction();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

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
          <center><Button 
            color="secondary"  
            onClick={onClickHandler}
          > 
          Submit 
          </Button>
          </center> &nbsp;
          {/*<div className= "text-right">
            <a href="/sign-up"> Forgot the password? </a>
          </div>*/}
        </Form>
      </div>
    );
}

export default withRouter(Login);