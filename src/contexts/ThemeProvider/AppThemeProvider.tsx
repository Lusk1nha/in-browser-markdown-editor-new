import { IAppThemeProviderProps } from "./IAppThemeProviderProps";

import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { DarkTheme } from "../../styles/theme/darkTheme";


function AppThemeProvider({ isLightTheme, children }: IAppThemeProviderProps) {
  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
      {children}
    </ThemeProvider>
  )
}

export {
  AppThemeProvider
}