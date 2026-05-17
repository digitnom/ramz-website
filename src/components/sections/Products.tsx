import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/language-context";

const CATEGORIES = [
  "All",
  "Bamboo Silk & Viscous",
  "Memory Foam",
  "Travel & Roll Mats",
  "Rawdah Design",
  "Accessories & Gifts",
  "Islamic Wall Art",
  "Wall Clocks"
];

const CATEGORY_LABELS: Record<string, { en: string; ar: string }> = {
  All: { en: "All", ar: "الكل" },
  "Bamboo Silk & Viscous": { en: "Bamboo Silk & Viscous", ar: "بامبو سيلك وفيسكوز" },
  "Memory Foam": { en: "Memory Foam", ar: "ميموري فوم" },
  "Travel & Roll Mats": { en: "Travel & Roll Mats", ar: "سجاد السفر والرول" },
  "Rawdah Design": { en: "Rawdah Design", ar: "تصميم الروضة" },
  "Accessories & Gifts": { en: "Accessories & Gifts", ar: "إكسسوارات وهدايا" },
  "Islamic Wall Art": { en: "Islamic Wall Art", ar: "ديكور جداري إسلامي" },
  "Wall Clocks": { en: "Wall Clocks", ar: "ساعات جدارية" }
};

const PRODUCT_NAME_AR: Record<string, string> = {
  "Bamboo Silk Prayer Mat": "سجادة صلاة بامبو سيلك",
  "Bamboo Silk Prayer Mat - Classic": "سجادة صلاة بامبو سيلك - كلاسيك",
  "Bamboo Silk Prayer Rug": "سجادة صلاة بامبو سيلك",
  "Cream Viscose Prayer Rug": "سجادة صلاة فيسكوز كريمي",
  "Luxury Red Viscose Prayer Rug": "سجادة صلاة فيسكوز فاخرة حمراء",
  "100% Viscous Prayer Mat": "سجادة صلاة فيسكوز 100%",
  "Kaaba Pattern Bamboo Silk Rug": "سجادة بامبو سيلك بنقشة الكعبة",
  "Luxurious Velvet Prayer Rug": "سجادة صلاة مخملية فاخرة",
  "Memory Foam Prayer Mat 2cm": "سجادة صلاة ميموري فوم 2 سم",
  "Jummah Kaaba Design Foam Mat": "سجادة فوم بتصميم الكعبة - جمعة",
  "Foam Prayer Mat": "سجادة صلاة فوم",
  "Foam Prayer Mat - Classic": "سجادة صلاة فوم - كلاسيك",
  "Foam Prayer Mat - Arch": "سجادة صلاة فوم - قوس",
  "Foam Prayer Mat - Ivory": "سجادة صلاة فوم - عاجي",
  "Foam Prayer Mat 1cm - Pink": "سجادة صلاة فوم 1 سم - وردي",
  "Roll Prayer Mat - Mixed": "سجادة صلاة رول - ألوان متنوعة",
  "Roll Prayer Mat - Violet": "سجادة صلاة رول - بنفسجي",
  "Rollup Prayer Rug - Green Mix": "سجادة صلاة رول - مزيج أخضر",
  "Rollup Prayer Rug - Cream Beige": "سجادة صلاة رول - كريمي بيج",
  "Roll Up Prayer Mat - Dotted Cream": "سجادة صلاة رول - كريمي منقط",
  "Roll Up Prayer Mat - Blue Dot": "سجادة صلاة رول - أزرق منقط",
  "Rollup Prayer Mat - Dash Cream": "سجادة صلاة رول - كريمي مخطط",
  "Roll Up Prayer Mat - Dotted Cream 2": "سجادة صلاة رول - كريمي منقط 2",
  "Bag Prayer Mat - Cream Beige": "سجادة صلاة حقيبة - كريمي بيج",
  "Bag Prayer Mat - Green Dark": "سجادة صلاة حقيبة - أخضر داكن",
  "Bag Prayer Mat - Cream Blue": "سجادة صلاة حقيبة - كريمي أزرق",
  "Rawda Prayer Rug - Premium": "سجادة الروضة - بريميوم",
  "Rawda Prayer Rug - Classic": "سجادة الروضة - كلاسيك",
  "Rawdah Rug - Multi-color Floral": "سجادة الروضة - وردي متعدد الألوان",
  "Luxurious Comfortable Prayer Rug": "سجادة صلاة فاخرة ومريحة",
  "Al Waqar Quran + Prayer Mat Stand": "ستاند الوقار للمصحف وسجادة الصلاة",
  "Prayer Stool - Ergonomic": "كرسي صلاة - مريح",
  "Prayer Stool - Classic": "كرسي صلاة - كلاسيك",
  "Luxury Prayer Gift Box - Large": "بوكس هدية صلاة فاخر - كبير",
  "Luxury Prayer Gift Box - Cream": "بوكس هدية صلاة فاخر - كريمي",
  "Luxury Quran Gift Box - Green": "بوكس هدية قرآن فاخر - أخضر",
  "Luxury Quran Gift Box - Black": "بوكس هدية قرآن فاخر - أسود",
  "Quran Gift Box - Rug + Tasbeeh": "بوكس هدية قرآن - سجادة + سبحة",
  "Bismillah Metal Wall Art": "لوحة معدنية بسم الله",
  "Bismillah - Stainless PVD": "بسم الله - ستانلس PVD",
  "Allahu - Metal Art": "الله - فن معدني",
  "Hasbunallah - Metal Wall Art": "حسبنا الله - لوحة معدنية",
  "Hada Min Fadil Rabbi": "هذا من فضل ربي",
  "Kalima Metal Wall Art": "لوحة الكلمة - فن معدني",
  "Allahu Akbar - Vertical": "الله أكبر - عمودي",
  "Allahu Akbar - Oval": "الله أكبر - بيضاوي",
  "Asmaul Husna Wall Art": "لوحة أسماء الله الحسنى",
  "Maqam Ibrahim Wall Art": "لوحة مقام إبراهيم",
  "Quran Stand Wall Art": "لوحة حامل القرآن",
  "Alhamdulillah Mini Art": "لوحة الحمد لله - ميني",
  "Allahu Muhammad (S) Mini Art": "لوحة الله محمد ﷺ - ميني",
  "Bismi Mini Art": "لوحة بسمي - ميني",
  "Masjid Mini Art": "لوحة مسجد - ميني",
  "Bismi Frame Art": "لوحة بسمي بإطار",
  "Bismillah Frame Art": "لوحة بسم الله بإطار",
  "Surah Al-Nas Metal Art": "لوحة سورة الناس - فن معدني",
  "Surah Al-Ikhlas Wall Clock": "ساعة جدارية سورة الإخلاص",
  "Surah Al-Ikhlas Clock - Gold": "ساعة سورة الإخلاص - ذهبي",
  "Surah Al-Ikhlas Clock - Premium": "ساعة سورة الإخلاص - بريميوم",
  "Ayatul Kursi Wall Clock": "ساعة جدارية آية الكرسي"
};

