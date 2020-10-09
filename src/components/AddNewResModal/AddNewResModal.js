import React, { useState } from 'react';
import { Modal, Label } from 'reactstrap';
// import AddNewRes from '../../containers/AddNewRes/AddNewRes';

//This the modal that will be visible on the main page for login

// const AddNewResModal = (props) => {

//     const [showModal, setShow] = useState(false);

//   const handleClose = () => setShow(false);
  
//   return (

//     <div>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{ height: "100vh" }}
//       >
//         <Button variant="primary" onClick={handleShow}>
//           ADD NEW RESOURCE
//         </Button>
//       </div>
//       <Modal show={showModal} onHide={handleClose}>
//         <AddNewRes/>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default AddNewResModal;

const AddNewResModal = (props) => {

  // const [showModal, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px'}} onClick={toggle}>&times; </button>;
  return (

    <div className= "button" style={{position: 'absolute', marginLeft: '90%', top: '80px', fontSize: "20px", borderRadius: "12px"}}>
      {/* <Button outline color="danger" onClick={toggle}><span> Login </span></Button>{''} */}
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <div> 
            <Label for="img">Add Test Papers </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>
            <Label for="img">Add Assignments </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>    
            <Label for="img">Add PPTs </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>
            <Label for="img">Add Announcements </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>
            <Label for="img">Add Videos </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>
            <Label for="img">Add Weblinks/ External Resources </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>
            <Label for="img">Add Notes </Label> &nbsp;&nbsp;&nbsp;
            <input type="file" id="img" name="img" accept="image/*"></input>
            <br/><br/>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewResModal;