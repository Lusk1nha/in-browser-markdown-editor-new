import { useFormContext } from "react-hook-form";
import { EyeCrossedIcon } from "../Icons/EyeCrossedIcon";
import { EyeIcon } from "../Icons/EyeIcon";
import { TopLabel } from "../TopLabel/TopLabel";
import { PreviewContainer, StyledPreview } from "./styles";
import { useContext } from "react";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";

interface IPreviewProps {
  name: string;
  isPreview: boolean;
  setIsPreview(value: boolean): void;
}

function Preview({ name, isPreview, setIsPreview }: IPreviewProps) {
  const strings = useContext(AppLocalizationContext);

  const formInstance = useFormContext();

  const { watch } = formInstance;

  const text = watch(name);

  const componentIcon = !isPreview ? (
    <EyeIcon className="eye" />
  ) : (
    <EyeCrossedIcon className="crossedEye" />
  );

  return (
    <StyledPreview>
      <TopLabel
        text={strings.PreviewTopLaneTitle}
        functionalities={[
          {
            name: "openPreview",
            icon: componentIcon,
            onClick() {
              setIsPreview(!isPreview);
            },
            title: strings.PreviewButtonOpenTitle,
          },
        ]}
      />

      <PreviewContainer>{text}</PreviewContainer>
    </StyledPreview>
  );
}

export { Preview, IPreviewProps };
