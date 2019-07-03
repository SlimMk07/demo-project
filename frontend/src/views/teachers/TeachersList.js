import React, {Component} from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
import { NavLink, Switch, Route } from "react-router-dom";
import OneTeacher from './OneTeacher';
import './../../assets/css/teachers.css'
import Teacher from './teacher'

import { connect } from 'react-redux'
import axios from 'axios'

class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {
    axios.get('/professors').then((res) => this.props.initProfsReducer(res.data))
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <button type="submit" className="btn btn-success add-teacher-btn">Add professor+</button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <div className='teachers-list'>
                    <div className='row teachers'>
                      {this.props.profs.map((prof, i) =>
                          <NavLink key={i}
                            to={{
                              pathname: `/admin/professors/profile/${prof._id}`,
                              prof: this.props.profs.filter(el => el._id === prof._id)[0]
                            }}
                          >
                            <OneTeacher key={i} prof={prof} />
                          </NavLink>
                        )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Switch>
            <Route exact path='/admin/professors/profile/:id' render={(props) =>
              <Teacher course={this.props.profs.filter(el => el._id === props.match.params.id)[0]} _id={props.match.params.id} />} />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profs: state.profs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initProfsReducer: profs => {
      dispatch({
        type: 'INIT_PROFFS',
        profs
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);