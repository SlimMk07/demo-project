import dayGridPlugin from '@fullcalendar/daygrid';

import React from 'react'
import FullCalendar from '@fullcalendar/react'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import {Card, CardHeader, Row, Col, Button} from "reactstrap";

export default class CalendarFull extends React.Component {

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
                  <Button color="info" className="button_calendar">Add Class</Button>{' '}
                  <Button color="info" className="button_calendar">Update Class</Button>{' '}
                  <Button color="info" className="button_calendar">Remove Class</Button>{' '}
                </center>
                </CardHeader>
            </Card>
          </Col> 
        </Row>
      </div>
    </>
    )
  }
}