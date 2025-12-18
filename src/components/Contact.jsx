import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSend,
  MdCheckCircle,
} from "react-icons/md";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        (result) => {
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully! We'll contact you soon.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#10B981",
              color: "#fff",
              fontWeight: "bold",
            },
          });
          setLoading(false);
          setSuccess(true);
          e.target.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setLoading(false);
          toast.dismiss(loadingToast);
          toast.error("Something went wrong. Please try again.", {
            position: "top-center",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-background-dark transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Info */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-black text-primary-dark dark:text-white sm:text-4xl mb-6">
              Get in touch with our experts
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
              Have questions about enterprise backup? Need a custom quote? Fill
              out the form and we will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MdPhone className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Call Us</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    010 6433 4334
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MdEmail className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Email Us</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    support@cloudtransvera.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MdLocationOn className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Location</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    Digital-First, Serving All Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Ahmed Ali"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="ahmed@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone (Full Width now) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="010xxxxxxx"
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="resize-none w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white transition-all duration-300
                  ${
                    success
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-primary hover:bg-blue-600 shadow-glow hover:shadow-lg hover:-translate-y-1"
                  }
                  ${loading ? "opacity-70 cursor-wait" : ""}
                `}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : success ? (
                  <>
                    <MdCheckCircle className="text-xl" /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <MdSend className="text-lg" />
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
