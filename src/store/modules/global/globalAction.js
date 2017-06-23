import types from '../../types'

export function getSiteInfo (data) {
  return {
    type: types.GET_SITE_INFO,
    content: data
  }
}