import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isArabic } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: isArabic ? "تم إرسال الرسالة" : "Message Sent",
        description: isArabic
          ? "شكرًا لتواصلك معنا، سنرد عليك في أقرب وقت."
          : "Thank you for reaching out. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-space bg-card">
      <div className="site-shell">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {isArabic ? "تواصل معنا" : "Get in Touch"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isArabic
              ? "للأسئلة عن المنتجات أو طلبات الجملة أو أي استفسار، فريقنا جاهز لخدمتك."
              : "Whether you have a question about our products, bulk orders, or general inquiries, we are here to help."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className={`bg-background rounded-2xl p-8 border border-border shadow-sm ${isArabic ? "text-right" : ""}`}>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                {isArabic ? "معلومات التواصل" : "Contact Information"}
              </h3>
              <ul className="flex flex-col gap-6">
                <li className={`flex w-full items-start gap-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`min-w-0 flex-1 ${isArabic ? "text-right" : ""}`}>
                    <h4 className="font-bold text-foreground mb-1">{isArabic ? "الموقع" : "Our Location"}</h4>
                    <p className="text-muted-foreground leading-relaxed">
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
                    </p>
                  </div>
                </li>
                <li className={`flex w-full items-start gap-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`min-w-0 flex-1 ${isArabic ? "text-right" : ""}`}>
                    <h4 className="font-bold text-foreground mb-1">{isArabic ? "الهاتف وواتساب" : "Phone & WhatsApp"}</h4>
                    <div dir="ltr" className={`${isArabic ? "text-right ml-auto" : "text-left"} [unicode-bidi:plaintext]`}>
                      <p className="text-muted-foreground">+966 53 464 9387</p>
                      <p className="text-muted-foreground mb-2">+966 555 065 473</p>
                    </div>
                    <a
                      href="https://wa.me/966534649387"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {isArabic ? "تحدث عبر واتساب ←" : "Chat on WhatsApp →"}
                    </a>
                  </div>
                </li>
                <li className={`flex w-full items-start gap-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`min-w-0 flex-1 ${isArabic ? "text-right" : ""}`}>
                    <h4 className="font-bold text-foreground mb-1">{isArabic ? "البريد الإلكتروني" : "Email"}</h4>
                    <p className="text-muted-foreground">info@ramzksa.com</p>
                    <p className="text-muted-foreground">sales@ramzksa.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-64 bg-muted rounded-2xl overflow-hidden relative border border-border flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e6/Jeddah_location_map.svg')] bg-cover bg-center"></div>
              <div className="z-10 flex flex-col items-center text-muted-foreground">
                <MapPin className="w-8 h-8 mb-2 text-[#C9A664]" />
                <span className="font-medium">{isArabic ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia"}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm h-full ${isArabic ? "text-right" : ""}`}>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                {isArabic ? "أرسل لنا رسالة" : "Send us a message"}
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {isArabic ? "الاسم الكامل" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder={isArabic ? "اسمك" : "Your name"}
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {isArabic ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder={isArabic ? "example@email.com" : "your@email.com"}
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {isArabic ? "الرسالة" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    placeholder={isArabic ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                    data-testid="input-contact-message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-2"
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    isArabic ? (
                      "جاري الإرسال..."
                    ) : (
                      "Sending..."
                    )
                  ) : (
                    <>
                      {isArabic ? "إرسال الرسالة" : "Send Message"}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
