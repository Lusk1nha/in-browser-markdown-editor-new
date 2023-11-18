export interface IStyledComponentsTheme {
  colors: {
    background: string;
    spinner: Spinner;
    notFound: NotFound;
    menu: Menu;
    input: Inputs;
    content: Content;
    textComponents: TextComponents;
    error: {
      toaster: Toaster;
    };
  };
  font?: Font;
}

export interface Toaster {
  background: string;
  message: string;
}

export interface NotFound {
  title: string;
}

export interface TextComponents {
  title: string;
  text: string;
  subtitle: string;
  numericList: string;
  boldSubtitle: string;
  bulletList: string;
  bulletListBallColor: string;
  blockQuoteBackground: string;
  blockQuoteText: string;
  blockQuoteBorder: string;
  highlightBoldText: string;
  codeBlockBackground: string;
  codeBlockText: string;
  codeString: string;
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

export interface Spinner {
  content: string;
  bar: string;
}

export interface Inputs {
  toggle: Toggle;
  textArea: TextArea;
}

export interface Content {
  topLabel: TopLabel;
  separator: string;
}

export interface TopLabel {
  background: string;
  text: string;
}

export interface TextArea {
  background: string;
  text: string;
  scroll: {
    background: string;
    backgroundHover: string;
  };
}

export interface Toggle {
  background: string;
  ballBackground: string;
  sunIconActivated: string;
  sunIconInactivated: string;
  moonIconActivated: string;
  moonIconInactivated: string;
}

export interface Font {
  small: string;
  default: string;
  big: string;
  bigger: string;
}
