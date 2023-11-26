import { Input, Label, StyledEmailInput } from "./styles";

interface IEmailInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

function EmailInput({ name, label, placeholder }: IEmailInputProps) {
  return (
    <StyledEmailInput>
      <Label htmlFor={name}>{label}</Label>
      <Input type="email" name={name} placeholder={placeholder} />
    </StyledEmailInput>
  );
}

export { EmailInput };
