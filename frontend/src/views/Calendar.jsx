import dayGridPlugin from '@fullcalendar/daygrid';

import React from 'react'
import FullCalendar from '@fullcalendar/react'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import {Card, CardHeader, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class CalendarFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      update: false,
      remove: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    const name = event.target.name
    const state= !(this.state[name] === true)

    this.setState(prevState => {
      return ({[name]: state})
    });
  }

  events = [
    { title: 'event 1', date: '2019-06-01', color:'red' },
    { title: 'event 2', date: '2019-06-29', color: 'blue' },
    { title: 'jasser',  date: '2019-06-29', color:'yellow' }]

  render() {
    return (
      <>
      <div className="content">
       <Row>
          <Col md="12">
              <Card>
             <CardHeader>
             <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} 
                events={this.events}/>
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

          <Modal isOpen={this.state.add} toggle={this.toggle} className="add_classes">
            <ModalHeader name="add">Modal title</ModalHeader>
            <ModalBody>
              add Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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