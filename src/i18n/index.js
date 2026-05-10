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
import amButton from "./locales/am/button.json"
import enButton from "./locales/en/button.json"
import esButton from "./locales/es/Button.json"
import itButton from "./locales/it/button.json"
import zhButton from "./locales/zh/button.json"
import amMain from "./locales/am/main.json"
import enMain from "./locales/en/main.json"
import esMain from "./locales/es/main.json"
import itMain from "./locales/it/main.json"
import zhMain from "./locales/zh/main.json"
import amTest from "./locales/am/test.json"
import enTest from "./locales/en/test.json"
import esTest from "./locales/es/test.json"
import itTest from "./locales/it/test.json"
import zhTest from "./locales/zh/test.json"
import amFooter from "./locales/am/footer.json"
import enFooter from "./locales/en/footer.json"
import esFooter from "./locales/es/footer.json"
import itFooter from "./locales/it/footer.json"
import zhFooter from "./locales/zh/footer.json"
import amDesc from "./locales/am/desc.json"
import enDesc from "./locales/en/desc.json"
import esDesc from "./locales/es/desc.json"
import itDesc from "./locales/it/desc.json"
import zhDesc from "./locales/zh/desc.json"
i18n.use(initReactI18next).init({
    resources: {
    en: {
    translation: {
        ...enDesc,
        ...enFooter,
        ...enTest,
         ...enNav,
         ...enLogo,
         ...enHome,
         ...enBanner,
         ...enButton,
         ...enMain
        },

    },
    am: {
    translation: {
        ...amDesc,
        ...amFooter,
        ...amTest,
        ...amNav,
        ...amLogo,
        ...amHome,
        ...amBanner,
        ...amButton,
        ...amMain
    },
    },
    es: {
        translation: {
            ...esDesc,
            ...esFooter,
            ...esTest,
            ...esNav,
            ...esLogo,
            ...esHome,
            ...esBanner,
            ...esButton,
            ...esMain
        },
    },
    zh: {
        translation: {
            ...zhDesc,
            ...zhFooter,
            ...zhTest,
            ...zhNav,
            ...zhLogo,
            ...zhHome,
            ...zhBanner,
            ...zhButton,
            ...zhMain
        },
    },
    it: {
        translation: {
            ...itDesc,
            ...itFooter,
            ...itTest,
            ...itNav,
            ...itLogo,
            ...itHome,
            ...itBanner,
            ...itButton,
            ...itMain
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

