const reducerCorses=(state=[], action)=>{
    switch(action.type){
      case 'ADD_CORSE' : return state.concat(action.corse)
      case 'REMOVE_CORSE' : return state.filter((el)=>el.id!==action._id)
      case 'EDIT_CORSE' : return state.map((el)=>el.id===action.corse.id ? action.corse : el)
      case 'INIT_CORSES': return( state=action.corses)
      default : return state
    }
}
export default reducerCorses