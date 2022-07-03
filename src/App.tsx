import React from 'react'

import Calculator from 'components/Calculator'
import { CalculatorProvider } from 'main/context/CalculatorProvider'

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  )
}

export default App
