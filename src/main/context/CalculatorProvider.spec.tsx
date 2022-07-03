import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { CalculatorProvider, CalculatorContext } from './CalculatorProvider'

const customRender = (ui: React.ReactNode) => {
  return render(<CalculatorProvider>{ui}</CalculatorProvider>)
}

describe('CalculatorContext', () => {
  it('displayValue is zero by default', () => {
    customRender(
      <CalculatorContext.Consumer>
        {(value) => <span>Should be: {value.displayValue}</span>}
      </CalculatorContext.Consumer>,
    )

    expect(screen.getByText('Should be: 0')).toBeTruthy()
  })

  it('calculationValue is empty by default', () => {
    customRender(
      <CalculatorContext.Consumer>
        {(value) => <span>Should be empty{value.calculationValue}</span>}
      </CalculatorContext.Consumer>,
    )

    expect(screen.getByText('Should be empty')).toBeTruthy()
  })

  it('should change calculationValue to 5 and after that clear the value', () => {
    customRender(
      <CalculatorContext.Consumer>
        {({ calculationValue, handleCalculation }) => (
          <>
            <span>
              {calculationValue ? `Should be: ${calculationValue}` : 'Is empty'}
            </span>
            <button onClick={() => handleCalculation('5')} data-testid="add" />
            <button onClick={() => handleCalculation('AC')} data-testid="ac" />
          </>
        )}
      </CalculatorContext.Consumer>,
    )

    fireEvent.click(screen.getByTestId('add'))
    expect(screen.getByText('Should be: 5')).toBeTruthy()

    fireEvent.click(screen.getByTestId('ac'))
    expect(screen.getByText('Is empty')).toBeTruthy()
  })

  describe('.handleBackspace', () => {
    it('should change calculationValue to 555 and using handleBackspace function go back to 5', () => {
      customRender(
        <CalculatorContext.Consumer>
          {({ calculationValue, handleCalculation }) => (
            <>
              <span>Should be: {calculationValue}</span>
              <button
                onClick={() => handleCalculation('5')}
                data-testid="add"
              />
              <button
                onClick={() => handleCalculation('Backspace')}
                data-testid="backspace"
              />
            </>
          )}
        </CalculatorContext.Consumer>,
      )

      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('add'))
      expect(screen.getByText('Should be: 555')).toBeTruthy()

      fireEvent.click(screen.getByTestId('backspace'))
      fireEvent.click(screen.getByTestId('backspace'))
      expect(screen.getByText('Should be: 5')).toBeTruthy()
    })
  })

  describe('.handleOperators and .handleNonOperators', () => {
    it('should handle with the insertion of numbers and operators', () => {
      customRender(
        <CalculatorContext.Consumer>
          {({ calculationValue, handleCalculation }) => (
            <>
              <span>Should be: {calculationValue}</span>
              <button
                onClick={() => handleCalculation('5')}
                data-testid="add"
              />
              <button
                onClick={() => handleCalculation('.')}
                data-testid="dot"
              />
              <button
                onClick={() => handleCalculation('-')}
                data-testid="minus"
              />
              <button
                onClick={() => handleCalculation('+')}
                data-testid="plus"
              />
            </>
          )}
        </CalculatorContext.Consumer>,
      )

      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('dot'))
      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('plus'))
      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('minus'))
      fireEvent.click(screen.getByTestId('add'))
      expect(screen.getByText('Should be: 5.5 + 5 - 5')).toBeTruthy()
    })
  })

  describe('Do the math', () => {
    it('should do the math of the context', () => {
      customRender(
        <CalculatorContext.Consumer>
          {({ calculationValue, displayValue, handleCalculation }) => (
            <>
              <span>Total: {calculationValue}</span>
              <span>Display: {displayValue}</span>
              <button
                onClick={() => handleCalculation('5')}
                data-testid="add"
              />
              <button
                onClick={() => handleCalculation('*')}
                data-testid="multiply"
              />
              <button
                onClick={() => handleCalculation('Enter')}
                data-testid="equal"
              />
            </>
          )}
        </CalculatorContext.Consumer>,
      )

      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('multiply'))

      expect(screen.getByText('Display: 5')).toBeTruthy()

      fireEvent.click(screen.getByTestId('add'))
      fireEvent.click(screen.getByTestId('equal'))

      expect(screen.getByText('Total: 25')).toBeTruthy()
      expect(screen.getByText('Display: 25')).toBeTruthy()
    })
  })
})
