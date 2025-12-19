import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSend,
  MdCheckCircle,
} from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Email submission handler
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending your message...");
    emailjs
      .sendForm(
        "service_8l4sf5f",
        "template_bqj015j",
        form.current,
        "NdZbPsFs2GtS1ggWX"
      )
      .then(
        () => {
          toast.dismiss(loadingToast);
          toast.success(t("contact_btn_sent"), {
            duration: 4000,
            position: "top-center",
          });
          setLoading(false);
          setSuccess(true);
          e.target.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setLoading(false);
          toast.dismiss(loadingToast);
          toast.error("Error sending message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-background-dark transition-colors duration-300"
    >
      <Toaster />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left section: Contact Info */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-black text-primary-dark dark:text-white sm:text-4xl mb-6">
              {t("contact_title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
              {t("contact_subtitle")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MdPhone className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">
                    {t("contact_info_call")}
                  </p>
                  <p dir="ltr" className="text-lg font-bold text-slate-900 dark:text-white">
                    010 6433 4334
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MdEmail className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">
                    {t("contact_info_email")}
                  </p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    cloudtransvera@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MdLocationOn className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">
                    {t("contact_info_location")}
                  </p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    {t("footer_location")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right section: Contact Form */}
          <div
            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t("contact_label_name")}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                    placeholder="Ahmed Ali"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t("contact_label_email")}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                    placeholder="ahmed@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t("contact_label_phone")}
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                  placeholder="010xxxxxxx"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t("contact_label_message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="resize-none w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                  placeholder="..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white transition-all ${
                  success
                    ? "bg-green-500"
                    : "bg-primary hover:bg-blue-600 shadow-glow"
                }`}
              >
                {loading ? (
                  t("contact_btn_sending")
                ) : success ? (
                  t("contact_btn_sent")
                ) : (
                  <>
                    {t("contact_btn_send")}{" "}
                    <MdSend className="text-lg rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
