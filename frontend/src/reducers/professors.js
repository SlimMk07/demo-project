const reducerProfessors = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROF': return state.concat(action.prof)
        case 'REMOVE_PROF': return state.filter((el) => el.id !== action._id)
        case 'EDIT_PROF': return state.map((el) => el.id === action.prof.id ? action.prof : el)
        case 'INIT_PROFS': return (state = action.profs)
        default: return state
    }
}
export default reducerProfessors

