import React, {Component} from 'react';
import { Card, CardHeader, Row, Col } from "reactstrap";
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
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className='courses-list'>
                  <div className='row courses'>
                    <OneCourse course={this.props.corses} />
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Col>
        </Row>
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