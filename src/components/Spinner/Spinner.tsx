import { SpinnerBar, SpinnerContent, SpinnerLabel, StyledSpinner } from "./styles";

interface ISpinnerProps {
  label?: string;
}

function Spinner({ label }: ISpinnerProps) {

  const labelComponent = label
    ? (
      <SpinnerLabel>
        {label}
      </SpinnerLabel>
    ) : null

  return (
    <StyledSpinner>
      <SpinnerContent>
        <SpinnerBar />
      </SpinnerContent>

      {labelComponent}
    </StyledSpinner>
  )
}

export { Spinner }