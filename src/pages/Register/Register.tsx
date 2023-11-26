import {
  FieldValues,
  FormProvider,
  RegisterOptions,
  useForm,
} from "react-hook-form";
import {
  ComponentSchema,
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

import { Paths } from "../../shared/enums/Paths";
import AuthService from "../../services/AuthService";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Suspense } from "react";
import { Spinner } from "../../components/Spinner/Spinner";

type RegisterValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const supabaseClient = useSupabaseClient();

  const formInstance = useForm<RegisterValues>({
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = formInstance;

  async function onSignUpUser(data: RegisterValues) {
    const { email, password, confirmPassword } = data;
    const authService = new AuthService(supabaseClient);

    await authService.signUp({
      email,
      password,
      confirmPassword,
    });
  }

  const optionsEmail: RegisterOptions<FieldValues, string> = {
    required: "Email address is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "This field must be a valid email address",
    },
  };

  const optionsPassword: RegisterOptions<FieldValues, string> = {
    required: "Password is required",
    pattern: {
      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    },
  };

  const optionsConfirm: RegisterOptions<FieldValues, string> = {
    required: "Is necessary to confirm the password",
    validate: (value: string) => {
      if (value !== watch("password")) {
        return "Password do not match";
      }

      return undefined;
    },
  };

  return (
    <FormProvider {...formInstance}>
      <StyledRegister>
        <ComponentSchema>
          <Suspense fallback={<Spinner label="Loading..." />}>
            {isSubmitting ? (
              <Spinner label="Registering..." />
            ) : (
              <FormRegister onSubmit={handleSubmit(onSignUpUser)}>
                <Title>Sign Up</Title>

                <EmailInput
                  name="email"
                  label="Email Address"
                  placeholder="Enter an email address"
                  options={optionsEmail}
                />

                <PasswordInput
                  name="password"
                  label="Password"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="Enter password"
                  options={optionsPassword}
                />

                <PasswordInput
                  name="confirmPassword"
                  label="Confirm password"
                  placeholder="Enter password to confirm"
                  options={optionsConfirm}
                />

                <SubmitButton type="submit">Sign Up</SubmitButton>

                <LinkContainer>
                  <FormText>
                    Already registered{" "}
                    <FormLink to={Paths.Login}>sign in?</FormLink>
                  </FormText>
                </LinkContainer>
              </FormRegister>
            )}
          </Suspense>
        </ComponentSchema>
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
