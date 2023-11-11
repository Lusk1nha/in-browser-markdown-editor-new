import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translations.json";
import ptBRTranslations from "./locales/pt-br/translations.json";

import LanguageDetector from "i18next-browser-languagedetector";

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    fallbackLng: "en",
    resources: {
      en: {
        translations: enTranslations,
      },
      ["pt-BR"]: {
        translations: ptBRTranslations,
      },
    },
    ns: ["translations"],
    supportedLngs: ["en", "pt-BR"],
    defaultNS: "translations",
  });

i18n.languages = ["en", "pt-BR"];

export default i18n;
