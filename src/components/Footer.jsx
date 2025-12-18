import React from 'react';
import { MdCloudUpload, MdLocationOn, MdPhone, MdMail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // استوردنا أيقونات السوشيال

const Footer = () => {
  
  // دالة السكرول عشان اللينكات تشتغل بنعومة زي الناف بار
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const navLinks = ['Home', 'Features', 'How it Works', 'Pricing', 'FAQ', 'Contact'];

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid: خليناه 3 عواميد بس بدل 4 عشان شيلنا الـ Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={(e) => handleScroll(e, 'home')}
            >
              <div className="flex size-8 items-center justify-center rounded bg-primary/20 text-primary">
                <MdCloudUpload className="text-[20px]" />
              </div>
              <span className="text-lg font-bold text-white">Cloud Transvera</span>
            </div>
            
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Secure, reliable, and localized hybrid cloud backup solutions empowering Egyptian businesses to grow without fear of data loss.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/17ceY7VNPJ/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-[#1877F2] hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/company/cloud-transvera/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-[#0A66C2] hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (كانت Company) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((item) => {
                 const targetId = item.toLowerCase().replace(/\s+/g, '-');
                 return (
                  <li key={item}>
                    <a 
                      href={`#${targetId}`} 
                      onClick={(e) => handleScroll(e, targetId)}
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> {/* نقطة جمالية */}
                      {item}
                    </a>
                  </li>
                 );
              })}
            </ul>
          </div>

          {/* Column 3: Contact Info (محدثة) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-[22px] text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">Headquartered in the Cloud ☁️</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-[22px] text-primary shrink-0" />
                <a href="tel:+201064334334" className="hover:text-white transition-colors font-medium">
                  010 6433 4334
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdMail className="text-[22px] text-primary shrink-0" />
                <a href="mailto:cloudtransvera@gmail.com" className="hover:text-white transition-colors">
                  cloudtransvera@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Cloud Transvera. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;