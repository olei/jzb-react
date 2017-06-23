import types from '../../types'
import axios from 'axios'

export function getfocusList () {
  return {
    type: types.SET_FOCUS,
    payload: {
      promise: axios.get('/live/index/lbt')
      // promise: fetch('/live/index/lbt')
    }
  }
}

export function setFocusLoading (data) {
  return {
    type: types.SET_FOCUS_LOADING,
    content: data
  }
}