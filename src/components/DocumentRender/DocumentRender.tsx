import { Suspense } from "react";

import { StyledDocumentRender } from "./styles";
import { DocumentItem } from "../DocumentItem/DocumentItem";
import Markdown from "../../services/Markdown";
import { format } from "date-fns";
import { Spinner } from "../Spinner/Spinner";

interface IDocumentRenderProps {
  markdowns?: Markdown[];
}

export default function DocumentRender({ markdowns }: IDocumentRenderProps) {

  function mountLabel(date: Date | string) {
    const inDate = new Date(date);

    const formattedLabel = format(inDate, 'dd MMMM yyyy');

    return formattedLabel
  }

  function sortMarkdownsByCreatedDate(markdowns: Markdown[]) {
    return markdowns?.sort((markdownA, markdownB) => markdownB.created.localeCompare(markdownA.created))
  }

  if (!markdowns) {
    return null
  }

  return (
    <StyledDocumentRender>
      <Suspense fallback={
        <Spinner />
      }>
        {
          sortMarkdownsByCreatedDate(markdowns)?.map(doc =>
            <DocumentItem
              key={doc.id}
              id={doc.id}
              title={`Click here to access the document ${doc.name}`}
              label={{
                text: mountLabel(doc.created),
                title: new Date(doc.created).toLocaleString()
              }}
              name={doc.name}
            />
          )
        }
      </Suspense>
    </StyledDocumentRender>
  )
}