import { useState } from "react";
import { Preview } from "../Preview/Preview";
import { ITextAreaProps, TextArea } from "../TextArea/TextArea";
import { StyledContent } from "./styles"

interface IContentProps {
  textArea: ITextAreaProps;
}

function Content({ textArea: { name, title } }: IContentProps) {
  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState<boolean>(false);

  return (
    <StyledContent id="document-content">
      <TextArea
        name={name}
        title={title}
      />

      <Preview
        isPreview={isPreviewFullScreen}
        setIsPreview={setIsPreviewFullScreen}
      />
    </StyledContent>
  )
}

export { Content }