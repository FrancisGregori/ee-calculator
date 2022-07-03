import { IKeypadButton } from 'main/types/keypadButton'
import { CONSTANTS } from 'main/utils/constants'

const keypadSchema: IKeypadButton[] = [
  {
    gridArea: 'clear',
    value: CONSTANTS.CLEAR,
    color: '#FFA048',
  },
  {
    gridArea: 'divide',
    value: CONSTANTS.DIVIDE,
    color: '#48BDFF',
  },
  {
    gridArea: 'multiply',
    value: CONSTANTS.MULTIPLY,
    color: '#48BDFF',
  },
  {
    gridArea: 'minus',
    value: CONSTANTS.MINUS,
    color: '#48BDFF',
  },
  {
    gridArea: 'seven',
    value: CONSTANTS.SEVEN,
  },
  {
    gridArea: 'eight',
    value: CONSTANTS.EIGHT,
  },
  {
    gridArea: 'nine',
    value: CONSTANTS.NINE,
  },
  {
    gridArea: 'plus',
    value: CONSTANTS.PLUS,
    color: '#48BDFF',
  },
  {
    gridArea: 'four',
    value: CONSTANTS.FOUR,
  },
  {
    gridArea: 'five',
    value: CONSTANTS.FIVE,
  },
  {
    gridArea: 'six',
    value: CONSTANTS.SIX,
  },
  {
    gridArea: 'equal',
    value: CONSTANTS.EQUAL,
    color: '#FFA048',
  },
  {
    gridArea: 'one',
    value: CONSTANTS.ONE,
  },
  {
    gridArea: 'two',
    value: CONSTANTS.TWO,
  },
  {
    gridArea: 'three',
    value: CONSTANTS.THREE,
  },
  {
    gridArea: 'zero',
    value: CONSTANTS.ZERO,
  },
  {
    gridArea: 'dot',
    value: CONSTANTS.DOT,
  },
]

export default keypadSchema
