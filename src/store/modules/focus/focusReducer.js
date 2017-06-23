import { createReducer } from '../../../util'
import types from '../../types'
import InitState from './focusState'

export default createReducer(new InitState, {
  [`${types.SET_FOCUS}_SUCCESS`]: (state, data) => {
  	state = state.set('loading', false)
    return state.set('items', data)
  },
  [types.SET_FOCUS_LOADING]: (state, data) => {
    return state.set('loading', data)
  }
})