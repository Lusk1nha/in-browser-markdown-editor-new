import { NavigateFunction } from "react-router-dom";
import { Paths } from "../shared/enums/Paths";

// Define the properties that the useGoToNew hook accepts
type Props = {
  navigate: NavigateFunction;
};

// useGoToNew hook for navigating to the "New Markdown" page
function useGoToNew({ navigate }: Props) {
  // Use the provided navigate function to navigate to the "New Markdown" path
  return navigate(Paths.NewMarkdown);
}

// Export the useGoToNew hook for usage in other parts of the application
export { useGoToNew };
