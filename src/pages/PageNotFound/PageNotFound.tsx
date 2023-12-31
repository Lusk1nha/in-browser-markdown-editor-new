import { useContext } from "react";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { StyledPageNotFound, Text } from "./styles";

// PageNotFound component for rendering the 404 - Page not found message
function PageNotFound() {
  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  return (
    // StyledPageNotFound is a styled component for the page not found container
    <StyledPageNotFound>
      {/* Text component for rendering the actual error message */}
      <Text>{strings.NotFoundText}</Text>
    </StyledPageNotFound>
  );
}

// Export an object with a property named Page, containing the PageNotFound component
export default Object.assign({
  Page: <PageNotFound />,
}) as {
  Page: React.ReactNode;
};
