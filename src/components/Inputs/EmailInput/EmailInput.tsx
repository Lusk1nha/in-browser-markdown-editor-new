import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage, Input, Label, StyledEmailInput } from "./styles";
import { Wrapper } from "../../../styles/reusables-styles";

interface IEmailInputProps {
  name: string;
  label?: string;
  title?: string;
  placeholder?: string;
  options?: RegisterOptions<FieldValues, string>;
}

function EmailInput({
  name,
  label,
  title,
  placeholder,
  options,
}: IEmailInputProps) {
  const { register, formState } = useFormContext();

  const errorMessage = formState.errors?.[name]?.message?.toString();

  return (
    <StyledEmailInput>
      <Label htmlFor={name}>{label}</Label>

      <Wrapper $gap="0.275rem">
        <Input
          {...register(name, options)}
          id={name}
          type="text"
          title={title}
          placeholder={placeholder}
          $isInvalid={errorMessage ? true : false}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Wrapper>
    </StyledEmailInput>
  );
}

export { EmailInput };
