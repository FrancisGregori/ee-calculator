import React from 'react'

import { render } from '@testing-library/react'

import Calculator from './index'

describe('Calculator component', () => {
  it('should render correctly', async () => {
    const { asFragment } = render(<Calculator />)

    expect(asFragment()).toMatchSnapshot()
  })
})
