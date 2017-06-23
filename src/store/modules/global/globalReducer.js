import { createReducer } from '../../../util'
import types from '../../types'
import InitState from './globalInitState'

export default createReducer(new InitState, {
  [types.GET_SITE_INFO]: (state, data) => {
    return data
  }
})
