import { ErrorIcon } from "react-hot-toast";
import { Message, StyledToasterMessage } from "./styles";

interface IToasterMessageProps {
  message: string;
}
function ToasterMessage({ message }: IToasterMessageProps) {
  return (
    <StyledToasterMessage title={message}>
      <ErrorIcon />
      <Message>{message}</Message>
    </StyledToasterMessage>
  );
}

export { ToasterMessage };
