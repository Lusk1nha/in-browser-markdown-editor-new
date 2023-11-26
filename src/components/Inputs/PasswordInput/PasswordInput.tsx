import { StyledPasswordInput, Label, Input } from "./styles";

interface IPasswordInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

function PasswordInput({ name, label, placeholder }: IPasswordInputProps) {
  return (
    <StyledPasswordInput>
      <Label htmlFor={name}>{label}</Label>
      <Input type="password" name={name} placeholder={placeholder} />
    </StyledPasswordInput>
  );
}

export { PasswordInput };
