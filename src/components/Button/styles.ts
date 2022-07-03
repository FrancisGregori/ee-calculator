import styled, { css } from 'styled-components'

export const Container = styled.button<{
  gridArea: string
  color?: string
  ref: any
}>`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212121;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.25),
    -5px -5px 10px rgba(51, 51, 51, 0.25),
    inset -3px -3px 10px rgba(49, 49, 49, 0.25);
  height: 70px;
  width: 70px;
  border-radius: 35px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: ${({ color }) => color || '#848484'};
  outline: none !important;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }

  ${({ gridArea }) =>
    (gridArea === 'plus' || gridArea === 'equal') &&
    css`
      height: 156px;
      @media (max-width: 480px) {
        height: 96px;
      }
    `}

  ${({ gridArea }) =>
    gridArea === 'zero' &&
    css`
      width: 156px;
      @media (max-width: 480px) {
        width: 104px;
      }
    `}
  
  &:focus,
  &:active {
    box-shadow: 4px 4px 4px rgba(27, 27, 27, 0.25),
      -2px -2px 5px rgba(37, 37, 37, 0.25),
      inset 4px 4px 10px rgba(10, 10, 10, 0.25),
      inset -6px -6px 10px rgba(49, 48, 48, 0.25);
  }
`
