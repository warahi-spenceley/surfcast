import { SET_WAIMARAMA_FORECAST, SET_WAIPATIKI_FORECAST } from '../actions/hawkesBayForecast'

import { SET_LYALLBAY_FORECAST } from '../actions/wellingtonForecast'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Hawke's Bay
    case SET_WAIMARAMA_FORECAST:
      return action.data

    case SET_WAIPATIKI_FORECAST:
      return action.data
    // Wellington
    case SET_LYALLBAY_FORECAST:
      return action.data

    default:
      return state
  }
}

export default reducer
