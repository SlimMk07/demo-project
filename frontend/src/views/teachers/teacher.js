import React, { Component } from 'react';
import './../../assets/css/teachers.css'
import BasicInfo from 'views/teachers/teacher-basic-info'
import SocialInfo from 'views/teachers/teacher-social-info'
import { Card, CardHeader, Row, Col } from "reactstrap";

class Teacher extends Component {
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
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Basic Informations</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Social Informations</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><BasicInfo /></div>
                      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><SocialInfo /></div>
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

export default Teacher;