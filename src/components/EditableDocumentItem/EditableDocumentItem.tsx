import { Controller, useFormContext } from "react-hook-form";
import { DocumentIcon } from "../Icons/DocumentIcon";

import { IEditableDocumentItem } from "./IEditableDocumentItem";
import { DocumentContainer, DocumentLabel, DocumentName, DocumentWrapper } from "./styles"
import { useState } from "react";

function EditableDocumentItem({ name, label, title, placeholder }: IEditableDocumentItem) {
  const [isBlur, setIsBlur] = useState<boolean>(false);

  const { control } = useFormContext();

  return (
    <DocumentContainer>
      <DocumentIcon className="document" />

      <DocumentWrapper $isActive={isBlur}>
        <DocumentLabel aria-label={label} title={label}>{label}</DocumentLabel>
        <Controller
          control={control}
          name={name}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <DocumentName
                id={`documentField-${name}`}
                title={title}
                name={name}
                type="text"
                value={value}
                onBlur={() => {
                  setIsBlur(false)
                  onBlur()
                }}
                onFocus={() => setIsBlur(true)}
                onChange={onChange}
                placeholder={placeholder}
              />
            )
          }}
        />
      </DocumentWrapper>
    </DocumentContainer>
  )
}

export {
  EditableDocumentItem
}