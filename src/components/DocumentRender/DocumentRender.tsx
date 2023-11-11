import { Suspense } from "react";

import { StyledDocumentRender } from "./styles";
import { DocumentItem } from "../DocumentItem/DocumentItem";
import Markdown from "../../services/Markdown";
import { format } from "date-fns";
import { Spinner } from "../Spinner/Spinner";
import { Paths } from "../../shared/enums/Paths";
import { useNavigate } from "react-router-dom";

interface IDocumentRenderProps {
  markdowns?: Markdown[];
}

export default function DocumentRender({ markdowns }: IDocumentRenderProps) {
  const navigate = useNavigate();

  function generateLink(id: string) {
    const pathWithId = Paths.EditMarkdown.replace(":id", id);
    navigate(pathWithId, { replace: true });
  }

  function mountLabel(date: Date | string) {
    const inDate = new Date(date);

    const formattedLabel = format(inDate, "dd MMMM yyyy");

    return formattedLabel;
  }

  function sortMarkdownsByCreatedDate(markdowns: Markdown[]) {
    return markdowns?.sort((markdownA, markdownB) =>
      markdownB.lastModified.localeCompare(markdownA.lastModified),
    );
  }

  if (!markdowns) {
    return null;
  }

  return (
    <StyledDocumentRender>
      <Suspense fallback={<Spinner />}>
        {sortMarkdownsByCreatedDate(markdowns)?.map((doc) => (
          <DocumentItem
            key={doc.id}
            id={doc.id}
            redirectLink={generateLink}
            title={`Click here to access the document ${doc.name}`}
            label={{
              text: mountLabel(doc.created),
              title: new Date(doc.created).toLocaleString(),
            }}
            name={doc.name}
          />
        ))}
      </Suspense>
    </StyledDocumentRender>
  );
}
