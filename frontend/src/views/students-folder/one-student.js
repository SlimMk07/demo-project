import React from 'react'
import './student-list.css'

function OneStudent (props) {
    const student = props.student
    let studentsHtml=[]

    studentsHtml = student.map((student, i) =>
    <div key={i} className='one-student col-3'>
        <img src={student.image} alt='profile'/>
        <div className='students-name'>
            <p>{student.name}</p>
            {student.button}
        </div>
    </div>
    )
    return studentsHtml
}
export default OneStudent;