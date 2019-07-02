import React from "react";
import './courses.css'


import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class CourseInfo extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="avatar border-gray" alt="..."></div>
                      <h5 className="title">Chet Faker</h5>
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
                  <Form>
                    <div>
                      <form >
                        <div class="form-row">
                          <div className="form-group col-md-5">
                            <input type="text" className="form-control" id="inputName" placeholder="Course Name" required disabled/>
                          </div>
                          <div className="form-group col-md-4">
                            <input type="number" className="form-control" id="inputduration" placeholder="Course Duration" required disabled />
                          </div>
                          <p className='duration'>Minutes</p>
                        </div>
                        <div class="form-row">
                          <div className="form-group col-md-10">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Course Description" disabled />
                          </div>
                        </div>
                        <div class="form-row">
                          <div className="form-group col-md-9">
                            <input type="number" className="form-control" id="inputprice" placeholder="Course Price" required disabled/>
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
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}


export default CourseInfo;
