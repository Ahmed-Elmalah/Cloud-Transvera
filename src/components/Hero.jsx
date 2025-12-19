import { MdArrowForward, MdCheckCircle, MdCloudDone } from "react-icons/md";
import heroImg from '../assets/unnamed.jpg';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  // Smooth scroll to pricing section
  const scrollToPricing = (e) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      const offset = 80; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-background-dark pt-16 pb-24 lg:pt-24 lg:pb-40"
    >
      {/* Background Decorative Blob */}
      <div className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center ">
          
          {/* Left Content Section */}
          <div
            data-aos="fade-right"
            className="flex flex-col items-center text-center lg:text-start lg:items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-primary dark:border-blue-900/50 dark:bg-blue-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('hero_badge')}
            </div>

            <h1 className="text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl dark:text-white leading-[1.1]">
              {t('hero_title')}
              <span className="text-primary">{t('hero_title_highlight')}</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
              {t('hero_subtitle')}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* Main CTA: Scroll to Pricing */}
              <button 
                onClick={scrollToPricing}
                className="h-12 px-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                {t('hero_btn_trial')}
                <MdArrowForward className="text-[20px] rtl:rotate-180" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MdCheckCircle className="text-[18px] text-accent-green" />
                <span>{t('hero_check_1')}</span>
              </div>
              <div className="flex items-center gap-1">
                <MdCheckCircle className="text-[18px] text-accent-green" />
                <span>{t('hero_check_2')}</span>
              </div>
            </div>
          </div>

          {/* Right Section: Image & UI Mockup */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative lg:h-auto flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-125 aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <img
                alt="Cloud Transvera Hero"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                src={heroImg}
              />

              {/* Overlay Status Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-slate-100 dark:bg-slate-900/90 dark:border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-accent-green">
                      <MdCloudDone />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary-dark dark:text-white">
                        {t('hero_backup_complete')}
                      </p>
                      <p className="text-xs text-slate-500">
                        {t('hero_just_now')} • 2.4 GB Synced
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded dark:bg-blue-900/30">
                    Azure
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="bg-accent-green h-1.5 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;