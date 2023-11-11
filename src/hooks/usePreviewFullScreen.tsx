import { SetURLSearchParams } from "react-router-dom";

// Define the properties that the useGoToEdit hook accepts
type Props = {
  value: boolean;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

function usePreviewFullScreen({ value, searchParams, setSearchParams }: Props) {
  return () => {
    const valueString = String(value);
    searchParams.set("isFullScreen", valueString);

    setSearchParams(searchParams);
  };
}

export { usePreviewFullScreen };