const MATERIAL_AR: Record<string, string> = {
  "Premium Bamboo Silk": "بامبو سيلك فاخر",
  "Viscose & Cotton - 78x123 cm": "فيسكوز وقطن - 78x123 سم",
  "100% Viscous": "فيسكوز 100%",
  "Bamboo Silk - Ramadan Gift": "بامبو سيلك - هدية رمضان",
  "Velvet with Silk Edges - Multiple Colors": "مخمل بحواف حريرية - ألوان متعددة",
  "High-density Memory Foam 2cm - 70x120 cm": "ميموري فوم عالي الكثافة 2 سم - 70x120 سم",
  "Memory Foam - Kaaba Design": "ميموري فوم - تصميم الكعبة",
  "High-density Memory Foam 1cm": "ميموري فوم عالي الكثافة 1 سم",
  "Memory Foam 2cm - 70x110 cm": "ميموري فوم 2 سم - 70x110 سم",
  "Lightweight Foam 1cm": "فوم خفيف 1 سم",
  "Soft Cushioned Roll-up": "رول مبطن ناعم",
  "Portable Roll-up Design": "تصميم رول عملي للحمل",
  "Cushioned Roll-up": "رول مبطن",
  "Memory Foam - Compact Carry Bag": "ميموري فوم - حقيبة حمل مدمجة",
  "14mm Thickness - Ultra-soft Surface": "سماكة 14 مم - سطح فائق النعومة",
  "Premium Woven - Rawdah Design": "نسيج فاخر - تصميم الروضة",
  "Velvet - Polyester & Cotton": "مخمل - بوليستر وقطن",
  "Premium Metal Stand - Black / Gold": "حامل معدني فاخر - أسود / ذهبي",
  "Metal & PU Leather - Adjustable Height": "معدن وجلد PU - ارتفاع قابل للتعديل",
  "Ergonomic Meditation Bench": "مقعد مريح للتأمل والصلاة",
  "Prayer Rug + Tasbeeh + Quran Cover + Athar": "سجادة صلاة + سبحة + غلاف مصحف + عطر",
  "Quran + Tasbeeh + Athar": "مصحف + سبحة + عطر",
  "Matte Steel - 90/120/150 cm": "فولاذ مطفي - 90/120/150 سم",
  "Stainless Steel PVD - 60/75/90 cm": "ستانلس ستيل PVD - 60/75/90 سم",
  "Matte Steel - 55/65/85 cm": "فولاذ مطفي - 55/65/85 سم",
  "Matte Steel - 26/35 cm": "فولاذ مطفي - 26/35 سم",
  "Matte Steel - 75/105 cm": "فولاذ مطفي - 75/105 سم",
  "Matte Steel - 15x70 / 19x90 cm": "فولاذ مطفي - 15x70 / 19x90 سم",
  "Matte Steel with Clock Mechanism": "فولاذ مطفي مع آلية ساعة",
  "Matte Steel - 75x75 / 90x90 cm": "فولاذ مطفي - 75x75 / 90x90 سم",
  "Matte Steel - 30x45 cm": "فولاذ مطفي - 30x45 سم",
  "Matte Steel - Decorative": "فولاذ مطفي - ديكوري",
  "Matte Steel - 20x22 cm": "فولاذ مطفي - 20x22 سم",
  "Matte Steel - Large Format": "فولاذ مطفي - مقاس كبير",
  "Matte Steel - Multiple Sizes": "فولاذ مطفي - مقاسات متعددة",
  "Steel - Silent Clock Mechanism - ROHS Certified": "فولاذ - آلية ساعة صامتة - معتمد ROHS",
  "Steel Gold Finish - Silent Mechanism": "تشطيب فولاذ ذهبي - آلية صامتة",
  "Steel - 60x60 cm - Silent Mechanism": "فولاذ - 60x60 سم - آلية صامتة"
};

