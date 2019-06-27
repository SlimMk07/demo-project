const reducerStudents=(state=[], action)=>{
  switch(action.type){
    case 'ADD_STUD' : return state.concat(action.student)
    case 'REMOVE_STUD' : return state.filter((el)=>el.id!==action._id)
    case 'EDIT_STUD' : return state.map((el)=>el.id===action.student.id ? action.student : el)
    case 'INIT_STUDS': return( state=action.students)
    default : return state
  }
}
export default reducerStudents