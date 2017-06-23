import React from 'react'
import ReactDOM from 'react-dom'
import store from 'STORE'
import { Provider } from 'react-redux'
import { Router, useRouterHistory, hashHistory } from 'react-router'
import { createHistory } from 'history'
import route from 'ROUTE'
const FastClick = require('fastclick')
FastClick.attach(document.body)

import 'antd/style/index.less'

const history = useRouterHistory(createHistory)({ basename: '' })
const target = document.getElementById('app')

class Root extends React.Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Router history={history} routes={route(store)}/>
          </div>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<Root/>, target)
