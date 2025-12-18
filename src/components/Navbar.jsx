import { useState } from "react";
import { MdCloudUpload, MdLightMode, MdMenu, MdClose, MdDarkMode } from "react-icons/md";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    "Home",
    "Features",
    "How it Works",
    "Pricing",
    "FAQ",
    "Contact",
  ];

  // دالة السكرول الناعم الذكية بالـ JavaScript
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // نوقف النط الفجائي الافتراضي

    // لو بنضغط على Home يطلع لأول الصفحة خالص
    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        // بنحسب مكان العنصر بالنسبة لأول الصفحة
        const offset = 80; // ده ارتفاع الناف بار + مسافة أمان صغيرة
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        // نفذ السكرول يا باشا
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // نقفل المنيو لو كنا فاتحينها في الموبايل
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:bg-slate-900/80 dark:border-slate-800 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 1. Logo Section */}
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={(e) => handleScroll(e, "home")} // حتى اللوجو نخليه يرجع للهوم بنعومة
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MdCloudUpload className="text-[28px]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-dark dark:text-white">
            Cloud Transvera
          </span>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const targetId = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={item}
                href={`#${targetId}`}
                onClick={(e) => handleScroll(e, targetId)} // ربطنا الدالة هنا
                className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* 3. Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            aria-label="Switch Language"
            className="flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <span className="text-xs font-bold">EN</span>
          </button>

          <button
            aria-label="Toggle Theme"
            className="flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            onClick={toggleTheme}
          >
            
            {theme === 'dark' ? (
              <MdLightMode className="text-[20px] text-yellow-500" />
            ) : (
              <MdDarkMode className="text-[20px] text-slate-600" />
            )}
          </button>

          <button
            // حتى زرار الـ CTA نربطه بالأسعار أو الكونتاكت
            onClick={(e) => handleScroll(e, "pricing")}
            className="h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-glow active:scale-95 cursor-pointer"
          >
            Start Free Trial
          </button>
        </div>

        {/* 4. Mobile/Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            aria-label="Toggle Theme"
            className="text-slate-500 dark:text-slate-400"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <MdLightMode className="text-[20px] text-yellow-500" />
            ) : (
              <MdDarkMode className="text-[20px] text-slate-600" />
            )}
          </button>

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

      {/* 5. Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl lg:hidden flex flex-col p-4 animate-[sweep_0.2s_ease-out]">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((item) => {
              const targetId = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  onClick={(e) => handleScroll(e, targetId)} // ربطنا الدالة هنا للموبايل كمان
                  className="text-base font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <hr className="border-slate-100 dark:border-slate-800 mb-6" />

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                Language
              </span>
              <button className="flex items-center justify-center rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                EN
              </button>
            </div>

            <button
              onClick={(e) => handleScroll(e, "pricing")}
              className="w-full h-11 items-center justify-center rounded-lg bg-primary px-4 text-base font-bold text-white transition-all hover:bg-blue-600 active:scale-95 cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
