import { Wrapper } from "../../styles/reusables-styles";
import { DocumentIcon } from "../Icons/DocumentIcon";
import { DocumentContainer, DocumentLabel, DocumentName } from "./styles";

// Define the properties that the DocumentItem component accepts
interface IDocumentItemProps {
  id: string;
  title?: string;
  redirectLink: (id: string) => void;
  label: {
    text: string;
    title?: string;
  };
  name: string;
}

// Functional component for rendering a document item
function DocumentItem({
  id,
  title,
  redirectLink,
  label,
  name,
}: IDocumentItemProps) {
  return (
    // Container for the document item with accessibility attributes
    <DocumentContainer
      data-document-id={id}
      data-document-name={name}
      title={title}
      aria-label={title}
    >
      {/* Icon representing the document */}
      <DocumentIcon className="document" />

      {/* Wrapper for additional styling and layout */}
      <Wrapper>
        {/* Label for the document */}
        <DocumentLabel title={label.title}>{label.text}</DocumentLabel>

        {/* Document name with a click handler to redirect */}
        <DocumentName title={name} onClick={() => redirectLink(id)}>
          {name}
        </DocumentName>
      </Wrapper>
    </DocumentContainer>
  );
}

// Export the DocumentItem component and its prop types
export { DocumentItem, IDocumentItemProps };
