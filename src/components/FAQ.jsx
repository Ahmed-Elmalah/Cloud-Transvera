import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data mapped to JSON keys
  const faqs = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-black text-primary-dark dark:text-white">
            {t('faq_title')}
          </h2>
        </div>

        {/* Questions list */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`group rounded-xl bg-white border shadow-sm transition-all duration-300 overflow-hidden ${activeIndex === index ? 'border-primary/50 shadow-md ring-1 ring-primary/10 dark:bg-slate-800 dark:border-primary/50' : 'border-slate-200 hover:border-primary/30 dark:bg-slate-800 dark:border-slate-700'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left rtl:text-right"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-primary-dark dark:text-white'}`}>
                  {item.question}
                </span>
                <span className={`ml-6 flex size-8 items-center justify-center rounded-full border transition-all duration-300 ${activeIndex === index ? 'bg-primary text-white border-primary rotate-180' : 'bg-slate-50 text-slate-400 border-slate-200 dark:bg-slate-700 dark:border-slate-600'}`}>
                  <MdExpandMore className="text-2xl" />
                </span>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;