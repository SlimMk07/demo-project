import React from "react";
import './teacher-list.css'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class TeacherProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title">Chet Faker</h5>
                    </a>
                  </div><br />
                  <p className="social-titre text-center">
                    Social Informations
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <Button
                          className="btn-round btn-icon"
                          color="info"
                          outline
                          size="sm"
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="3" md="6" xs="6">
                        <Button
                          className="btn-round btn-icon"
                          color="primary"
                          outline
                          size="sm"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                      </Col>
                      <Col className="mr-auto" lg="3" md="6" xs="6">
                        <Button
                          className="btn-round btn-icon"
                          color="danger"
                          outline
                          size="sm"
                        >
                          <i class="fab fa-google"></i>
                        </Button>
                      </Col>
                      <Col className="mr-auto" lg="3" md="6" xs="6">
                      <Button
                            className="btn-round btn-icon"
                            color="secondary"
                            outline
                            size="sm"
                          >
                            <i className="fab fa-linkedin-in" />
                          </Button>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>





            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle className='profile-titre' tag="h5">Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div>
                      <form >
                        <div class="form-row">
                          <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputName" placeholder="Full Name" required disabled />
                          </div>
                          <div className="form-group col-md-3">
                            <input type="date" className="form-control" id="inputdate" placeholder="Date of birth" required disabled />
                          </div>
                          <div className="form-group col-md-3">
                            <input type="text" className="form-control" id="inputGendre" placeholder="Gendre" required disabled />
                          </div>
                        </div>
                        <div class="form-row">
                          <div className="form-group col-md-10">
                            <input type="text" className="form-control" id="inputCourse" placeholder="Course" required disabled />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" required disabled />
                          </div>
                          <div className="form-group col-md-4">
                            <input type="tel" className="form-control" id="inputTel" placeholder="Mobile.No" required disabled />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-10">
                            <input type="text" className="form-control" id="inputAdress" placeholder="Adress" required disabled />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="inputCity" placeholder="City" required disabled />
                          </div>
                          <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" required disabled />
                          </div>
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

export default TeacherProfile;
