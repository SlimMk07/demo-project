import React, { Component } from 'react'
import './../../assets/css/student-list.css'

class OneStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="card-deck one-student">
        <div className="card">
          <img src={this.props.student.picture} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h5 className="card-title students-name">{this.props.student.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default OneStudent;