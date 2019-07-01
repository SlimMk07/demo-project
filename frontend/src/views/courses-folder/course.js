import React, { Component } from 'react';
import './courses.css'
import BasicInfo3 from 'views/teachers-students-courses/courses-info'
import {Card, CardHeader, Row, Col} from "reactstrap";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
      <div className="content">
      <Row>
         <Col md="12">
             <Card>
            <CardHeader>
            <div className='container1'>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Course Informations</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><BasicInfo3 /></div>
        </div>
      </div>
             </CardHeader>
           </Card>
         </Col>
       </Row>
     </div>
</>





    );
  }
}

export default Course;