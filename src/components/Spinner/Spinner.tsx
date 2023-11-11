import {
  SpinnerBar,
  SpinnerContent,
  SpinnerLabel,
  StyledSpinner,
} from "./styles";

// Define the properties that the Spinner component accepts
interface ISpinnerProps {
  label?: string;
}

// Spinner component to render a loading spinner with an optional label
function Spinner({ label }: ISpinnerProps) {
  // Conditionally render the label component if a label is provided
  const labelComponent = label ? <SpinnerLabel>{label}</SpinnerLabel> : null;

  return (
    <StyledSpinner>
      {/* SpinnerContent is a styled component for the spinner content */}
      <SpinnerContent>
        {/* SpinnerBar is a styled component for the loading spinner animation */}
        <SpinnerBar />
      </SpinnerContent>

      {/* Render the label component if a label is provided */}
      {labelComponent}
    </StyledSpinner>
  );
}

// Export the Spinner component for usage in other parts of the application
export { Spinner };
