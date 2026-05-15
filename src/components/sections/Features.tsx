import { motion } from "framer-motion";
import { Star, ShieldCheck, Heart, Clock } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Features() {
  const { isArabic } = useLanguage();

  const features = isArabic
    ? [
        {
          icon: <Star className="w-8 h-8 text-[#C9A664]" />,
          title: "جودة فاخرة",
          description: "تصنيع دقيق بأفضل الخامات من البامبو سيلك إلى الميموري فوم لتجربة راحة تدوم.",
        },
        {
          icon: <Heart className="w-8 h-8 text-[#C9A664]" />,
          title: "تصميم أصيل",
          description: "تصاميم مستلهمة من الهوية الإسلامية بلمسة عصرية أنيقة تناسب مختلف المساحات.",
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-[#C9A664]" />,
          title: "تنوع واسع",
          description: "مجموعة متكاملة من السجاد والديكور والإكسسوارات لتلبية احتياجاتك اليومية.",
        },
        {
          icon: <Clock className="w-8 h-8 text-[#C9A664]" />,
          title: "خدمة موثوقة",
          description: "من جدة نخدم عملاءنا بسرعة واهتمام حقيقي مع التزام دائم بالجودة.",
        },
      ]
    : [
        {
          icon: <Star className="w-8 h-8 text-[#C9A664]" />,
          title: "Premium Quality",
          description:
            "Meticulously crafted using the finest materials, from bamboo silk to high-density memory foam, ensuring lasting comfort.",
        },
        {
          icon: <Heart className="w-8 h-8 text-[#C9A664]" />,
          title: "Authentic Design",
          description:
            "Rooted in Islamic heritage, our designs reflect traditional motifs with a refined, modern elegance suitable for any home.",
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-[#C9A664]" />,
          title: "Wide Selection",
          description:
            "A comprehensive range of prayer mats, home decor, and accessories tailored to elevate your daily spiritual rituals.",
        },
        {
          icon: <Clock className="w-8 h-8 text-[#C9A664]" />,
          title: "Reliable Service",
          description:
            "Based in Jeddah, we provide exceptional customer care, fast delivery, and a commitment to serving our community.",
        },
      ];

  return (
    <section className="section-space bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      ></div>

      <div className="site-shell relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{isArabic ? "لماذا رمز" : "Why Choose RAMZ"}</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {isArabic
              ? "تجربة تجمع بين الأصالة والراحة والحرفية العالية في كل تفصيلة."
              : "Experience the intersection of devotion, comfort, and uncompromising craftsmanship."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={feature.title}
              className={`bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors ${
                isArabic ? "text-right" : "text-center"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 ${
                  isArabic ? "ms-auto" : "mx-auto"
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
