import React, { Component } from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

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
    return (<>
      <div className="content">
        <BrowserRouter>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <div className='courses-list'>
                    <div className='row courses'>
                      {this.props.corses.map((course) =>
                        <NavLink key={course._id} to={`/courses/profile/${course._id}`}>
                          <OneCourse course={course} />
                        </NavLink>)}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <hr />
          <Route exact path={`/courses/profile/:id`} render={() => (<OneCourse course={this.props.match.params.id} />)} />
        </BrowserRouter>
      </div>
    </>);
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

const mapStateToProps = (state) => {
  return {
    corses: state.corses
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);