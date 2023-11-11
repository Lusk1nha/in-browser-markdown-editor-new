import React from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next";

interface IAppLocalizationContextProps {
  strings: { [key: string]: string };
}
const AppLocalizationContext = createContext<IAppLocalizationContextProps>({
  strings: {},
});

interface IAppLocalizationProviderProps {
  children?: React.ReactNode;
}
function AppLocalizationProvider({ children }: IAppLocalizationProviderProps) {
  const { t } = useTranslation();

  const strings = {
    DocumentItemTitle: t("DocumentItemTitle"),
  };

  return (
    <AppLocalizationContext.Provider value={{ strings }}>
      {children}
    </AppLocalizationContext.Provider>
  );
}

export { AppLocalizationProvider, AppLocalizationContext };
