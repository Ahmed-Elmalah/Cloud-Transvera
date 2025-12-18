import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  // 1. إعدادات الرقم والرسالة
  const phoneNumber = "201064334334"; // كود مصر + الرقم من غير 0
  const message = encodeURIComponent("Hello, I'm interested in Cloud Transvera services."); // الرسالة الجاهزة
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank" // يفتح في تبويب جديد
      rel="noopener noreferrer" // أمان
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-bounce-slow"
      title="Chat with us on WhatsApp"
    >
      {/* أيقونة الواتساب */}
      <FaWhatsapp className="text-3xl" />
      
      {/* نقطة حمراء صغيرة (Notification Badge) كأن فيه رسالة عشان تلفت انتباهه */}
      <span className="absolute top-0 right-0 flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;