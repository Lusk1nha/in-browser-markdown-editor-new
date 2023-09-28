

export interface IStyledComponentsTheme {
  colors: {
    menu: Menu;
    background: string;
  };
  font?: Font;
}

export interface Menu {
  navbar: string;
  sidebar: string;
  expandButtonBackground: string;
  expandButtonBackgroundHover: string;
  expandButtonIcon: string;
  expandButtonText: string;
  title: string;
  documentNameIcon: string;
  documentNameLabel: string;
  documentNameValue: string;
  documentNameValueHover: string;
  documentNameLine: string;
  documentNameBorder: string;
  separator: string;
  deleteIconBackground: string;
  deleteIconHover: string;
  saveButtonBackground: string;
  saveButtonBackgroundHover: string;
  saveButtonIcon: string;
  saveButtonText: string;
  myDocumentsText: string;
  documentDate: string;
  documentIcon: string;
  documentName: string;
  documentNameHover: string;
  toggleBackground: string;
  toggleBallBackground: string;
  toggleSunIconActivated: string;
  toggleSunIconInactivated: string;
  toggleMoonIconActivated: string;
  toggleMoonIconInactivated: string;
}

export interface Font {
  small: string;
  default: string;
  big: string;
  bigger: string;
}
