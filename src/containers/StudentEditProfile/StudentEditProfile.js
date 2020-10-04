import React, {useState} from 'react';
import './StudentEditProfile.css';
import { Form, Label, Button } from 'reactstrap';

const StudentEditProfile = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState(""); 
    const [dob, setdob] = useState(""); 
    const [motherName, setMotherName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [percentage, setPercentage] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [techUsed, setTechUsed] = useState("");

    // const validateForm = () => {
    //     return (firstName.length >0 && 
    //             lastName.length > 0 && 
    //             newPassword.length > 0 && 
    //             newPassword===confirm
    //     ); 
    // }

    const onClickHandler = () => {
        const alteredData = {
            firstname: firstName,
            lastname: lastName,
            course: course,
            semester: semester,
            phone: phone,
            address: address,
            dob: dob,
            motherName: motherName,
            fatherName: fatherName,
            percentage: percentage,
            projectTitle: projectTitle,
            techUsed: techUsed
          }
      
          fetch('http://localhost:4000/user/updateprofile/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify( alteredData ),
          })
            .then(response => response.json())
            .then((result) => {
              props.history.push('/studentdashboard');
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
        //props.history.push('/studentdashboard');
    }

    return (
        <div>
            <Form className="student-edit-profile" autoComplete="off">
                
                <Label for="firstName">First Name </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="firstName" id="firstName" value={firstName} placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)}/> 
                &nbsp;&nbsp;&nbsp;             
                <Label for="lastName">Last Name </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/>
                <br/><br/>                
                <Label for="course">Course </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="course" id="course" value={course} placeholder="Enter your course" onChange={e => setCourse(e.target.value)}/>
                &nbsp;&nbsp;&nbsp;
                <Label for="semester">Semester </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="semester" id="semester" value={semester} placeholder="Enter your semester" onChange={e => setSemester(e.target.value)}/>
                <br/><br/>
                <Label for="phone">Mobile Number </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="phone" id="phone" value={phone} placeholder="Enter your Contact number" onChange={e => setPhone(e.target.value)}/>
                <br/><br/>
                <Label for="img">Select image </Label> &nbsp;&nbsp;&nbsp;
                <input type="file" id="img" name="img" accept="image/*"></input>
                <br/><br/>
                <Label for="address">Address </Label> &nbsp;&nbsp;&nbsp;
                <input type="textarea" name="address" id="address" value={address} placeholder="Enter Address" onChange={e => setAddress(e.target.value)}/>
                <br/><br/>
                <Label for="dob">Date of Birth </Label> &nbsp;&nbsp;&nbsp;
                <input type="date" name="dob" id="dob" value={dob} placeholder="Enter your date of birth" onChange={e => setdob(e.target.value)}/>
                <br/><br/>
                <Label for="mothername">Mother's Name </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="mothername" id="mothername" value={motherName} placeholder="Enter Mother's Name" onChange={e => setMotherName(e.target.value)}/>
                &nbsp;&nbsp;&nbsp;
                <Label for="fathername">Father's Name </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="fathername" id="fathername" value={fatherName} placeholder="Enter Father's Name" onChange={e => setFatherName(e.target.value)}/>
                <br/><br/>
                <Label for="perc">Percentage </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="perc" id="perc" value={percentage} placeholder="Enter your Percentage" onChange={e => setPercentage(e.target.value)}/>
                <br/><br/>
                <Label for="projecttitle">Project title </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="projecttitle" id="projecttitle" value={projectTitle} placeholder="Enter Project Title" onChange={e => setProjectTitle(e.target.value)}/>
                &nbsp;&nbsp;&nbsp;
                <Label for="techused">Technology Used </Label> &nbsp;&nbsp;&nbsp;
                <input type="text" name="techused" id="techused" value={techUsed} placeholder="Enter Technology Used" onChange={e => setTechUsed(e.target.value)}/>
                <br/><br/>

                <Button onClick={onClickHandler}>DONE EDITING</Button>
            </Form>
        </div>
    );
}

export default StudentEditProfile;