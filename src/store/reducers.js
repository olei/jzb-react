import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import global from './modules/global/globalReducer'

export default combineReducers({
  global,
  router: routeReducer
});
