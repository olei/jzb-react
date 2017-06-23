import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../store/actions'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class MainLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  constructor () {
    super()
    this.state = {
      names: 'jzb fe framework'
    }
  }

  render () {
    return (
      <div className='main-container'>
        <div className='main-wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
