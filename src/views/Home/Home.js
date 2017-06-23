import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'
import { Carousel, ActivityIndicator } from 'antd-mobile'

import './Home.less'

@connect(
  // state => ({...state}),
  (state) => {
    return {
      focus: state.focus,
      loading: state.loading
    }
  },
  dispatch => bindActionCreators(Action, dispatch)
)
export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialHeight: 100,
      animating: false
    }
  }

  componentWillMount () {}

  componentDidMount () {
    const {focus, setFocusLoading, getfocusList, getLoadState} = this.props
    if (focus.items.length) return
    setFocusLoading(true)
    getfocusList()
  }

  componentWillUnmount () {}

  componentWillReceiveProps (nextProps) {
    if (nextProps.focus.loading) this.props.getLoadState(1)
    else this.props.getLoadState(-1)
  }

  render () {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {}
    const loading = this.props.focus.loading
    const show = loading ? { display: 'none' } : { display: 'block' }
    return (
      <div>
        <div style={show}>
          <Carousel
            className="my-carousel" autoplay={true} infinite selectedIndex={0}
            position="BottomLeft"
          >
            {this.props.focus.items.map(ii => (
              <a href={ii.url} key={ii.id} style={hProp}>
                <img
                  src={ ii.cover }
                  style={{height: '2.5rem', width: '100%'}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'))
                    this.setState({
                      initialHeight: null
                    })
                  }}
                />
              </a>
            ))}
          </Carousel>
          <ul className="type">
            <li>
              <div className="tbox">
                <Link to={{pathname: '/list/2/0'}} >
                  <img src={ require('../../assets/images/type1.png') } className="vt" />
                  <span>家庭教育</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="tbox">
                <Link to={{pathname: '/list/1/0'}} >
                  <img src={ require('../../assets/images/type2.png') } className="vt" />
                  <span>学习考试</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="tbox">
                <Link to={{pathname: '/list/3/0'}} >
                  <img src={ require('../../assets/images/type3.png') } className="vt" />
                  <span>升学留学</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="tbox">
                <img src={ require('../../assets/images/type4.png') } className="vt" />
                <span>专家问答</span>
              </div>
            </li>
          </ul>
          <p className="ls-hr"></p>
          <div className="hot">
            <div className="rec l">
              <a className="recp db">
                <img className="vt" src='https://wxatth-dev.jzb.com/uploads/20161125/9af82e2e0e527c527fc8ae9501303021.gif' />
                <span>每日推荐</span>
              </a>
              <a className="rectil db">每日推荐-网址</a>
            </div>
            <div className="info r">
              <a className="my">
                <span>我的课程</span>
                <img src={ require('../../assets/images/sign1.png') } />
              </a>
              <div className="mybom">
                <span className="top l">
                  <i>畅销排行</i>
                  <img src={ require('../../assets/images/sign2.png') } />
                </span>
                <span className="free r">
                  <i>免费精选</i>
                  <img src={ require('../../assets/images/sign3.png') } />
                </span>
              </div>
            </div>
          </div>
          <p className="ls-hr"></p>
        </div>
      </div>
    )
  }
}
