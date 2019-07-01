import React from 'react'
import './course-list.css'

function OneCourse (props) {
    const course = props.course
    let coursesHtml=[]

    coursesHtml = course.map((course, i) =>
    <div key={i} className='one-course col-3'>
        <img src={course.image} alt='course'/>
        <div className='courses-name'>
            <p>{course.name}</p>
            {course.button}
        </div>
    </div>
    )
    return coursesHtml
}
export default OneCourse;