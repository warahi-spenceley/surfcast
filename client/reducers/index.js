import { combineReducers } from 'redux'

import forecast from './forecast'
import stateAvai from './stateAvai'

export default combineReducers({
  forecast,
  stateAvai
})
