import React, {
  useContext,
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from 'react'

import useEventListener from 'main/hooks/useEventListener'
import { evaluate, format } from 'mathjs'

interface IProps {
  displayValue: number
  calculationValue: string
  handleCalculation: (v: string) => void
}

export const CalculatorContext = createContext<IProps>({
  displayValue: 0,
  calculationValue: '',
  handleCalculation: () => {},
})

const operators = ['/', '*', '-', '+']

export const useCalculatorContext = () => useContext(CalculatorContext)

export const CalculatorProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [calculationValue, setCalculationValue] = useState('')
  const [displayValue, setDisplayValue] = useState(0)

  const clearCalculation = () => {
    setDisplayValue(0)
    setCalculationValue('')
  }

  const handleBackspace = () => {
    const lastChar = calculationValue.replace(/\s/g, '').split('').pop() || ''
    const size = operators.includes(lastChar) ? 3 : 1
    setCalculationValue(
      calculationValue.substring(0, calculationValue.length - size),
    )
  }

  const handleOperators = (key: string) => {
    const lastChar = calculationValue.replace(/\s/g, '').split('').pop() || ''
    if (operators.includes(lastChar)) {
      setCalculationValue(
        `${calculationValue.substring(0, calculationValue.length - 3)} ${key} `,
      )
    } else {
      setCalculationValue(`${calculationValue} ${key} `)
    }
  }

  const handleNonOperators = (key: string) => {
    let val = `${calculationValue}${key}`

    if (key === '.') {
      const totalOfDots = val?.split(' ')?.pop()?.match(/\./g)?.length || 0

      if (totalOfDots > 1) {
        val = val.substring(0, val.length - 1)
      }
    }

    setCalculationValue(val)
  }

  const handleCalculation = (key: string): void => {
    if (!isNaN(Number(key)) || (key === '.' && calculationValue.length > 0)) {
      handleNonOperators(key)
    }
    if (operators.includes(key)) {
      handleOperators(key)
    }
    if (key === 'AC') {
      clearCalculation()
    }
    if (key === 'Backspace') {
      handleBackspace()
    }
    if (key === 'Enter' || key === '=') {
      setCalculationValue(displayValue.toString())
    }
  }

  useEffect(() => {
    const lastChar = calculationValue.trim().split('').pop() || ''

    if (!isNaN(Number(lastChar))) {
      setDisplayValue(Number(format(evaluate(calculationValue), 14)) || 0)
    }
  }, [calculationValue])

  useEventListener('keydown', ({ key }) => handleCalculation(key))

  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        calculationValue,
        handleCalculation,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContext
