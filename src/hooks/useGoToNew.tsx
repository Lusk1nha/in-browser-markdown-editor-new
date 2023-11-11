import { NavigateFunction } from "react-router-dom";
import { Paths } from "../shared/enums/Paths";

type Props = {
  navigate: NavigateFunction;
};

function useGoToNew({ navigate }: Props) {
  return navigate(Paths.NewMarkdown);
}

export { useGoToNew };
