export const SET_WAIMARAMA = 'SET_WAIMARAMA'
export const SET_WAIPATIKI = 'SET_WAIPATIKI'

export function setWaimarama (stateAvai) {
  return {
    type: SET_WAIMARAMA,
    stateAvai
  }
}

export function setWaipatiki (stateAvai) {
  return {
    type: SET_WAIPATIKI,
    stateAvai
  }
}
