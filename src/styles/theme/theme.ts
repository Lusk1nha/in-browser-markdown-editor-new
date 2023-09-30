

export interface IStyledComponentsTheme {
  colors: {
    background: string;
    menu: Menu;
    input: Inputs;
    content: Content;
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
}

export interface Inputs {
  toggle: Toggle
}

export interface Content {
  topLabel: TopLabel;
  separator: string;
}

export interface TopLabel {
  background: string;
  text: string;
}

export interface Toggle {
  background: string,
  ballBackground: string,
  sunIconActivated: string,
  sunIconInactivated: string,
  moonIconActivated: string,
  moonIconInactivated: string
}

export interface Font {
  small: string;
  default: string;
  big: string;
  bigger: string;
}
