import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { Paths } from "../../shared/enums/Paths";

function AuthProtectedPages() {
  const session = useSession();

  const location = useLocation();
  const { from } = location.state || { from: { pathname: Paths.NewMarkdown } };

  if (session) {
    return <Navigate to={from} state={{ from: location }} />;
  }

  return <Outlet />;
}

export { AuthProtectedPages };
