import React from "react";
import './courses.css'

import { connect } from 'react-redux'

import { Card, CardHeader, CardBody, CardTitle, FormGroup, Input, Row, Col } from "reactstrap";

class CourseInfo extends React.Component {
  constructor(props){
    console.log('props', props)
    super(props)
    this.state = {}
  }

  render() {
    console.log('one course prev', this.props)
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={this.props.location.course.picture} />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="avatar border-gray" alt="..."></div>
                      <h5 className="title">{this.props.location.course.name}</h5>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle className='profile-titre' tag="h5">Course</CardTitle>
                </CardHeader>
                <CardBody>
                    <div>
                      <form >
                        <div className="form-row">
                          <div className="form-group col-md-5">
                            <input type="text" className="form-control" value={this.props.location.course.name} required disabled />
                          </div>
                          <div className="form-group col-md-4">
                            <input type="number" className="form-control" value={this.props.location.course.duration}
                              required disabled />
                          </div>
                          <p className='duration'>Minutes</p>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-10">
                            <textarea className="form-control" rows={10} value={this.props.location.course.description} disabled />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-9">
                            <input type="number" className="form-control" value={this.props.location.course.price} required disabled />
                          </div>
                          <p className='price'>DT</p>
                        </div>
                      </form>
                    </div>
                    <Row>
                      <Col md="10">
                        <FormGroup>
                          <label>About</label>
                          <Input
                            disabled
                            type="textarea"
                            defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    corses: state.contactReducer
  }
}


export default connect(mapStateToProps)(CourseInfo);
