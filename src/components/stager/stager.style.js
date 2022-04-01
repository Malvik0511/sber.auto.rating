import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    margin-bottom: -12px;
`

const lineStyle = css`
        content: '';
        height: 100%;
        width: 2px;
        background: #E5E5E5;
        left: 50%;
        transform: translate(-50%, 0);
        top: 26px;
        position: absolute;
`

export const Step = styled.li`
    position: relative;
    flex-shrink: 0;
    margin-bottom: 26px;
`

export const StepContentWrapper = styled.div`
  display: flex;
`

export const StepTextWrapper = styled.div`
  text-align: left;
`

export const ListPointer = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: white;
  color: black;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PointerWrapper = styled.div(({ isLast }) => css`
  position: relative;
  margin-right: 18px;
  &::after {
    ${!isLast && lineStyle};
  }
`)

