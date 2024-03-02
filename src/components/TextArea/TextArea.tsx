import { useContext } from "react";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { TopLabel } from "../TopLabel/TopLabel";
import { StyledTextArea, Writable } from "./styles";
import { Controller, useFormContext } from "react-hook-form";

// Define the properties that the TextArea component accepts
interface ITextAreaProps {
  name: string;
  title?: string;
  isFullScreen?: boolean;
}

// TextArea component to render a text area input with optional top label
function TextArea({ title, name, isFullScreen }: ITextAreaProps) {
  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  // Access the form context to get the control function from react-hook-form
  const { control } = useFormContext();

  return (
    // StyledTextArea is a styled component that wraps the entire text area
    <StyledTextArea $isFullScreen={isFullScreen}>
      {/* TopLabel component for rendering an optional top label */}
      <TopLabel text={strings.TextAreaTopLaneTitle} />

      {/* Controller from react-hook-form for managing the controlled input */}
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, value } }) => {
          return (
            // Writable is a styled component for the text area input
            <Writable
              title={title}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value ?? ""}
            />
          );
        }}
      />
    </StyledTextArea>
  );
}

// Export the TextArea component and its properties for usage in other parts of the application
export { TextArea, ITextAreaProps };
