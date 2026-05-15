import { Menu, X, Phone, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/context/language-context";

type NavItem = {
  key: string;
  name: string;
  hash: string;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const { language, setLanguage, isArabic } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const localeRoot = location === "/ar" || location.startsWith("/ar/") ? "/ar/" : "/";
  const navLinks: NavItem[] = isArabic
    ? [
        { key: "home", name: "الرئيسية", hash: "" },
        { key: "products", name: "المنتجات", hash: "#products" },
        { key: "about", name: "من نحن", hash: "#about" },
        { key: "faq", name: "الأسئلة الشائعة", hash: "#faq" },
        { key: "contact", name: "تواصل معنا", hash: "#contact" },
      ]
    : [
        { key: "home", name: "Home", hash: "" },
        { key: "products", name: "Products", hash: "#products" },
        { key: "about", name: "About", hash: "#about" },
        { key: "faq", name: "FAQ", hash: "#faq" },
        { key: "contact", name: "Contact", hash: "#contact" },
      ];

  const textColorClass = scrolled ? "text-foreground" : "text-foreground md:text-background";

  const toggleLanguageAndRoute = () => {
    const nextLanguage = language === "ar" ? "en" : "ar";
    const hash = window.location.hash || "";
    const nextRoute = nextLanguage === "ar" ? `/ar/${hash}` : `/${hash}`;
    setLanguage(nextLanguage);
    setLocation(nextRoute);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="site-shell flex items-center justify-between gap-3">
        <a href={localeRoot} className="flex items-center gap-2" data-testid="link-home">
          <img
            src={isArabic ? "/logo-ar.png" : "/logo.png"}
            alt={isArabic ? "شعار رمز" : "RAMZ Logo"}
            width={1904}
            height={891}
            className="h-14 md:h-16 w-auto object-contain"
            fetchPriority="high"
            decoding="async"
          />
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={`${localeRoot}${link.hash}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${textColorClass}`}
                  data-testid={`link-${link.key}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLanguageAndRoute}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-2 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-background"
            data-testid="button-language-toggle"
            aria-label={isArabic ? "Switch to English" : "التحويل إلى العربية"}
          >
            <Languages className="h-4 w-4" />
            {language === "ar" ? "EN" : "AR"}
          </button>

          <a
            href="https://wa.me/966534649387"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium transition-transform hover:scale-105 shadow-md"
            data-testid="button-whatsapp-nav"
          >
            <Phone className="w-4 h-4" />
            <span>{isArabic ? "راسلنا واتساب" : "WhatsApp Us"}</span>
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguageAndRoute}
            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-xs font-semibold ${textColorClass}`}
            data-testid="button-language-toggle-mobile"
            aria-label={isArabic ? "Switch to English" : "التحويل إلى العربية"}
          >
            <Languages className="h-4 w-4" />
            {language === "ar" ? "EN" : "AR"}
          </button>

          <button
            className={`p-2 rounded-md ${textColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isArabic ? "فتح القائمة" : "Toggle Menu"}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg">
          <div className="site-shell py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={`${localeRoot}${link.hash}`}
                    className={`block text-base font-medium text-foreground hover:text-primary ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.key}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/966534649387"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium w-full"
              data-testid="button-whatsapp-mobile"
            >
              <Phone className="w-4 h-4" />
              <span>{isArabic ? "راسلنا واتساب" : "WhatsApp Us"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
