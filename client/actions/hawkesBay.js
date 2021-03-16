import { getWaimaramaData, getOceanData, getWaipatikiData, getTeAwangaData } from '../apis/hawkesBay'

export const SET_WAIMARAMA = 'SET_WAIMARAMA'

export function setWaimaramaData (data) {
  return {
    type: SET_WAIMARAMA,
    data
  }
}

export function fetchWaimaramaData () {
  return dispatch => {
    return getWaimaramaData()
      .then(data => {
        dispatch(setWaimaramaData(data))
        return null
      })
  }
}
