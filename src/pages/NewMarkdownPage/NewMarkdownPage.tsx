import { useState } from "react"
import { Preview } from "../../components/Preview/Preview"
import { TextArea } from "../../components/TextArea/TextArea"
import { StyledContent } from "./styles"



function NewMarkdownPage() {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <StyledContent>
      <TextArea />
      <Preview />
    </StyledContent>
  )
}

export {
  NewMarkdownPage
}