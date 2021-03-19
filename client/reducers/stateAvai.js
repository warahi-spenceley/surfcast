import { SET_WAIMARAMA, SET_WAIPATIKI } from '../actions/hawkesBayBeaches'

import { SET_LYALLBAY } from '../actions/wellingtonSpots'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Hawke's Bay
    case SET_WAIMARAMA:
      return {
        waimarama: action.stateAvai
      }
    case SET_WAIPATIKI:
      return {
        waipatiki: action.stateAvai
      }
    // Wellington
    case SET_LYALLBAY:
      return {
        lyallbay: action.stateAvai
      }

    default:
      return state
  }
}

export default reducer
