import styled from "styled-components";

const StyledPreview = styled.div`
  flex: 1;
  border-left: 1px solid ${(props) => props.theme.colors.content.separator};
`;

export { StyledPreview };
