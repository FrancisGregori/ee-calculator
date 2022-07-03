import React from 'react'

import { render, screen } from '@testing-library/react'
import { CONSTANTS } from 'main/utils/constants'

import Button from './index'

describe('Button component', () => {
  it('should render correctly', async () => {
    const { asFragment } = render(
      <Button gridArea="clear" value={CONSTANTS.CLEAR} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should contain value AC', async () => {
    render(<Button gridArea="clear" value={CONSTANTS.CLEAR} />)
    expect(screen.getByText('AC')).toBeTruthy()
  })

  it('should contain minus code', async () => {
    render(<Button gridArea="minus" value={CONSTANTS.MINUS} />)
    expect(screen.getByText('−')).toBeTruthy()
  })

  it('should contain multiply code', async () => {
    render(<Button gridArea="multiply" value={CONSTANTS.MULTIPLY} />)
    expect(screen.getByText('×')).toBeTruthy()
  })

  it('should contain plus code', async () => {
    render(<Button gridArea="plus" value={CONSTANTS.PLUS} />)
    expect(screen.getByText('+')).toBeTruthy()
  })

  it('should contain division code', async () => {
    render(<Button gridArea="divide" value={CONSTANTS.DIVIDE} />)
    expect(screen.getByText('÷')).toBeTruthy()
  })
})
