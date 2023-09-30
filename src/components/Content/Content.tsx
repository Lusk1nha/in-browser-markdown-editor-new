import { useState } from "react"
import { Preview } from "../Preview/Preview"
import { TextArea } from "../TextArea/TextArea"
import { StyledContent } from "./styles"

import { IMarkdown } from "../../shared/types/IMarkdown";



function Content() {
  const [currentDocument, setDurrentDocument] = useState<IMarkdown | null>(null);

  const [markdown, setMarkdown] = useState<string>('');

  return (
    <StyledContent>
      <TextArea />
      <Preview />
    </StyledContent>
  )
}

export {
  Content
}