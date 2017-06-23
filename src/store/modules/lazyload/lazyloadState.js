import { Record } from 'immutable'

const initState = Record({
  val: (document.body || document.documentElement).clientHeight
})

export default initState