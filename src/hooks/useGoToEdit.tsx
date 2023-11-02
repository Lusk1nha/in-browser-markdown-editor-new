import { NavigateFunction } from "react-router-dom";
import { Paths } from "../shared/enums/Paths";

type Props = {
  id: string;
  navigate: NavigateFunction;
}

function useGoToEdit({ id, navigate }: Props) {
  const pathWithId = Paths.EditMarkdown.replace(':id', id);
  return navigate(pathWithId)
}

export {
  useGoToEdit
}