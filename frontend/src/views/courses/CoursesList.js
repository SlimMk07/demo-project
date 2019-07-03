import React, { Component } from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import { NavLink, Switch, Route } from "react-router-dom";
import CourseInfo from './CourseInfo';
import OneCourse from './OneCourse';

import { connect } from 'react-redux'
import axios from 'axios'

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    axios.get('/corses').then((res) => this.props.initCoursesReducer(res.data))
  }

  render() {
    return (
      <>
        <div className="content" key={this.props.location.pathname}>
          <Row>
            <Col md="12">
              <Card>
                <NavLink to={"/admin/courses/add"} >
                  <button type="submit" className="btn btn-success add-course-btn">Add Course+</button>
                </NavLink>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <div className='courses-list'>
                    <div className='row courses'>
                      {this.props.corse.map((course, i) =>
                        <NavLink key={i}
                          to={{
                            pathname: `/admin/course/profile/${course._id}`,
                            course: this.props.corse.filter(el => el._id === course._id)[0]
                          }}
                        >
                          <OneCourse key={i} course={course} />
                        </NavLink>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row >
          <Switch>
            <Route exact path='/admin/course/profile/:id' render={(props) =>
              <CourseInfo course={this.props.corse.filter(el => el._id === props.match.params.id)[0]} _id={props.match.params.id} />} />
          </Switch>
        </div >
      </>);
  }
}

const mapStateToProps = (state) => {
  return {
    corse: state.corses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initCoursesReducer: corses => {
      dispatch({
        type: 'INIT_CORSES',
        corses
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);