import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name="loading"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick', () => {
        const fn = jest.fn()
        const component = mount(<Icon name="loading" onClick={fn}/>)//创建
        component.find('svg').simulate('click')//模拟点击
        expect(fn).toBeCalled()
    })
})