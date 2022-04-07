import styled from 'styled-components'

export const StatusWrapper = styled.div`
  position:absolute;
  transform-origin: center center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const ChildWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
`