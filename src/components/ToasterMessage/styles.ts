import styled from "styled-components";

const StyledToasterMessage = styled.div`
  background: ${(props) => props.theme.colors.error.toaster.background};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 1rem;

  border-radius: 4px;

  will-change: transform;

  box-shadow:
    0 3px 10px rgba(0, 0, 0, 0.1),
    0 3px 3px rgba(0, 0, 0, 0.05);
`;

const Message = styled.p`
  color: ${(props) => props.theme.colors.error.toaster.message};
`;

export { StyledToasterMessage, Message };
