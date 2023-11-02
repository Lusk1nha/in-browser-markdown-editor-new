import { EyeCrossedIcon } from "../Icons/EyeCrossedIcon";
import { EyeIcon } from "../Icons/EyeIcon";
import { TopLabel } from "../TopLabel/TopLabel"
import { StyledPreview } from "./styles"

interface IPreviewProps {
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

function Preview({ isPreview, setIsPreview }: IPreviewProps) {

  const componentIcon = !isPreview
    ? <EyeIcon className="eye" />
    : <EyeCrossedIcon className="crossedEye" />

  return (
    <StyledPreview>
      <TopLabel
        text="Preview"
        functionalities={[
          {
            name: "openPreview",
            icon: componentIcon,
            onClick() {
              setIsPreview(prevState => !prevState)
            },
            title: "Click here to open the preview"
          }
        ]}
      />
    </StyledPreview>
  )
}

export {
  Preview
}