import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../styles/reusables-styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";

function DocumentLayout() {
  return (
    <React.Fragment>
      {/* Sidebar component for the navigation sidebar */}
      <Sidebar />

      {/* Wrapper is a styled component for the main content */}
      <Wrapper id="document" as="section">
        {/* Outlet is used to render nested routes inside the main content area */}
        <Outlet />
      </Wrapper>
    </React.Fragment>
  );
}

// Export an object with a property "Page" containing the Layout component
export default Object.assign({
  Page: <DocumentLayout />,
}) as {
  Page: React.ReactNode;
};
