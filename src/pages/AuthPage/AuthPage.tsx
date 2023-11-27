import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";

function AuthPage() {
  const session = useSession();

  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (session) {
    return <Navigate to={from} state={{ from: location }} />;
  }

  return <Outlet />;
}

export { AuthPage };
