const reducerClasses=(state=[], action)=>{
    switch(action.type){
      case 'ADD_CLASS' : return state.concat(action)
      case 'EDIT_CLASS' : {
        console.log('action', action.classe)
        let classToEdit = state.filter((el)=>el.id===action.classe.id)[0]
        if (typeof classToEdit === 'undefined') return state
        classToEdit.start = action.classe.start
        classToEdit.end = action.classe.end
        return state.map((el)=>el.id===action.classe.id ? classToEdit : el)
      }
      case 'INIT_CLASSES': return( state=action.classes)
      default : return state
    }
}
export default reducerClasses