import { SupabaseClient } from "@supabase/auth-helpers-react";

type SignUpRequest = {
  email: string;
  password: string;
  confirmPassword: string;
};

async function signUp(
  supabase: SupabaseClient,
  { email, password }: SignUpRequest
) {
  validateEmail(email);
  validatePassword(password);

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

type SignInRequest = {
  email: string;
  password: string;
};

async function signIn(
  supabase: SupabaseClient,
  { email, password }: SignInRequest
) {
  validateEmail(email);
  validatePassword(password);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error?.name === "AuthApiError") {
    return null;
  }

  return data;
}

async function signOut(supabase: SupabaseClient) {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

type ResetPasswordResponse = {
  email: string;
};

async function resetPassword(
  supabase: SupabaseClient,
  { email }: ResetPasswordResponse
) {
  validateEmail(email);

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "/login",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

function validateEmail(email: string) {
  if (!email) {
    throw new Error("Email was not provided");
  }

  if (!checkEmail(email)) {
    throw new Error(`Invalid data received from the server`);
  }

  function checkEmail(email: string) {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }
}

function validatePassword(password: string) {
  if (!password) {
    throw new Error("Password was not provided");
  }

  // if (!checkPassword(password)) {
  //   throw new Error(`Invalid data received from the server`);
  // }

  // function checkPassword(password: string) {
  //   const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  //   return regexPassword.test(password);
  // }
}

export { signUp, signIn, signOut, resetPassword };
