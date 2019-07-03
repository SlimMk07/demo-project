import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col} from "reactstrap";
// core components
import {dashboard24HoursPerformanceChart, dashboardEmailStatisticsChart, dashboardNASDAQChart} from "variables/charts.jsx";
import { connect } from 'react-redux'
import axios from 'axios'



class Dashboard extends React.Component {
  datasetKeyProvider(){ return Math.random(); } 

  componentDidMount(){
    axios.get('/professors').then((res) => this.props.initProfessorsReducer(res.data))
    axios.get('/corses').then((res) => this.props.initCoursesReducer(res.data))
    axios.get('/students').then((res) => this.props.initStudentsReducer(res.data))
    axios.get('/classes').then((res) => this.props.initClassesReducer(res.data))
  }

  render() {
   console.log (this.props.students)
    return (
      <>
        <div className="content"> 
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Students Number</p>
                        <CardTitle tag="p">{this.props.students.length}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Teachers Number</p>
                        <CardTitle tag="p">{this.props.classes.length}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Classes Number</p>
                        <CardTitle tag="p">{this.props.classes.length}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Courses Number</p>
                        <CardTitle tag="p">{this.props.corses.length}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Inscriptions every session</CardTitle>
                  <p className="card-category">Inscriptions</p>
                </CardHeader>
                <CardBody>
                  <Line
                    datasetKeyProvider={()=>this.datasetKeyProvider}
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">courses inscriptions Statistics</CardTitle>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    datasetKeyProvider={()=>this.datasetKeyProvider}
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                </CardFooter>
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
    initProfessorsReducer: profs => {
      dispatch({
        type: 'INIT_PROFS',
        profs
      })
    },
    initCoursesReducer: corses => {
      dispatch({
        type: 'INIT_CORSES',
        corses
      })
    },
    initStudentsReducer: students => {
      dispatch({
        type: 'INIT_STUDS',
        students
      })
    },
    initClassesReducer: classes => {
      dispatch({
        type: 'INIT_CLASSES',
        classes
      })
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    profs: state.profs,
    corses: state.corses,
    students: state.students,
    classes: state.classes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
