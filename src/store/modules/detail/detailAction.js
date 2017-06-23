import types from '../../types'
import axios from 'axios'

export function getDetailData (cid, debug) {
  return {
    type: types.SET_DETAIL,
    payload: {
      promise: axios.get(`/mcourse/api/detail/${cid}?${debug}`)
    }
  }
}

export function setDetailLoading (data) {
  return {
    type: types.SET_DETAIL_LOADING,
    content: data
  }
}