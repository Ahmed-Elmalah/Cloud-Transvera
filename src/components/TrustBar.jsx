import { MdGridView, MdLock, MdSecurity, MdVerifiedUser } from "react-icons/md";
import { useTranslation } from "react-i18next";

const TrustBar = () => {
  const { t } = useTranslation();

  // Security items list
  const trustItems = [
    { icon: <MdGridView className="text-[32px]" />, text: t('trust_item_1') },
    { icon: <MdLock className="text-[32px]" />, text: t('trust_item_2') },
    { icon: <MdSecurity className="text-[32px]" />, text: t('trust_item_3') },
    { icon: <MdVerifiedUser className="text-[32px]" />, text: t('trust_item_4') },
  ];

  return (
    <div className="border-y border-slate-100 bg-slate-50 py-10 dark:bg-slate-900 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Header section */}
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8">
          {t('trust_title')}
        </p>
        
        {/* Badges container */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-300 cursor-default">
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;