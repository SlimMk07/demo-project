import React, {Component }from 'react';
import './../../assets/css/teacher-list.css'

class OneTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="card-deck one-teacher">
        <div className="card">
          <img src={this.props.prof.picture} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h5 className="card-title teachers-name">{this.props.course.name}</h5>
          </div>
        </div>
      </div>);
  }
}

export default OneTeacher;