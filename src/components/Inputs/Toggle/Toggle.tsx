import { useState } from "react";
import { Ball, BallContainer, TextContainer, ToggleContainer } from "./styles";
import { IToggle } from "./IToggle";

// Toggle component to render a customizable toggle switch
function Toggle({
  onClick,
  value,
  offContent,
  offContentActive,
  onContent,
  onContentActive,
}: IToggle) {
  // State to track the current state of the toggle switch
  const [isOn, setIsOn] = useState<boolean>(value ?? false);

  return (
    // ToggleContainer is a styled component that wraps the entire toggle switch
    <ToggleContainer
      // Click event to toggle the switch state and trigger the onClick callback
      onClick={() => {
        setIsOn((prevState) => !prevState);
        onClick();
      }}
    >
      {/* TextContainer for the content when the switch is in the off position */}
      <TextContainer>
        {isOn === false ? offContentActive : offContent}
      </TextContainer>

      {/* BallContainer is a styled component that wraps the toggle ball */}
      <BallContainer>
        {/* Ball is a styled component representing the toggle ball */}
        <Ball $on={isOn} />
      </BallContainer>

      {/* TextContainer for the content when the switch is in the on position */}
      <TextContainer>
        {isOn === true ? onContentActive : onContent}
      </TextContainer>
    </ToggleContainer>
  );
}

// Export the Toggle component for usage in other parts of the application
export { Toggle };
