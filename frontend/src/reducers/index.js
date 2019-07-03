import {combineReducers} from 'redux'

import classes from './classes'
import corses from './corses'
import professors from './professors'
import students from './students'
import user from './user'


export default combineReducers({classes, corses, students, user, professors})