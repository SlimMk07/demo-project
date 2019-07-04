import React from "react";
import './../../assets/css/student-list.css'
// reactstrap components
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, FormGroup, Input, Row, Col } from "reactstrap";

class StudentProfile extends React.Component {
  render() {
    console.log('profile', this.props)
    let { student } = this.props.location
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
                        src={student.picture}
                      />
                      <h5 className="title">{student.name}</h5>
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
                          <i className="fab fa-google"></i>
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
                  <div>
                    <form >
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <input type="text" className="form-control" value={student.name}
                            placeholder="Full Name" required disabled />
                        </div>
                        <div className="form-group col-md-3">
                          <input type="text" className="form-control" value={student.birthdate}
                            placeholder="Date of birth" required disabled />
                        </div>
                        <div className="form-group col-md-3">
                          <input type="text" className="form-control"
                            value={student.gender ? 'Female' : 'Male'}
                            placeholder="Gendre" required disabled />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input type="email" className="form-control" value={student.email} placeholder="Email" required disabled />
                        </div>
                        <div className="form-group col-md-4">
                          <input type="tel" className="form-control" value={student.phone} placeholder="Mobile.No" required disabled />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-10">
                          <input type="text" className="form-control" value={student.address} placeholder="Adress" required disabled />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input type="text" className="form-control" value={student.state} placeholder="City" required disabled />
                        </div>
                        <div className="form-group col-md-4">
                          <input type="text" className="form-control" value={student.zipcode} placeholder="Zip Code" required disabled />
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
                          value={student.about}
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

export default StudentProfile;
