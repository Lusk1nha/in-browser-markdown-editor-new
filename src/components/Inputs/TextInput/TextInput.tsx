import { Input, Label, StyledTextInput } from "./styles";

interface ITextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

function TextInput({ name, label, placeholder }: ITextInputProps) {
  return (
    <StyledTextInput>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" name={name} placeholder={placeholder} />
    </StyledTextInput>
  );
}

export { TextInput };
