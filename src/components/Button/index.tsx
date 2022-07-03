import React, { FC, memo, useCallback, useEffect, useRef } from 'react'

import { useCalculatorContext } from 'main/context/CalculatorProvider'
import { IKeypadButton } from 'main/types/keypadButton'
import { CONSTANTS } from 'main/utils/constants'

import { Container } from './styles'

const Button: FC<IKeypadButton> = ({ gridArea, value, color }) => {
  const buttonRef = useRef<HTMLButtonElement>()
  const { handleCalculation } = useCalculatorContext()

  const handleKeyDown = useCallback(
    ({ key, keyCode }: { key: string; keyCode: string | number }) => {
      if (key === value || (keyCode === 13 && value === CONSTANTS.EQUAL)) {
        buttonRef.current?.focus()
        setTimeout(() => {
          buttonRef.current?.blur()
        }, 100)
      }
    },
    [value],
  )

  const handleOnClick = () => {
    handleCalculation(value)
    buttonRef.current?.blur()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const handleLabel = () => {
    switch (value) {
      case CONSTANTS.DIVIDE:
        return <>&divide;</>
      case CONSTANTS.MULTIPLY:
        return <>&times;</>
      case CONSTANTS.MINUS:
        return <>&minus;</>
      default:
        return value
    }
  }

  return (
    <Container
      color={color}
      ref={buttonRef}
      gridArea={gridArea}
      onClick={handleOnClick}
    >
      {handleLabel()}
    </Container>
  )
}

export default memo(Button)
