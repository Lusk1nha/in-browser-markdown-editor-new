import { ErrorText, StyledErrorPage } from "./styles";

// ErrorPage component to display a generic error message
function ErrorPage() {
  return (
    // StyledErrorPage is a styled component for the entire error page
    <StyledErrorPage>
      {/* ErrorText is a styled component for rendering the error message */}
      <ErrorText>An error has occurred!</ErrorText>
    </StyledErrorPage>
  );
}

// Export the ErrorPage component for usage in other parts of the application
export { ErrorPage };
