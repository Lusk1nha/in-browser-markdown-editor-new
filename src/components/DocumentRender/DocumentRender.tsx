import { Suspense } from "react";

import { StyledDocumentRender } from "./styles";
import { DocumentItem } from "../DocumentItem/DocumentItem";
import { IMarkdown } from "../../shared/types/IMarkdown";

interface IDocumentRenderProps {
  markdowns?: IMarkdown[];
}

export default function DocumentRender({ markdowns }: IDocumentRenderProps) {

  markdowns = markdowns?.sort((markdownA, markdownB) => markdownB.created.localeCompare(markdownA.created))

  if (markdowns?.length === 0) {
    return null
  }

  return (
    <StyledDocumentRender>
      <Suspense fallback={<div>is Loading</div>}>
        {
          markdowns?.map((doc: any) => <DocumentItem key={doc.id} label={new Date(doc.created).toLocaleString()} name={doc.name} />)
        }
      </Suspense>
    </StyledDocumentRender>
  )
}