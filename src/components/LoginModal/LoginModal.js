import React, { useState } from 'react';
import './LoginModal.css';
import { Button, Modal } from 'reactstrap';
import Login from '../../containers/Login/Login';

const LoginModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times; </button>;
  return (
    <div>
      <Button color="danger" onClick={toggle}>LOGIN</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <Login/>
      </Modal>
    </div>
  );
}

export default LoginModal;