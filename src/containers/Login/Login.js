import React, {useState} from 'react';
import "./Login.css";
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import StudentDashboard from '../StudentDashboard/StudentDashboard';
// import FacultyDashboard from '../FacultyDashboard/FacultyDashboard';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // }

  const onClickHandler = () => {
    props.history.push('/studentdashboard');
  }

  // const role = (props)  => {
  //   // const isLoggedIn = props.isLoggedIn;
  //   if (key="1") {
  //     return <StudentDashboard />;
  //   }
  //   return <FacultyDashboard />;
  // }
    
    return(
        <div>
        <Form className="login-form" autoComplete="off">
        <FormGroup >
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
          <option key="1">Student</option>
          <option key="2">Faculty</option>
        </Input>
         
      </FormGroup>

      {/* <input type="button" value={`${showTab ? 'Hide' : 'Show'} Tab`} onClick={handleToggle}></input> */}
        
        <Button onClick={onClickHandler}>Submit</Button> &nbsp;
        <Button>Forgot Password</Button> &nbsp;
      </Form>
      </div>
    );
}

export default withRouter(Login);