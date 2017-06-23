/* global describe, it, expect */
import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../../src/views/NotFound/NotFound'

describe('not found', () => {
  it('NotFound内容输出是否正确', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.contains('页面找不到')).toBe(true)
  })
  it('should render an `.icon-star`', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find('.icon-star').length).toBe(1)
  })
  it('should render an `.foo`', () => {
    const wrapper = shallow((
      <div>
        <div className="foo bax" />
        <div className="foo bar" />
        <div className="foo baz" />
      </div>
    ))

    wrapper.find('.foo').forEach((node) => {
      expect(node.hasClass('foo')).toBe(true)
    })
  })
})