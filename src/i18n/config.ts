import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translations.json";
import ptBRTranslations from "./locales/pt-br/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "pt",
  lng: "pt",
  resources: {
    en: {
      translations: enTranslations,
    },
    pt: {
      translations: ptBRTranslations,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "pt"];

export default i18n;
