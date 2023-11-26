import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/Layout/Layout";

import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

import NewMarkdown from "../pages/NewMarkdownPage/NewMarkdownPage";
import EditMarkdown from "../pages/EditMarkdown/EditMarkdownPage";
import { Paths } from "../shared/enums/Paths";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { ProtectedPage } from "../pages/ProtectedPage/ProtectedPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import { AuthPage } from "../pages/AuthPage/AuthPage";

// RouteHandler component responsible for defining the application's routes
function RouteHandler() {
  // Create a hash router using react-router-dom's createHashRouter
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route
          errorElement={<ErrorPage />}
          path={Paths.NewMarkdown}
          element={Layout.Page}
        >
          <Route element={<ProtectedPage />}>
            <Route
              path={Paths.NewMarkdown}
              element={NewMarkdown.Page}
              loader={NewMarkdown.Loader}
            />

            <Route
              path={Paths.EditMarkdown}
              element={EditMarkdown.Page}
              loader={EditMarkdown.Loader}
            />
          </Route>
        </Route>

        <Route element={<AuthPage />}>
          <Route path={Paths.Login} element={Login.Page} />
          <Route path={Paths.Register} element={Register.Page} />
          <Route path={Paths.ForgotPassword} element={ForgotPassword.Page} />
        </Route>

        <Route path={Paths.All} element={PageNotFound.Page} />
      </>
    )
  );

  // Use RouterProvider to provide the router to the entire application
  return <RouterProvider router={router} />;
}

// Export the RouteHandler component for external use
export { RouteHandler };
