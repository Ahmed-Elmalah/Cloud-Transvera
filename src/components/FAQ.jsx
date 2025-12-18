import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";

const FAQ = () => {
  // بنخزن رقم السؤال المفتوح حالياً، لو null يبقى كله مقفول
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is my data private?",
      answer: "Yes, absolutely. We use client-side encryption before data ever leaves your premises. We cannot see your files, and Microsoft cannot see your files. You hold the encryption key."
    },
    {
      question: "What if the internet cuts off?",
      answer: "Our hybrid technology ensures business continuity. The backup continues locally to your on-premise appliance or NAS. Cloud synchronization resumes automatically the moment connection returns."
    },
    {
      question: "Do you charge in Dollars?",
      answer: "No, we charge in Egyptian Pounds (EGP) with fixed monthly invoices. We absorb the currency exchange risk so you can have predictable budgeting for your IT infrastructure."
    }
  ];

  const toggleFAQ = (index) => {
    // لو داس على نفس السؤال المفتوح يقفله، ولو داس على غيره يفتحه
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* العنوان واخد أنيميشن لوحده */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-black text-primary-dark dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* التعديل هنا:
            شيلنا data-aos من جوه الـ map
            وحطيناه هنا على الكونتينر الكبير مرة واحدة
            ده هيخلي القائمة كلها تطلع مع بعض، وبكده AOS مش هيتدخل لما تفتح وتقفل كارد
        */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              // شيلنا data-aos و data-aos-delay من هنا خلاص
              className={`group rounded-xl bg-white border shadow-sm transition-all duration-300 overflow-hidden
                ${activeIndex === index 
                  ? 'border-primary/50 shadow-md ring-1 ring-primary/10 dark:bg-slate-800 dark:border-primary/50' 
                  : 'border-slate-200 hover:border-primary/30 dark:bg-slate-800 dark:border-slate-700'
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold transition-colors duration-300 
                  ${activeIndex === index ? 'text-primary' : 'text-primary-dark dark:text-white'}
                `}>
                  {item.question}
                </span>
                <span className={`ml-6 flex size-8 items-center justify-center rounded-full border transition-all duration-300
                   ${activeIndex === index 
                     ? 'bg-primary text-white border-primary rotate-180' 
                     : 'bg-slate-50 text-slate-400 border-slate-200 dark:bg-slate-700 dark:border-slate-600'
                   }
                `}>
                  <MdExpandMore className="text-2xl" />
                </span>
              </button>

              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out
                  ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
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

