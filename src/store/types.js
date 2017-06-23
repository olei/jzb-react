import keyMirror from 'key-mirror'

export default keyMirror({
  GET_SITE_INFO: null,

  //焦点
  SET_FOCUS: null,
  SET_FOCUS_LOADING: null,

  //列表
  CLEAR_COMMENT_DATA: null,
  SET_COMMENT_LOADING: null,
  SET_COMMENT_CID: null,
  SET_COMMENT_ORDER: null,
  SET_COMMENT_PAGE: null,
  SET_COMMENT_LASTPAGE: null,
  GET_COMMENT_DATA: null,

  //detail
  SET_DETAIL: null,
  SET_DETAIL_LOADING: null,

  //加载显示
  LOADING_STATE: null,

  //懒加载
  SET_LAZYLOAD_DATA: null
})
