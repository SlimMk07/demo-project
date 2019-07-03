const reducerStudents=(state=[], action)=>{
  switch(action.type){
    case 'ADD_STUD' : return state.concat(action.student)
    case 'INIT_STUDS': return(state=action.students)
    default : return state
  }
}
export default reducerStudents