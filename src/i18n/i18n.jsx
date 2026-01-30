// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "./en.json";
// import ar from "./ar.json";

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       ar: { translation: ar },
//     },
//     lng: "en",         
//     fallbackLng: "en",  
//     interpolation: { escapeValue: false },
//   });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: localStorage.getItem("language") || "en", 
    fallbackLng: "en",  
    interpolation: { escapeValue: false },
  });


export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
};

export default i18n;
