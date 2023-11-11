import { useContext } from "react";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { ErrorText, StyledErrorPage } from "./styles";

// ErrorPage component to display a generic error message
function ErrorPage() {
  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  return (
    // StyledErrorPage is a styled component for the entire error page
    <StyledErrorPage>
      {/* ErrorText is a styled component for rendering the error message */}
      <ErrorText>{strings.ErrorMessage}</ErrorText>
    </StyledErrorPage>
  );
}

// Export the ErrorPage component for usage in other parts of the application
export { ErrorPage };
