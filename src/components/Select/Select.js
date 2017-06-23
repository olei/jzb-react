import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'

import './Select.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class Nodebar extends React.Component {
  constructor () {
    super()
    this.state = {
      tabShow1: false,
      tabShow2: false,
      itemTab1: [
        {'title': '全部', 'type': '0'},
        {'title': '学习考试', 'type': '1'},
        {'title': '家庭教育', 'type': '4'},
        {'title': '升学留学', 'type': '6'}
      ],
      itemTab2: [
        {'title': '最热', 'type': 'views'},
        {'title': '最新', 'type': 'new'},
        {'title': '免费', 'type': 'free'},
        {'title': '付费', 'type': 'pay'},
        {'title': '预告', 'type': 'notice'},
        {'title': '回放', 'type': 'history'},
        {'title': '系列', 'type': 'series'}
      ],
      cid: {},
      tid: {},
      query: /list\/(\d*)\/(\d*)/.exec(window.location.href)
    }
  }

  componentWillMount () {
    let [cid, tid] = [this.state.itemTab1[this.state.query[1]], this.state.itemTab2[this.state.query[2]]]
    this.setState({
      cid: cid,
      tid: tid
    })
    if (this.props.comment.cateid !== cid.type || this.props.comment.order !== tid.type) {
      this.props.setCommentCid(cid.type)
      this.props.setCommentOrder(tid.type)
      this.props.clearCommentList()
    }
    setTimeout(() => {
      if (!this.props.comment.items.length) {
        this.getData(true)
      }
    }, 0)
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.comment.lastPage === nextProps.comment.page) {
      window.removeEventListener('scroll', this.save)
      this.save = null
    } else if (!this.save) {
      this.save = this.bindScroll()
    }
    if (nextProps.comment.loading) this.props.getLoadState(1)
    else this.props.getLoadState(-1)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.save)
  }

  bindScroll () {
    const D = document.body || document.documentElement
    const _that = this
    window.addEventListener('scroll', sc, false)
    function sc () {
      if (_that.props.comment.loading) return
      if (D.scrollTop === D.scrollHeight - D.clientHeight) {
        let V = _that.props.comment.page
        _that.props.setCommentPage(V + 1)
        _that.getData()
      }
    }
    return sc
  }

  fileter (type, val) {
    window.scrollTo(0, 0)
    let [obj, state] = [{}, {tabShow1: false, tabShow2: false}]
    if (type === 'cid') {
      this.props.setCommentCid(val)
      obj = this.state.itemTab1
    } else {
      this.props.setCommentOrder(val)
      obj = this.state.itemTab2
    }
    obj.forEach((v, i) => {
      if (v.type === val) {
        if (type === 'cid') state.cid = v
        else state.tid = v
        this.setState(state)
      }
    })
    this.props.setLastPage(true)
    this.props.clearCommentList()
    this.props.setCommentPage(1)
    setTimeout(() => {
      this.getData(!0)
    }, 0)
  }

  getData (t) {
    this.props.setCommentLoading(true)
    this.props.getCommentList(this.props.comment.cateid, this.props.comment.order, this.props.comment.page)
  }

  selectFn (type) {
    switch (type) {
      case 'close':
        this.setState({
          tabShow1: false,
          tabShow2: false
        })
        break
      case 'all':
        this.setState({
          tabShow1: !this.state.tabShow1,
          tabShow2: false
        })
        break
      case 'hot':
        this.setState({
          tabShow1: false,
          tabShow2: !this.state.tabShow2
        })
        break
    }
  }

  render () {
    let tab1C = this.state.tabShow1 ? 'on' : ''
    let tab2C = this.state.tabShow2 ? 'on' : ''
    return (
      <div>
        <div className="ls-head">
          <ul className="ls-menu">
            <li className={tab1C} onClick={this.selectFn.bind(this, 'all')}><i>{this.state.cid.title}</i><span></span></li>
            <li className={tab2C} onClick={this.selectFn.bind(this, 'hot')}><i>{this.state.tid.title}</i><span></span></li>
          </ul>
          <div className="ls-mbox">
            {(() => {
              let c = 'ls-tul'
              if (this.state.tabShow1) c = 'ls-tul on'
              return <ul className={c}>
                {this.state.itemTab1.map((ii, index) => {
                  if (ii.type === this.props.comment.cateid) {
                    return (
                      <li key={ii.title} className={c}> {ii.title} </li>
                    )
                  }
                  return (
                    <Link key={ii.title} to={{pathname: `/list/${index}/${this.state.query[2]}`}} >
                      <li onClick={this.fileter.bind(this, 'cid', ii.type)}> {ii.title} </li>
                    </Link>
                  )
                })}
              </ul>
            })()}
            {(() => {
              let c = 'ls-tul'
              if (this.state.tabShow2) c = 'ls-tul on'
              return <ul className={c}>
                {this.state.itemTab2.map((ii, index) => {
                  if (ii.type === this.props.comment.order) {
                    return (
                      <li key={ii.title} className='on'> {ii.title} </li>
                    )
                  }
                  return (
                    <Link key={ii.title} to={{pathname: `/list/${this.state.query[1]}/${index}`}} >
                    <li onClick={this.fileter.bind(this, 'tid', ii.type)}> {ii.title} </li>
                    </Link>
                  )
                })}
              </ul>
            })()}
          </div>
        </div>
        {(() => {
          if (this.state.tabShow1 || this.state.tabShow2) return <div className="list_mask show" onClick={this.selectFn.bind(this, 'close')}></div>
        })()}
      </div>
    )
  }
}