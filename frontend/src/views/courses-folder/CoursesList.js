import React, { Component } from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import { NavLink, Switch, Route} from "react-router-dom";
import CourseInfo from './CourseInfo'
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
    console.log('list of corses', this.props.corse)
    return (
      <>
        <div className="content" key={this.props.location.pathname}>
            <Row>
              <Col md="12">
                <Card>
                  <button type="submit" className="btn btn-success add-course-btn">Add Course+</button>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <div className='courses-list'>
                      <div className='row courses'>
                        {this.props.corse.map((course) =>
                           <NavLink key={course._id}
                              to={{pathname:`/admin/course/profile/${course._id}`, 
                                course: this.props.corse.filter(el => el._id === course._id)[0]}}
                              >
                             <OneCourse course={course} />
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