import { combineReducers } from 'redux'

import hawkesBayForecast from './hawkesBayForecast'
import waimarama from './waimarama'

export default combineReducers({
  hawkesBayForecast,
  waimarama
})
