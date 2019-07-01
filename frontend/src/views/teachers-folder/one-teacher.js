import React from 'react'
import './teacher-list.css'

function OneTeacher (props) {
    const teacher = props.teacher
    let teachersHtml=[]

    teachersHtml = teacher.map((teacher, i) =>
    <div key={i} className='one-teacher col-3'>
        <img src={teacher.image} alt='image'/>
        <div className='teachers-name'>
            <p>{teacher.name}</p>
            {teacher.button}
        </div>
    </div>
    )
    return teachersHtml
}
export default OneTeacher;