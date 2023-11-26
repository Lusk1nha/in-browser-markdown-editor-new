import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../shared/enums/Paths";
import { useSession } from "@supabase/auth-helpers-react";

function ProtectedPage() {
  const session = useSession();

  if (!session) {
    return <Navigate to={Paths.Login} />;
  }

  return <Outlet />;
}

export { ProtectedPage };
