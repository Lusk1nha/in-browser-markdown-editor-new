import { NavigateFunction } from "react-router-dom";
import { Paths } from "../shared/enums/Paths";

// Define the properties that the useGoToEdit hook accepts
type Props = {
  id: string;
  navigate: NavigateFunction;
};

// useGoToEdit hook for navigating to the "Edit Markdown" page
function useGoToEdit({ id, navigate }: Props) {
  // Replace the placeholder in the EditMarkdown path with the provided id
  const pathWithId = Paths.EditMarkdown.replace(":id", id);

  // Use the provided navigate function to navigate to the calculated path
  return navigate(pathWithId);
}

// Export the useGoToEdit hook for usage in other parts of the application
export { useGoToEdit };
