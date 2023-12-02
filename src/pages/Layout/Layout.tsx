import React from "react";

import { StyledApp } from "./styles";

import { Outlet } from "react-router-dom";

// Layout component defining the overall structure of the application
function Layout() {
  return (
    <StyledApp id="app">
      <Outlet />
    </StyledApp>
  );
}

// Export an object with a property "Page" containing the Layout component
export default Object.assign({
  Page: <Layout />,
}) as {
  Page: React.ReactNode;
};
