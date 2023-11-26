import { FormProvider, useForm } from "react-hook-form";
import {
  FormLink,
  FormRegister,
  FormText,
  LinkContainer,
  StyledRegister,
  SubmitButton,
  Title,
} from "./styles";
import { PasswordInput } from "../../components/Inputs/PasswordInput/PasswordInput";
import { EmailInput } from "../../components/Inputs/EmailInput/EmailInput";
import { TextInput } from "../../components/Inputs/TextInput/TextInput";

import { Paths } from "../../shared/enums/Paths";

function Register() {
  const formInstance = useForm();

  return (
    <FormProvider {...formInstance}>
      <StyledRegister>
        <FormRegister>
          <Title>Sign Up</Title>

          <TextInput
            name="firstName"
            label="First Name"
            placeholder="Enter first name"
          />

          <TextInput
            name="lastName"
            label="Last Name"
            placeholder="Enter last name"
          />

          <EmailInput
            name="email"
            label="Email Address"
            placeholder="Enter email"
          />

          <PasswordInput
            name="password"
            label="Password"
            placeholder="Enter password"
          />

          <PasswordInput
            name="confirmPassword"
            label="Confirm password"
            placeholder="Enter password"
          />

          <SubmitButton>Sign Up</SubmitButton>

          <LinkContainer>
            <FormText>
              Already registered <FormLink to={Paths.Login}>sign in?</FormLink>
            </FormText>
          </LinkContainer>
        </FormRegister>
      </StyledRegister>
    </FormProvider>
  );
}

// Export an object with properties Page, Loader, and Action for React Router usage
export default Object.assign({
  Page: <Register />,
}) as {
  Page: React.ReactNode;
};
