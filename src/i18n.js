import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات الترجمة اللي عملناها
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n
  .use(LanguageDetector) // عشان يكتشف اللغة تلقائي
  .use(initReactI18next) // عشان يربط مع رياكت
  .init({
    resources,
    fallbackLng: "en", // اللغة الافتراضية لو معرفش يحدد لغة
    debug: true, // بيطلعلك معلومات في الكونسول (هنقفله لما نخلص)
    
    interpolation: {
      escapeValue: false, // مش محتاجينها مع React
    },
  });

export default i18n;