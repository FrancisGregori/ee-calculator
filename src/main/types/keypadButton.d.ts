import { CONSTANTS } from 'main/utils/constants'

type Keys = keyof typeof CONSTANTS
export type ValueTypes = typeof CONSTANTS[Keys]

export interface IKeypadButton {
  gridArea:
    | 'clear'
    | 'divide'
    | 'multiply'
    | 'minus'
    | 'plus'
    | 'equal'
    | 'dot'
    | 'zero'
    | 'one'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
  value: ValueTypes
  color?: string
}
