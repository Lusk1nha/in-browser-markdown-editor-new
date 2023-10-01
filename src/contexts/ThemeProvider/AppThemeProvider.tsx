import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { DarkTheme } from "../../styles/theme/darkTheme";
import { createContext } from "react";

interface IAppThemeContext {
  onThemeChange: () => void
}

interface IAppThemeProviderProps {
  isDarkTheme: boolean;
  onThemeChange: () => void;
  children?: React.ReactNode;
}

const AppThemeContext = createContext<IAppThemeContext>({
  onThemeChange: () => console.warn('Not defined allowed...')
})

function AppThemeProvider({ isDarkTheme, onThemeChange, children }: IAppThemeProviderProps) {
  return (
    <AppThemeContext.Provider value={{ onThemeChange }}>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export {
  AppThemeProvider,
  AppThemeContext
}