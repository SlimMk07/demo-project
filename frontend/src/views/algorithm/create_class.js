import moment from 'moment';

const addOneClass=(objectC, duration)=>{
  return {
    groupId: Math.random() * 1000000,
    start: moment(new Date(objectC.start)).format('YYYY-MM-DDTHH:mm'),
    end: moment((new Date(objectC.start))
      .setMinutes(new Date(objectC.start).getMinutes() + duration))
      .format('YYYY-MM-DDTHH:mm'),
    title: objectC.professor + ' - ' + objectC.course + ' - ' + objectC.class,
    class: objectC.class,
    color: objectC.color,
    textColor: objectC.textColor,
    professor: objectC.professor,
    course: objectC.course,
  }
}

const f = (objectC) => {
  const duration = 90

  switch (objectC.repeat) {
    case '1': return addOneClass(objectC, duration)
    case '7': {
      let x = moment(new Date(objectC.start)).format('YYYY-MM-DDTHH:mm')
      let events = []
      const groupId = Math.random()
      while (x <= objectC.end) {
        let y = moment((new Date(objectC.start))
          .setMinutes(new Date(objectC.start).getMinutes() + duration))
          .format('YYYY-MM-DDTHH:mm')
        events.push({
          id: Math.random(),
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
      return events
    }
    default: return addOneClass(objectC, duration)
  }
}

export default f