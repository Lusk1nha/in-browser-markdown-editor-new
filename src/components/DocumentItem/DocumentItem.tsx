import { Wrapper } from "../../styles/reusables-styles";
import { DocumentIcon } from "../Icons/DocumentIcon";
import { DocumentContainer, DocumentLabel, DocumentName } from "./styles";

interface IDocumentItemProps {
  id: string;
  title?: string;
  label: {
    text: string;
    title?: string;
  };
  name: string;
}

function DocumentItem({ id, title, label, name }: IDocumentItemProps) {

  return (
    <DocumentContainer data-document-id={id} data-document-name={name} title={title}>
      <DocumentIcon className="document" />

      <Wrapper>
        <DocumentLabel title={label.title}>{label.text}</DocumentLabel>
        <DocumentName title={name}>{name}</DocumentName>
      </Wrapper>
    </DocumentContainer>
  )
}

export {
  DocumentItem,
  IDocumentItemProps
}