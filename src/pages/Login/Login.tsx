import {
  FieldValues,
  FormProvider,
  RegisterOptions,
  useForm,
} from "react-hook-form";
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
  ComponentSchema,
} from "./styles";
import { Paths } from "../../shared/enums/Paths";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Suspense } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { signIn } from "../../models/auth";

type LoginValues = {
  email: string;
  password: string;
};

export function Login() {
  const supabase = useSupabaseClient();

  const formInstance = useForm<LoginValues>({
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formInstance;

  async function onSignIn(data: LoginValues) {
    const { email, password } = data;

    await signIn(supabase, {
      email,
      password,
    });
  }

  const optionsEmail: RegisterOptions<FieldValues, string> = {
    required: "Email address is required",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "This field must be a valid email address",
    },
  };

  const optionsPassword: RegisterOptions<FieldValues, string> = {
    required: "Password is required",
  };

  return (
    <FormProvider {...formInstance}>
      <StyledLogin>
        <ComponentSchema>
          <Suspense fallback={<Spinner label="Loading..." />}>
            {isSubmitting ? (
              <Spinner label="Logging..." />
            ) : (
              <FormLogin onSubmit={handleSubmit(onSignIn)}>
                <Title>Sign In</Title>

                <EmailInput
                  name="email"
                  label="Email Address"
                  placeholder="Enter an email address"
                  options={optionsEmail}
                />

                <PasswordInput
                  name="password"
                  label="Password"
                  placeholder="Enter password"
                  options={optionsPassword}
                />

                <SubmitButton type="submit">Submit</SubmitButton>

                <LinkContainer>
                  <FormText>
                    Forgot{" "}
                    <FormLink to={Paths.ForgotPassword}>password?</FormLink>
                  </FormText>

                  <FormText>
                    Don't have a account?{" "}
                    <FormLink to={Paths.Register}>create here</FormLink>
                  </FormText>
                </LinkContainer>
              </FormLogin>
            )}
          </Suspense>
        </ComponentSchema>
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
