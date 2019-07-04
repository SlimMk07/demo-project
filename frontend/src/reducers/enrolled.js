const reducerCorses=(state=[], action)=>{
    switch(action.type){
      case 'INIT_ENROLED': return( state=action.enrolled)
      default : return state
    }
}
export default reducerCorses