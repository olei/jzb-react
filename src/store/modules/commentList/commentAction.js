import types from '../../types'
import axios from 'axios'

export function getCommentList (cid, order, page) {
  return {
    type: types.GET_COMMENT_DATA,
    payload: {
      promise: axios.get(`/live/apilist?cateid=${cid}&order=${order}&page=${page}`)
    }
  }
}

export function clearCommentList () {
  return {
    type: types.CLEAR_COMMENT_DATA,
    content: []
  }
}

export function setCommentLoading (data) {
  return {
    type: types.SET_COMMENT_LOADING,
    content: data
  }
}

export function setLastPage (data) {
  return {
    type: types.SET_COMMENT_LASTPAGE,
    content: data
  }
}

export function setCommentCid (data) {
  return {
    type: types.SET_COMMENT_CID,
    content: data
  }
}

export function setCommentOrder (data) {
  return {
    type: types.SET_COMMENT_ORDER,
    content: data
  }
}

export function setCommentPage (data) {
  return {
    type: types.SET_COMMENT_PAGE,
    content: data
  }
}