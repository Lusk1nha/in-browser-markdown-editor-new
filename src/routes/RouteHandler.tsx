import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

import NewMarkdown from "../pages/NewMarkdownPage/NewMarkdownPage";
import EditMarkdown from "../pages/EditMarkdown/EditMarkdownPage";
import { Paths } from "../shared/enums/Paths";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

// RouteHandler component responsible for defining the application's routes
function RouteHandler() {
  // Create a hash router using react-router-dom's createHashRouter
  const router = createHashRouter([
    {
      // Main route configuration for Layout
      path: Paths.NewMarkdown,
      id: "Layout",
      element: Layout.Page, // Layout component to render for this route
      errorElement: <ErrorPage />, // ErrorPage component to render in case of an error
      children: [
        {
          // Child route for creating a new Markdown
          path: Paths.NewMarkdown,
          element: NewMarkdown.Page, // NewMarkdownPage component to render for this route
          loader: NewMarkdown.Loader, // Loader function for loading data before rendering the component
          action: NewMarkdown.Action, // Action function to perform before rendering the component
        },
        {
          // Child route for editing an existing Markdown
          path: Paths.EditMarkdown,
          element: EditMarkdown.Page, // EditMarkdownPage component to render for this route
          loader: EditMarkdown.Loader, // Loader function for loading data before rendering the component
        },
        {
          // Child route for any other path (PageNotFound)
          path: Paths.All,
          element: PageNotFound.Page, // PageNotFound component to render for this route
        },
      ],
    },
  ]);

  // Use RouterProvider to provide the router to the entire application
  return <RouterProvider router={router} />;
}

// Export the RouteHandler component for external use
export { RouteHandler };
