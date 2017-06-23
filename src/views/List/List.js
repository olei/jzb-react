import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'
import { CommentList, Select as Se } from '../../components'
import { ActivityIndicator } from 'antd-mobile'

import './List.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class ListView extends React.Component {
  constructor () {
    super()
    this.state = {
      page: 1
    }
  }

  // componentWillMount () {}

  // componentWillReceiveProps () {}

  // componentDidMount () {}

  // <div dangerouslySetInnerHTML={{__html: this.state.title}} />
  testFn () {
    this.setState({
      page: this.state.page + 1
    })
  }

  render () {
    return (
      <div className="mt">
        <Se></Se>
        <CommentList eveFn={this.testFn} ele={this} dataSource={this.props.comment.items} />
        <div className="loading-example">
          {(() => {
            if (this.props.comment.loading) return <ActivityIndicator text="加载中..." />
            if (this.props.comment.lastPage === this.props.comment.page) return <div className="move">没有更多了</div>
          })()}
        </div>
        <div style={{fontSize: '1rem'}}>{this.state.page}</div>
      </div>
    )
  }
}
