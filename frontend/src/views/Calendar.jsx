import dayGridPlugin from '@fullcalendar/daygrid';

import React from 'react'
import FullCalendar from '@fullcalendar/react'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import {Card, CardHeader, Row, Col} from "reactstrap";

export default class CalendarFull extends React.Component {

  render() {
    return (
      <>
      <div className="content">
       <Row>
          <Col md="12">
              <Card>
             <CardHeader>
             <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} 
                events={[
                  { title: 'event 1', date: '2019-06-01' },
                  { title: 'event 2', date: '2019-06-29' },
                  { title: 'jasser 2', date: '2019-06-29' }]}/>
              </CardHeader>
            </Card>
          </Col> 
        </Row>
      </div>
    </>
    )
  }

}

