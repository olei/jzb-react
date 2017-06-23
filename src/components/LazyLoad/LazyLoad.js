import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)

export default class LazyLaod extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      top: null
    }
  }

  componentDidMount () {
    this.pic = this.props.imgbg
    const eve = this.refs['pic']
    this.getPar(eve)
  }

  // componentWillReceiveProps () {
  //   console.log(this.state.top + '------' + this.props.lazyload.val)
  // }

  getPar (eve) {
    const neve = eve.parentNode.tagName.toLowerCase()
    if (neve !== 'li') this.getPar(eve.parentNode)
    else {
      this.setState({
        top: eve.offsetTop
      })
    }
  }

  render () {
    if ((this.state.top <= this.props.lazyload.val) && (this.pic !== this.props.soc)) {
      this.pic = this.props.soc
    }
    return (
      <div ref='pic'>
        <img className={this.props.classN} src={this.pic} />
      </div>
    )
  }
}