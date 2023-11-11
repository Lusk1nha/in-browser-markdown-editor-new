import React from "react";
import { useLocation } from "react-router-dom";

// useParamQuery hook for extracting and memoizing query parameters from the current URL
function useParamQuery() {
  // Access the search property from the current location using react-router-dom's useLocation hook
  const { search } = useLocation();

  // Use React.useMemo to memoize the URLSearchParams object based on the search value
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// Export the useParamQuery hook for usage in other parts of the application
export { useParamQuery };