const SALE_PRICES: Record<string, { original: string; sale: string }> = {
  "Foam Prayer Mat 1cm - Pink": { original: "SAR 99", sale: "SAR 39" },
  "Roll Prayer Mat - Mixed": { original: "SAR 99", sale: "SAR 49" },
  "Roll Prayer Mat - Violet": { original: "SAR 99", sale: "SAR 49" },
  "Rollup Prayer Rug - Green Mix": { original: "SAR 129", sale: "SAR 69" },
  "Rollup Prayer Rug - Cream Beige": { original: "SAR 129", sale: "SAR 69" },
  "Roll Up Prayer Mat - Dotted Cream": { original: "SAR 129", sale: "SAR 69" },
  "Roll Up Prayer Mat - Blue Dot": { original: "SAR 129", sale: "SAR 69" },
  "Rollup Prayer Mat - Dash Cream": { original: "SAR 129", sale: "SAR 69" },
  "Roll Up Prayer Mat - Dotted Cream 2": { original: "SAR 129", sale: "SAR 69" },
  "Bag Prayer Mat - Cream Beige": { original: "SAR 129", sale: "SAR 69" },
  "Bag Prayer Mat - Green Dark": { original: "SAR 129", sale: "SAR 69" },
  "Bag Prayer Mat - Cream Blue": { original: "SAR 129", sale: "SAR 69" },
  "Rawdah Rug - Multi-color Floral": { original: "SAR 139", sale: "SAR 79" },
  "Foam Prayer Mat": { original: "SAR 219", sale: "SAR 129" },
  "Foam Prayer Mat - Classic": { original: "SAR 219", sale: "SAR 129" },
  "Foam Prayer Mat - Arch": { original: "SAR 219", sale: "SAR 129" },
  "Prayer Stool - Ergonomic": { original: "SAR 229", sale: "SAR 139" },
  "Prayer Stool - Classic": { original: "SAR 269", sale: "SAR 159" },
  "Luxurious Velvet Prayer Rug": { original: "SAR 279", sale: "SAR 169" },
  "Luxurious Comfortable Prayer Rug": { original: "SAR 279", sale: "SAR 169" },
  "Alhamdulillah Mini Art": { original: "SAR 279", sale: "SAR 169" },
  "Allahu Muhammad (S) Mini Art": { original: "SAR 279", sale: "SAR 169" },
  "Bismi Mini Art": { original: "SAR 279", sale: "SAR 169" },
  "Masjid Mini Art": { original: "SAR 279", sale: "SAR 169" },
  "Bismi Frame Art": { original: "SAR 279", sale: "SAR 169" },
  "Foam Prayer Mat - Ivory": { original: "SAR 289", sale: "SAR 189" },
  "100% Viscous Prayer Mat": { original: "SAR 349", sale: "SAR 229" },
  "Memory Foam Prayer Mat 2cm": { original: "SAR 349", sale: "SAR 229" },
  "Rawda Prayer Rug - Classic": { original: "SAR 379", sale: "SAR 249" },
  "Quran Gift Box - Rug + Tasbeeh": { original: "SAR 379", sale: "SAR 249" },
  "Jummah Kaaba Design Foam Mat": { original: "SAR 409", sale: "SAR 269" },
  "Rawda Prayer Rug - Premium": { original: "SAR 409", sale: "SAR 269" },
  "Luxury Quran Gift Box - Green": { original: "SAR 429", sale: "SAR 279" },
  "Luxury Quran Gift Box - Black": { original: "SAR 429", sale: "SAR 279" },
  "Bamboo Silk Prayer Mat": { original: "SAR 379", sale: "SAR 249" },
  "Bamboo Silk Prayer Mat - Classic": { original: "SAR 379", sale: "SAR 249" },
  "Bamboo Silk Prayer Rug": { original: "SAR 379", sale: "SAR 249" },
  "Luxury Prayer Gift Box - Large": { original: "SAR 449", sale: "SAR 289" },
  "Luxury Prayer Gift Box - Cream": { original: "SAR 449", sale: "SAR 289" },
  "Kaaba Pattern Bamboo Silk Rug": { original: "SAR 449", sale: "SAR 289" },
  "Allahu Akbar - Vertical": { original: "SAR 489", sale: "SAR 319" },
  "Surah Al-Nas Metal Art": { original: "SAR 579", sale: "SAR 379" },
  "Surah Al-Ikhlas Wall Clock": { original: "SAR 579", sale: "SAR 379" },
  "Hasbunallah - Metal Wall Art": { original: "SAR 599", sale: "SAR 389" },
  "Hada Min Fadil Rabbi": { original: "SAR 599", sale: "SAR 389" },
  "Quran Stand Wall Art": { original: "SAR 689", sale: "SAR 449" },
  "Bismillah Metal Wall Art": { original: "SAR 719", sale: "SAR 469" },
  "Kalima Metal Wall Art": { original: "SAR 719", sale: "SAR 469" },
  "Bismillah Frame Art": { original: "SAR 719", sale: "SAR 469" },
  "Allahu - Metal Art": { original: "SAR 1,049", sale: "SAR 679" },
  "Surah Al-Ikhlas Clock - Gold": { original: "SAR 1,049", sale: "SAR 679" },
  "Surah Al-Ikhlas Clock - Premium": { original: "SAR 1,049", sale: "SAR 679" },
  "Ayatul Kursi Wall Clock": { original: "SAR 1,049", sale: "SAR 679" },
  "Allahu Akbar - Oval": { original: "SAR 1,059", sale: "SAR 689" },
  "Al Waqar Quran + Prayer Mat Stand": { original: "SAR 1,209", sale: "SAR 789" },
  "Cream Viscose Prayer Rug": { original: "SAR 1,379", sale: "SAR 899" },
  "Luxury Red Viscose Prayer Rug": { original: "SAR 1,379", sale: "SAR 899" },
  "Maqam Ibrahim Wall Art": { original: "SAR 1,809", sale: "SAR 1,179" },
  "Asmaul Husna Wall Art": { original: "SAR 1,909", sale: "SAR 1,239" },
  "Bismillah - Stainless PVD": { original: "SAR 3,089", sale: "SAR 2,009" }
};

