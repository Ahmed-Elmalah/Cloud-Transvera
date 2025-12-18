import { MdArrowForward, MdCheckCircle, MdCloudDone } from "react-icons/md";
import heroImg from '../assets/unnamed.jpg'
const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-background-dark pt-16 pb-24 lg:pt-32 lg:pb-40"
    >
      {/* Background Decorative Blob */}
      <div className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center ">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            className="flex flex-col items-center text-center lg:text-start lg:items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-primary dark:border-blue-900/50 dark:bg-blue-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Egypt's #1 Hybrid Backup
            </div>

            <h1 className="text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl dark:text-white leading-[1.1]">
              Secure Your Business Continuity with{" "}
              <span className="text-primary">Smart Hybrid Backup.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
              Enterprise-grade data protection for Egyptian SMEs powered by
              Microsoft Azure. Local speed combined with unbeatable Cloud
              security.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="h-12 px-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Start 7-Day Free Trial
                <MdArrowForward className="text-[20px]" />
              </button>
              <button className="h-12 px-8 rounded-lg border border-slate-200 bg-white text-primary-dark font-bold hover:bg-slate-50 hover:border-slate-300 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 cursor-pointer">
                Book a Demo
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <MdCheckCircle className="text-[18px] text-accent-green" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <MdCheckCircle className="text-[18px] text-accent-green" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Image & Floating UI */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative lg:h-auto flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-125 aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              {/* Image Placeholder */}
              <img
                alt="Isometric illustration"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                src={heroImg}
              />

              {/* Overlay UI Mockup */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-slate-100 dark:bg-slate-900/90 dark:border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-accent-green">
                      <MdCloudDone />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary-dark dark:text-white">
                        Backup Complete
                      </p>
                      <p className="text-xs text-slate-500">
                        Just now • 2.4 GB Synced
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
