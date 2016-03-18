import * as ActionTypes from '../actions'
import merge from '../../../node_modules/lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { locations: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

const rootReducer = combineReducers({
  entities,
  routing
})

export default rootReducer
