import { FormProvider, useForm } from "react-hook-form";
import { EmailInput } from "../../components/Inputs/EmailInput/EmailInput";
import { PasswordInput } from "../../components/Inputs/PasswordInput/PasswordInput";
import {
  ForgotPasswordText,
  FormLogin,
  StyledLogin,
  SubmitButton,
  Title,
} from "./styles";

export function Login() {
  const formInstance = useForm();

  return (
    <FormProvider {...formInstance}>
      <StyledLogin>
        <FormLogin>
          <Title>Sign In</Title>
          <EmailInput
            name="login-email"
            label="Email Address"
            placeholder="Enter email"
          />

          <PasswordInput
            name="password"
            label="Password"
            placeholder="Enter password"
          />

          <SubmitButton>Submit</SubmitButton>

          <ForgotPasswordText>Forgot password?</ForgotPasswordText>
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
