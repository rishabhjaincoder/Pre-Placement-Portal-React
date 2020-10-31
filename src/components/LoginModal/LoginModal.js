import React, { useState } from 'react';
import './LoginModal.css';
import { Modal, Button } from 'reactstrap';
import Login from '../../containers/Login/Login';

//This the modal that will be visible on the main page for login

const LoginModal = (props) => {

  // const [showModal, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times; </button>;
  return (

    <div className="button " style={{ fontSize: "20px", borderRadius: "12px", margin: "10px" }}>
      <Button outline color="danger" onClick={toggle}><span> Login </span></Button>{''}
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <Login />
      </Modal>
    </div>
  );
}

export default LoginModal;