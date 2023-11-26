import { Session, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function useSupabaseSession(supabaseClient: SupabaseClient) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return session;
}

export default useSupabaseSession;
