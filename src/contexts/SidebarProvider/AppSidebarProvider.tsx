import React from "react";
import { createContext, useState } from "react";

interface ISidebarContext {
  on: boolean;
  onSidebarOpenChange: () => void;
}

interface ISidebarProviderProps {
  children?: React.ReactNode;
}

const AppSidebarContext = createContext<ISidebarContext>({
  on: false,
  onSidebarOpenChange: () => console.warn('Not defined allowed...')
});

const sidebarLocalStorage = localStorage.getItem('sidebar');
const defaultSideBar: boolean = isTrue(sidebarLocalStorage) ?? false;

function AppSidebarProvider({ children }: ISidebarProviderProps) {
  const [on, setOn] = useState(defaultSideBar);

  React.useEffect(() => {
    localStorage.setItem('sidebar', on.toString())
  }, [on])

  const onSidebarOpenChange = React.useCallback(() => {
    setOn(prevState => !prevState)
  }, [])

  return (
    <AppSidebarContext.Provider value={{ on, onSidebarOpenChange }}>
      {children}
    </AppSidebarContext.Provider>
  )
}

function isTrue(value: string | undefined | null) {
  return value?.toLowerCase() === "true"
}


export {
  AppSidebarProvider,
  AppSidebarContext
}