import counterReducer from './counter'
import loggedReducer from './isLogged'
import { combineReducers } from 'redux'
import { homeBanner } from './banner'

const allReducers = combineReducers({
   counter: counterReducer,
   isLogged: loggedReducer,
   homeBanner: homeBanner
})

export default allReducers