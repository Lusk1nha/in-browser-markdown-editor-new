import { Form } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export {
  StyledForm,
  StyledContent
}