const PRODUCTS = [
  // -- Bamboo Silk & Viscous --------------------------------------------------
  {
    id: 1,
    name: "Bamboo Silk Prayer Mat",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Bamboo%20Silk%20Prayer%20Mat.webp",
    material: "Premium Bamboo Silk",
    price: "SAR 190"
  },
  {
    id: 2,
    name: "Bamboo Silk Prayer Mat - Classic",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Bamboo%20Silk%20Prayer%20Mat%20-%20Classic.webp",
    material: "Premium Bamboo Silk",
    price: "SAR 190"
  },
  {
    id: 3,
    name: "Bamboo Silk Prayer Rug",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Bamboo%20Silk%20Prayer%20Rug.webp",
    material: "Premium Bamboo Silk",
    price: "SAR 190"
  },
  {
    id: 4,
    name: "Cream Viscose Prayer Rug",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Cream%20Viscose%20Prayer%20Rug.webp",
    material: "Viscose & Cotton - 78x123 cm",
    price: "SAR 690"
  },
  {
    id: 5,
    name: "Luxury Red Viscose Prayer Rug",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Luxury%20Red%20Viscose%20Prayer%20Rug.webp",
    material: "Viscose & Cotton - 78x123 cm",
    price: "SAR 690"
  },
  {
    id: 6,
    name: "100% Viscous Prayer Mat",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/100%25%20Viscous%20Prayer%20Mat.webp",
    material: "100% Viscous",
    price: "SAR 150"
  },
  {
    id: 7,
    name: "Kaaba Pattern Bamboo Silk Rug",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Kaaba%20Pattern%20Bamboo%20Silk%20Rug.webp",
    material: "Bamboo Silk - Ramadan Gift",
    price: "SAR 220"
  },
  {
    id: 8,
    name: "Luxurious Velvet Prayer Rug",
    category: "Bamboo Silk & Viscous",
    image: "/images/products/Luxurious%20Velvet%20Prayer%20Rug.webp",
    material: "Velvet with Silk Edges - Multiple Colors",
    price: "SAR 110"
  },

  // -- Memory Foam -------------------------------------------------------------
  {
    id: 9,
    name: "Memory Foam Prayer Mat 2cm",
    category: "Memory Foam",
    image: "/images/products/Memory%20Foam%20Prayer%20Mat%202cm.webp",
    material: "High-density Memory Foam 2cm - 70x120 cm",
    price: "SAR 150"
  },
  {
    id: 10,
    name: "Jummah Kaaba Design Foam Mat",
    category: "Memory Foam",
    image: "/images/products/Jummah%20Kaaba%20Design%20Foam%20Mat.webp",
    material: "Memory Foam - Kaaba Design",
    price: "SAR 175"
  },
  {
    id: 11,
    name: "Foam Prayer Mat",
    category: "Memory Foam",
    image: "/images/products/Foam%20Prayer%20Mat.webp",
    material: "High-density Memory Foam 1cm",
    price: "SAR 80"
  },
  {
    id: 12,
    name: "Foam Prayer Mat - Classic",
    category: "Memory Foam",
    image: "/images/products/Foam%20Prayer%20Mat%20-%20Classic.webp",
    material: "High-density Memory Foam 1cm",
    price: "SAR 80"
  },
  {
    id: 13,
    name: "Foam Prayer Mat - Arch",
    category: "Memory Foam",
    image: "/images/products/Foam%20Prayer%20Mat%20-%20Arch.webp",
    material: "High-density Memory Foam 1cm",
    price: "SAR 80"
  },
  {
    id: 14,
    name: "Foam Prayer Mat - Ivory",
    category: "Memory Foam",
    image: "/images/products/Foam%20Prayer%20Mat%20-%20Ivory.webp",
    material: "Memory Foam 2cm - 70x110 cm",
    price: "SAR 120"
  },
  {
    id: 15,
    name: "Foam Prayer Mat 1cm - Pink",
    category: "Memory Foam",
    image: "/images/products/Foam%20Prayer%20Mat%201cm%20-%20Pink.webp",
    material: "Lightweight Foam 1cm",
    price: "SAR 20"
  },

  // -- Travel & Roll Mats -------------------------------------------------------
  {
    id: 16,
    name: "Roll Prayer Mat - Mixed",
    category: "Travel & Roll Mats",
    image: "/images/products/Roll%20Prayer%20Mat%20-%20Mixed.webp",
    material: "Soft Cushioned Roll-up",
    price: "SAR 30"
  },
  {
    id: 17,
    name: "Roll Prayer Mat - Violet",
    category: "Travel & Roll Mats",
    image: "/images/products/Roll%20Prayer%20Mat%20-%20Violet.webp",
    material: "Soft Cushioned Roll-up",
    price: "SAR 30"
  },
  {
    id: 18,
    name: "Rollup Prayer Rug - Green Mix",
    category: "Travel & Roll Mats",
    image: "/images/products/Rollup%20Prayer%20Rug%20-%20Green%20Mix.webp",
    material: "Portable Roll-up Design",
    price: "SAR 46"
  },
  {
    id: 19,
    name: "Rollup Prayer Rug - Cream Beige",
    category: "Travel & Roll Mats",
    image: "/images/products/Rollup%20Prayer%20Rug%20-%20Cream%20Beige.webp",
    material: "Portable Roll-up Design",
    price: "SAR 46"
  },
  {
    id: 20,
    name: "Roll Up Prayer Mat - Dotted Cream",
    category: "Travel & Roll Mats",
    image: "/images/products/Roll%20Up%20Prayer%20Mat%20-%20Dotted%20Cream.webp",
    material: "Cushioned Roll-up",
    price: "SAR 46"
  },
  {
    id: 21,
    name: "Roll Up Prayer Mat - Blue Dot",
    category: "Travel & Roll Mats",
    image: "/images/products/Roll%20Up%20Prayer%20Mat%20-%20Blue%20Dot.webp",
    material: "Cushioned Roll-up",
    price: "SAR 46"
  },
  {
    id: 22,
    name: "Rollup Prayer Mat - Dash Cream",
    category: "Travel & Roll Mats",
    image: "/images/products/Rollup%20Prayer%20Mat%20-%20Dash%20Cream.webp",
    material: "Cushioned Roll-up",
    price: "SAR 46"
  },
  {
    id: 23,
    name: "Roll Up Prayer Mat - Dotted Cream 2",
    category: "Travel & Roll Mats",
    image: "/images/products/Roll%20Up%20Prayer%20Mat%20-%20Dotted%20Cream%202.webp",
    material: "Cushioned Roll-up",
    price: "SAR 46"
  },
  {
    id: 24,
    name: "Bag Prayer Mat - Cream Beige",
    category: "Travel & Roll Mats",
    image: "/images/products/Bag%20Prayer%20Mat%20-%20Cream%20Beige.webp",
    material: "Memory Foam - Compact Carry Bag",
    price: "SAR 46"
  },
  {
    id: 25,
    name: "Bag Prayer Mat - Green Dark",
    category: "Travel & Roll Mats",
    image: "/images/products/Bag%20Prayer%20Mat%20-%20Green%20Dark.webp",
    material: "Memory Foam - Compact Carry Bag",
    price: "SAR 46"
  },
  {
    id: 26,
    name: "Bag Prayer Mat - Cream Blue",
    category: "Travel & Roll Mats",
    image: "/images/products/Bag%20Prayer%20Mat%20-%20Cream%20Blue.webp",
    material: "Memory Foam - Compact Carry Bag",
    price: "SAR 46"
  },

  // -- Rawdah Design -----------------------------------------------------------
  {
    id: 27,
    name: "Rawda Prayer Rug - Premium",
    category: "Rawdah Design",
    image: "/images/products/Rawda%20Prayer%20Rug%20-%20Premium.webp",
    material: "14mm Thickness - Ultra-soft Surface",
    price: "SAR 175"
  },
  {
    id: 28,
    name: "Rawda Prayer Rug - Classic",
    category: "Rawdah Design",
    image: "/images/products/Rawda%20Prayer%20Rug%20-%20Classic.webp",
    material: "Premium Woven - Rawdah Design",
    price: "SAR 160"
  },
  {
    id: 29,
    name: "Rawdah Rug - Multi-color Floral",
    category: "Rawdah Design",
    image: "/images/products/Rawdah%20Rug%20-%20Multi-color%20Floral.webp",
    material: "Velvet - Polyester & Cotton",
    price: "SAR 50"
  },
  {
    id: 30,
    name: "Luxurious Comfortable Prayer Rug",
    category: "Rawdah Design",
    image: "/images/products/Luxurious%20Comfortable%20Prayer%20Rug.webp",
    material: "Velvet with Silk Edges - Multiple Colors",
    price: "SAR 110"
  },

  // -- Accessories & Gifts -----------------------------------------------------
  {
    id: 31,
    name: "Al Waqar Quran + Prayer Mat Stand",
    category: "Accessories & Gifts",
    image: "/images/products/Al%20Waqar%20Quran%20and%20Prayer%20Mat%20Stand.webp",
    material: "Premium Metal Stand - Black / Gold",
    price: "SAR 600"
  },
  {
    id: 32,
    name: "Prayer Stool - Ergonomic",
    category: "Accessories & Gifts",
    image: "/images/products/Prayer%20Stool%20-%20Ergonomic.webp",
    material: "Metal & PU Leather - Adjustable Height",
    price: "SAR 90"
  },
  {
    id: 33,
    name: "Prayer Stool - Classic",
    category: "Accessories & Gifts",
    image: "/images/products/Prayer%20Stool%20-%20Classic.webp",
    material: "Ergonomic Meditation Bench",
    price: "SAR 100"
  },
  {
    id: 34,
    name: "Luxury Prayer Gift Box - Large",
    category: "Accessories & Gifts",
    image: "/images/products/Luxury%20Prayer%20Gift%20Box%20-%20Large.webp",
    material: "Prayer Rug + Tasbeeh + Quran Cover + Athar",
    price: "SAR 218"
  },
  {
    id: 35,
    name: "Luxury Prayer Gift Box - Cream",
    category: "Accessories & Gifts",
    image: "/images/products/Luxury%20Prayer%20Gift%20Box%20-%20Cream.webp",
    material: "Prayer Rug + Tasbeeh + Quran Cover + Athar",
    price: "SAR 218"
  },
  {
    id: 36,
    name: "Luxury Quran Gift Box - Green",
    category: "Accessories & Gifts",
    image: "/images/products/Luxury%20Quran%20Gift%20Box%20-%20Green.webp",
    material: "Quran + Tasbeeh + Athar",
    price: "SAR 184"
  },
  {
    id: 37,
    name: "Luxury Quran Gift Box - Black",
    category: "Accessories & Gifts",
    image: "/images/products/Luxury%20Quran%20Gift%20Box%20-%20Black.webp",
    material: "Quran + Tasbeeh + Athar",
    price: "SAR 184"
  },
  {
    id: 38,
    name: "Quran Gift Box - Rug + Tasbeeh",
    category: "Accessories & Gifts",
    image: "/images/products/Quran%20Gift%20Box%20-%20Rug%20and%20Tasbeeh.webp",
    material: "Prayer Rug + Tasbeeh + Quran Cover + Athar",
    price: "SAR 160"
  },

  // -- Islamic Wall Art --------------------------------------------------------
  {
    id: 39,
    name: "Bismillah Metal Wall Art",
    category: "Islamic Wall Art",
    image: "/images/products/Bismillah%20Metal%20Wall%20Art.webp",
    material: "Matte Steel - 90/120/150 cm",
    price: "SAR 360"
  },
  {
    id: 40,
    name: "Bismillah - Stainless PVD",
    category: "Islamic Wall Art",
    image: "/images/products/Bismillah%20-%20Stainless%20PVD.webp",
    material: "Stainless Steel PVD - 60/75/90 cm",
    price: "SAR 1,540"
  },
  {
    id: 41,
    name: "Allahu - Metal Art",
    category: "Islamic Wall Art",
    image: "/images/products/Allahu%20-%20Metal%20Art.webp",
    material: "Matte Steel - 55/65/85 cm",
    price: "SAR 520"
  },
  {
    id: 42,
    name: "Hasbunallah - Metal Wall Art",
    category: "Islamic Wall Art",
    image: "/images/products/Hasbunallah%20-%20Metal%20Wall%20Art.webp",
    material: "Matte Steel - 26/35 cm",
    price: "SAR 295"
  },
  {
    id: 43,
    name: "Hada Min Fadil Rabbi",
    category: "Islamic Wall Art",
    image: "/images/products/Hada%20Min%20Fadil%20Rabbi.webp",
    material: "Matte Steel - 75/105 cm",
    price: "SAR 295"
  },
  {
    id: 44,
    name: "Kalima Metal Wall Art",
    category: "Islamic Wall Art",
    image: "/images/products/Kalima%20Metal%20Wall%20Art.webp",
    material: "Matte Steel - 90/120/150 cm",
    price: "SAR 360"
  },
  {
    id: 45,
    name: "Allahu Akbar - Vertical",
    category: "Islamic Wall Art",
    image: "/images/products/Allahu%20Akbar%20-%20Vertical.webp",
    material: "Matte Steel - 15x70 / 19x90 cm",
    price: "SAR 240"
  },
  {
    id: 46,
    name: "Allahu Akbar - Oval",
    category: "Islamic Wall Art",
    image: "/images/products/Allahu%20Akbar%20-%20Oval.webp",
    material: "Matte Steel with Clock Mechanism",
    price: "SAR 525"
  },
  {
    id: 47,
    name: "Asmaul Husna Wall Art",
    category: "Islamic Wall Art",
    image: "/images/products/Asmaul%20Husna%20Wall%20Art.webp",
    material: "Matte Steel - 75x75 / 90x90 cm",
    price: "SAR 950"
  },
  {
    id: 48,
    name: "Maqam Ibrahim Wall Art",
    category: "Islamic Wall Art",
    image: "/images/products/Maqam%20Ibrahim%20Wall%20Art.webp",
    material: "Matte Steel - 30x45 cm",
    price: "SAR 900"
  },
  {
    id: 49,
    name: "Quran Stand Wall Art",
    category: "Islamic Wall Art",
    image: "/images/products/Quran%20Stand%20Wall%20Art.webp",
    material: "Matte Steel - Decorative",
    price: "SAR 340"
  },
  {
    id: 50,
    name: "Alhamdulillah Mini Art",
    category: "Islamic Wall Art",
    image: "/images/products/Alhamdulillah%20Mini%20Art.webp",
    material: "Matte Steel - 20x22 cm",
    price: "SAR 110"
  },
  {
    id: 51,
    name: "Allahu Muhammad (S) Mini Art",
    category: "Islamic Wall Art",
    image: "/images/products/Allahu%20Muhammad%20(S)%20Mini%20Art.webp",
    material: "Matte Steel - 20x22 cm",
    price: "SAR 110"
  },
  {
    id: 52,
    name: "Bismi Mini Art",
    category: "Islamic Wall Art",
    image: "/images/products/Bismi%20Mini%20Art.webp",
    material: "Matte Steel - 20x22 cm",
    price: "SAR 110"
  },
  {
    id: 53,
    name: "Masjid Mini Art",
    category: "Islamic Wall Art",
    image: "/images/products/Masjid%20Mini%20Art.webp",
    material: "Matte Steel - 20x22 cm",
    price: "SAR 110"
  },
  {
    id: 54,
    name: "Bismi Frame Art",
    category: "Islamic Wall Art",
    image: "/images/products/Bismi%20Frame%20Art.webp",
    material: "Matte Steel - 20x22 cm",
    price: "SAR 110"
  },
  {
    id: 55,
    name: "Bismillah Frame Art",
    category: "Islamic Wall Art",
    image: "/images/products/Bismillah%20Frame%20Art.webp",
    material: "Matte Steel - Large Format",
    price: "SAR 360"
  },
  {
    id: 56,
    name: "Surah Al-Nas Metal Art",
    category: "Islamic Wall Art",
    image: "/images/products/Surah%20Al-Nas%20Metal%20Art.webp",
    material: "Matte Steel - Multiple Sizes",
    price: "SAR 285"
  },

  // -- Wall Clocks --------------------------------------------------------------
  {
    id: 57,
    name: "Surah Al-Ikhlas Wall Clock",
    category: "Wall Clocks",
    image: "/images/products/Surah%20Al-Ikhlas%20Wall%20Clock.webp",
    material: "Steel - Silent Clock Mechanism - ROHS Certified",
    price: "SAR 285"
  },
  {
    id: 58,
    name: "Surah Al-Ikhlas Clock - Gold",
    category: "Wall Clocks",
    image: "/images/products/Surah%20Al-Ikhlas%20Clock%20-%20Gold.webp",
    material: "Steel Gold Finish - Silent Mechanism",
    price: "SAR 520"
  },
  {
    id: 59,
    name: "Surah Al-Ikhlas Clock - Premium",
    category: "Wall Clocks",
    image: "/images/products/Surah%20Al-Ikhlas%20Clock%20-%20Premium.webp",
    material: "Steel Gold Finish - Silent Mechanism",
    price: "SAR 520"
  },
  {
    id: 60,
    name: "Ayatul Kursi Wall Clock",
    category: "Wall Clocks",
    image: "/images/products/Ayatul%20Kursi%20Wall%20Clock.webp",
    material: "Steel - 60x60 cm - Silent Mechanism",
    price: "SAR 520"
  }
];

