import React, {Component} from 'react'
import './../../assets/css/course-list.css'

class OneCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="card-deck one-course" >
        <div className="card">
          <img src={this.props.course.picture} className="card-img-top" alt="pic" />
          <div className="card-body">
            <h5 className="card-title courses-name">{this.props.course.name}</h5>
          </div>
        </div>
      </div>);
  }
}

export default OneCourse;