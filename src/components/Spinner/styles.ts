import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerLabel = styled.span`
  color: ${(props) => props.theme.colors.spinner.bar};

  font-size: 12px;
  font-weight: 400;
  margin: 8px 0px 0px;
  text-align: center;
`;

const SpinnerContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerBar = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  border: 4px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.spinner.bar}
    ${(props) => props.theme.colors.spinner.content}
    ${(props) => props.theme.colors.spinner.content};

  animation-name: spin;
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export { StyledSpinner, SpinnerLabel, SpinnerContent, SpinnerBar };
