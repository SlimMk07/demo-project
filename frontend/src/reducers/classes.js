const reducerClasses=(state=[], action)=>{
    switch(action.type){
      case 'ADD_CLASS' : return state.concat(action.class)
      case 'REMOVE_CLASS' : return state.filter((el)=>el.id!==action._id)
      case 'EDIT_CLASS' : return state.map((el)=>el.id===action.class.id ? action.class : el)
      case 'INIT_CLASSES': return( state=action.classes)
      default : return state
    }
}
export default reducerClasses