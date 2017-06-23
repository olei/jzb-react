import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'
import { WingBlank, Tabs } from 'antd-mobile'
const TabPane = Tabs.TabPane

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class HomeView extends React.Component {
  constructor () {
    super()
    this.state = {
      val: 'route go'
    }
  }

  callback (key) {
    console.log(key)
  }

  render () {
    return (
      <div style={{ padding: '0.3rem 0' }}>
        <WingBlank>
          {this.props.global.name}
        </WingBlank>
        <WingBlank size="md">
          {this.props.global.data}
          <Link to={{pathname: '/not'}} >{this.state.val}</Link>
        </WingBlank>
        <WingBlank>
          <Tabs defaultActiveKey="2" onChange={this.callback.bind(this)}>
            <TabPane tab="选项卡一" key="1">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                选项卡一内容
              </div>
            </TabPane>
            <TabPane tab="选项卡二" key="2">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                选项卡二内容
              </div>
            </TabPane>
            <TabPane tab="选项卡三" key="3">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                选项卡三内容
              </div>
            </TabPane>
          </Tabs>
        </WingBlank>
      </div>
    )
  }
}
