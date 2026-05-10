import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import amNav from "./locales/am/nav.json"
import amLogo from "./locales/am/logo.json"
import amHome from "./locales/am/home.json"
import enHome from "./locales/en/home.json"
import esHome from "./locales/es/home.json"
import itHome from "./locales/it/home.json"
import zhHome from "./locales/zh/home.json"
import enNav from "./locales/en/nav.json"
import enLogo from "./locales/en/logo.json"
import esNav from "./locales/es/nav.json"
import esLogo from "./locales/es/logo.json"
import zhNav from "./locales/zh/nav.json"
import zhLogo from "./locales/zh/logo.json"
import itNav from "./locales/it/nav.json"
import itLogo from "./locales/it/logo.json"
import amBanner from "./locales/am/Banner.json"
import enBanner from "./locales/en/Banner.json"
import itBanner from "./locales/it/Banner.json"
import zhBanner from "./locales/zh/Banner.json"
import esBanner from "./locales/es/Banner.json"
i18n.use(initReactI18next).init({
    resources: {
    en: {
    translation: {
         ...enNav,
         ...enLogo,
         ...enHome,
         ...enBanner
        },

    },
    am: {
    translation: {
        ...amNav,
        ...amLogo,
        ...amHome,
        ...amBanner
    },
    },
    es: {
        translation: {
            ...esNav,
            ...esLogo,
            ...esHome,
            ...esBanner
        },
    },
    zh: {
        translation: {
            ...zhNav,
            ...zhLogo,
            ...zhHome,
            ...zhBanner
        },
    },
    it: {
        translation: {
            ...itNav,
            ...itLogo,
            ...itHome,
            ...itBanner
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

