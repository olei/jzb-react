import types from '../../types'

export function getLazyLoad (data) {
  return {
    type: types.SET_LAZYLOAD_DATA,
    content: data
  }
}