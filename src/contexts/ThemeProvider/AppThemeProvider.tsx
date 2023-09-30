import { IAppThemeProviderProps } from "./IAppThemeProviderProps";

import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { DarkTheme } from "../../styles/theme/darkTheme";


function AppThemeProvider({ isDarkTheme, children }: IAppThemeProviderProps) {
  return (
    <ThemeProvider theme={isDarkTheme ?  DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  )
}

export {
  AppThemeProvider
}