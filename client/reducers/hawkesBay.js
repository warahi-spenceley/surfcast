import { SET_WAIMARAMA } from '../actions/hawkesBay'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAIMARAMA:
      return action.data
    default:
      return state
  }
}

export default reducer
