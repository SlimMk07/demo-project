const reducerCorses=(state=[], action)=>{
    switch(action.type){
      case 'INIT_INSCRIPTION': return( state=action.inscription)
      default : return state
    }
}
export default reducerCorses