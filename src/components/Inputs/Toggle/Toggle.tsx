import { useState } from "react"
import { Ball, BallContainer, TextContainer, ToggleContainer } from "./styles"
import { IToggle } from "./IToggle";



function Toggle({ onClick, value, offContent, offContentActive, onContent, onContentActive }: IToggle) {
  const [isOn, setIsOn] = useState<boolean>(value ?? false);

  return (
    <ToggleContainer onClick={() => { setIsOn(prevState => !prevState); onClick() }}>
      <TextContainer>{isOn === false ? offContentActive : offContent}</TextContainer>

      <BallContainer>
        <Ball $on={isOn} />
      </BallContainer>

      <TextContainer>{isOn === true ? onContentActive : onContent}</TextContainer>
    </ToggleContainer>
  )
}

export {
  Toggle
}