import { combineReducers } from 'redux'

import { connectRouter } from 'connected-react-router'


const initialState = {
  number: 1
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export default (history) => combineReducers({
  router: connectRouter(history),
  reducers(state = initialState, action) {
      if(action.type === INCREASE) {
        return { number: state.number + action.amount }
      }
        else if (action.type === DECREASE) {
        return { number: state.number - action.amount }
      }
      return state
  }
})
