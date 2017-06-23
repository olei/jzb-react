import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../store/actions'
import { ActivityIndicator } from 'antd-mobile'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class MainLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  componentWillMount () {
    const D = document.body || document.documentElement
    this.props.getLazyLoad(D.scrollTop + D.clientHeight)
    window.addEventListener('scroll', () => {
      this.props.getLazyLoad(D.scrollTop + D.clientHeight)
    }, false)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.loading.show === 1) {
      this.setState({
        isLoading: true
      })
    } else {
      this.setState({
        isLoading: false
      })
    }
  }

  render () {
    return (
      <div className='main-container'>
        <div className='main-wrapper'>
          {this.props.children}
        </div>
        <ActivityIndicator
          toast
          text="正在加载"
          animating={this.state.isLoading}
        />
      </div>
    )
  }
}
