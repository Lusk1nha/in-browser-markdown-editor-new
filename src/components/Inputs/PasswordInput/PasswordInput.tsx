import { useFormContext } from "react-hook-form";
import { StyledPasswordInput, Label, Input, ErrorMessage } from "./styles";

interface IPasswordInputProps {
  name: string;
  label?: string;
  title?: string;
  placeholder?: string;
  isRequired?: boolean;
}

function PasswordInput({
  name,
  label,
  title,
  placeholder,
}: IPasswordInputProps) {
  const { register, formState } = useFormContext();

  const errorMessage = formState.errors?.[name]?.message?.toString();

  return (
    <StyledPasswordInput>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...register(name)}
        id={name}
        type="password"
        title={title}
        placeholder={placeholder}
        $isInvalid={errorMessage ? true : false}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledPasswordInput>
  );
}

export { PasswordInput };
