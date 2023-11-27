import { SupabaseClient } from "@supabase/supabase-js";

type SignUpRequest = {
  email: string;
  password: string;
  confirmPassword: string;
};

type SignInRequest = {
  email: string;
  password: string;
};

type ResetPasswordResponse = {
  email: string;
};

class AuthService {
  private _supabaseClient: SupabaseClient;

  constructor(supabaseClient: SupabaseClient) {
    this._supabaseClient = supabaseClient;
  }

  async signUp({ email, password, confirmPassword }: SignUpRequest) {
    try {
      const auth = this._supabaseClient.auth;

      if (!email || !password || !confirmPassword) {
        throw new Error(`Invalid data received from the server`);
      }

      if (password !== confirmPassword) {
        throw new Error(`Passwords do not match with confirm password`);
      }

      const { data, error } = await auth.signUp({ email, password });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }

  async signIn({ email, password }: SignInRequest) {
    try {
      const auth = this._supabaseClient.auth;

      if (!email || !password) {
        throw new Error(`Invalid data received from the server`);
      }

      const { data, error } = await auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }

  async signOut() {
    try {
      const auth = this._supabaseClient.auth;

      const { error } = await auth.signOut();

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }

  async resetPassword({ email }: ResetPasswordResponse) {
    try {
      const auth = this._supabaseClient.auth;

      if (!email) {
        throw new Error("Email cannot be empty");
      }

      const { data, error } = await auth.resetPasswordForEmail(email);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }
}

export default AuthService;
