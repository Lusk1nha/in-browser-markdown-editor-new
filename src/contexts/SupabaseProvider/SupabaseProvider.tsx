import { Session, SupabaseClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface ISupabaseProviderProps {
  supabaseClient: SupabaseClient;
  session: Session | null;
  children: React.ReactNode;
}

function SupabaseProvider({
  supabaseClient,
  session,
  children,
}: ISupabaseProviderProps) {
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={session}
    >
      {children}
    </SessionContextProvider>
  );
}

export { SupabaseProvider };
