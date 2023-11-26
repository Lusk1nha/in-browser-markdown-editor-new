import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../shared/enums/Paths";

function ProtectedPage() {
  const user = false;

  if (!user) {
    return <Navigate to={Paths.Login} />;
  }

  return <Outlet />;
}

export { ProtectedPage };
