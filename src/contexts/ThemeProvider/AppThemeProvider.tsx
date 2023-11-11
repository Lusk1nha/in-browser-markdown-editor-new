import React from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { DarkTheme } from "../../styles/theme/darkTheme";
import { createContext, useState } from "react";
import { IStyledComponentsTheme } from "../../styles/theme/theme";
import { Themes } from "../../shared/enums/Themes";

// Define the shape of the context data
interface IAppThemeContext {
  theme: string;
  onThemeChange: () => void;
}

// Define the properties that the provider component accepts
interface IAppThemeProviderProps {
  children?: React.ReactNode;
}

// Create a context with default values
const AppThemeContext = createContext<IAppThemeContext>({
  theme: Themes.Dark,
  onThemeChange: () => console.warn("Function not defined allowed..."),
});

// Retrieve the theme from local storage or use a default value
const themeLocalStorage = localStorage.getItem("theme");
const defaultTheme = (themeLocalStorage ?? Themes.Dark) as Themes;

// Map of available themes
const themesMap: { [name: string]: IStyledComponentsTheme } = {
  light: LightTheme,
  dark: DarkTheme,
};

// Provider component for managing the theme state
function AppThemeProvider({ children }: IAppThemeProviderProps) {
  // Initialize state for the theme and set its default value
  const [theme, setTheme] = useState<Themes>(defaultTheme);
  // Get the current theme from the themes map
  const currentTheme = theme ? themesMap?.[theme] : themesMap.dark;

  // Use effect to update local storage when the theme changes
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Callback function to toggle between light and dark themes
  const onThemeChange = React.useCallback(() => {
    setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
  }, [theme]);

  // Provide the context values to the wrapped components
  return (
    <AppThemeContext.Provider value={{ theme, onThemeChange }}>
      {/* Apply the current theme using styled-components ThemeProvider */}
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

// Export the context and provider for usage in other parts of the application
export { AppThemeProvider, AppThemeContext };
