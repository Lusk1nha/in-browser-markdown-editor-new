import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

function useCreateSupabaseClient() {
  const [supabaseClient] = useState(
    createClient(
      import.meta.env.VITE_PUBLIC_SUPABASE_URL,
      import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
    )
  );

  return supabaseClient;
}

export default useCreateSupabaseClient;
