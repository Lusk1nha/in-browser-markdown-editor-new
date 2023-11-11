import { Form } from "react-router-dom";
import styled from "styled-components";

const StyledContainerLoading = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export { StyledContainerLoading, StyledForm };
