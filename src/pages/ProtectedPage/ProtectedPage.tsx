import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../shared/enums/Paths";

function ProtectedPage() {
  const user = true;

  if (!user) {
    return <Navigate to={Paths.Login} />;
  }

  return <Outlet />;
}

export { ProtectedPage };
