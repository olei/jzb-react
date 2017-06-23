import { createReducer } from '../../../util'
import types from '../../types'
import InitState from './loadingState'

export default createReducer(new InitState, {
  [types.LOADING_STATE]: (state, data) => {
    return state.set('show', data)
  }
})
