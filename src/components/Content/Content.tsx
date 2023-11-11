import { useState } from "react";
import { Preview } from "../Preview/Preview";
import { ITextAreaProps, TextArea } from "../TextArea/TextArea";
import { StyledContent } from "./styles";

// Define the properties that the Content component accepts
interface IContentProps {
  textArea: ITextAreaProps;
}

// Content component containing a TextArea and Preview
function Content({ textArea: { name, title } }: IContentProps) {
  // State to track the full-screen mode of the Preview component
  const [isPreviewFullScreen, setIsPreviewFullScreen] =
    useState<boolean>(false);

  return (
    <StyledContent id="document-content">
      {/* TextArea for editing the document content */}
      <TextArea name={name} title={title} isFullScreen={isPreviewFullScreen} />

      {/* Preview component to show a live preview of the document */}
      <Preview
        name={name}
        isPreview={isPreviewFullScreen}
        setIsPreview={setIsPreviewFullScreen}
      />
    </StyledContent>
  );
}

// Export the Content component for usage in other parts of the application
export { Content };