export function Products() {
  const { isArabic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-space bg-card">
      <div className="site-shell">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#C9A664] mb-3 block">
            {isArabic ? "كتالوج المنتجات" : "Product Catalogue"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {isArabic ? "مجموعتنا" : "Our Collection"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isArabic
              ? "استكشف تشكيلتنا المختارة من سجاد الصلاة الفاخر والديكور الإسلامي والإكسسوارات الأنيقة المصممة لحياة أصيلة."
              : "Explore our curated range of premium prayer mats, Islamic arts, and elegant accessories - crafted for a life of authentic devotion."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {isArabic ? CATEGORY_LABELS[category]?.ar ?? category : CATEGORY_LABELS[category]?.en ?? category}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-sm text-muted-foreground mb-8">
          {isArabic
            ? `عرض ${filteredProducts.length} منتج${activeCategory !== "All" ? ` ضمن ${CATEGORY_LABELS[activeCategory]?.ar ?? activeCategory}` : ""}`
            : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""}${
                activeCategory !== "All" ? ` in ${activeCategory}` : ""
              }`}
        </p>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              (() => {
                const displayName = isArabic ? PRODUCT_NAME_AR[product.name] ?? product.name : product.name;
                const displayMaterial = isArabic ? MATERIAL_AR[product.material] ?? product.material : product.material;
                const salePrice = SALE_PRICES[product.name];
                return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                key={product.id}
                className="group relative bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                data-testid={`product-card-${product.id}`}
              >
                <div className="aspect-square w-full overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={
                      isArabic
                        ? `${displayName} - منتجات رمز لنمط الحياة الإسلامية`
                        : `${displayName} - RAMZ Islamic Lifestyle Products`
                    }
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
                <div className={`p-5 ${isArabic ? "text-right" : ""}`}>
                  <span className="text-xs font-semibold text-[#C9A664] uppercase tracking-wider mb-1 block">
                    {isArabic ? CATEGORY_LABELS[product.category]?.ar ?? product.category : product.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-foreground mb-1 leading-snug">
                    {displayName}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-snug">
                    {displayMaterial}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className={`flex flex-col ${isArabic ? "items-end" : "items-start"} leading-tight`}>
                      {salePrice ? (
                        <>
                          <span className="text-xs text-muted-foreground line-through">{salePrice.original}</span>
                          <span className="text-sm font-extrabold text-rose-600">{salePrice.sale}</span>
                        </>
                      ) : (
                        <span className="text-sm font-bold text-primary">{product.price}</span>
                      )}
                    </div>
                    <a
                      href={`https://wa.me/966534649387?text=${encodeURIComponent(
                        isArabic ? `مهتم بهذا المنتج: ${displayName}` : `I'm interested in: ${displayName}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                      data-testid={`enquire-btn-${product.id}`}
                      aria-label={
                        isArabic ? `استفسر عن ${displayName} عبر واتساب` : `Enquire about ${displayName} on WhatsApp`
                      }
                    >
                      {isArabic ? "استفسار" : "Enquire"}
                    </a>
                  </div>
                </div>
              </motion.div>
                );
              })()
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {isArabic ? "لا توجد منتجات في هذا التصنيف." : "No products found in this category."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}




