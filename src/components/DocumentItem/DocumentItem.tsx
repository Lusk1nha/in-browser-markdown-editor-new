import { Wrapper } from "../../styles/reusables-styles";
import { DocumentIcon } from "../Icons/DocumentIcon";
import { DocumentContainer, DocumentLabel, DocumentName } from "./styles";

interface IDocumentItemProps {
  label: string;
  name: string;
}

function DocumentItem({ label, name }: IDocumentItemProps) {

  return (
    <DocumentContainer>
      <DocumentIcon className="document" />

      <Wrapper>
        <DocumentLabel>{label}</DocumentLabel>
        <DocumentName>{name}</DocumentName>
      </Wrapper>
    </DocumentContainer>
  )
}

export {
  DocumentItem,
  IDocumentItemProps
}