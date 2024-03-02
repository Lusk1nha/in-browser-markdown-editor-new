import { z } from "zod";

import { FormProvider, useForm } from "react-hook-form";
import {
  ComponentSchema,
  FormLink,
  FormRegister,
  FormText,
  LinkContainer,
  SpinnerContainer,
  StyledRegister,
  SubmitButton,
  SystemErrorMessage,
  Title,
} from "./styles";
import { PasswordInput } from "../../components/Inputs/PasswordInput/PasswordInput";
import { EmailInput } from "../../components/Inputs/EmailInput/EmailInput";

import { Paths } from "../../shared/enums/Paths";

import { Suspense, useState } from "react";
import { Spinner } from "../../components/Spinner/Spinner";

import { signUp } from "../../models/auth";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const createRegisterSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email address is required")
      .email("This field must be a valid email address"),

    password: z
      .string()
      .min(1, "Password is required")
      .regex(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      ),

    confirmPassword: z.string().min(1, "Is necessary to confirm the password"),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof createRegisterSchema>;

function Register() {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const formInstance = useForm<RegisterFormData>({
    mode: "onSubmit",
    resolver: zodResolver(createRegisterSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formInstance;

  async function handleSignUpUser(data: RegisterFormData) {
    try {
      const body = createRegisterSchema.parse(data);

      const { email, password, confirmPassword } = body;

      const response = await signUp(supabase, {
        email,
        password,
        confirmPassword,
      });

      console.log("Response from sign up successful", response);

      navigate(Paths.NewMarkdown);
    } catch (error) {
      setError("Authentication failed for login");

      if (error instanceof Error) {
        throw new Error(error?.message);
      }

      throw new Error("Authentication failed for login");
    }
  }

  return (
    <FormProvider {...formInstance}>
      <StyledRegister>
        <ComponentSchema>
          <Suspense fallback={<Spinner label="Loading..." />}>
            <FormRegister onSubmit={handleSubmit(handleSignUpUser)}>
              <Title>Sign Up</Title>

              {isSubmitting ? (
                <SpinnerContainer>
                  <Spinner label="Registering..." />
                </SpinnerContainer>
              ) : (
                <>
                  <EmailInput
                    name="email"
                    label="Email Address"
                    placeholder="Enter an email address"
                  />

                  <PasswordInput
                    name="password"
                    label="Password"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    placeholder="Enter password"
                  />

                  <PasswordInput
                    name="confirmPassword"
                    label="Confirm password"
                    placeholder="Enter password to confirm"
                  />

                  {error && <SystemErrorMessage>{error}</SystemErrorMessage>}
                </>
              )}

              <SubmitButton type="submit" disabled={isSubmitting}>
                Sign Up
              </SubmitButton>

              <LinkContainer>
                <FormText>
                  Already registered{" "}
                  <FormLink to={Paths.Login}>sign in?</FormLink>
                </FormText>
              </LinkContainer>
            </FormRegister>
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
