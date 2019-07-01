import React from 'react'
import './course-list.css'

function OneCourse(props) {
    const course = props.course
    let coursesHtml = []

    coursesHtml = course.map((course, i) =>
        <div key={i} className="card-deck one-course">
            <div className="card">
                <img src={course.image} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title courses-name">{course.name}</h5>
                    {course.button}
                </div>
            </div>

        </div>
    )
    return coursesHtml
}
export default OneCourse;