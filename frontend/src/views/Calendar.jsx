import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap';


import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

import { TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'

import {Card, CardHeader, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class CalendarFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      update: false,
      remove: false,
      activeTab: '1'
    };
  }

  toggle=(event)=> {
    const name = event.target.name
    const state= !(this.state[name] === true)

    this.setState(prevState => {
      return ({[name]: state})
    });
  }

  toggleTab=(tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  events = [
    // { id: 99, title: 'event 1', start: '2019-05-01', end: '2019-05-10', color:'red', url: 'http://google.com/' },
    { title: 'event 2', date: '2019-06-29', color: 'blue' },
    { title: 'jasser',  date: '2019-06-29', color:'yellow' },
    
      {
          title: 'All Day Event',
          start: '2019-05-01'
      },
      {
          title: 'Long Event',
          start: '2019-05-07',
          end: '2019-05-10'
      },
      {
          id: 999,
          title: 'Repeating Event',
          start: '2019-05-09T16:00:00'
      },
      {
          id: 999,
          title: 'Repeating Event',
          start: '2019-05-16T16:00:00'
      },
      {
          title: 'Conference',
          start: '2019-05-11',
          end: '2019-05-13'
      },
      {
          title: 'Meeting',
          start: '2019-05-12T10:30:00',
          end: '2019-05-12T12:30:00'
      },
      {
          title: 'Birthday Party',
          start: '2019-05-13T07:00:00'
      },
      {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-05-28'
      }
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
                    left:  'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    // center: 'title',
                    center: '',
                    bottom: 'timeGridWeek,timeGridDay,timeGrid',
                    right: 'prev,next today'
                  }} 
                navLinks= {true} 
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin, interactionPlugin]} 
                weekends={false}
                events={this.events}
                themeSystem='bootstrap'
                dateClick={(info) =>{
                  alert('Clicked on: ' + info.dateStr);
                  this.setState({add: true})
                }}
                editable='true'

/>
              </CardHeader>
            </Card>
          </Col> 
        </Row>
        <Row>
          <Col md="12">
              <Card>
                <CardHeader>
                <center>
                  <Button color="info" name="add" className="button_calendar" onClick={this.toggle}>
                    Add Class
                  </Button>{' '}
                  <Button color="info" name="update" className="button_calendar" onClick={this.toggle}>
                    Update Class
                  </Button>{' '}
                  <Button color="info" name="remove" className="button_calendar" onClick={this.toggle}>
                    Remove Class
                  </Button>{' '}
                </center>
                </CardHeader>
            </Card>
          </Col> 
          <div>

          <Modal isOpen={this.state.add} toggleTab={this.toggleTab} className="add_classes">
            <ModalHeader name="add">Modal title</ModalHeader>
            <ModalBody>
            <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggleTab('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggleTab('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
            </ModalBody>
            <ModalFooter>
              <Button name="add" color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button name="add" color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.update} toggle={this.toggle} className="add_classes">
            <ModalHeader name="update">Modal title</ModalHeader>
            <ModalBody>
              update Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button name="update" color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button name="update" color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.remove} toggle={this.toggle} className="add_classes">
            <ModalHeader name="remove">Modal title</ModalHeader>
            <ModalBody>
              remove Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button name="remove" color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button name="remove" color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        </Row>
      </div>
    </>
    )
  }
}