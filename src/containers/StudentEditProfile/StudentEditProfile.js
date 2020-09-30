import React, {useState} from 'react';
import './StudentEditProfile.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const StudentEditProfile = (props) => {

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");
    const [address, setAddress] = useState(""); 
    const [dob, setdob] = useState(""); 
    const [motherName, setMotherName] = useState("");
    const [fatherName, setFatherName] = useState("");

    // const validateForm = () => {
    //     return (firstName.length >0 && 
    //             lastName.length > 0 && 
    //             newPassword.length > 0 && 
    //             newPassword===confirm
    //     ); 
    // }

    const onClickHandler = () => {
        props.history.push('/studentdashboard');
    }

    return (
        <div>
            <Form className="student-edit-profile" autoComplete="off">
                <FormGroup>
                    <Label for="name">Name </Label>
                    <Input type="text" name="name" id="name" value={name} placeholder="Enter Name" onChange={e => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="course">Course </Label>
                    <Input type="text" name="course" id="course" value={course} placeholder="Enter your course" onChange={e => setCourse(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="semester">Semester </Label>
                    <Input type="text" name="semester" id="semester" value={semester} placeholder="Enter your semester" onChange={e => setSemester(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address </Label>
                    <Input type="textarea" name="address" id="address" value={address} placeholder="Enter Address" onChange={e => setAddress(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="dob">Date of Birth </Label>
                    <Input type="date" name="dob" id="dob" value={dob} placeholder="Enter your date of birth" onChange={e => setdob(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="mothername">Mother's Name </Label>
                    <Input type="text" name="mothername" id="mothername" value={motherName} placeholder="Enter Mother's Name" onChange={e => setMotherName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="fathername">Father's Name </Label>
                    <Input type="text" name="fathername" id="fathername" value={fatherName} placeholder="Enter Father's Name" onChange={e => setFatherName(e.target.value)}/>
                </FormGroup>
                <Button onClick={onClickHandler}>DONE EDITING</Button>
       
            </Form>
        </div>
    );
}

export default StudentEditProfile;