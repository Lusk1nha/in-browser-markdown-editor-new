import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root/Root";

import { NewMarkdownPage } from "../../pages/NewMarkdownPage/NewMarkdownPage";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";


function RouteHandler() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: Root.Page,
      errorElement: <ErrorPage />,
      loader: Root.Loader,
      children: [
        {
          path: '/',
          element: <NewMarkdownPage />,
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