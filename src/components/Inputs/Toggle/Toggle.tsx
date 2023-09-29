import { useState } from "react"
import { Ball, BallContainer, TextContainer, ToggleContainer } from "./styles"
import { IToggle } from "./IToggle";



function Toggle({ onClick, value }: IToggle) {
  const [isOn, setIsOn] = useState<boolean>(value ?? false);

  return (
    <ToggleContainer onClick={() => { setIsOn(prevState => !prevState); onClick() }}>
      <TextContainer>Off</TextContainer>
      <BallContainer>
        <Ball on={isOn} />
      </BallContainer>
      <TextContainer>On</TextContainer>
    </ToggleContainer>
  )
}

export {
  Toggle
}