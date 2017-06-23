import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import global from './modules/global/globalReducer'
import comment from './modules/commentList/commentReducer'
import loading from './modules/loading/loadingReducer'
import focus from './modules/focus/focusReducer'
import lazyload from './modules/lazyload/lazyloadReducer'
import detail from './modules/detail/detailReducer'

export default combineReducers({
  global,
  comment,
  loading,
  focus,
  lazyload,
  detail,
  router: routeReducer
});
