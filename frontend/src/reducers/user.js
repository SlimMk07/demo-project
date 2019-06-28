const reducerUser=(state={isConnected: false, connection: null}, action)=>{
    switch(action.type){
      case 'CONNECT' : return {isConnected: true, connection: action.connection}
      case 'DISCONNECT' : return {isConnected: false, connection: null}
      default : return state
    }
}
export default reducerUser