import { useState } from "react";
import {
  MdCloudUpload,
  MdLightMode,
  MdMenu,
  MdClose,
  MdDarkMode,
} from "react-icons/md";
import useThemeStore from "../store/themeStore";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  // Navigation Data
  const navLinks = [
    { key: "nav_home", id: "home" },
    { key: "nav_features", id: "features" },
    { key: "nav_how_it_works", id: "how-it-works" },
    { key: "nav_pricing", id: "pricing" },
    { key: "nav_faq", id: "faq" },
    { key: "nav_contact", id: "contact" },
  ];

  // Smooth Scroll Handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  // Language Switcher
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:bg-slate-900/80 dark:border-slate-800 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={(e) => handleScroll(e, "home")}
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MdCloudUpload className="text-[28px]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-dark dark:text-white">
            {t("nav_logo") || "Cloud Transvera"}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.key}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <span className="text-xs font-bold">
              {i18n.language === "en" ? "AR" : "EN"}
            </span>
          </button>

          <button
            aria-label="Toggle Theme"
            className="flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <MdLightMode className="text-[20px] text-yellow-500" />
            ) : (
              <MdDarkMode className="text-[20px] text-slate-600" />
            )}
          </button>

          <button
            onClick={(e) => handleScroll(e, "pricing")}
            className="h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-glow active:scale-95 cursor-pointer"
          >
            {t("nav_start_trial")}
          </button>
        </div>

        {/* Mobile/Tablet Controls (Language & Theme next to Menu) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <span className="text-xs font-bold">
              {i18n.language === "en" ? "AR" : "EN"}
            </span>
          </button>

          {/* Mobile Theme Toggle */}
          <button
            aria-label="Toggle Theme"
            className="p-2 text-slate-500 dark:text-slate-400"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <MdLightMode className="text-[20px] text-yellow-500" />
            ) : (
              <MdDarkMode className="text-[20px] text-slate-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 dark:text-white p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? (
              <MdClose className="text-[28px]" />
            ) : (
              <MdMenu className="text-[28px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl lg:hidden flex flex-col p-4 animate-[sweep_0.2s_ease-out]">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className="text-base font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <hr className="border-slate-100 dark:border-slate-800 mb-6" />

          <div className="flex flex-col gap-4">
            {/* Mobile CTA (Language Button removed from here as it's now in Header) */}
            <button
              onClick={(e) => handleScroll(e, "pricing")}
              className="w-full h-11 items-center justify-center rounded-lg bg-primary px-4 text-base font-bold text-white transition-all hover:bg-blue-600 active:scale-95 cursor-pointer"
            >
              {t("nav_start_trial")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
