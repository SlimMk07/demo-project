import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import { Card, CardHeader, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import createClass from './algorithm/create_class'
import { connect } from 'react-redux'
import axios from 'axios'


class CalendarFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /** modal */
      add: false,
      /** to add a class */
      class: 'class',
      course: "Science",
      professor: 'Titi',
      start: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
      end: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
      color: '#055049',
      textColor: '#faf35e',
      repeat: '7'
    };
  }

  componentDidMount = () => {
    axios.get('/classes').then((res) => this.props.initClassesReducer(res.data))
  }

  addClass = (e) => {
    this.toggle(e)
    const newEvents = createClass({
      class: this.state.class, course: this.state.course,
      professor: this.state.professor, start: this.state.start, color: this.state.color,
      textColor: this.state.textColor, repeat: this.state.repeat, end: this.state.end
    })
    this.setState({ events: this.state.events.concat(newEvents) },
      () => axios.post('/add_classes', newEvents)
        .then(() => this.props.addClassReducer(newEvents))
        .catch((err) => console.log('add_classes', err)))
  }

  handleForm = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggle = (event) => {
    const name = event.target.name
    const state = !(this.state[name] === true)
    this.setState(prevState => {
      return ({ [name]: state })
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <FullCalendar header={{
                    left: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                    center: 'title',
                    right: 'prev,next today'
                  }}
                    navLinks={true}
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin, interactionPlugin]}
                    weekends={false}
                    events={this.props.classes}
                    themeSystem='bootstrap'
                    displayEventEnd='true'
                    dateClick={(info) => this.setState({
                      add: true, start: moment(info.date).format('YYYY-MM-DDTHH:mm'),
                      end: moment(info.date).format('YYYY-MM-DDTHH:mm')
                    })
                    }
                    eventPositioned={({ event, isStart, isEnd, isMirror }) => {
                      // console.log('id', event.id)
                      // console.log('title', event.title)
                      // console.log('start', event.start)
                      // console.log('end', event.end)
                      console.log(isStart, isEnd, isMirror, event.id, event)
                      if (isStart && isEnd && isMirror) {
                        axios.put(`/update_classes/${event.id}`, { id: parseFloat(event.id), start: event.start, end: event.end })
                          .then(() => this.props.editClassReducer({ id: parseFloat(event.id), start: event.start, end: event.end }))
                          .catch((err) => console.log('p update_classes', err))
                      }
                    }}
                    eventResize={({ event }) => {
                      axios.put(`/update_classes/${event.id}`, { id: parseFloat(event.id), start: event.start, end: event.end })
                        .then(() => this.props.editClassReducer({ id: parseFloat(event.id), start: event.start, end: event.end }))
                        .catch((err) => console.log('r update_classes', err))
                    }}
                    editable='true' />
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <div>
              <Modal isOpen={this.state.add} className="add_classes">
                <ModalHeader name="add">Add New Class</ModalHeader>
                <ModalBody className="modal_body">
                  <Form className='form'>
                    <FormGroup>
                      <Label>Class</Label>
                      <Input type="text"
                        value={this.state.class} onChange={this.handleForm}
                        required name="class" placeholder="class name" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Course</Label>
                      <Input type="select" name="course" required
                        onChange={this.handleForm} value={this.state.course}>
                        <option value="Maths">Maths</option>
                        <option value="Physics">Physics</option>
                        <option value="Science">Science</option>
                        <option value="Dance">Dance</option>
                        <option value="Sport">Sport</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Professor</Label>
                      <Input type="select" name="professor" required
                        onChange={this.handleForm} value={this.state.professor}>
                        <option value="Jane Doe">Jane Doe</option>
                        <option value="Titi">Titi</option>
                        <option value="Jasser">Jasser</option>
                        <option value="Asma">Asma</option>
                        <option value="Nessrine">Nessrine</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Start Date</Label>
                      <Input type="datetime-local" name="start"
                        value={this.state.start} onChange={this.handleForm} required>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Repeat</Label>
                      <Input type="select" name="repeat" required
                        onChange={this.handleForm} value={this.state.repeat}>
                        <option value="1">Only This Time</option>
                        <option value="7">Every Week</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>End Date</Label>
                      <Input type="datetime-local" name="end"
                        value={this.state.end} onChange={this.handleForm}>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Class Background Color</Label>
                      <Input type="color" name="color"
                        value={this.state.color} onChange={this.handleForm} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Class Text Color</Label>
                      <Input type="color" name="textColor"
                        value={this.state.textColor} onChange={this.handleForm} />
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button name="add" color="primary" onClick={this.addClass}>Add</Button>{' '}
                  <Button name="add" color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Row>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addClassReducer: classe => {
      dispatch({
        type: 'ADD_CLASS',
        classe
      })
    },
    editClassReducer: classe => {
      dispatch({
        type: 'EDIT_CLASS',
        classe
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
    classes: state.classes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarFull);