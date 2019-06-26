import dayGridPlugin from '@fullcalendar/daygrid';

import React from 'react'
import FullCalendar from '@fullcalendar/react'

//import './main.scss' // webpack must be configured to do this
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export default class CalendarFull extends React.Component {

  render() {
    return (
      <div className="content">  
        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
      </div>
      
    )
  }

}

