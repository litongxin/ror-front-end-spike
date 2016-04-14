import * as ActionTypes from '../../homepage/action'
import merge from '../../../node_modules/lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
function entities(state = {locations: {}}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

function ui(state = {locationsIsFetching: true}, action) {
  switch (action.type) {
    case ActionTypes.LOCATION_SUCCESS:
      return merge({}, state, {locationsIsFetching: false})
    case ActionTypes.LOCATION_FAILURE:
      return merge({}, state, {locationsIsFetching: false})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  entities,
  ui,
  routing
})

export default rootReducer
