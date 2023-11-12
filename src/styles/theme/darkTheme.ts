import { Colors } from "./colors";
import { IStyledComponentsTheme } from "./theme";

const DarkTheme: IStyledComponentsTheme = {
  colors: {
    background: Colors.ChineseBlack,
    spinner: {
      content: Colors.ChineseBlack,
      bar: Colors.FireOpal,
    },
    notFound: {
      title: Colors.AtomicTangerine,
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
        background: Colors.ChineseBlack,
        text: Colors.LavenderGray,
        scroll: {
          background: Colors.DarkJungleGreen,
          backgroundHover: Colors.AtomicTangerine,
        },
      },
    },
    content: {
      topLabel: {
        background: Colors.DarkJungleGreen,
        text: Colors.LavenderGray,
      },
      separator: Colors.BlackCoral,
    },
    textComponents: {
      title: Colors.White,
      text: Colors.LavenderGray,
      subtitle: Colors.White,
      numericList: Colors.LavenderGray,
      boldSubtitle: Colors.White,
      bulletList: Colors.LavenderGray,
      bulletListBallColor: Colors.FireOpal,
      blockQuoteBackground: Colors.CharlestonGreen,
      blockQuoteText: Colors.White,
      blockQuoteBorder: Colors.FireOpal,
      highlightBoldText: Colors.FireOpal,
      codeBlockBackground: Colors.CharlestonGreen,
      codeBlockText: Colors.White,
    },
  },
};

export { DarkTheme };
