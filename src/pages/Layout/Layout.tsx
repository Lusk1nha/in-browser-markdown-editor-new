import React from "react";

import { Wrapper } from "../../styles/reusables-styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { StyledApp } from "./styles";

import { Outlet } from "react-router-dom";

import { MarkdownProvider } from "../../contexts/MarkdownProvider/MarkdownProvider";
import i18n from "../../i18n/config";

// Layout component defining the overall structure of the application
function Layout() {
  const lang = i18n.language;

  console.log({ lang });

  return (
    // MarkdownProvider wraps the entire layout to provide markdown-related context
    <MarkdownProvider>
      {/* StyledApp is a styled component for the entire application layout */}
      <StyledApp id="app">
        {/* Sidebar component for the navigation sidebar */}
        <Sidebar />

        {/* Wrapper is a styled component for the main content */}
        <Wrapper id="document" as="section">
          {/* Outlet is used to render nested routes inside the main content area */}
          <Outlet />
        </Wrapper>
      </StyledApp>
    </MarkdownProvider>
  );
}

// Export an object with a property "Page" containing the Layout component
export default Object.assign({
  Page: <Layout />,
}) as {
  Page: React.ReactNode;
};
