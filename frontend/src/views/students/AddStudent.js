import React, { Component } from 'react';
import './../../assets/css/students.css'
import BasicInfo from 'views/students/StudentInfo'
import SocialInfo from 'views/teachers/teacher-social-info'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import { Card, CardHeader, Row, Col } from "reactstrap";



class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  getBasicInfo=(name, birthdate, courses, email, phone, address, state, zipcode, about, picture)=>
  {
    this.setState({ name, birthdate, courses, email, phone, address, state, zipcode, about, picture })
  }

  addStudent = () => {
    axios.post('/add_student', {
      picture: this.state.picture, name: this.state.name, phone: this.state.phone, address: this.state.address, 
      birthdate: this.state.birthdate, courses: this.state.courses, email: this.state.email, state: this.state.state,
      zipcode: this.state.zipcode, about: this.state.about,
    })
    .then(() => this.props.addStudentReducer({
      picture: this.state.picture, name: this.state.name, phone: this.state.phone, address: this.state.address, 
      birthdate: this.state.birthdate, courses: this.state.courses, email: this.state.email, state: this.state.state,
      zipcode: this.state.zipcode, about: this.state.about,
    }))
    .catch((err) => alert(err))
    this.props.history.push('/admin/students')    
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
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Basic Informations</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                          aria-controls="pills-contact" aria-selected="false">Social Informations</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <BasicInfo getBasicInfo={this.getBasicInfo}/>
                      </div>
                      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <SocialInfo />
                      </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addStudentReducer: student => {
      dispatch({
        type: 'ADD_STUD',
        student
      })
    }
  }
}
export default withRouter(connect(null, mapDispatchToProps)(Student));
