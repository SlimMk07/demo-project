import React, {Component} from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import OneStudent from './OneStudent';
import './../../assets/css/students.css'
import { NavLink, Switch, Route } from "react-router-dom";
import StudentProfile from './StudentProfile'

import { connect } from 'react-redux'
import axios from 'axios'

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    axios.get('/students').then((res) => this.props.initStudentsReducer(res.data))
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <NavLink to={"/admin/students/add"} >
                  <button type="submit" className="btn btn-success add-student-btn">Add Student+</button>
                </NavLink>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <div className='students-list'>
                    <div className='row students'>
                      {this.props.students.map((student, i) =>
                        <NavLink key={i}
                          to={{
                            pathname: `/admin/students/profile/${student._id}`,
                            student: this.props.students.filter(el => el._id === student._id)[0]
                          }}
                        >
                          <OneStudent key={i} student={student} />
                        </NavLink>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Switch>
            <Route exact path='/admin/students/profile/:id' render={(props) =>
              <StudentProfile student={this.props.students.filter(el => el._id === props.match.params.id)[0]} _id={props.match.params.id} />} />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initStudentsReducer: students => {
      dispatch({
        type: 'INIT_STUDS',
        students
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);