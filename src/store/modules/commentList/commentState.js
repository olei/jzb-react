import { Record } from 'immutable'

const initState = Record({
  loading: false,
  page: 1,
  cateid: '0',
  order: 'views',
  items: [],
  lastPage: null
})

export default initState