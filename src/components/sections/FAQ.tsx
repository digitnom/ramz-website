import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isArabic } = useLanguage();

  const faqs = isArabic
    ? [
        {
          q: "أين أجد سجاد صلاة فاخر في جدة؟",
          a: "يمكنك زيارة رمز في مركز الروضة التجاري، شارع الروضة، جدة. نوفر سجاد بامبو سيلك، ميموري فوم، فيسكوز، وتصاميم الروضة. كما يمكنك الطلب عبر واتساب على +966 53 464 9387 أو +966 555 065 473.",
        },
        {
          q: "ما أنواع سجاد الصلاة المتوفرة لديكم؟",
          a: "نوفر سجاد بامبو سيلك، سجاد ميموري فوم بسماكات مختلفة، سجاد سفر رول، سجاد حقيبة، وسجاد فاخر بتصاميم متنوعة وألوان متعددة.",
        },
        {
          q: "هل توفرون لوحات جدارية إسلامية؟",
          a: "نعم، لدينا مجموعة واسعة من اللوحات المعدنية الإسلامية مثل بسم الله، آية الكرسي، أسماء الله الحسنى، وغيرها بمقاسات متعددة.",
        },
        {
          q: "هل لديكم بوكسات هدايا إسلامية؟",
          a: "نعم، تتوفر لدينا بوكسات هدايا فاخرة تشمل سجادة صلاة وسبحة وملحقات إضافية، مناسبة لرمضان والأعياد والمناسبات الخاصة.",
        },
        {
          q: "هل يمكنكم تلبية الطلبات الكبيرة أو الجملة؟",
          a: "بالتأكيد. نخدم الأفراد والجهات والشركات والفنادق والمساجد داخل المملكة. تواصل معنا عبر واتساب أو البريد للحصول على عرض سعر مخصص.",
        },
        {
          q: "ما الفرق بين سجاد البامبو سيلك وسجاد الميموري فوم؟",
          a: "البامبو سيلك يتميز بملمس ناعم ومظهر فاخر، بينما الميموري فوم يوفر راحة إضافية ودعمًا أفضل للركب والمفاصل، خاصة في الصلاة الطويلة.",
        },
        {
          q: "كيف أتواصل معكم للاستفسار أو الطلب؟",
          a: "أسرع طريقة هي عبر واتساب: +966 53 464 9387 أو +966 555 065 473. كما يمكنك مراسلتنا على info@ramzksa.com.",
        },
      ]
    : [
        {
          q: "Where can I buy premium prayer mats in Jeddah, Saudi Arabia?",
          a: "RAMZ - Authentic Life is located at Rawdah Commercial Center, Ar Rawdah Street, Jeddah, Saudi Arabia. We carry bamboo silk, memory foam, viscose, and Rawdah design prayer mats. You can also order via WhatsApp at +966 53 464 9387 or +966 555 065 473, or email sales@ramzksa.com.",
        },
        {
          q: "What types of prayer mats does RAMZ offer?",
          a: "RAMZ offers bamboo silk prayer mats, high-density memory foam sejadah (1cm and 2cm thickness), luxury viscose prayer rugs, compact roll-up and bag travel prayer mats, and premium Rawdah design rugs - all available in multiple colours. Prices range from SAR 20 to SAR 690.",
        },
        {
          q: "Does RAMZ sell Islamic wall art and calligraphy in KSA?",
          a: "Yes. RAMZ carries an extensive collection of laser-cut matte steel Islamic wall art: Bismillah, Allahu Akbar, Kalima, Hasbunallah, Asmaul Husna (99 Names of Allah), Maqam Ibrahim, Quran Stand, and more - in sizes from 20cm to 150cm. We also carry Surah Al-Ikhlas and Ayatul Kursi wall clocks with silent mechanisms.",
        },
        {
          q: "Can I order Islamic gift boxes from RAMZ?",
          a: "Yes. RAMZ offers curated luxury Islamic gift boxes including a premium prayer rug, tasbeeh (prayer beads), Quran cover, and athar (fragrance). These are ideal for Ramadan, Eid, weddings, and corporate gifting. Prices start at SAR 160.",
        },
        {
          q: "Does RAMZ handle bulk or wholesale orders for hotels and mosques?",
          a: "Absolutely. RAMZ serves retail, hospitality, and institutional clients across Saudi Arabia. For bulk orders - hotels, mosques, corporate Ramadan gifts - contact us at sales@ramzksa.com or WhatsApp +966 53 464 9387 / +966 555 065 473 for a custom quote.",
        },
        {
          q: "What is the difference between bamboo silk and memory foam prayer mats?",
          a: "Bamboo silk prayer mats are lightweight, smooth, and have an elegant silk-like finish - ideal for those who prefer a traditional feel. Memory foam prayer mats are thicker (1-2cm) and provide cushioning for knees, feet, and joints, making them ideal for longer prayer sessions or for elderly users.",
        },
        {
          q: "What are Asmaul Husna and Ayatul Kursi products?",
          a: "Asmaul Husna refers to the 99 Names of Allah. RAMZ offers large-format matte steel Asmaul Husna wall art (75x75cm to 90x90cm). Ayatul Kursi is verse 255 of Surah Al-Baqarah - one of the most revered Quranic verses. RAMZ offers it as framed wall art and as a decorative wall clock with a silent mechanism.",
        },
        {
          q: "How do I contact RAMZ to place an order or enquire about a product?",
          a: "The fastest way is WhatsApp at +966 53 464 9387 or +966 555 065 473. You can also email info@ramzksa.com or sales@ramzksa.com. Our showroom is at Rawdah Commercial Center, Ar Rawdah Street, Jeddah, Saudi Arabia - open Saturday to Thursday, 9am-9pm.",
        },
      ];

  return (
    <section id="faq" className="section-space bg-background" aria-label={isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}>
      <div className="site-shell max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#C9A664] mb-3 block">
            {isArabic ? "الأسئلة الشائعة" : "FAQ"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {isArabic ? "أسئلة متكررة" : "Common Questions"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {isArabic
              ? "كل ما تحتاج معرفته عن منتجاتنا وطرق الطلب والتوصيل داخل المملكة."
              : "Everything you need to know about our products, ordering, and delivery across Saudi Arabia."}
          </p>
        </div>

        <div className="flex flex-col gap-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-6 py-5 hover:bg-muted/40 transition-colors ${
                  isArabic ? "text-right" : "text-left"
                }`}
                aria-expanded={openIndex === i}
                data-testid={`faq-toggle-${i}`}
              >
                <h3 className="text-base font-semibold text-foreground leading-snug" itemProp="name">
                  {faq.q}
                </h3>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-primary">
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className={`px-6 pb-6 pt-1 border-t border-border ${isArabic ? "text-right" : ""}`}>
                      <p className="text-muted-foreground leading-relaxed" itemProp="text">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
          <p className="text-foreground font-medium mb-4">
            {isArabic ? "لديك سؤال إضافي؟ نرد عليك بسرعة عبر واتساب." : "Still have a question? We respond within minutes on WhatsApp."}
          </p>
          <a
            href={`https://wa.me/966534649387?text=${encodeURIComponent(
              isArabic ? "السلام عليكم، لدي استفسار عن منتجاتكم." : "Hello RAMZ, I have a question about your products.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-faq-whatsapp"
            aria-label={isArabic ? "تحدث مع رمز عبر واتساب" : "Chat with RAMZ on WhatsApp"}
          >
            {isArabic
              ? "تحدث عبر واتساب - +966 53 464 9387 / +966 555 065 473"
              : "Chat on WhatsApp - +966 53 464 9387 / +966 555 065 473"}
          </a>
        </div>
      </div>
    </section>
  );
}
