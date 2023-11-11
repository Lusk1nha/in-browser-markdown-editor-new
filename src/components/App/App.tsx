import React from "react";
import { GlobalStyle } from "../../styles/globalStyle";
import { RouteHandler } from "../../routes/RouteHandler";

import { AppThemeProvider } from "../../contexts/ThemeProvider/AppThemeProvider";
import { AppSidebarProvider } from "../../contexts/SidebarProvider/AppSidebarProvider";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <AppThemeProvider>
        <AppSidebarProvider>
          <RouteHandler />
        </AppSidebarProvider>
      </AppThemeProvider>
    </React.Fragment>
  );
}

export default App;
