import { createReducer } from '../../../util'
import types from '../../types'
import InitState from './commentState'

export default createReducer(new InitState, {
  [`${types.GET_COMMENT_DATA}_SUCCESS`]: (state, data) => {
  	state = state.set('loading', false)
    state = state.set('lastPage', data.last_page)
    const arr = state.items
    arr.push(...data.data)
    return state.set('items', arr)
  },
  [types.SET_COMMENT_LASTPAGE]: (state, data) => {
    return state.set('lastPage', data)
  },
  [types.CLEAR_COMMENT_DATA]: (state, data) => {
    return state.set('items', data)
  },
  [types.SET_COMMENT_LOADING]: (state, data) => {
    return state.set('loading', data)
  },
  [types.SET_COMMENT_PAGE]: (state, data) => {
    return state.set('page', data)
  },
  [types.SET_COMMENT_CID]: (state, data) => {
    return state.set('cateid', data)
  },
  [types.SET_COMMENT_ORDER]: (state, data) => {
    return state.set('order', data)
  }
})