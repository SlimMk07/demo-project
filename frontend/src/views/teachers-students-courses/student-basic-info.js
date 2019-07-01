import React, { Component } from 'react';
import ImageUpload from "views/teachers-students-courses/uploadimg"


class BasicInfo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    saveInfos = (e) => {

        if (e.target.name === 'img')
            this.setState({ image: URL.createObjectURL(e.target.files[0]) })


    }

    render() {
        return (
            <div>
                <form >
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputName" placeholder="Full Name" required />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="date" className="form-control" id="inputdate" placeholder="Date of birth" required />
                        </div>
                        <div className="form-group col-md-3">
                            <select id="inputState" className="form-control" required >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label >Studying :</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2" required>
                                <option>Math</option>
                                <option>science</option>
                                <option>Sport</option>
                                <option>physics</option>
                                <option>Music</option>
                                <option>Painting</option>
                                <option>English</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="tel" className="form-control" id="inputTel" placeholder="Mobile.No" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <input type="text" className="form-control" id="inputAdress" placeholder="Adress" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <select id="inputState" className="form-control"  >
                                <option selected>Select City</option>
                                <option>Tunis</option>
                                <option>Sousse</option>
                                <option>Sfax</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <ImageUpload />
                        </div>
                    </div>
                    <center><button type="submit" className="btn btn-primary">Save</button></center>
                </form>
            </div>
        );
    }
}

export default BasicInfo2;