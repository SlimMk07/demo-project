import React from 'react'
import './student-list.css'

function OneStudent(props) {
    const student = props.student
    let studentsHtml = []

    studentsHtml = student.map((student, i) =>
        <div key={i} className="card-deck one-student">
            <div className="card">
                <img src={student.image} className="card-img-top" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title students-name">{student.name}</h5>
                    {student.button}
                </div>
            </div>

        </div>
    )
    return studentsHtml
}
export default OneStudent;