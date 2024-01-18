import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import enjson from "./locales/en/en.json";
import frjson from "./locales/fr/fr.json";

 const resources = {
    en: { translation: enjson },
    fr: { translation : frjson },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng:'en',
    interpolation : {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

