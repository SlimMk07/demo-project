import React, { Component } from 'react';

class SocialInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="inputName" placeholder="Facebook URL" required />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="inputName" placeholder="Twitter URL" required />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="inputName" placeholder="Google+ URL" required />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="inputName" placeholder="LinkedIn URL" required />
                </div>
                <center><button type="submit" className="btn btn-primary">Save</button></center>
            </div>
        );
    }
}

export default SocialInfo;