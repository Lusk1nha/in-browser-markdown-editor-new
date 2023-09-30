import styled from "styled-components";


const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const TextContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`


type BallContainerProps = {
  $on: boolean;
}

const BallContainer = styled.div`
  background: ${props => props.theme.colors.input.toggle.background};
  width: 48px;
  height: 24px;

  display: flex;
  position: relative;

  padding: 6px;
  border-radius: 14.5px;

  transition: all 200ms linear;

  cursor: pointer;
`

const Ball = styled.div<BallContainerProps>`
  background: ${props => props.theme.colors.input.toggle.ballBackground};
  width: 12px;
  height: 12px;
  border-radius: 50%;

  position: absolute;
  left: ${props => !props.$on ? '25%' : '75%'};
  transform: translateX(-50%);
  transition: all 300ms;
`

export {
  ToggleContainer,
  BallContainer,
  Ball,
  TextContainer
}