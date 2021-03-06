import {combineReducers} from 'redux'

import classes from './classes'
import corses from './corses'
import professors from './professors'
import students from './students'
import user from './user'
import inscription from './inscription'
import enrolled from './enrolled'


export default combineReducers({classes, corses, students, user, professors, inscription, enrolled})