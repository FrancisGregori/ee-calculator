import { IKeypadButton } from 'main/types/keypadButton'

const keypadSchema: IKeypadButton[] = [
  {
    gridArea: 'clear',
    value: 'AC',
    color: '#FFA048',
  },
  {
    gridArea: 'divide',
    value: '/',
    color: '#48BDFF',
  },
  {
    gridArea: 'multiply',
    value: '*',
    color: '#48BDFF',
  },
  {
    gridArea: 'minus',
    value: '-',
    color: '#48BDFF',
  },
  {
    gridArea: 'seven',
    value: '7',
  },
  {
    gridArea: 'eight',
    value: '8',
  },
  {
    gridArea: 'nine',
    value: '9',
  },
  {
    gridArea: 'plus',
    value: '+',
    color: '#48BDFF',
  },
  {
    gridArea: 'four',
    value: '4',
  },
  {
    gridArea: 'five',
    value: '5',
  },
  {
    gridArea: 'six',
    value: '6',
  },
  {
    gridArea: 'equal',
    value: '=',
    color: '#FFA048',
  },
  {
    gridArea: 'one',
    value: '1',
  },
  {
    gridArea: 'two',
    value: '2',
  },
  {
    gridArea: 'three',
    value: '3',
  },
  {
    gridArea: 'zero',
    value: '0',
  },
  {
    gridArea: 'dot',
    value: '.',
  },
]

export default keypadSchema
