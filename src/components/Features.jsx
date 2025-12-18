import { MdBolt, MdShield, MdChat } from "react-icons/md";

const Features = () => {
  const features = [
    {
      title: "Hybrid Technology",
      description:
        "Instant recovery from local storage for speed, secure redundant backup on the cloud for disaster recovery. Best of both worlds.",
      icon: <MdBolt className="text-[32px]" />,
      colorClass: "text-primary bg-blue-50 dark:bg-blue-900/30", // Blue theme
      borderHover: "hover:border-primary/50 hover:shadow-primary/5",
    },
    {
      title: "Restore Drills",
      description:
        "We simulate data recovery quarterly to guarantee your files are actually usable when you need them most. No corrupt backups.",
      icon: <MdShield className="text-[32px]" />,
      colorClass:
        "text-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-400", // Purple theme
      borderHover: "hover:border-primary/50 hover:shadow-primary/5", // خليتها primary عشان تليق او ممكن تغيرها ل purple
    },
    {
      title: "Weekly Reports",
      description:
        "Receive a simple WhatsApp message every week confirming your data is safe. Peace of mind delivered directly to your phone.",
      icon: <MdChat className="text-[32px]" />,
      colorClass: "text-accent-green bg-green-50 dark:bg-green-900/30", // Green theme
      borderHover: "hover:border-accent-green/50 hover:shadow-accent-green/5",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="mb-16 md:text-center max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-black tracking-tight text-primary-dark dark:text-white sm:text-4xl">
            Why Choose Cloud Transvera?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Designed specifically for the Egyptian market infrastructure. We
            solve the connectivity and currency challenges you face daily.
          </p>
        </div>

        {/* Grid */}
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
