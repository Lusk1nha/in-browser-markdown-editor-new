import React from "react";
import { createContext } from "react";
import { useTranslation } from "react-i18next";

type IAppLocalizationContextProps = { [key: string]: string };
const AppLocalizationContext = createContext<IAppLocalizationContextProps>({});

interface IAppLocalizationProviderProps {
  children?: React.ReactNode;
}
function AppLocalizationProvider({ children }: IAppLocalizationProviderProps) {
  const { t } = useTranslation();

  const strings = {
    NotFoundText: t("NotFoundText"),
    MenuTitle: t("MenuTitle"),
    ExpandButtonTitle: t("ExpandButtonTitle"),
    ExpandButtonLabel: t("ExpandButtonLabel"),
    EditableDocumentItemLabel: t("EditableDocumentItemLabel"),
    EditableDocumentItemTitle: t("EditableDocumentItemTitle"),
    EditableDocumentItemPlaceholder: t("EditableDocumentItemPlaceholder"),
    PreviewButtonOpenTitle: t("PreviewButtonOpenTitle"),
    RemoveButtonLabel: t("RemoveButtonLabel"),
    RemoveButtonTitle: t("RemoveButtonTitle"),
    SaveButtonLabel: t("SaveButtonLabel"),
    SaveButtonTitle: t("SaveButtonTitle"),
    SaveButtonText: t("SaveButtonText"),
    SideBarTitle: t("SideBarTitle"),
    SidebarMyDocumentsTitle: t("SidebarMyDocumentsTitle"),
    SidebarNewDocumentText: t("SidebarNewDocumentText"),
    DocumentItemTitle: t("DocumentItemTitle"),
    NewMarkdownContentTitle: t("NewMarkdownContentTitle"),
    EditMarkdownContentTitle: t("EditMarkdownContentTitle"),
    ErrorMessage: t("ErrorMessage"),
    TextAreaTopLaneTitle: t("TextAreaTopLaneTitle"),
    PreviewTopLaneTitle: t("PreviewTopLaneTitle"),
    SignOutButtonText: t("SignOutButtonText"),
    SignOutButtonLabel: t("SignOutButtonLabel"),
    SignOutButtonTitle: t("SignOutButtonTitle"),
  };

  return (
    <AppLocalizationContext.Provider value={strings}>
      {children}
    </AppLocalizationContext.Provider>
  );
}

export { AppLocalizationProvider, AppLocalizationContext };
