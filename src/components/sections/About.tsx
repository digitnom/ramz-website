import { motion } from "framer-motion";
import { CheckCircle2, Factory, Palette, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function About() {
  const { isArabic } = useLanguage();

  return (
    <section id="about" className="section-space bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true"></div>
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#C9A664]/15 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="site-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-primary/20 p-2 bg-white/40 backdrop-blur-sm shadow-xl">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-primary/10">
                <img
                  src="/images/rawdah-mat.png"
                  alt={isArabic ? "جودة تصنيع رمز" : "RAMZ manufacturing craftsmanship"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className={`absolute -bottom-7 bg-background border border-border rounded-2xl shadow-xl p-5 max-w-[260px] ${
                isArabic ? "-right-6 md:-left-7 md:right-auto text-right" : "-left-6 md:left-auto md:-right-7"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A664]">
                {isArabic ? "التصنيع في" : "Manufactured In"}
              </p>
              <p className="text-lg font-serif font-bold text-foreground mt-1">
                {isArabic ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia"}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {isArabic
                  ? "أكثر من 200 منتج بتصاميم وألوان متعددة."
                  : "200+ products in multiple colors and signature designs."}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isArabic ? "text-right" : ""}
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A664]"></span>
              <span className="text-sm font-semibold tracking-wider uppercase">{isArabic ? "قصتنا" : "Our Story"}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {isArabic
                ? "مصنّع سعودي يقدم منتجات حياة إسلامية أصيلة"
                : "A Saudi Manufacturer Crafting Authentic Islamic Lifestyle Products"}
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {isArabic
                ? "رمز مصنع سعودي مقره جدة، نطوّر سجاد صلاة فاخر وديكورًا إسلاميًا وإكسسوارات مميزة مع تركيز دقيق على الجودة والمتانة واللمسة الجمالية الراقية."
                : "RAMZ is a manufacturer based in Jeddah, Saudi Arabia. We create premium prayer mats, Islamic decor, and accessories with a focus on craftsmanship, durability, and spiritual elegance."}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {isArabic
                ? "تضم مجموعتنا أكثر من 200 منتج بتصاميم وألوان متنوعة تخدم المنازل والهدايا والجهات المختلفة داخل المملكة، مع هوية تجمع الأصالة والتقديم العصري."
                : "Our collection includes 200+ products in multiple colors and designs, developed to serve homes, gifts, and institutions across the Kingdom. Every piece reflects authentic values through modern presentation."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className={`rounded-xl border border-border bg-background/80 p-4 ${isArabic ? "text-right" : ""}`}>
                <Factory className={`w-5 h-5 text-primary mb-2 ${isArabic ? "ms-auto" : ""}`} />
                <p className="text-sm font-semibold text-foreground">
                  {isArabic ? "مصنعنا في جدة" : "Manufacturer Based in Jeddah"}
                </p>
              </div>
              <div className={`rounded-xl border border-border bg-background/80 p-4 h-full ${isArabic ? "text-right" : ""}`}>
                <Palette className={`w-5 h-5 text-primary mb-2 ${isArabic ? "ms-auto" : ""}`} />
                <p className="text-sm font-semibold text-foreground">
                  {isArabic ? "تصاميم وألوان متعددة" : "Multiple Colors and Designs"}
                </p>
              </div>
              <div className={`rounded-xl border border-border bg-background/80 p-4 h-full ${isArabic ? "text-right" : ""}`}>
                <Sparkles className={`w-5 h-5 text-primary mb-2 ${isArabic ? "ms-auto" : ""}`} />
                <p className="text-sm font-semibold text-foreground">{isArabic ? "أكثر من 200 منتج" : "200+ Curated Products"}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border space-y-3">
              <div className={`flex items-start gap-3 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground">
                  {isArabic
                    ? "معايير تصنيع داخلية تضمن الجودة والثبات في كل منتج."
                    : "In-house manufacturing standards built for quality and consistency."}
                </p>
              </div>
              <div className={`flex items-start gap-3 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground">
                  {isArabic
                    ? "خطوط منتجات مستوحاة من التراث الإسلامي مع روح عصرية."
                    : "Design-first product lines inspired by Islamic heritage and modern living."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
