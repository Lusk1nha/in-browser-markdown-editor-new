import { z } from "zod";

import { FormProvider, useForm } from "react-hook-form";
import {
  ComponentSchema,
  FormForgotPassword,
  FormLink,
  FormText,
  LinkContainer,
  SpinnerContainer,
  StyledForgotPassword,
  SubmitButton,
  SystemErrorMessage,
  Title,
} from "./styles";
import { EmailInput } from "../../components/Inputs/EmailInput/EmailInput";

import { Paths } from "../../shared/enums/Paths";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Suspense, useState } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { resetPassword } from "../../models/auth";

import { zodResolver } from "@hookform/resolvers/zod";

const createForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("This field must be a valid email address"),
});

type ForgotPasswordData = z.infer<typeof createForgotPasswordSchema>;

function ForgotPassword() {
  const supabase = useSupabaseClient();

  const [error, setError] = useState<string | null>(null);

  const formInstance = useForm<ForgotPasswordData>({
    mode: "onSubmit",
    resolver: zodResolver(createForgotPasswordSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formInstance;

  async function onForgotPassword(data: ForgotPasswordData) {
    try {
      const body = createForgotPasswordSchema.parse(data);

      const { email } = body;

      const response = await resetPassword(supabase, {
        email,
      });

      console.log("Response from sign up successful", response);
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
      <StyledForgotPassword>
        <ComponentSchema>
          <Suspense fallback={<Spinner label="Loading..." />}>
            <FormForgotPassword onSubmit={handleSubmit(onForgotPassword)}>
              <Title>Forgot Password</Title>

              {isSubmitting ? (
                <SpinnerContainer>
                  <Spinner label="Resetting..." />
                </SpinnerContainer>
              ) : (
                <>
                  <EmailInput
                    name="email"
                    label="Email Address"
                    placeholder="Enter email"
                  />

                  {error && <SystemErrorMessage>{error}</SystemErrorMessage>}
                </>
              )}

              <SubmitButton type="submit" disabled={isSubmitting}>
                Reset Password
              </SubmitButton>

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
