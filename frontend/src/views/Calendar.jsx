import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


import React from 'react'
import FullCalendar from '@fullcalendar/react'

import './main.scss' // webpack must be configured to do this

export default class CalendarFull extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    )
  }

}

