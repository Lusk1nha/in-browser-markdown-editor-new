import {
  FieldValues,
  FormProvider,
  RegisterOptions,
  useForm,
} from "react-hook-form";
import {
  ComponentSchema,
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
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import AuthService from "../../services/AuthService";
import { Suspense } from "react";
import { Spinner } from "../../components/Spinner/Spinner";

type ForgotPasswordValues = {
  email: string;
  password: string;
};

function ForgotPassword() {
  const supabaseClient = useSupabaseClient();

  const formInstance = useForm<ForgotPasswordValues>({
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formInstance;

  async function onForgotPassword(data: ForgotPasswordValues) {
    const { email } = data;
    const authService = new AuthService(supabaseClient);

    await authService.resetPassword({
      email,
    });
  }

  const optionsEmail: RegisterOptions<FieldValues, string> = {
    required: "Email address is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "This field must be a valid email address",
    },
  };

  return (
    <FormProvider {...formInstance}>
      <StyledForgotPassword>
        <ComponentSchema>
          <Suspense fallback={<Spinner label="Loading..." />}>
            {isSubmitting ? (
              <Spinner label="Resetting..." />
            ) : (
              <FormForgotPassword onSubmit={handleSubmit(onForgotPassword)}>
                <Title>Forgot Password</Title>

                <EmailInput
                  name="email"
                  label="Email Address"
                  placeholder="Enter email"
                  options={optionsEmail}
                />

                <SubmitButton type="submit">Reset Password</SubmitButton>

                <LinkContainer>
                  <FormText>
                    Already registered{" "}
                    <FormLink to={Paths.Login}>sign in?</FormLink>
                  </FormText>

                  <FormText>
                    Don't have a account?{" "}
                    <FormLink to={Paths.Register}>create here</FormLink>
                  </FormText>
                </LinkContainer>
              </FormForgotPassword>
            )}
          </Suspense>
        </ComponentSchema>
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
