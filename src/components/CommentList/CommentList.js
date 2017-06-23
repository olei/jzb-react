import React from 'react'
import { Link } from 'react-router'
import LazyLoad from '../LazyLoad/LazyLoad'

import './CommentList.less'

export default class Nodebar extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <ul className="plr20">
        {this.props.dataSource.map((item, index) => {
          return (
            <Link to={{pathname: `/liView/${item.id}`}} key={item.id}>
              <li className="ls-li">
                <div className="ab">
                  <LazyLoad imgbg={ require('../../assets/images/bg.png') } soc={item.cover} classN="b-loaded" index={index}></LazyLoad>
                  <p className="ls-ltil">{item.name}</p>
                  <p className="ls-ltime">{item.stime}—{item.etime}</p>
                  <p className="ls-cost">
                    <span className="ls-cost01">￥{item.price}</span>
                    <span className="ls-cost02">￥{item.orig_price}</span>
                  </p>
                </div>
              </li>
            </Link>
          )
        })}
        <li style={{fontSize: '1rem'}} onClick={this.props.eveFn.bind(this.props.ele)}>click</li>
      </ul>
    )
  }
}