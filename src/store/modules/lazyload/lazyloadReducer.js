import { createReducer } from '../../../util'
import types from '../../types'
import InitState from './lazyloadState'

export default createReducer(new InitState, {
  [types.SET_LAZYLOAD_DATA]: (state, data) => {
    return state.set('val', data)
  }
})
