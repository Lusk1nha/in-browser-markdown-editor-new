import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

import NewMarkdown from "../pages/NewMarkdownPage/NewMarkdownPage";
import EditMarkdown from "../pages/EditMarkdown/EditMarkdownPage";
import { Paths } from "../shared/enums/Paths";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

function RouteHandler() {
  const router = createHashRouter([
    {
      path: Paths.NewMarkdown,
      element: Layout.Page,
      loader: Layout.Loader,
      errorElement: <ErrorPage />,
      children: [
        {
          path: Paths.NewMarkdown,
          element: NewMarkdown.Page,
          loader: NewMarkdown.Loader,
          action: NewMarkdown.Action,
        },
        {
          path: Paths.EditMarkdown,
          element: EditMarkdown.Page,
          loader: EditMarkdown.Loader,
        },
        {
          path: Paths.All,
          element: PageNotFound.Page,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export { RouteHandler };
