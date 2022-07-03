import { ReactComponent as LogoIcon } from 'main/assets/logo.svg'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
`

export const Header = styled.header`
  width: 100%;
  max-width: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 48px;
  @media (max-width: 480px) {
    max-width: 248px;
  }
`
export const Logo = styled(LogoIcon)`
  max-height: 40px;
  margin-bottom: 16px;
`

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  border-top: 1px solid #fff;
  padding-top: 16px;
  line-height: 1;
`
export const Content = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  flex-direction: column;
  background: #212121;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
  padding: 24px;
  max-width: 376px;
  @media (max-width: 480px) {
    padding: 16px;
  }
`

export const Display = styled.div`
  width: 100%;
  max-width: 328px;
  height: 144px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 32px;
  text-align: right;
  flex-direction: column;
  @media (max-width: 480px) {
    padding-bottom: 16px;
    height: 114px;
    max-width: 248px;
  }
`

export const Value = styled.span<{
  ref: any
  size: number
}>`
  max-width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  @media (max-width: 480px) {
    font-size: 32px;
  }
  ${({ size }) =>
    size > 16 &&
    css`
      font-size: 24px;
      @media (max-width: 480px) {
        font-size: 18px;
      }
    `}
  ${({ size }) =>
    size > 54 &&
    css`
      font-size: 18px;
      @media (max-width: 480px) {
        font-size: 14px;
      }
    `}
  ${({ size }) =>
    size > 120 &&
    css`
      font-size: 16px;
      @media (max-width: 480px) {
        font-size: 12px;
      }
    `}
`

export const Calculation = styled.small<{ hide: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #717171;
  padding-top: 16px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  &:after {
    content: ' =';
  }

  ${({ hide }) =>
    hide &&
    css`
      opacity: 0;
    `}
`

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  grid-template-areas:
    'clear divide multiply minus'
    'seven eight nine plus'
    'four five six plus'
    'one two three equal'
    'zero zero dot equal';

  @media (max-width: 480px) {
    grid-gap: 8px;
  }
`
