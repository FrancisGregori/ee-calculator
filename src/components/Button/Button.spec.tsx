import React from 'react'

import { render, screen } from '@testing-library/react'

import Button from './index'

describe('Button component', () => {
  const { asFragment } = render(<Button gridArea="clear" value="AC" />)
  it('should render correctly', async () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should contain value "AC"', async () => {
    const buttonLabel = screen.getByText('AC')
    expect(buttonLabel).toBeTruthy()
  })
})
