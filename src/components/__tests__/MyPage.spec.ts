import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import MyPage from '../MyPage.vue'

describe('MyPage', () => {
  it('renders properly', () => {
    const wrapper = mount(MyPage, { slots: { default: 'Main Content' } })
    expect(wrapper.find('.container').text()).toContain('Main Content')
  })
})
