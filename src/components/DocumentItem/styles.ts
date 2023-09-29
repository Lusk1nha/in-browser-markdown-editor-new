import styled from "styled-components";


const DocumentContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-grow: 1;
`

const DocumentLabel = styled.h5`
  color: ${props => props.theme.colors.menu.documentNameLabel};
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

const DocumentName = styled.h5`
  color: ${props => props.theme.colors.menu.documentNameValue};

  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: color 100ms ease;

  &:hover {
    color: ${props => props.theme.colors.menu.documentNameValueHover};
  }
`

export {
  DocumentContainer,
  DocumentLabel,
  DocumentName
}