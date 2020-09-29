import React, { useState } from 'react';
import './LoginModal.css';
import { Modal, Button } from 'reactstrap';
import Login from '../../containers/Login/Login';

//This the modal that will be visible on the main page for login

const LoginModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px'}} onClick={toggle}>&times; </button>;
  return (

    // style={{position= "absolute", margin-left="91%", top= 68px}}

    <div className= "button" style={{position: 'absolute', marginLeft: '90%', top: '80px', fontSize: "12px", borderRadius: "12px"}}>
      <Button outline color="danger" onClick={toggle}> Login </Button>{''}
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <Login/>
      </Modal>
    </div>
  );
}

export default LoginModal;