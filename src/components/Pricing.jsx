import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { filesPlans, vmPlans } from "../data/pricing";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const [isVm, setIsVm] = useState(false);
  const currentPlans = isVm ? vmPlans : filesPlans;

  // WhatsApp logic with translations
  const handleSubscribe = (plan) => {
    const phoneNumber = "201064334334";
    const category = isVm ? t("pricing_toggle_vm") : t("pricing_toggle_files");

    const message = `${t("wa_hello")}
${t("wa_interest")} *${t(plan.title)}*.
${t("wa_type")}: ${category}
${t("wa_price")}: ${plan.price} ${t("pricing_egp_mo")}
${t("wa_storage")}: ${plan.storage}
${t("wa_footer")}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-white dark:bg-background-dark transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-primary-dark dark:text-white sm:text-4xl">
            {t("pricing_title")}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {t("pricing_subtitle")}
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div
            className="relative flex h-14 w-80 cursor-pointer items-center rounded-full bg-slate-100 p-1.5 dark:bg-slate-800 select-none"
            onClick={() => setIsVm(!isVm)}
          >
            {/* Pill animation - adjusted for RTL */}
            <div
              className={`absolute h-11 w-[calc(50%-6px)] rounded-full bg-white shadow-md transition-transform duration-300 ease-out dark:bg-slate-700 
                ${
                  isVm
                    ? i18n.language === "ar"
                      ? "-translate-x-full"
                      : "translate-x-full"
                    : "translate-x-0"
                }`}
            ></div>

            <span
              className={`relative z-10 w-1/2 text-center text-sm transition-colors duration-300 font-bold ${
                !isVm ? "text-primary-dark dark:text-white" : "text-slate-500"
              }`}
            >
              {t("pricing_toggle_files")}
            </span>
            <span
              className={`relative z-10 w-1/2 text-center text-sm transition-colors duration-300 font-bold ${
                isVm ? "text-primary-dark dark:text-white" : "text-slate-500"
              }`}
            >
              {t("pricing_toggle_vm")}
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
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
                plan.isPopular
                  ? "border-2 border-primary bg-white shadow-xl dark:bg-slate-800 scale-105 z-10"
                  : "border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm">
                  {t(plan.badge)}
                </div>
              )}

              <h3 className="text-lg font-bold text-primary-dark dark:text-white">
                {t(plan.title)}
              </h3>

              <div className="mt-4 mb-6">
                <span className="text-4xl font-black text-primary-dark dark:text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 font-medium">
                  {" "}
                  {t("pricing_egp_mo")}
                </span>
                <p className="text-sm text-slate-400 mt-1">
                  {plan.storage} {t("pricing_storage_label")}
                </p>
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <MdCheck className="text-accent-green text-[18px] shrink-0" />
                    {t(feature)}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan)}
                className={`w-full rounded-lg py-3 text-sm font-bold transition-colors ${
                  plan.isPopular
                    ? "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                    : "bg-slate-100 text-primary-dark hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                }`}
              >
                {t("pricing_btn")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
