import React from "react";
import { MdCloudUpload, MdLocationOn, MdPhone, MdMail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top:
            element.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            80,
          behavior: "smooth",
        });
      }
    }
  };

  const navLinks = [
    { key: "nav_home", id: "home" },
    { key: "nav_features", id: "features" },
    { key: "nav_how_it_works", id: "how-it-works" },
    { key: "nav_pricing", id: "pricing" },
    { key: "nav_faq", id: "faq" },
    { key: "nav_contact", id: "contact" },
  ];

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand info */}
          <div className="flex flex-col items-start">
            <div
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={(e) => handleScroll(e, "home")}
            >
              <div className="flex size-8 items-center justify-center rounded bg-primary/20 text-primary">
                <MdCloudUpload className="text-[20px]" />
              </div>
              <span className="text-lg font-bold text-white">
                {t("nav_logo")}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-blue-600"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-blue-700"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              {t("footer_links_title")}
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              {t("footer_contact_title")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-[22px] text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">{t("footer_location")}</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-[22px] text-primary shrink-0" />
                <a dir="ltr"
                  href="tel:+201064334334"
                  className="hover:text-white transition-colors"
                >
                  010 6433 4334
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdMail className="text-[22px] text-primary shrink-0" />
                <a
                  href="mailto:cloudtransvera@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  cloudtransvera@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} {t("nav_logo")}. {t("footer_rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              {t("footer_privacy")}
            </a>
            <a href="#" className="hover:text-white">
              {t("footer_terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
