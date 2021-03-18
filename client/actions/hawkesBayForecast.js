import { getWaimaramaData, getWaipatikiData } from '../apis/hawkesBay'

export const SET_WAIMARAMA_FORECAST = 'SET_WAIMARAMA_FORECAST'
export const SET_WAIPATIKI_FORECAST = 'SET_WAIPATIKI_FORECAST'

export function setWaimaramaForecast (data) {
  return {
    type: SET_WAIMARAMA_FORECAST,
    data
  }
}

export function setWaipatikiForecast (data) {
  return {
    type: SET_WAIPATIKI_FORECAST,
    data
  }
}

export function fetchWaimaramaForecast () {
  return dispatch => {
    return getWaimaramaData()
      .then(data => {
        dispatch(setWaimaramaForecast(data))
        return null
      })
  }
}

export function fetchWaipatikiForecast () {
  return dispatch => {
    return getWaipatikiData()
      .then(data => {
        dispatch(setWaipatikiForecast(data))
        return null
      })
  }
}
