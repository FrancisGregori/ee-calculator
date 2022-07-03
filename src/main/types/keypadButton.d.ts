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
  value:
    | 'AC'
    | '/'
    | '*'
    | '-'
    | '+'
    | '='
    | '.'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
  color?: string
}