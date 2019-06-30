const reducerCorses=(state=[], action)=>{
    switch(action.type){
      case 'ADD_CORSE' : return state.concat(action.corse)
      case 'INIT_CORSES': return( state=action.corses)
      default : return state
    }
}
export default reducerCorses