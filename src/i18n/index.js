import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import amNav from "./locales/am/nav.json"
import amLogo from "./locales/am/logo.json"

import enNav from "./locales/en/nav.json"
import enLogo from "./locales/en/logo.json"
import esNav from "./locales/es/nav.json"
import esLogo from "./locales/es/logo.json"
import zhNav from "./locales/zh/nav.json"
import zhLogo from "./locales/zh/logo.json"
import itNav from "./locales/it/nav.json"
import itLogo from "./locales/it/logo.json"

i18n.use(initReactI18next).init({
    resources: {
    en: {
    translation: {
         ...enNav,
         ...enLogo
        },

    },
    am: {
    translation: {
        ...amNav,
        ...amLogo
    },
    },
    es: {
        translation: {
            ...esNav,
            ...esLogo
        },
    },
    zh: {
        translation: {
            ...zhNav,
            ...zhLogo
        },
    },
    it: {
        translation: {
            ...itNav,
            ...itLogo
        },
    },

    },
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
});

export default i18n;

