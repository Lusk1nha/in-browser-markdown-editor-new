import { FormProvider, useForm } from "react-hook-form";
import {
  FormForgotPassword,
  FormLink,
  FormText,
  LinkContainer,
  StyledForgotPassword,
  SubmitButton,
  Title,
} from "./styles";
import { EmailInput } from "../../components/Inputs/EmailInput/EmailInput";

import { Paths } from "../../shared/enums/Paths";

function ForgotPassword() {
  const formInstance = useForm();

  return (
    <FormProvider {...formInstance}>
      <StyledForgotPassword>
        <FormForgotPassword>
          <Title>Forgot Password</Title>

          <EmailInput
            name="email"
            label="Email Address"
            placeholder="Enter email"
          />

          <SubmitButton>Reset Password</SubmitButton>

          <LinkContainer>
            <FormText>
              Already registered <FormLink to={Paths.Login}>sign in?</FormLink>
            </FormText>

            <FormText>
              Don't have a account?{" "}
              <FormLink to={Paths.Register}>create here</FormLink>
            </FormText>
          </LinkContainer>
        </FormForgotPassword>
      </StyledForgotPassword>
    </FormProvider>
  );
}

// Export an object with properties Page, Loader, and Action for React Router usage
export default Object.assign({
  Page: <ForgotPassword />,
}) as {
  Page: React.ReactNode;
};
