import styled, { css } from "styled-components";

export const ProgressWrapper = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.2);
`

export const ProgressBar = styled.div(({ percent, mounted }) => css`
    width: ${mounted ? percent : 0}%;
    transition: width 0.5s ease-in;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #1274B5 0%, #3FE0B1 99.71%);
    
`)
