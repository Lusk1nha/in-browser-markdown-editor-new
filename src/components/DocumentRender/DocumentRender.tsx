import { Suspense } from "react";

import { StyledDocumentRender } from "./styles";
import { DocumentItem } from "../DocumentItem/DocumentItem";


export default function DocumentRender() {

  const documents: any[] = [];

  if (documents?.length === 0) {
    return null
  }

  return (
    <StyledDocumentRender>
      <Suspense fallback={<div>is Loading</div>}>
        {
          documents?.map((doc: any) => <DocumentItem key={doc.id} label={doc.created.toLocaleDateString()} name={doc.name} />)
        }
      </Suspense>
    </StyledDocumentRender>
  )
}