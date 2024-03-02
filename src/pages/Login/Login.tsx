import { z } from "zod";

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
  ComponentSchema,
  SystemErrorMessage,
  SpinnerContainer,
} from "./styles";
import { Paths } from "../../shared/enums/Paths";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Suspense, useState } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { signIn } from "../../models/auth";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

const createLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("This field must be a valid email address"),

  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof createLoginSchema>;

export function Login() {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const formInstance = useForm<LoginFormData>({
    mode: "onSubmit",
    resolver: zodResolver(createLoginSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formInstance;

  async function handleSignIn(data: LoginFormData) {
    try {
      const body = createLoginSchema.parse(data);

      const { email, password } = body;

      const response = await signIn(supabase, {
        email,
        password,
      });

      if (!response) {
        setError("Invalid login");
        return;
      }

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
      <StyledLogin>
        <ComponentSchema>
          <Suspense fallback={<Spinner label="Loading..." />}>
            <FormLogin onSubmit={handleSubmit(handleSignIn)}>
              <Title>Sign In</Title>

              {isSubmitting ? (
                <SpinnerContainer>
                  <Spinner label="Logging..." />
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
                    placeholder="Enter password"
                  />

                  {error && <SystemErrorMessage>{error}</SystemErrorMessage>}
                </>
              )}

              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit
              </SubmitButton>

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
