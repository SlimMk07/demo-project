import React from "react";
// react plugin used to create charts
import { Line, Pie, Bar } from "react-chartjs-2";
// reactstrap components
import {Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col} from "reactstrap";
// core components
import {dashboard24HoursPerformanceChart, dashboardEmailStatisticsChart, dashboardNASDAQChart} from "variables/charts.jsx";
import { connect } from 'react-redux'
import axios from 'axios'



class Dashboard extends React.Component {
  datasetKeyProvider(){ return Math.random(); } 

  componentDidMount(){
    axios.get('/corses').then((res) => this.props.initCoursesReducer(res.data))
    axios.get('/students').then((res) => this.props.initStudentsReducer(res.data))
    axios.get('/classes').then((res) => this.props.initClassesReducer(res.data))
    axios.get('/professors').then((res) => this.props.initProfessorsReducer(res.data))

    //data
    axios.get('/inscription').then((res) => this.props.initInscriptionsReducer(res.data))
  }

  render() {
    let graph = dashboard24HoursPerformanceChart
    graph.data = canvas => {
      return {
        labels: this.props.inscription[0],
        datasets: [
          {
            borderColor: "#4acccd",
            backgroundColor: "aqua",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: this.props.inscription[1]
          },
        ], type:"bar"
      };
    }
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
                  <a href='/admin/dashboard'><i className="fas fa-sync-alt" /> Update now</a>
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
                        <CardTitle tag="p">{this.props.profs.length}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  <a href='/admin/dashboard'><i className="fas fa-sync-alt" /> Update now</a>
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
                  <a href='/admin/dashboard'><i className="fas fa-sync-alt" /> Update now</a>
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
                    <a href='/admin/dashboard'><i className="fas fa-sync-alt" /> Update now</a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Inscriptions every session</CardTitle>
                  <p className="card-category">Inscriptions</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    datasetKeyProvider={()=>this.datasetKeyProvider}
                    data={ graph.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={202}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">courses inscriptions Statistics</CardTitle>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                    width={400}
                    height={200}
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
          </Row>
          <Row>
            <Col md="12">
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
    },
    initProfessorsReducer: profs => {
      dispatch({
        type: 'INIT_PROFS',
        profs
      })
    },
    initInscriptionsReducer: inscription => {
      dispatch({
        type: 'INIT_INSCRIPTION',
        inscription
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    corses: state.corses,
    students: state.students,
    classes: state.classes,
    profs: state.professors,
    inscription:state.inscription
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
