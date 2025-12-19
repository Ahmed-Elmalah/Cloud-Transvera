import React, { useEffect } from "react"; // متنساش useEffect
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الـ CSS بتاع المكتبة

import useThemeStore from "./store/themeStore";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

import { useTranslation } from 'react-i18next';

function App() {
  const { theme } = useThemeStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [i18n.language])

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // مش محتاجين نضيف كلاس 'light' لأن تيلويند بيعتبر غياب 'dark' هو الـ light
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100, // يبدأ الأنيميشن قبل ما العنصر يظهر بـ 100 بيكسل
      duration: 800, // مدة الحركة (مللي ثانية)
      easing: "ease-in-out", // شكل الحركة
      once: true, // الأنيميشن يحصل مرة واحدة بس (عشان ميفضلش يروح ويجي وانت بتعمل سكرول)
    });
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden pt-16">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="flex-auto">
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
