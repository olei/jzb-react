import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'
import { ActivityIndicator, Tabs } from 'antd-mobile'

const TabPane = Tabs.TabPane

import './Live.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class LiveView extends React.Component {
  constructor () {
    super()
    this.state = {
      fix: false,
      series: true,
      query: /liView\/(\d*)/.exec(window.location.href)
    }
  }

  componentWillMount () {
    const {setDetailLoading, getDetailData} = this.props
    setDetailLoading(true)
    getDetailData(this.state.query[1], window.debug)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      series: !!nextProps.detail.data.is_series
    })
  }

  componentDidMount () {
    let config = {
      elid: 'con1',
      autostart: true,
      server: this.server,
      url: this.musicUrl,
      duration: 3600,
      skin: 'vodMobileTransparent',
      topbardisplay: 'disable',
      playsinline: true
    }
    this.player = new window.Sewise.SewisePlayer(config)
    console.log(this.player)
    this.player.on('fullScreen', () => {
      config.playsinline = false
    })
    this.player.startup()
  }

  callback (key) {
    console.log('onChange', key)
  }

  handleTabClick (key) {
    console.log('onTabClick', key)
  }

  render () {
    let [c, series = '', notes = ''] = [this.state.fix ? 's_head fixed' : 's_head absed']
    /* tabs series */
    if (this.state.series) {
      series = (
        <TabPane tab="课表" key="2">
          <div className="txt">
             课表内容
          </div>
        </TabPane>
      )
    }
    /* detail */
    /* notes */
    if (this.props.detail.data.notes) {
      notes = (
        <div>
          <p className="ls-hr"></p>
          <p className="sl-til">
            <span className="sl-hline"></span>
            <span className="sl-htil">购买须知</span>
          </p>
          <div className="swrapper" dangerouslySetInnerHTML={{__html: this.props.detail.data.notes}} />
        </div>
      )
    }
    return (
      <div className="s_wrap">
        <div id="con1">1</div>
        <div className={c}>
          <Tabs defaultActiveKey="1" animated={false} onChange={this.callback} onTabClick={this.handleTabClick}>
            <TabPane tab="详情" key="1">
              <div className="txt">
                {notes}
              </div>
            </TabPane>
            {series}
            <TabPane tab="交流" key="3">
              <div className="txt">
                 交流内容
              </div>
            </TabPane>
            <TabPane tab="评价" key="4">
              <div className="txt">
                 评价内容
              </div>
            </TabPane>
          </Tabs>
        </div>
        <ActivityIndicator
          toast
          text="正在加载"
          animating={this.props.detail.loading}
        />
      </div>
    )
  }
}
