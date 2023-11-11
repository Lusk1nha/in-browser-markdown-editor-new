import React from "react";
import { createContext, useState } from "react";
import { isTrue } from "../../shared/utils/DataTypes";

// Define the shape of the context data
interface ISidebarContext {
  on: boolean;
  onSidebarOpenChange: () => void;
}

// Define the properties that the provider component accepts
interface ISidebarProviderProps {
  children?: React.ReactNode;
}

// Create a context with default values
const AppSidebarContext = createContext<ISidebarContext>({
  on: false,
  onSidebarOpenChange: () => console.warn("Not defined allowed..."),
});

// Retrieve the sidebar state from local storage or use a default value
const sidebarLocalStorage = localStorage.getItem("sidebar");
const defaultSideBar: boolean = sidebarLocalStorage
  ? isTrue(sidebarLocalStorage)
  : false;

// Provider component for managing the sidebar state
function AppSidebarProvider({ children }: ISidebarProviderProps) {
  // Initialize state for the sidebar and set its default value
  const [on, setOn] = useState(defaultSideBar);

  // Update local storage when the sidebar state changes
  React.useEffect(() => {
    localStorage.setItem("sidebar", on.toString());
  }, [on]);

  // Callback function to toggle the sidebar state
  const onSidebarOpenChange = React.useCallback(() => {
    setOn((prevState) => !prevState);
  }, []);

  return (
    <AppSidebarContext.Provider value={{ on, onSidebarOpenChange }}>
      {children}
    </AppSidebarContext.Provider>
  );
}

// Export the provider component and the context for usage in other parts of the application
export { AppSidebarProvider, AppSidebarContext };
