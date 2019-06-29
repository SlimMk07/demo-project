import moment from 'moment';


const f = (objectC) => {
  const duration = 90

  switch (objectC.repeat) {
    case '1': return {
      groupId: Math.random * 1000000,
      start: objectC.start,
      end: moment(objectC.start).add(2, 'hours'),
      title: objectC.professor + ' - ' + objectC.course + ' - ' + objectC.class,
      class: objectC.class,
      color: objectC.color,
      textColor: objectC.textColor,
      professor: objectC.professor,
      course: objectC.course,
    }
    case '7': {
      let x = moment(new Date(objectC.start)).format('YYYY-MM-DDTHH:mm')
      let events = []
      const groupId = Math.random
      while (x <= objectC.end) {
        let y = moment((new Date(objectC.start))
          .setMinutes(new Date(objectC.start).getMinutes() + duration))
          .format('YYYY-MM-DDTHH:mm')
        events.push({
          groupId,
          start: x,
          end: y,
          title: objectC.professor + ' - ' + objectC.course + ' - ' + objectC.class,
          class: objectC.class,
          color: objectC.color,
          textColor: objectC.textColor,
          professor: objectC.professor,
          course: objectC.course,
        })
        x = moment((new Date(x))
        .setDate(new Date(x).getDate() + 7))
        .format('YYYY-MM-DDTHH:mm')
      }
      console.log('newevents', events)
      return events
    }
    default: return {
      groupId: Math.random * 1000000,
      start: objectC.start,
      end: moment(objectC.start).add(2, 'hours'),
      title: objectC.professor + ' - ' + objectC.course + ' - ' + objectC.class,
      class: objectC.class,
      color: objectC.color,
      textColor: objectC.textColor,
      professor: objectC.professor,
      course: objectC.course,
    }
  }
}

export default f