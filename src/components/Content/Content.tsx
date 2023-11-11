import { useEffect, useState } from "react";
import { Preview } from "../Preview/Preview";
import { ITextAreaProps, TextArea } from "../TextArea/TextArea";
import { StyledContent } from "./styles";
import { isTrue } from "../../shared/utils/DataTypes";
import { useSearchParams } from "react-router-dom";

// Define the properties that the Content component accepts
interface IContentProps {
  textArea: ITextAreaProps;
}

// Content component containing a TextArea and Preview
function Content({ textArea: { name, title } }: IContentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFullscreen = searchParams.get("isFullScreen");

  // State to track the full-screen mode of the Preview component
  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState<boolean>(
    isFullscreen === "true"
  );

  /**
   * Sets the preview fullscreen value in search parameters and updates the local state.
   * @param {boolean} value - The new value for the preview fullscreen mode.
   */
  function setPreviewInSearch(value: boolean): void {
    // Convert boolean to string for search parameter
    const valueString = String(value);

    // Update search parameters
    setSearchParams({ isFullScreen: valueString });

    // Update local state
    setIsPreviewFullScreen(value);
  }

  useEffect(() => {
    const isFullscreenSearch = searchParams.get("isFullScreen");
    const isFullscreenBoolean = isTrue(isFullscreenSearch);

    if (isFullscreenBoolean !== isPreviewFullScreen) {
      setIsPreviewFullScreen(isFullscreenBoolean);
    }
  }, [searchParams]);

  return (
    <StyledContent id="document-content">
      {/* TextArea for editing the document content */}
      <TextArea name={name} title={title} isFullScreen={isPreviewFullScreen} />

      {/* Preview component to show a live preview of the document */}
      <Preview
        name={name}
        isPreview={isPreviewFullScreen}
        setIsPreview={setPreviewInSearch}
      />
    </StyledContent>
  );
}

// Export the Content component for usage in other parts of the application
export { Content };
