import styled, { css, keyframes } from "styled-components";

export const ProgressWrapper = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.2);
`

const progress = (start, end) => keyframes`
  from {
    width: ${start}%;
  }

  to {
    width: ${end}%;
  }
`

export const ProgressBar = styled.div(({ startPercent, endPercent }) => css`
    width: ${endPercent}%;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #1274B5 0%, #3FE0B1 99.71%);
    animation: ${progress(startPercent, endPercent)} 0.5s ease-in;
`)
