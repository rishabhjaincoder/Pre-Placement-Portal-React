import React, { useState } from 'react';
import { Modal, Label, Button } from 'reactstrap';
import './AddNewResModal.css';
import Dragndrop from '../Dropzone/Dropzone';

const AddNewRes = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="functionButtons" onClick={toggle}>{buttonLabel}</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <div className="content">
          <div align="center">ADD RESOURCES HERE</div>
          <hr/>
          <Dragndrop/>
        {/* <Label for="img">Add Test Papers </Label> <br/>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br/><br/>
        <Label for="img">Add Assignments </Label> <br/>
        <input type="file" id="img" name="img" accept="image/*"></input>   
        <br/><br/>
        <Label for="img">Add PPTs </Label> <br/>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br/><br/>
        <Label for="img">Add Announcements </Label> <br/>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br/><br/>
        <Label for="img">Add Videos </Label> <br/>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br/><br/>
        <Label for="img">Add Weblinks/ External Resources </Label> 
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br/><br/>
        <Label for="img">Add Notes </Label><br/>
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br/><br/> */}
        {/* <Button>DONE</Button> */}
        </div>
      </Modal>
    </div>
  );
}

export default AddNewRes;


// const Dropzone = ({ onDrop, accept }) => {
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept
//   });

//   return (
//     <div {...getRootProps()}>
//       <input className="dropzone-input" {...getInputProps()} />
//       <div className="text-center">
//         {isDragActive ? (
//           <p className="dropzone-content">Release to drop the files here</p>
//         ) : (
//           <p className="dropzone-content">
//             Drag 'n' drop some files here, or click to select files
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dropzone;