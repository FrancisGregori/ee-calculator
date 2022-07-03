import React, { useRef } from 'react'

import Button from 'components/Button'
import { useCalculatorContext } from 'main/context/CalculatorProvider'

import keypadSchema from './keypadSchema'
import {
  Container,
  Header,
  Logo,
  Title,
  Content,
  Display,
  Value,
  Calculation,
  Keyboard,
} from './styles'

const Calculator = () => {
  const valueRef = useRef<HTMLSpanElement>()
  const { displayValue, calculationValue } = useCalculatorContext()

  return (
    <Container>
      <Header>
        <Logo />
        <Title>EE Calculator</Title>
      </Header>
      <Content>
        <Display>
          <Value ref={valueRef} size={calculationValue.length}>
            {calculationValue}
          </Value>
          <Calculation
            hide={displayValue === 0 || !isNaN(Number(calculationValue))}
          >
            {displayValue}
          </Calculation>
        </Display>
        <Keyboard>
          {keypadSchema.map((item) => (
            <Button
              key={item.value}
              gridArea={item.gridArea}
              value={item.value}
            />
          ))}
        </Keyboard>
      </Content>
    </Container>
  )
}

export default Calculator
