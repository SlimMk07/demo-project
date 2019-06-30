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
      repeat: '7',
      /** notification */
      visible: true,
      /** classes in the calendar */
      events: [
        // { id: 99, title: 'event 1', start: '2019-05-01', end: '2019-05-10', color: 'red', url: 'http://google.com/' },
        // { title: 'event 2', date: '2019-05-09', color: 'blue' },
        // { title: 'jasser', date: '2019-06-29', color: 'yellow' },
        // { title: 'All Day Event', start: '2019-05-09' },
        // { title: 'Long Event', start: '2019-05-09', end: '2019-05-10' },
        // { id: 999, title: 'Repeating Event', start: '2019-05-09T16:00:00' },
        // { id: 999, title: 'Repeating Event', start: '2019-05-16T16:00:00' },
        // { title: 'Conference', start: '2019-05-11', end: '2019-05-13' },
        // { title: 'Meeting', groupId: 5, start: '2019-05-12T10:30:00', end: '2019-05-12T12:30:00' },
        // { title: 'Birthday Party', groupId: 5, start: '2019-05-13T07:00:00' },
        // { title: 'Click for Google', url: 'http://google.com/', start: '2019-05-28' }
      ]
    };
  }
  addClass = (e) => {
    this.toggle(e)
    const newEvents = createClass({
      class: this.state.class, course: this.state.course,
      professor: this.state.professor, start: this.state.start, color: this.state.color,
      textColor: this.state.textColor, repeat: this.state.repeat, end: this.state.end
    })
    this.setState({ events: this.state.events.concat(newEvents) }, 
    ()=>axios.post('/add_classes', { ...this.state.events })
      .then(() => this.props.addClassReducer({ ...this.state.events }))
      .catch((err) => alert(err)))
    // axios.post('/add_classes', { ...this.state })
    //   .then(() => this.props.addClassReducer({ ...this.state.events }))
    //   .catch((err) => alert(err))
  }
  onDismiss = () => {
    this.setState({ visible: !this.state.visible })
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
                    events={this.state.events}
                    themeSystem='bootstrap'
                    dateClick={(info) => {
                      console.log(info)
                      this.setState({
                        add: true, start: moment(info.date).format('YYYY-MM-DDTHH:mm'),
                        end: moment(info.date).format('YYYY-MM-DDTHH:mm')
                      })
                    }}
                    eventPositioned={({ event, isStart, isEnd }) => {
                      if (isStart && isEnd) {
                        console.log('eventPositioned', event)
                        console.log('eventClick1', '\nend:-' + event.end, '\ngroupid-' + event.groupId, '\nid-' + event.id,
                          '\nstart-' + event.start,
                          '\ntextcolor-' + event.textColor, '\ncolor-' + event.color, '\ntitle-' + event.title, '\nurl-' + event.url,
                          '\nbgcolor-' + event.backgroundColor)
                      }
                    }}
                    eventResize={({ event }) => {
                      console.log('eventResize', event)
                      console.log('eventClick1', '\nend:-' + event.end, '\ngroupid-' + event.groupId, '\nid-' + event.id,
                        '\nstart-' + event.start,
                        '\ntextcolor-' + event.textColor, '\ncolor-' + event.color, '\ntitle-' + event.title, '\nurl-' + event.url,
                        '\nbgcolor-' + event.backgroundColor)
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
    }
  }
}

export default connect(null, mapDispatchToProps)(CalendarFull);