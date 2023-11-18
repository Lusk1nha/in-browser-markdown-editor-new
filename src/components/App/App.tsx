import React from "react";
import { GlobalStyle } from "../../styles/globalStyle";
import { RouteHandler } from "../../routes/RouteHandler";

import { AppThemeProvider } from "../../contexts/ThemeProvider/AppThemeProvider";
import { AppSidebarProvider } from "../../contexts/SidebarProvider/AppSidebarProvider";
import { AppLocalizationProvider } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <React.Fragment>
      {/* Apply global styles */}
      <GlobalStyle />

      {/* Provide the localization context to the entire application */}
      <AppLocalizationProvider>
        {/* Provide the theme context to the entire application */}
        <AppThemeProvider>
          {/* Provide the sidebar context to the entire application */}
          <AppSidebarProvider>
            {/* Handle routes within the application */}
            <RouteHandler />
            
            <Toaster />
          </AppSidebarProvider>
        </AppThemeProvider>
      </AppLocalizationProvider>
    </React.Fragment>
  );
}

// Export the App component for usage in other parts of the application
export default App;
