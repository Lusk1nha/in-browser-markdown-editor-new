import { useFormContext } from "react-hook-form";
import { EyeCrossedIcon } from "../Icons/EyeCrossedIcon";
import { EyeIcon } from "../Icons/EyeIcon";
import { TopLabel } from "../TopLabel/TopLabel";
import { PreviewContainer, StyledPreview } from "./styles";

interface IPreviewProps {
  name: string;
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

function Preview({ name, isPreview, setIsPreview }: IPreviewProps) {
  const formInstance = useFormContext();

  const { watch } = formInstance;

  const text = watch(name);
  console.log(text);

  const componentIcon = !isPreview ? (
    <EyeIcon className="eye" />
  ) : (
    <EyeCrossedIcon className="crossedEye" />
  );

  return (
    <StyledPreview>
      <TopLabel
        text="Preview"
        functionalities={[
          {
            name: "openPreview",
            icon: componentIcon,
            onClick() {
              setIsPreview((prevState) => !prevState);
            },
            title: "Click here to open the preview",
          },
        ]}
      />

      <PreviewContainer></PreviewContainer>
    </StyledPreview>
  );
}

export { Preview, IPreviewProps };
