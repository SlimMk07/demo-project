const reducerProfessors = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROF': return state.concat(action.prof)
        case 'INIT_PROFS': return (state = action.profs)
        default: return state
    }
}
export default reducerProfessors

