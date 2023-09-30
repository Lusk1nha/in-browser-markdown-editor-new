import { Colors } from "./colors";
import { IStyledComponentsTheme } from "./theme";


const DarkTheme: IStyledComponentsTheme = {
  colors: {
    background: Colors.ChineseBlack,
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
      documentNameHover: Colors.FireOpal
    },
    input: {
      toggle: {
        background: Colors.BlackCoral,
        ballBackground: Colors.White,
        sunIconActivated: Colors.White,
        sunIconInactivated: Colors.BlackCoral,
        moonIconActivated: Colors.White,
        moonIconInactivated: Colors.BlackCoral
      }
    },
    content: {
      topLabel: {
        background: Colors.DarkJungleGreen,
        text: Colors.LavenderGray
      },
      separator: Colors.BlackCoral
    }
  }
}

export { DarkTheme }