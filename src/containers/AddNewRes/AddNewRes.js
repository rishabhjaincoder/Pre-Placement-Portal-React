import React from 'react';
import {Label} from 'reactstrap';

const AddNewRes = () => {
    return (
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
    );
}

export default AddNewRes;