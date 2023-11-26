import { FormProvider, useForm } from "react-hook-form";
import { EmailInput } from "../../components/Inputs/EmailInput/EmailInput";
import { PasswordInput } from "../../components/Inputs/PasswordInput/PasswordInput";
import {
  FormText,
  FormLogin,
  StyledLogin,
  SubmitButton,
  Title,
  FormLink,
  LinkContainer,
} from "./styles";
import { Paths } from "../../shared/enums/Paths";

export function Login() {
  const formInstance = useForm();

  return (
    <FormProvider {...formInstance}>
      <StyledLogin>
        <FormLogin>
          <Title>Sign In</Title>

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

          <SubmitButton>Submit</SubmitButton>

          <LinkContainer>
            <FormText>
              Forgot <FormLink to={Paths.ForgotPassword}>password?</FormLink>
            </FormText>

            <FormText>
              Don't have a account?{" "}
              <FormLink to={Paths.Register}>create here</FormLink>
            </FormText>
          </LinkContainer>
        </FormLogin>
      </StyledLogin>
    </FormProvider>
  );
}

// Export an object with properties Page, Loader, and Action for React Router usage
export default Object.assign({
  Page: <Login />,
}) as {
  Page: React.ReactNode;
};
