import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { isArabic } = useLanguage();

  return (
    <footer className="bg-[#1B5C2E] text-white pt-16 pb-8 border-t-4 border-[#C9A664]">
      <div className="site-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className={`flex flex-col gap-4 ${isArabic ? "items-end text-right" : ""}`}>
            <div className="w-fit mx-auto rounded-2xl bg-white shadow-md ring-1 ring-black/5">
              <img
                src={isArabic ? "/logo-ar.png" : "/logo.png"}
                alt={isArabic ? "شعار رمز" : "RAMZ Logo"}
                width={1904}
                height={891}
                className="block h-24 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className={`text-sm text-white/70 max-w-xs mt-2 ${isArabic ? "mr-auto text-right" : ""}`}>
              {isArabic
                ? "رمز علامة سعودية متخصصة في التصنيع بجودة عالية لسجاد الصلاة والديكور والإكسسوارات الإسلامية من جدة."
                : "Premium Islamic lifestyle brand based in Jeddah, offering high-quality prayer mats, decor, and accessories."}
            </p>
          </div>

          <div className={isArabic ? "text-right" : ""}>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#C9A664]">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors" data-testid="footer-link-home">
                  {isArabic ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-products"
                >
                  {isArabic ? "المنتجات" : "Products"}
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors" data-testid="footer-link-about">
                  {isArabic ? "من نحن" : "About Us"}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-testimonials"
                >
                  {isArabic ? "آراء العملاء" : "Testimonials"}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  {isArabic ? "تواصل معنا" : "Contact"}
                </a>
              </li>
            </ul>
          </div>

          <div className={isArabic ? "text-right" : ""}>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#C9A664]">
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className={`flex w-full items-start gap-3 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                <MapPin className="w-5 h-5 text-[#C9A664] shrink-0 mt-0.5" />
                <span className={`min-w-0 flex-1 text-sm text-white/80 ${isArabic ? "text-right" : ""}`}>
                  {isArabic ? (
                    <>
                      مركز الروضة التجاري،
                      <br />
                      شارع الروضة، جدة، المملكة العربية السعودية
                    </>
                  ) : (
                    <>
                      Rawdah Commercial Center,
                      <br />
                      Ar Rawdah Street, Jeddah, Saudi Arabia
                    </>
                  )}
                </span>
              </li>
              <li className={`flex w-full items-start gap-3 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                <Phone className="w-5 h-5 text-[#C9A664] shrink-0" />
                <div
                  dir="ltr"
                  className={`min-w-0 flex-1 flex flex-col gap-1 [unicode-bidi:plaintext] ${isArabic ? "items-end text-right" : "items-start text-left"}`}
                >
                  <a href="tel:+966534649387" className="text-sm text-white/80 hover:text-white">
                    +966 53 464 9387
                  </a>
                  <a href="tel:+966555065473" className="text-sm text-white/80 hover:text-white">
                    +966 555 065 473
                  </a>
                </div>
              </li>
              <li className={`flex w-full items-center gap-3 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                <Mail className="w-5 h-5 text-[#C9A664] shrink-0" />
                <a href="mailto:info@ramzksa.com" className={`min-w-0 flex-1 text-sm text-white/80 hover:text-white ${isArabic ? "text-right" : ""}`}>
                  info@ramzksa.com
                </a>
              </li>
            </ul>
          </div>

          <div className={isArabic ? "text-right" : ""}>
            <h4 className="text-lg font-serif font-semibold mb-6 text-[#C9A664]">
              {isArabic ? "تابعنا" : "Follow Us"}
            </h4>
            <div className={`flex items-center gap-4 mb-8 ${isArabic ? "justify-end" : ""}`}>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A664] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A664] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A664] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            {isArabic
              ? `© ${new Date().getFullYear()} رمز. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} RAMZ. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
