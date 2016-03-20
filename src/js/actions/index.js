import { CALL_API, Schemas } from '../middleware/api'

export const LOCATION_REQUEST = 'LOCATION_REQUEST'
export const LOCATION_SUCCESS = 'LOCATION_SUCCESS'
export const LOCATION_FAILURE = 'LOCATION_FAILURE'

// Fetches location from API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchLocation(name) {
  return {
    [CALL_API]: {
      types: [ LOCATION_REQUEST, LOCATION_SUCCESS, LOCATION_FAILURE ],
      endpoint: `locations?name=${name}`,
      schema: Schemas.LOCATION_ARRAY
    }
  }
}

// Fetches location from API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadLocation(name, requiredFields = []) {
  return (dispatch, getState) => {
    const locations = getState().entities.locations[name]
    if (locations && requiredFields.every(key => locations.hasOwnProperty(key))) {
      return null
    }

    return dispatch(fetchLocation(name))
  }
}
