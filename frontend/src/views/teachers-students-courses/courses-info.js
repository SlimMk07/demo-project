import React, { Component } from 'react';
import ImageUpload from "views/teachers-students-courses/uploadimg"
import './course.css'

class BasicInfo3 extends Component {
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
                        <div className="form-group col-md-5">
                            <input type="text" className="form-control" id="inputName" placeholder="Course Name" required />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="number" className="form-control" id="inputduration" placeholder="Course Duration" required />
                        </div>
                        <p className='duration'>Minutes</p>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Course Description"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <input type="number" className="form-control" id="inputprice" placeholder="Course Price" required />
                        </div>
                        <p className='price'>DT</p>
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

export default BasicInfo3;