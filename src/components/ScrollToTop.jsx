import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // لو نزلنا مسافة أكبر من 300 بيكسل (تقريباً بعد الهيرو) يظهر الزرار
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // تنظيف المستمع لما الكومبوننت يتمسح عشان الأداء
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className={`fixed bottom-24 right-8 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <MdArrowUpward className="text-2xl" />
    </button>
  );
};

export default ScrollToTop;