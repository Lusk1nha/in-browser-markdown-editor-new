import { createContext } from "react";

interface ISidebarContext {
  isOpen: boolean;
  onSidebarOpenChange: () => void;
}

interface ISidebarProviderProps {
  isOpen: boolean;
  onSidebarOpenChange: () => void;
  children?: React.ReactNode;
}

const SidebarContext = createContext<ISidebarContext>({
  isOpen: false,
  onSidebarOpenChange: () => console.warn('Not defined allowed...')
});

function SidebarProvider({ isOpen, onSidebarOpenChange, children }: ISidebarProviderProps) {

  return (
    <SidebarContext.Provider value={{ isOpen, onSidebarOpenChange }}>
      {children}
    </SidebarContext.Provider>
  )
}


export {
  SidebarProvider,
  SidebarContext
}