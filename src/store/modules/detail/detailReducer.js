import { createReducer } from '../../../util'
import types from '../../types'
import InitState from './detailState'

export default createReducer(new InitState, {
  [`${types.SET_DETAIL}_SUCCESS`]: (state, data) => {
  	state = state.set('loading', false)
    return state.set('data', data)
  },
  [types.SET_DETAIL_LOADING]: (state, data) => {
    return state.set('loading', data)
  }
})