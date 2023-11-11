import { Suspense, useContext } from "react";
import { StyledDocumentRender } from "./styles";
import { DocumentItem } from "../DocumentItem/DocumentItem";
import Markdown from "../../services/Markdown";
import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { Spinner } from "../Spinner/Spinner";
import { Paths } from "../../shared/enums/Paths";
import { useNavigate } from "react-router-dom";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";

// Define the properties that the DocumentRender component accepts
interface IDocumentRenderProps {
  markdowns?: Markdown[];
}

// DocumentRender component to render a list of Markdown documents
export default function DocumentRender({ markdowns }: IDocumentRenderProps) {
  // Hook to navigate between routes
  const navigate = useNavigate();
  const strings = useContext(AppLocalizationContext);

  // Function to generate a link and navigate to the edit page
  function generateDocumentLink(id: string) {
    const pathWithId = Paths.EditMarkdown.replace(":id", id);
    navigate(pathWithId, { replace: true });
  }

  /**
   * Formats a date string or Date object into a human-readable label.
   * @param {Date | string} date - The date to be formatted.
   * @returns {string} The formatted date label.
   */
  function mountDateLabel(isoDate: string) {
    // Default locale to be used in case navigator.language is not available
    const defaultLocale = "en-US";

    // Retrieve the user's locale from the browser, or use the default
    const userLocale = navigator.language ?? defaultLocale;
    
    // Determine the locale to be used for formatting based on user's preference
    const locale = userLocale === "en-US" ? enUS : ptBR;

    // Format the date using the specified format and locale
    const formattedLabel = format(new Date(isoDate), "dd MMMM yyyy", {
      locale,
    });

    // Return the formatted date label
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
            title={strings?.DocumentItemTitle?.replace("{doc.name}", doc.name)}
            label={{
              text: mountDateLabel(doc.lastModified),
              title: new Date(doc.lastModified).toLocaleString(),
            }}
            name={doc.name}
          />
        ))}
      </Suspense>
    </StyledDocumentRender>
  );
}
