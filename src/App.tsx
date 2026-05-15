import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider, Helmet } from "react-helmet-async";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LanguageProvider, useLanguage, type Language } from "@/context/language-context";

const Products = lazy(() => import("@/components/sections/Products").then((m) => ({ default: m.Products })));
const About = lazy(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Features = lazy(() => import("@/components/sections/Features").then((m) => ({ default: m.Features })));
const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials })),
);
const FAQ = lazy(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

const queryClient = new QueryClient();

function Home() {
  const { isArabic } = useLanguage();
  const [location] = useLocation();
  const isArabicRoute = location === "/ar" || location.startsWith("/ar/");
  const canonicalUrl = isArabicRoute ? "https://ramzksa.com/ar/" : "https://ramzksa.com/";

  return (
    <>
      <Helmet>
        <title>
          {isArabic
            ? "رمز - سجاد صلاة فاخر ومنتجات نمط الحياة الإسلامية | جدة، السعودية"
            : "RAMZ - Premium Prayer Mats & Islamic Lifestyle Products | Jeddah, KSA"}
        </title>
        <meta
          name="description"
          content={
            isArabic
              ? "رمز يقدم سجاد صلاة فاخر، ديكور إسلامي، لوحات آية الكرسي، سجادات ميموري فوم، وإكسسوارات مميزة. نخدم جدة وجميع مناطق المملكة العربية السعودية."
              : "RAMZ (Ramz) offers premium prayer mats, Islamic wall art, Ayatul Kursi decor, memory foam sejadah, and accessories. Serving Jeddah and all of Saudi Arabia. Shop authentic Islamic lifestyle products."
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-SA" href="https://ramzksa.com/" />
        <link rel="alternate" hrefLang="ar-SA" href="https://ramzksa.com/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://ramzksa.com/" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
      </Helmet>
      <div className="min-h-screen flex flex-col w-full font-sans">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Suspense
            fallback={
              <div className="site-shell section-space text-center text-muted-foreground">
                {isArabic ? "جاري التحميل..." : "Loading..."}
              </div>
            }
          >
            <Products />
            <About />
            <Features />
            <Testimonials />
            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

function LocalizedHome({ language }: { language: Language }) {
  const { language: activeLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    if (activeLanguage !== language) {
      setLanguage(language);
    }
  }, [activeLanguage, language, setLanguage]);

  return <Home />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/en" component={() => <LocalizedHome language="en" />} />
      <Route path="/en/" component={() => <LocalizedHome language="en" />} />
      <Route path="/ar" component={() => <LocalizedHome language="ar" />} />
      <Route path="/ar/" component={() => <LocalizedHome language="ar" />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
