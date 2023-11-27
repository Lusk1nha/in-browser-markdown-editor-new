import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Paths } from "../../shared/enums/Paths";
import { useSession } from "@supabase/auth-helpers-react";

function ProtectedPage() {
  const session = useSession();
  const location = useLocation();

  if (!session) {
    return <Navigate to={Paths.Login} state={{ from: location }} />;
  }

  return <Outlet />;
}

export { ProtectedPage };
