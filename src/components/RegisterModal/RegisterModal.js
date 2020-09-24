import React, { useState } from 'react';

import { Button, Modal } from 'reactstrap';
import StudentLogin from '../../containers/StudentLogin/StudentLogin';

const RegisterModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times; </button>;
  return (
    <div>
      <Button color="danger" onClick={toggle}>REGISTER</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <StudentLogin/>
      </Modal>
    </div>
  );
}

export default RegisterModal;