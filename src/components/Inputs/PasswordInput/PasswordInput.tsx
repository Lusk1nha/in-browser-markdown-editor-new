import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledPasswordInput, Label, Input, ErrorMessage } from "./styles";

interface IPasswordInputProps {
  name: string;
  label?: string;
  title?: string;
  placeholder?: string;
  options?: RegisterOptions<FieldValues, string>;
  isRequired?: boolean;
}

function PasswordInput({
  name,
  label,
  title,
  placeholder,
  options,
}: IPasswordInputProps) {
  const { register, formState } = useFormContext();

  const errorMessage = formState.errors?.[name]?.message?.toString();

  return (
    <StyledPasswordInput>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...register(name, options)}
        id={name}
        type="password"
        title={title}
        placeholder={placeholder}
        $isInvalid={errorMessage ? true : false}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </StyledPasswordInput>
  );
}

export { PasswordInput };
