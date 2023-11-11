import styled from "styled-components";
import { Wrapper } from "../../styles/reusables-styles";

const DocumentContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-grow: 1;
`;

interface IDocumentWrapper {
  $isActive?: boolean;
}

const DocumentWrapper = styled(Wrapper)<IDocumentWrapper>`
  position: relative;

  ${({ $isActive }) =>
    $isActive &&
    `
    &::after {
      content: '';

      width: 100%;
      height: 1px;

      bottom: -3px;

      background: white;

      position: absolute;
    }  
  `}
`;

const DocumentLabel = styled.h5`
  color: ${(props) => props.theme.colors.menu.documentNameLabel};
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const DocumentName = styled.input`
  background: none;

  color: ${(props) => props.theme.colors.menu.documentNameValue};

  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: color 100ms ease;

  border: none;
  outline: none;

  caret-color: ${(props) => props.theme.colors.menu.documentNameValueHover};

  transition: all 100ms ease;
`;

export { DocumentContainer, DocumentWrapper, DocumentLabel, DocumentName };
