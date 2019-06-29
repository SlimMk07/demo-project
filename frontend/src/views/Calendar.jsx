import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap';


import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import moment from 'moment';


import {Card, CardHeader, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from 'reactstrap';


export default class CalendarFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {add: false, update: false,
      class:'class',
      course:"Science",
      professor:'Titi',
      start:moment(new Date()).format('YYYY-MM-DDTHH:mm'),
      color: '#ff4444',
      textColor: '#ffebee',
      repeat:'7'
    };
  }
  handleForm=(e)=>{
    console.log({[e.target.name]: e.target.value})
    this.setState({[e.target.name]: e.target.value}, ()=>console.log('state', this.state))
  }
  toggle=(event)=> {
    const name = event.target.name
    const state= !(this.state[name] === true)

    this.setState(prevState => {
      return ({[name]: state})
    });
  }
  events = [
    { id: 99, title: 'event 1', start: '2019-05-01', end: '2019-05-10', color:'red', url: 'http://google.com/' },
    { title: 'event 2', date: '2019-05-09', color: 'blue' },
    { title: 'jasser',  date: '2019-06-29', color:'yellow' },
    { title: 'All Day Event', start: '2019-05-09'},
    { title: 'Long Event', start: '2019-05-09', end: '2019-05-10' },
    { id: 999, title: 'Repeating Event', start: '2019-05-09T16:00:00', ondblclick: ()=>{
          alert('dblclick')
        }},
    { id: 999, title: 'Repeating Event', start: '2019-05-16T16:00:00', ondblclick: ()=>{
          alert('dblclick') }
    },
    { title: 'Conference', start: '2019-05-11', end: '2019-05-13' },
    { title: 'Meeting', groupId: 5, start: '2019-05-12T10:30:00', end: '2019-05-12T12:30:00' },
    { title: 'Birthday Party', groupId: 5, start: '2019-05-13T07:00:00' },
    { title: 'Click for Google', url: 'http://google.com/', start: '2019-05-28' }
  ]

  render() {
    return (
      <>
      <div className="content">
       <Row>
          <Col md="12">
              <Card>
             <CardHeader>
             <FullCalendar header = {{
                    left:  'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                    center: 'title',
                    right: 'prev,next today'
                  }} 
                navLinks= {true} 
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin, interactionPlugin]} 
                weekends={false}
                events={this.events}
                themeSystem='bootstrap'
                dateClick={(info) =>{
                  console.log(info)
                  this.setState({add: true, start: moment(info.date).format('YYYY-MM-DDTHH:mm')})
                }}
                eventPositioned={(info)=>{
                  console.log('eventPositioned', info)
                }}
                eventClick={(calEvent, jsEvent, view)=>{
                  alert('eventClick', calEvent, jsEvent, view)
                  console.log('eventClick', calEvent, jsEvent, view)
                }}
                editable='true'/>
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
                  <Label>Class Background Color</Label>
                  <Input type="color" name="color" 
                    value={this.state.color} onChange={this.handleForm}/>
                </FormGroup>
                <FormGroup>
                  <Label>Class Text Color</Label>
                  <Input type="color" name="textColor" 
                    value={this.state.textColor} onChange={this.handleForm}/>
                </FormGroup>
              </Form>
              </ModalBody>
              <ModalFooter>
                <Button name="add" color="primary" onClick={this.toggle}>Add Class</Button>{' '}
                <Button name="add" color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.update} toggle={this.toggle} className="add_classes">
              <ModalHeader name="update">Update Class</ModalHeader>
              <ModalBody>
                update Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button name="update" color="primary" onClick={this.toggle}>Update</Button>{' '}
                <Button name="update" color="secondary" onClick={this.toggle}>Remove</Button>{' '}
                <Button name="update" color="primary" onClick={this.toggle}>Update</Button>
              </ModalFooter>
            </Modal>
          </div>
        </Row>
      </div>
    </>
    )
  }
}