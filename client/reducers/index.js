import { combineReducers } from 'redux'

import hawkesBayForecast from './hawkesBayForecast'
import waimarama from './waimarama'
import waipatiki from './waipatiki'

export default combineReducers({
  hawkesBayForecast,
  waimarama,
  waipatiki
})
