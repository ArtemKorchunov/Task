import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'
import users from './users'
import curse from './curse'
export default combineReducers({
  routing: routerReducer,
  users,
  curse
})
