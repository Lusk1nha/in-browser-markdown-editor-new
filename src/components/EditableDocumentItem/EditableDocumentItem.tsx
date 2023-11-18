import { Controller, useFormContext } from "react-hook-form";
import { DocumentIcon } from "../Icons/DocumentIcon";

import { IEditableDocumentItem } from "./IEditableDocumentItem";
import {
  DocumentContainer,
  DocumentLabel,
  DocumentName,
  DocumentWrapper,
} from "./styles";
import { useState } from "react";

// EditableDocumentItem component for rendering an editable document item
function EditableDocumentItem({
  name,
  label,
  title,
  placeholder,
}: IEditableDocumentItem) {
  // State to track the focus state of the input field
  const [isBlur, setIsBlur] = useState<boolean>(false);

  // Access the control property from the useFormContext hook
  const { control } = useFormContext();

  return (
    <DocumentContainer className="editable-document">
      {/* DocumentIcon component for rendering an icon */}
      <DocumentIcon className="editable-document" />

      {/* DocumentWrapper is a styled component that wraps label and input */}
      <DocumentWrapper $isActive={isBlur}>
        {/* DocumentLabel component for rendering the document label */}
        <DocumentLabel aria-label={label} title={label}>
          {label}
        </DocumentLabel>

        {/* Controller component from react-hook-form for input control */}
        <Controller
          control={control}
          name={name}
          rules={{
            required: true,
          }}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <div>
                <DocumentName
                  id={`documentField-${name}`}
                  type="text"
                  title={title}
                  name={name}
                  value={value}
                  onBlur={() => {
                    setIsBlur(false);
                    onBlur();
                  }}
                  onFocus={() => setIsBlur(true)}
                  onChange={onChange}
                  placeholder={placeholder}
                />
              </div>
            );
          }}
        />
      </DocumentWrapper>
    </DocumentContainer>
  );
}

// Export the EditableDocumentItem component for usage in other parts of the application
export { EditableDocumentItem };
