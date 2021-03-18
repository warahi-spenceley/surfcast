import { SET_WAIMARAMA } from '../actions/hawkesBayBeaches'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAIMARAMA:
      return action.stateAvai
    default:
      return state
  }
}

export default reducer