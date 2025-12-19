import { MdBolt, MdShield, MdChat } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  // Features configuration
  const features = [
    {
      title: t('feature_1_title'),
      description: t('feature_1_desc'),
      icon: <MdBolt className="text-[32px]" />,
      colorClass: "text-primary bg-blue-50 dark:bg-blue-900/30",
      borderHover: "hover:border-primary/50 hover:shadow-primary/5",
    },
    {
      title: t('feature_2_title'),
      description: t('feature_2_desc'),
      icon: <MdShield className="text-[32px]" />,
      colorClass: "text-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-400",
      borderHover: "hover:border-primary/50 hover:shadow-primary/5",
    },
    {
      title: t('feature_3_title'),
      description: t('feature_3_desc'),
      icon: <MdChat className="text-[32px]" />,
      colorClass: "text-accent-green bg-green-50 dark:bg-green-900/30",
      borderHover: "hover:border-accent-green/50 hover:shadow-accent-green/5",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div
          className="mb-16 md:text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-black tracking-tight text-primary-dark dark:text-white sm:text-4xl">
            {t('features_title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {t('features_subtitle')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 ${feature.borderHover}`}
            >
              <div
                className={`mb-6 inline-flex size-14 items-center justify-center rounded-xl ${feature.colorClass}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;