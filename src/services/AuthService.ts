import { SupabaseClient } from "@supabase/supabase-js";

type SignUpRequest = {
  email: string;
  password: string;
  confirmPassword: string;
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
}

export default AuthService;
