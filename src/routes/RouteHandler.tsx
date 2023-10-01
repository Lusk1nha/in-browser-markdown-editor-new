import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

import NewMarkdown from "../pages/NewMarkdown/NewMarkdown";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

function RouteHandler() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: Layout.Page,
      errorElement: <ErrorPage />,
      loader: Layout.Loader,
      children: [
        {
          path: '/',
          element: NewMarkdown.Page,
          loader: NewMarkdown.Loader
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