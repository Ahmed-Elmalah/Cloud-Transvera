import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { filesPlans, vmPlans } from "../data/pricing";

const Pricing = () => {
  // State للتحويل بين الخطط
  const [isVm, setIsVm] = useState(false);

  // المتغير اللي شايل الداتا اللي هتتعرض حالياً
  const currentPlans = isVm ? vmPlans : filesPlans;

  // 👇👇 دالة الواتساب الجديدة 👇👇
  const handleSubscribe = (plan) => {
    const phoneNumber = "201064334334"; // رقمك
    
    // بنحدد نوع الباقة عشان تتكتب في الرسالة (Files ولا VM)
    const category = isVm ? "VM/Server Backup" : "Files Backup";

    // تجهيز نص الرسالة
    const message = `Hello Cloud Transvera 👋,
I am interested in the *${plan.title}* plan.
Type: ${category}
Price: ${plan.price} EGP/mo
Storage: ${plan.storage}
Please provide me with subscription details.`;

    // فتح الرابط
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-white dark:bg-background-dark transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-primary-dark dark:text-white sm:text-4xl">
            Transparent Pricing in EGP
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            No hidden fees. No dollar fluctuation surprises.
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div
            className="relative flex h-14 w-80 cursor-pointer items-center rounded-full bg-slate-100 p-1.5 dark:bg-slate-800 select-none"
            onClick={() => setIsVm(!isVm)}
          >
            {/* الدائرة المتحركة (The Pill) */}
            <div
              className={`absolute h-11 w-[calc(50%-6px)] rounded-full bg-white shadow-md transition-transform duration-300 ease-out dark:bg-slate-700 ${
                isVm ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>

            {/* Text Labels */}
            <span
              className={`relative z-10 w-1/2 text-center text-sm transition-colors duration-300 font-bold ${
                !isVm
                  ? "text-primary-dark dark:text-white"
                  : "text-slate-500 font-medium"
              }`}
            >
              Files Backup
            </span>
            <span
              className={`relative z-10 w-1/2 text-center text-sm transition-colors duration-300 font-bold ${
                isVm
                  ? "text-primary-dark dark:text-white"
                  : "text-slate-500 font-medium"
              }`}
            >
              VM/Server Backup
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300
                ${
                  plan.isPopular
                    ? "border-2 border-primary bg-white shadow-xl shadow-primary/10 dark:bg-slate-800 dark:border-primary scale-105 z-10"
                    : "border border-slate-200 bg-white shadow-sm hover:shadow-md dark:bg-slate-800 dark:border-slate-700"
                }
              `}
            >
              {/* Badge for Popular Plans */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold text-primary-dark dark:text-white">
                {plan.title}
              </h3>

              <div className="mt-4 mb-6">
                <span className="text-4xl font-black text-primary-dark dark:text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 font-medium"> EGP/mo</span>
                <p className="text-sm text-slate-400 mt-1">
                  {plan.storage} Storage
                </p>
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <MdCheck className="text-accent-green text-[18px]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 👇👇 الزرار اتربط بالدالة هنا 👇👇 */}
              <button
                onClick={() => handleSubscribe(plan)}
                className={`w-full rounded-lg py-3 text-sm font-bold transition-colors cursor-pointer
                  ${
                    plan.isPopular
                      ? "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                      : "bg-slate-100 text-primary-dark hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                  }
                `}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;