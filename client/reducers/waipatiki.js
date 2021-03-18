import { SET_WAIPATIKI } from '../actions/hawkesBayBeaches'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAIPATIKI:
      return action.stateAvai
    default:
      return state
  }
}

export default reducer
