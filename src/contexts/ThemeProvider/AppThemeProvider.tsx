import React from "react";

import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { DarkTheme } from "../../styles/theme/darkTheme";
import { createContext, useState } from "react";

import { IStyledComponentsTheme } from "../../styles/theme/theme";

interface IAppThemeContext {
  theme: string;
  onThemeChange: () => void;
}

interface IAppThemeProviderProps {
  children?: React.ReactNode;
}

const AppThemeContext = createContext<IAppThemeContext>({
  theme: 'dark',
  onThemeChange: () => console.warn('Not defined allowed...')
})

const themeLocalStorage = localStorage.getItem('theme');
const defaultTheme: string = themeLocalStorage ?? 'dark';

const themesMap: { [name: string]: IStyledComponentsTheme } = {
  light: LightTheme,
  dark: DarkTheme
};

function AppThemeProvider({ children }: IAppThemeProviderProps) {
  const [theme, setTheme] = useState<string>(defaultTheme);
  const currentTheme = theme
    ? themesMap?.[theme]
    : themesMap.dark

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const onThemeChange = React.useCallback(() => {
    setTheme(
      theme === 'light'
        ? 'dark'
        : 'light'
    )
  }, [theme])


  return (
    <AppThemeContext.Provider value={{ theme, onThemeChange }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export {
  AppThemeProvider,
  AppThemeContext
}