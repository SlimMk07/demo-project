const reducerUser=(state={isConnected: false, user: null}, action)=>{
    switch(action.type){
      case 'CONNECT' : return {isConnected: true}
      case 'DISCONNECT' : return {isConnected: false}
      default : return state
    }
}
export default reducerUser