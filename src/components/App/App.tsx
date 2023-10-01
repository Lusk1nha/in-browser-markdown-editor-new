import React from "react"
import { GlobalStyle } from "../../styles/globalStyle"
import { RouteHandler } from "../../routes/RouteHandler"

import { AppThemeProvider } from "../../contexts/ThemeProvider/AppThemeProvider";
import { SidebarProvider } from "../../contexts/SidebarProvider/SidebarProvider";

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const onThemeChange = React.useCallback(() => {
    setIsDarkTheme(prevTheme => !prevTheme)
  }, [])

  const onSidebarOpenChange = React.useCallback(() => {
    setIsSidebarOpen(prevState => !prevState)
  }, [])

  return (
    <React.Fragment>
      <GlobalStyle />

      <AppThemeProvider isDarkTheme={isDarkTheme} onThemeChange={onThemeChange}>
        <SidebarProvider isOpen={isSidebarOpen} onSidebarOpenChange={onSidebarOpenChange}>
          <RouteHandler />
        </SidebarProvider>
      </AppThemeProvider>
    </React.Fragment>
  )
}

export default App
