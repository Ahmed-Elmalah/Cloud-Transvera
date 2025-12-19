import { MdDownload, MdSyncLock, MdHistory } from "react-icons/md";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  // Steps configuration
  const steps = [
    {
      icon: <MdDownload className="text-[40px] text-primary" />,
      title: t('step_1_title'),
      desc: t('step_1_desc'),
    },
    {
      icon: <MdSyncLock className="text-[40px] text-primary" />,
      title: t('step_2_title'),
      desc: t('step_2_desc'),
    },
    {
      icon: <MdHistory className="text-[40px] text-primary" />,
      title: t('step_3_title'),
      desc: t('step_3_desc'),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-background-light dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            {t('how_it_works_badge')}
          </span>
          <h2 className="mt-2 text-3xl font-black text-primary-dark dark:text-white sm:text-4xl">
            {t('how_it_works_title')}
          </h2>
        </div>

        {/* Steps container */}
        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="flex size-24 items-center justify-center rounded-full bg-white border-4 border-slate-100 shadow-lg mb-6 dark:bg-slate-800 dark:border-slate-700">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;