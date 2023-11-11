import { Suspense } from "react";
import { StyledDocumentRender } from "./styles";
import { DocumentItem } from "../DocumentItem/DocumentItem";
import Markdown from "../../services/Markdown";
import { format } from "date-fns";
import { Spinner } from "../Spinner/Spinner";
import { Paths } from "../../shared/enums/Paths";
import { useNavigate } from "react-router-dom";

// Define the properties that the DocumentRender component accepts
interface IDocumentRenderProps {
  markdowns?: Markdown[];
}

// DocumentRender component to render a list of Markdown documents
export default function DocumentRender({ markdowns }: IDocumentRenderProps) {
  // Hook to navigate between routes
  const navigate = useNavigate();

  // Function to generate a link and navigate to the edit page
  function generateDocumentLink(id: string) {
    const pathWithId = Paths.EditMarkdown.replace(":id", id);
    navigate(pathWithId, { replace: true });
  }

  // Function to format and mount the label based on the lastModified date
  function mountLabel(date: Date | string) {
    const inDate = new Date(date);
    const formattedLabel = format(inDate, "dd MMMM yyyy");
    return formattedLabel;
  }

  // Function to sort Markdowns by their lastModified date
  function sortMarkdownsByCreatedDate(markdowns: Markdown[]) {
    return markdowns?.sort((markdownA, markdownB) =>
      markdownB.lastModified.localeCompare(markdownA.lastModified)
    );
  }

  // If there are no markdowns, return null
  if (!markdowns) {
    console.debug("No Markdown in Document Render!");
    return null;
  }

  return (
    <StyledDocumentRender>
      {/* Use Suspense to handle asynchronous loading */}
      <Suspense fallback={<Spinner />}>
        {/* Map through sorted Markdowns and render DocumentItems */}
        {sortMarkdownsByCreatedDate(markdowns)?.map((doc) => (
          <DocumentItem
            key={doc.id}
            id={doc.id}
            redirectLink={generateDocumentLink}
            // title={strings?.DocumentItemTitle?.replace("{doc.name}", doc.name)}
            label={{
              text: mountLabel(doc.lastModified),
              title: new Date(doc.lastModified).toLocaleString(),
            }}
            name={doc.name}
          />
        ))}
      </Suspense>
    </StyledDocumentRender>
  );
}
