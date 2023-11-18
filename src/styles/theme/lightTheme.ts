import { Colors } from "./colors";
import { IStyledComponentsTheme } from "./theme";

const LightTheme: IStyledComponentsTheme = {
  colors: {
    background: Colors.White,
    spinner: {
      content: Colors.ChineseBlack,
      bar: Colors.FireOpal,
    },
    notFound: {
      title: Colors.FireOpal,
    },
    menu: {
      navbar: Colors.CharlestonGreen,
      sidebar: Colors.DarkJungleGreen,
      expandButtonBackground: Colors.Onyx,
      expandButtonBackgroundHover: Colors.FireOpal,
      expandButtonIcon: Colors.White,
      expandButtonText: Colors.White,
      title: Colors.White,
      documentNameIcon: Colors.White,
      documentNameLabel: Colors.LavenderGray,
      documentNameValue: Colors.White,
      documentNameValueHover: Colors.FireOpal,
      documentNameLine: Colors.FireOpal,
      documentNameBorder: Colors.White,
      separator: Colors.BlackCoral,
      deleteIconBackground: Colors.HTMLCSSGray,
      deleteIconHover: Colors.FireOpal,
      saveButtonBackground: Colors.FireOpal,
      saveButtonBackgroundHover: Colors.AtomicTangerine,
      saveButtonIcon: Colors.White,
      saveButtonText: Colors.White,
      myDocumentsText: Colors.HTMLCSSGray,
      documentDate: Colors.HTMLCSSGray,
      documentIcon: Colors.White,
      documentName: Colors.White,
      documentNameHover: Colors.FireOpal,
    },
    input: {
      toggle: {
        background: Colors.BlackCoral,
        ballBackground: Colors.White,
        sunIconActivated: Colors.White,
        sunIconInactivated: Colors.BlackCoral,
        moonIconActivated: Colors.White,
        moonIconInactivated: Colors.BlackCoral,
      },
      textArea: {
        background: Colors.White,
        text: Colors.Onyx,
        scroll: {
          background: Colors.Cultured,
          backgroundHover: Colors.FireOpal,
        },
      },
    },
    content: {
      topLabel: {
        background: Colors.Cultured,
        text: Colors.HTMLCSSGray,
      },
      separator: Colors.Platinum,
    },
    textComponents: {
      title: Colors.Onyx,
      text: Colors.HTMLCSSGray,
      subtitle: Colors.Onyx,
      numericList: Colors.HTMLCSSGray,
      boldSubtitle: Colors.Onyx,
      bulletList: Colors.HTMLCSSGray,
      bulletListBallColor: Colors.FireOpal,
      blockQuoteBackground: Colors.Cultured,
      blockQuoteText: Colors.Onyx,
      blockQuoteBorder: Colors.FireOpal,
      highlightBoldText: Colors.FireOpal,
      codeBlockBackground: Colors.Cultured,
      codeBlockText: Colors.Onyx,
      codeString: Colors.Onyx,
    },
    error: {
      toaster: {
        background: Colors.White,
        message: Colors.Onyx,
      },
    },
  },
};

export { LightTheme };
