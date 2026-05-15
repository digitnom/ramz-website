import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Hero() {
  const { isArabic } = useLanguage();

  return (
    <section className="relative min-h-[92svh] md:min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.png" alt={isArabic ? "سجاد صلاة فاخر من رمز" : "RAMZ Premium Prayer Mats"} className="w-full h-full object-cover object-center" />
        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-black/80 via-black/50 to-transparent"
              : "bg-gradient-to-r from-black/80 via-black/50 to-transparent"
          }`}
        ></div>
      </div>

      <div className="site-shell relative z-10 pt-28 pb-12 md:pt-32">
        <div className={`max-w-2xl ${isArabic ? "ml-auto text-right" : ""}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[#C9A664] font-arabic text-3xl md:text-4xl mb-4 tracking-wider">
              {isArabic ? "حياة أصيلة" : "Authentic Living"}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              {isArabic ? (
                <>
                  حياة أصيلة.
                  <br />
                  <span className="text-white/90 font-light text-3xl md:text-5xl lg:text-6xl">مصنوعة بروح الطمأنينة.</span>
                </>
              ) : (
                <>
                  Authentic Life. <br />
                  <span className="text-white/90 font-light italic text-3xl md:text-5xl lg:text-6xl">
                    Crafted for devotion.
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              {isArabic
                ? "اكتشف أسلوب حياة إسلامي متكامل مع سجاد صلاة فاخر، وديكور أنيق، وإكسسوارات مصممة لترتقي بتجربتك اليومية."
                : "Step into a beautifully curated Islamic lifestyle with premium prayer mats, art, and accessories designed to elevate your daily rituals."}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isArabic ? "sm:justify-end" : ""}`}>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A664] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#b59250] transition-colors shadow-lg"
                data-testid="hero-cta-products"
              >
                {isArabic ? "استكشف المنتجات" : "Explore Catalogue"}
                {isArabic ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md font-medium text-lg text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm"
                data-testid="hero-cta-about"
              >
                {isArabic ? "قصتنا" : "Our Story"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
