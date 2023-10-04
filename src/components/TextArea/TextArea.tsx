import { useState } from "react"
import { TopLabel } from "../TopLabel/TopLabel"
import { StyledTextArea, Writable } from "./styles"



function TextArea() {
  const [value, setValue] = useState<string>('');

  function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputValue = event.currentTarget.value;

    if (!inputValue) {
      setValue('')
      return
    }

    if (inputValue === value) {
      return
    }

    setValue(inputValue)
  }

  return (
    <StyledTextArea>
      <TopLabel text="MARKDOWN" />
      <Writable
        name="content"
        onChange={onChange}
      />
    </StyledTextArea>
  )
}


export {
  TextArea
}