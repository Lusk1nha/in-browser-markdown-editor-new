import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

import NewMarkdown from "../pages/NewMarkdownPage/NewMarkdownPage";
import EditMarkdown from "../pages/EditMarkdown/EditMarkdownPage";
import { Paths } from "../shared/enums/Paths";

function RouteHandler() {
  const router = createBrowserRouter([
    {
      path: Paths.NewMarkdown,
      element: Layout.Page,
      errorElement: <ErrorPage />,
      loader: Layout.Loader,
      children: [
        {
          path: '/',
          element: NewMarkdown.Page,
          loader: NewMarkdown.Loader,
          action: NewMarkdown.Action
        },
        {
          path: Paths.EditMarkdown,
          element: EditMarkdown.Page,
          loader: EditMarkdown.Loader
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export {
  RouteHandler
}