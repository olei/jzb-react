import types from '../../types'

export function getLoadState (data) {
  return {
    type: types.LOADING_STATE,
    content: data
  }
}