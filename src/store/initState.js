import globalInitState from './modules/global/globalInitState'
import commentInitState from './modules/commentList/commentState'
import loading from './modules/loading/loadingState'
import focus from './modules/focus/focusState'
import lazyload from './modules/lazyload/lazyloadState'
import detail from './modules/detail/detailState'

const initialState = {
  global: new globalInitState,
  comment: new commentInitState,
  loading: new loading,
  lazyload: new lazyload,
  detail: new detail,
  focus: new focus
}

export default initialState
