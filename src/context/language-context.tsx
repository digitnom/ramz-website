import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isArabic: boolean;
};

const LANGUAGE_KEY = "ramz_language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectLanguageFromPath(pathname: string): Language | null {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    return "ar";
  }
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return null;
}

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  return preferred.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const pathLanguage = detectLanguageFromPath(window.location.pathname);
  if (pathLanguage) {
    return pathLanguage;
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
  if (savedLanguage === "en" || savedLanguage === "ar") {
    return savedLanguage;
  }

  return detectBrowserLanguage();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "ar" : "en")),
      isArabic: language === "ar",
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
