import React from 'react'
import './teacher-list.css'

function OneTeacher(props) {
    const teacher = props.teacher
    let teachersHtml = []

    teachersHtml = teacher.map((teacher, i) =>
        <div key={i} className="card-deck one-teacher">
            <div className="card">
                <img src={teacher.image} className="card-img-top" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title teachers-name">{teacher.name}</h5>
                    {teacher.button}
                </div>
            </div>
        </div>
    )
    return teachersHtml
}
export default OneTeacher;