import { TopLabel } from "../TopLabel/TopLabel"
import { StyledTextArea, Writable } from "./styles"
import { Controller, useFormContext } from "react-hook-form";

interface ITextAreaProps {
  name: string;
}


function TextArea({ name }: ITextAreaProps) {
  const { control } = useFormContext();

  return (
    <StyledTextArea>
      <TopLabel text="Markdown" />
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, value } }) => {
          return (
            <Writable
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )
        }}
      />
    </StyledTextArea>
  )
}


export {
  TextArea
}