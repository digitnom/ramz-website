import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Testimonials() {
  const { isArabic } = useLanguage();

  const testimonials = isArabic
    ? [
        {
          name: "أحمد الغامدي",
          role: "جدة، السعودية",
          quote: "سجادة الميموري فوم من رمز غيّرت راحتي في الصلاة اليومية. جودة ممتازة وتصميم راقٍ جدًا.",
          rating: 5,
        },
        {
          name: "فاطمة عبدالله",
          role: "الرياض، السعودية",
          quote: "اشتريت سجادة البامبو سيلك هدية وكانت التغليفة فخمة جدًا. المنتج يعكس فعلاً معنى الأصالة.",
          rating: 5,
        },
        {
          name: "عمر طارق",
          role: "الدمام، السعودية",
          quote: "لوحات الديكور الإسلامي عندهم مميزة وتعطي لمسة أنيقة في البيت، والخدمة سريعة وممتازة.",
          rating: 5,
        },
        {
          name: "عائشة منصور",
          role: "جدة، السعودية",
          quote: "رمز نجحوا في الجمع بين الفخامة والتراث. سجادة السفر عملية جدًا وبنفس الوقت جميلة.",
          rating: 5,
        },
      ]
    : [
        {
          name: "Ahmed Al-Ghamdi",
          role: "Jeddah, KSA",
          quote:
            "The memory foam prayer mat from RAMZ has completely transformed my daily prayers. The comfort is unmatched, and the Rawdah design reminds me of Madinah.",
          rating: 5,
        },
        {
          name: "Fatima Abdullah",
          role: "Riyadh, KSA",
          quote:
            "I purchased the Bamboo Silk mat as a gift for my father. He was moved by the elegance and the exquisite packaging. True authentic quality.",
          rating: 5,
        },
        {
          name: "Omar Tariq",
          role: "Dammam, KSA",
          quote:
            "The Islamic metal wall art I ordered is stunning. It adds such a reverent yet modern touch to our living room. Fast shipping and excellent service.",
          rating: 5,
        },
        {
          name: "Aisha Mansour",
          role: "Jeddah, KSA",
          quote:
            "RAMZ truly understands what it means to blend luxury with tradition. The travel mat is so convenient without sacrificing any of the beauty.",
          rating: 5,
        },
      ];

  return (
    <section id="testimonials" className="section-space bg-background">
      <div className="site-shell">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {isArabic ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isArabic
              ? "آراء حقيقية من عملاء اختاروا منتجات رمز لتكون جزءًا من حياتهم اليومية."
              : "Hear from those who have brought the authentic RAMZ experience into their homes."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={testimonial.name}
              className={`bg-card p-8 rounded-2xl border border-border shadow-sm relative ${isArabic ? "text-right" : ""}`}
            >
              <div className={`absolute top-8 text-6xl text-[#C9A664]/20 font-serif leading-none ${isArabic ? "left-8" : "right-8"}`}>"</div>

              <div className={`flex gap-1 mb-6 ${isArabic ? "justify-end" : ""}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A664] text-[#C9A664]" />
                ))}
              </div>

              <p className="text-lg text-foreground mb-8 relative z-10 italic">"{testimonial.quote}"</p>

              <div className={`flex items-center gap-4 ${isArabic ? "justify-end flex-row-reverse" : ""}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
