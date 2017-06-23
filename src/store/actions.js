import * as globalAction from './modules/global/globalAction'
import * as commentAction from './modules/commentList/commentAction'
import * as loadingAction from './modules/loading/loadingAction'
import * as focusAction from './modules/focus/focusAction'
import * as lazyloadAction from './modules/lazyload/lazyloadAction'
import * as detailAction from './modules/detail/detailAction'

export default {
  ...globalAction,
  ...commentAction,
  ...loadingAction,
  ...focusAction,
  ...detailAction,
  ...lazyloadAction
}
