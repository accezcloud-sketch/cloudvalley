import type { Locale } from "./i18n";

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    wordmark: string;
    tagline: string;
  };
  nav: {
    home: string;
    services: string;
    blog: string;
    about: string;
    trust: string;
    contact: string;
    switchLang: string;
    cta: string;
  };
  home: {
    eyebrow: string;
    displayA: string;
    displayB: string;
    displayC: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    marquee: string[];
    manifestoNum: string;
    manifestoTitle: string;
    manifestoBody: string[];
    statsTitle: string;
    stats: { value: string; label: string; caption: string }[];
    servicesNum: string;
    servicesTitle: string;
    servicesLede: string;
    pricingNum: string;
    pricingTitle: string;
    pricingLede: string;
    pricing: {
      basic: {
        badge: string;
        name: string;
        price: string;
        per: string;
        features: string[];
        cta: string;
      };
      professional: {
        badge: string;
        name: string;
        price: string;
        per: string;
        features: string[];
        cta: string;
      };
      custom: {
        badge: string;
        name: string;
        price: string;
        per: string;
        features: string[];
        cta: string;
      };
    };
    ctaNum: string;
    ctaTitle: string;
    ctaBody: string;
    ctaWhatsApp: string;
    ctaEmail: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    backLabel: string;
    detailLabel: string;
    list: {
      num: string;
      slug: string;
      name: string;
      summary: string;
      bullets: string[];
      outcome: string;
    }[];
  };
  blog: {
    eyebrow: string;
    title: string;
    lede: string;
    backLabel: string;
    posts: {
      num: string;
      slug: string;
      kicker: string;
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
    }[];
    subscribe: {
      title: string;
      body: string;
      placeholder: string;
      cta: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    lede: string;
    sections: { num: string; heading: string; body: string }[];
    team: {
      title: string;
      body: string;
    };
  };
  trust: {
    eyebrow: string;
    title: string;
    lede: string;
    pillars: { num: string; title: string; body: string }[];
    guarantee: {
      title: string;
      body: string;
    };
    testimonials: { quote: string; author: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      company: string;
      mobile: string;
      city: string;
      details: string;
      submit: string;
    };
  };
  thankYou: {
    title: string;
    heading: string;
    body: string;
    cta: string;
  };
  footer: {
    columns: {
      heading: string;
      links: { label: string; href: string }[];
    }[];
    contact: string;
    whatsapp: string;
    email: string;
    copyright: string;
    colophonLeft: string;
    colophonRight: string;
  };
};

const ar: Dict = {
  meta: {
    title: "وادي السحاب — وكالة أتمتة الذكاء الاصطناعي",
    description:
      "نستبدل المهام البشرية المتكررة بأنظمة ذكاء اصطناعي موثوقة. تصميم، سيو، محتوى، ووسائل تواصل.",
  },
  brand: {
    name: "وادي السحاب",
    wordmark: "Cloud Valley — وادي السحاب",
    tagline: "وكالة أتمتة — نبني أنظمة لتستغني عن بناء فِرَق.",
  },
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    blog: "المدوّنة",
    about: "من نحن",
    trust: "لماذا نحن",
    contact: "تواصل",
    switchLang: "EN",
    cta: "تواصل على واتساب",
  },
  home: {
    eyebrow: "استوديو أتمتة",
    displayA: "نصنع",
    displayB: "أنظمةً",
    displayC: "بدل الموظفين.",
    lede:
      "وادي السحاب وكالةُ أتمتة — نبني أنظمةً لتستغني عن بناء فِرَق. نُصمّم أنظمة ذكاء اصطناعي تُنجز ما يفعله فريقٌ كامل — بسرعةٍ أعلى، وبتكلفةٍ أقل بستينَ بالمائة.",
    primaryCta: "ابدأ على واتساب",
    secondaryCta: "شاهد الخدمات",
    marquee: [
      "تصميم مواقع",
      "تطبيقات جوال",
      "تحسين محركات البحث",
      "صناعة المحتوى",
      "إدارة السوشيال ميديا",
      "هوية تجارية",
      "متاجر إلكترونية",
      "تسويق إلكتروني",
    ],
    manifestoNum: "٠١ — البيان",
    manifestoTitle: "نُؤمن أن العمل الجيد لا يحتاج إلى فريقٍ ضخم.",
    manifestoBody: [
      "في كل شركةٍ عربيةٍ اليوم، يقضي موظفون ساعاتٍ طويلةً في مهامٍ متكررة: ردٌّ على الرسائل، جدولة المواعيد، كتابة المنشورات، مراجعة التقارير. هذه أعمالٌ يستطيع الذكاء الاصطناعي إنجازها الآن، وبدقةٍ أعلى.",
      "مهمّتنا ليست بيع أدواتٍ لامعة، بل أن نتركك مع أنظمةٍ تعمل بصمتٍ ودون أن تحتاج إليها. نُسلّم العمل جاهزًا، موثّقًا، ومربوطًا بأعمالك اليومية.",
    ],
    statsTitle: "٠٢ — الأرقام",
    stats: [
      {
        value: "٦٠٪",
        label: "خفضٌ في التكلفة",
        caption: "متوسط الوفر مقارنةً بتوظيف فريقٍ داخلي للمهام نفسها.",
      },
      {
        value: "٢٤/٧",
        label: "استجابةٌ دائمة",
        caption: "لا إجازات، ولا تأخير، ولا غيابٌ عن العمل.",
      },
      {
        value: "١٤ يومًا",
        label: "إلى الإطلاق",
        caption: "متوسط الوقت من التوقيع إلى تشغيل أول نظامٍ حيّ.",
      },
    ],
    servicesNum: "٠٣ — الخدمات",
    servicesTitle: "ثمانِ خدمات، نظامٌ واحد.",
    servicesLede:
      "كلُّ خدمةٍ مصمَّمةٌ لتعمل وحدها أو ضمن منظومةٍ كاملة. نُوصي بالبدء بواحدةٍ ثم التوسّع.",
    pricingNum: "٠٤ — الباقات",
    pricingTitle: "خدماتنا الأكثر طلبًا — في باقةٍ واحدة.",
    pricingLede:
      "بدلاً من حجز كل خدمة على حدة، جمعنا الخدمات التي يحجزها عملاؤنا معًا في باقاتٍ جاهزة بسعرٍ أفضل. بلا عقودٍ طويلة — ألغِ متى شئت.",
    pricing: {
      basic: {
        badge: "محتوى + سوشيال",
        name: "الأساسية",
        price: "٢٬٥٠٠",
        per: "ريال / شهريًا",
        features: [
          "صناعةُ محتوىً شهريٍّ بصوتِ علامتك",
          "إدارةُ حسابِ سوشيال ميديا واحد",
          "تقريرٌ شهريٌّ بالنتائج والأرقام",
          "قناةٌ مباشرةٌ على واتساب مع الفريق",
        ],
        cta: "ابدأ الآن",
      },
      professional: {
        badge: "🔥 ٤ خدمات في باقة واحدة",
        name: "الاحترافية",
        price: "٤٬٠٠٠",
        per: "ريال / شهريًا",
        features: [
          "إدارةُ الموقع الإلكتروني",
          "تحسينُ محركات البحث (سيو)",
          "صناعةُ محتوىً ونشرٌ تلقائيٌّ على حسابين",
          "تقريرٌ شهريٌّ بالنتائج والأرقام",
          "قناةٌ مباشرةٌ على واتساب مع الفريق",
        ],
        cta: "احجز مقعدك",
      },
      custom: {
        badge: "كل الخدمات + أنظمة مخصّصة",
        name: "المنظومة",
        price: "حسب الطلب",
        per: "—",
        features: [
          "كلُّ ما في الاحترافية + أنظمةٌ متعدّدة",
          "تكاملٌ مع أنظمتك الداخلية",
          "مديرُ حسابٍ مخصّص",
          "اتفاقيةُ مستوى خدمةٍ بالدقيقة",
        ],
        cta: "تحدّث معنا",
      },
    },
    ctaNum: "٠٥ — التواصل",
    ctaTitle: "لنتحدّث.",
    ctaBody:
      "أرسل لنا تفاصيل مشروعك ونعود إليك خلال ٢٤ ساعة.",
    ctaWhatsApp: "تواصل على واتساب",
    ctaEmail: "راسلنا بالبريد",
  },
  services: {
    eyebrow: "٠٢ — الخدمات",
    title: "ثمانِ خدمات. نظامٌ واحدٌ يعمل كفريقٍ كامل.",
    lede:
      "لا نبيعُ ساعاتٍ ولا أدوات. نُسلِّمُ نتائج: نظامٌ حيٌّ يعمل، ويُراقَب، ويُحسَّن شهريًا.",
    backLabel: "← العودة إلى الخدمات",
    detailLabel: "اقرأ التفاصيل",
    list: [
      {
        num: "٠١",
        slug: "website-design",
        name: "تصميم المواقع",
        summary:
          "واجهاتٌ هادئة، مكتوبةٌ بعربيةٍ نظيفةٍ وإنجليزيةٍ صحيحة.",
        bullets: [
          "تصميمٌ مخصَّصٌ لا يستخدم قوالب",
          "دعمٌ كاملٌ للغة العربية والكتابة من اليمين",
          "بنيةٌ تُحسِّن السيو من اليوم الأول",
          "تدريبُ فريقك على الإدارة الذاتية",
        ],
        outcome: "موقعٌ يصل للزائر قبل أن يضغط.",
      },
      {
        num: "٠٢",
        slug: "search-engine-optimization",
        name: "تحسين محركات البحث",
        summary:
          "نُظهِر عملك لمن يبحث فعلاً، بكلماتٍ يستخدمها العرب لا قواميسٌ مترجمة.",
        bullets: [
          "بحثُ كلماتٍ مفتاحيةٍ باللهجات المحلية",
          "معالجةُ الأداء التقني وسرعة الصفحة",
          "بناء محتوى مرتكزٍ على نيّة البحث",
          "تقارير واضحةٌ بلا مصطلحاتٍ مُبهَمة",
        ],
        outcome: "نموٌّ عضويٌّ يُقاسُ لا يُدَّعى.",
      },
      {
        num: "٠٣",
        slug: "content-production",
        name: "صناعة المحتوى",
        summary:
          "مقالات، منشورات، فيديوهات قصيرة. يكتبُها الذكاء الاصطناعي ويُحرِّرها كاتبٌ بشري.",
        bullets: [
          "خطةُ محتوىً شهريةٌ بصوتِ علامتك",
          "كتابةٌ عربيةٌ راقيةٌ لا آليةٌ مُفتعلة",
          "تصميمٌ مرئيٌّ موحَّدٌ لكل قناة",
          "نشرٌ وجدولةٌ تلقائيّان",
        ],
        outcome: "محتوى ينشره جمهورُك لا تدفعُ لنشره.",
      },
      {
        num: "٠٤",
        slug: "social-media-management",
        name: "إدارة السوشيال ميديا",
        summary:
          "تخطيط، تصميم، نشر، ردٌّ على التعليقات. كلُّ ذلك بنظامٍ واحدٍ هادئ.",
        bullets: [
          "تقويم محتوى أسبوعيٌّ مرئيّ",
          "ردودٌ تلقائيةٌ على الرسائل المتكرِّرة",
          "تحليلُ الأداء شهريًا",
          "جلساتُ تعاونٍ معك مرةً كلَّ أسبوعين",
        ],
        outcome: "حسابٌ يبدو وكأنَّ خلفه فريقًا من عشرة.",
      },
      {
        num: "٠٥",
        slug: "mobile-app-design",
        name: "تصميم تطبيقات الجوال",
        summary:
          "تطبيقاتٌ سلسة على iOS وAndroid، مصمّمةٌ لتجربةِ المستخدم العربي أولاً.",
        bullets: [
          "تصميمُ واجهاتٍ بديهيةٍ تناسب السوق المحلي",
          "دعمٌ كاملٌ للعربية والاتجاهين",
          "تجربةٌ موحّدةٌ بين الجوال والموقع",
          "اختبارٌ على أجهزةٍ حقيقيةٍ قبل الإطلاق",
        ],
        outcome: "تطبيقٌ يُحبُّه المستخدم من أول لمسة.",
      },
      {
        num: "٠٦",
        slug: "brand-identity",
        name: "تصميم الهوية التجارية",
        summary:
          "هويةٌ بصريةٌ متكاملةٌ تُميِّز علامتك وتبني ثقةً فورية.",
        bullets: [
          "شعارٌ وألوانٌ وطباعةٌ تعكس شخصية علامتك",
          "دليلُ هويةٍ بصريةٍ شامل",
          "تطبيقُ الهوية على جميع القنوات",
          "تصميماتٌ تعمل بالعربية والإنجليزية بنفس القوة",
        ],
        outcome: "علامةٌ تُعرَف قبل أن تُقرأ.",
      },
      {
        num: "٠٧",
        slug: "ecommerce-design",
        name: "تصميم المتاجر الإلكترونية",
        summary:
          "متاجرٌ مبنيةٌ للبيع لا للعرض، بتجربةِ شراءٍ سهلةٍ وسريعة.",
        bullets: [
          "تصميمُ صفحاتِ منتجاتٍ تُحوِّل الزوّار لمشترين",
          "تكاملٌ مع بوابات الدفع المحلية",
          "تجربةُ سلّةٍ وخروجٍ مُحسَّنة للجوال",
          "لوحةُ تحكّمٍ سهلةٌ لإدارة المنتجات والطلبات",
        ],
        outcome: "متجرٌ يبيع وأنت مشغولٌ بشيءٍ آخر.",
      },
      {
        num: "٠٨",
        slug: "digital-marketing",
        name: "التسويق الإلكتروني",
        summary:
          "حملاتٌ مدروسةٌ على المنصات التي يتواجد فيها عملاؤك فعلاً.",
        bullets: [
          "إعلاناتٌ مدفوعةٌ على Google وMeta بميزانيةٍ مُحكَمة",
          "حملاتُ بريدٍ إلكترونيٍّ تُبني علاقةً لا مجرّد مبيعات",
          "تحليلُ البيانات واتخاذ قراراتٍ مبنيّةٍ على الأرقام",
          "تقاريرُ أداءٍ شهريةٌ بلغةٍ واضحة",
        ],
        outcome: "كلُّ ريالٍ في الإعلان يعود بنتيجةٍ مقيسة.",
      },
    ],
  },
  blog: {
    eyebrow: "٠٣ — المجلة",
    title: "مقالاتٌ عن الأتمتة، الأعمال، والذكاء الاصطناعي.",
    lede:
      "نكتبُ لمن يديرُ أعمالاً حقيقية، لا لمن يلاحقُ الضجيج. مقالاتٌ قصيرة، عملية، ومبنيةٌ على تجارب.",
    backLabel: "← العودة للمدوّنة",
    posts: [
      {
        num: "٠١",
        slug: "web-app-design",
        kicker: "تصميم",
        title: "موقعك ليس كتيّبًا — بل أفضلُ مندوبِ مبيعاتٍ لديك.",
        excerpt:
          "لماذا يخسرُ القالبُ الجاهزُ عملاءَك، وكيف يُحوِّل الموقعُ المخصّصُ الزوّارَ إلى إيرادٍ على مدارِ الساعة.",
        date: "١٥ نيسان ٢٠٢٦",
        readTime: "٨ دقائق",
      },
      {
        num: "٠٢",
        slug: "search-optimization-seo",
        kicker: "سيو",
        title: "تحسين محركات البحث للمواقع العربية: ما يُحرّك النتائج فعلاً.",
        excerpt:
          "من البحث عن الكلمات المفتاحية باللهجات المحلية إلى الأداء التقني — دليلٌ لمن يريد نتائج حقيقية في Google العربية.",
        date: "١٠ نيسان ٢٠٢٦",
        readTime: "١٠ دقائق",
      },
      {
        num: "٠٣",
        slug: "content-production",
        kicker: "محتوى",
        title: "محتوى يبيع دون أن يبيع — صناعةُ المحتوى بمساعدةِ الذكاء الاصطناعي.",
        excerpt:
          "كيف تُنتج محتوًى عربيًا عالي الجودة باستمرار يبني الثقة ويجلب العملاء دون إرهاق فريقك.",
        date: "٣ نيسان ٢٠٢٦",
        readTime: "٩ دقائق",
      },
      {
        num: "٠٤",
        slug: "social-media-management",
        kicker: "سوشيال ميديا",
        title: "إدارة السوشيال ميديا كنظام، لا كمهمةٍ يومية.",
        excerpt:
          "كيف تُحوِّل الفوضى إلى عمليةٍ هادئةٍ قابلةٍ للتكرار تُدير حساباتك باحترافية دون استهلاك وقتك.",
        date: "٢٥ آذار ٢٠٢٦",
        readTime: "٨ دقائق",
      },
      {
        num: "٠٥",
        slug: "mobile-app-design",
        kicker: "تطبيقات",
        title: "عملاؤك على هواتفهم — هل علامتك هناك؟",
        excerpt:
          "لماذا تطبيق الجوال ليس ترفًا، وكيف تصمّمه بالطريقة الصحيحة للسوق العربي.",
        date: "١٨ آذار ٢٠٢٦",
        readTime: "٩ دقائق",
      },
      {
        num: "٠٦",
        slug: "corporate-identity-design",
        kicker: "هوية تجارية",
        title: "علامتك تُعرَف قبل أن تُقرأ — أو لا تُعرَف أبدًا.",
        excerpt:
          "لماذا الشعار وحده لا يكفي، وكيف تبني هوية بصرية تعمل بالعربية والإنجليزية بنفس القوة.",
        date: "١٠ آذار ٢٠٢٦",
        readTime: "٨ دقائق",
      },
      {
        num: "٠٧",
        slug: "e-commerce-design",
        kicker: "تجارة إلكترونية",
        title: "متجرك الإلكتروني آلة بيع — أو كتالوج لا يُقرأ.",
        excerpt:
          "من صفحات المنتجات إلى الدفع، كيف تصمّم متجرًا يُحوِّل الزوار إلى مشترين في السوق العربي.",
        date: "٣ آذار ٢٠٢٦",
        readTime: "١٠ دقائق",
      },
      {
        num: "٠٨",
        slug: "digital-marketing",
        kicker: "تسويق إلكتروني",
        title: "توقّف عن إنفاق أكثر — وابدأ بإنفاق أذكى.",
        excerpt:
          "كيف تبني محرّك تسويق رقمي يقدّم عوائد مقيسة بدلاً من مقاييس شكلية لا تدفع الرواتب.",
        date: "٢٥ شباط ٢٠٢٦",
        readTime: "١١ دقيقة",
      },
    ],
    subscribe: {
      title: "اشتركٌ في الرسالة الشهرية.",
      body:
        "مقالٌ مُطوَّلٌ واحدٌ في الشهر، يصلك يوم الأحد الأول. لا إعلانات، ولا رسائل ترويج.",
      placeholder: "بريدك الإلكتروني",
      cta: "اشترك",
    },
  },
  about: {
    eyebrow: "٠٤ — من نحن",
    title: "وادي السحاب بدأت سؤالاً، ثم صارت وكالة.",
    lede:
      "بدأ ثلاثةٌ منّا من مهندسين وكُتّاب بسؤالٍ واحد: لماذا يُرهِقُ عملٌ بسيطٌ فرقًا بأكملها؟ الجواب صار شركة.",
    sections: [
      {
        num: "٠١",
        heading: "البداية",
        body:
          "في ٢٠٢٤ كنّا نعمل معًا في شركةِ تقنيةٍ كبرى. كنّا نرى شركاتٍ عائليةً عربيةً تدفعُ رواتبَ مرتفعةً لمهامٍ أصبحتْ أرخصَ بعشرين مرةً عبر الأتمتة. فأنشأنا وادي السحاب.",
      },
      {
        num: "٠٢",
        heading: "المبدأ",
        body:
          "نُؤمنُ أن الذكاء الاصطناعي ليس بديلاً عن البشر، بل عن المهامِ المُملّة التي تستنزفُهم. نحن نُحرِّرُ الوقت، لا نستبدلُ الناس.",
      },
      {
        num: "٠٣",
        heading: "الطريقة",
        body:
          "لا نبيعُ خطةً لم نجرّبها. كلُّ نظامٍ نُسلِّمه، مُستخدمٌ أولاً داخل وادي السحاب نفسها. لا تجاربَ على عملائنا.",
      },
      {
        num: "٠٤",
        heading: "الحدود",
        body:
          "نقبلُ عميلاً واحدًا جديدًا في الأسبوع. ليس لأنَّنا لا نستطيع أكثر، بل لأن التسرّع يُفسِدُ العمل الجيد.",
      },
    ],
    team: {
      title: "الفريق",
      body:
        "أربعةُ مهندسين، كاتبتان، ومصمِّمةٌ واحدة. نلتقي مرةً في الشهر وجهًا لوجه.",
    },
  },
  trust: {
    eyebrow: "٠٥ — لماذا نحن",
    title: "الثقةُ تُبنى بالتفاصيل، لا بالشعارات.",
    lede:
      "أربعةُ مبادئ نلتزمُ بها مع كل عميل، مكتوبةٌ هنا قبل أن نُطلَبَ بها.",
    pillars: [
      {
        num: "٠١",
        title: "تسعيرٌ صريح.",
        body:
          "لا رسومٌ خفيّة، ولا ساعاتُ عملٍ مفاجئة. ما تراه في عرض السعر هو ما تدفعه.",
      },
      {
        num: "٠٢",
        title: "ملكيّتك الكاملة.",
        body:
          "كلُّ شيءٍ نبنيه يعود لك. الكودُ، البياناتُ، الحسابات. لو أنهينا غدًا، يبقى النظامُ يعمل.",
      },
      {
        num: "٠٣",
        title: "تقاريرٌ أسبوعية.",
        body:
          "كلَّ اثنين، تصلُك وثيقةٌ واحدةٌ مختصرة: ما أُنجزَ، ما الخطوةُ التالية، أين المشكلات.",
      },
      {
        num: "٠٤",
        title: "ضمانُ الرد في ٤ ساعات.",
        body:
          "خلال ساعات العمل، تصلك إجابةٌ من إنسانٍ حقيقيٍّ خلال أربع ساعات. مكتوبةٌ في العقد.",
      },
    ],
    guarantee: {
      title: "ضمانُ الثلاثين يومًا.",
      body:
        "إذا لم تَرَ في أوَّل شهرٍ وفرًا مُوثَّقًا أو نتيجةً مقيسة، نُعيدُ ما دفعته كاملاً. لا أسئلة. لم يُطلبْ منّا ذلك حتى الآن، لكنّه مكتوب.",
    },
    testimonials: [
      {
        quote:
          "خلال شهرين، استبدلنا ثلاثةَ موظفين للدعم الفنيّ بنظامٍ واحد. الزبائنُ لم يلاحظوا الفرق. التكلفةُ انخفضتْ ٧٠٪.",
        author: "ليلى عبد الرحمن",
        role: "مديرة العمليات، متجر «نوى»",
      },
      {
        quote:
          "أوَّلُ وكالةٍ تشرحُ لي ما تفعلُهُ بكلماتٍ أفهمها. التقاريرُ الأسبوعيةُ وحدها تستحقُّ الاشتراك.",
        author: "كريم حداد",
        role: "مؤسِّس، شركة «حَدَث»",
      },
      {
        quote:
          "اشتركنا في الخطة الأساسية، وخرجتُ بنتائج واضحةٍ من الشهر الأول.",
        author: "ريم الزهراني",
        role: "مديرة تسويق",
      },
    ],
  },
  contact: {
    eyebrow: "٠٥ — التواصل",
    title: "تواصل معنا.",
    lede: "أرسل لنا تفاصيل مشروعك ونعود إليك خلال ٢٤ ساعة.",
    form: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      company: "الشركة",
      mobile: "الجوال",
      city: "المدينة",
      details: "تفاصيل المشروع",
      submit: "إرسال",
    },
  },
  thankYou: {
    title: "شكرًا لك",
    heading: "استلمنا رسالتك.",
    body: "سنعود إليك خلال ٢٤ ساعة. شكرًا لثقتك بوادي السحاب.",
    cta: "العودة للرئيسية",
  },
  footer: {
    columns: [
      {
        heading: "الموقع",
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "الخدمات", href: "/services" },
          { label: "المدوّنة", href: "/blog" },
          { label: "من نحن", href: "/about" },
          { label: "لماذا نحن", href: "/trust" },
          { label: "تواصل", href: "/contact" },
        ],
      },
      {
        heading: "الخدمات",
        links: [
          { label: "تصميم المواقع", href: "/services/website-design" },
          { label: "تحسين محركات البحث", href: "/services/search-engine-optimization" },
          { label: "صناعة المحتوى", href: "/services/content-production" },
          { label: "سوشيال ميديا", href: "/services/social-media-management" },
          { label: "تطبيقات الجوال", href: "/services/mobile-app-design" },
          { label: "الهوية التجارية", href: "/services/brand-identity" },
          { label: "المتاجر الإلكترونية", href: "/services/ecommerce-design" },
          { label: "التسويق الإلكتروني", href: "/services/digital-marketing" },
        ],
      },
    ],
    contact: "تواصل",
    whatsapp: "واتساب الأعمال",
    email: "البريد الإلكتروني",
    copyright: "© ٢٠٢٦ وادي السحاب. جميع الحقوق محفوظة.",
    colophonLeft: "",
    colophonRight: "",
  },
};

const en: Dict = {
  meta: {
    title: "Cloud Valley — AI automation agency.",
    description:
      "We replace repetitive human tasks with reliable AI systems. Design, SEO, content, and social media.",
  },
  brand: {
    name: "Cloud Valley",
    wordmark: "Cloud Valley — وادي السحاب",
    tagline: "An automation agency — we build systems so you don't need to build teams.",
  },
  nav: {
    home: "Home",
    services: "Services",
    blog: "Blog",
    about: "About",
    trust: "Why us",
    contact: "Contact",
    switchLang: "ع",
    cta: "Start on WhatsApp",
  },
  home: {
    eyebrow: "Automation studio",
    displayA: "We build",
    displayB: "systems",
    displayC: "not teams.",
    lede:
      "Cloud Valley is an automation agency — we build systems so you don't need to build teams. We design AI systems that do what a full team does — faster, and at sixty percent less cost.",
    primaryCta: "Start on WhatsApp",
    secondaryCta: "See services",
    marquee: [
      "Web design",
      "Mobile apps",
      "Search optimization",
      "Content production",
      "Social media",
      "Corporate identity",
      "E-commerce",
      "Electronic marketing",
    ],
    manifestoNum: "01 — Manifesto",
    manifestoTitle: "Good work does not require a large team.",
    manifestoBody: [
      "In every Arab company today, employees spend long hours on repetitive tasks: answering messages, scheduling, drafting posts, reviewing reports. Work that AI can now do — and often, do better.",
      "Our job is not to sell shiny tools. Our job is to leave you with systems that run quietly, without needing you. We deliver finished work — documented, handed over, wired into your business.",
    ],
    statsTitle: "02 — Numbers",
    stats: [
      {
        value: "60%",
        label: "Cost reduction",
        caption:
          "Average savings vs. hiring an internal team for the same scope.",
      },
      {
        value: "24/7",
        label: "Always-on",
        caption: "No holidays, no delays, no one out sick.",
      },
      {
        value: "14 days",
        label: "To launch",
        caption: "Average time from contract to the first live system.",
      },
    ],
    servicesNum: "03 — Services",
    servicesTitle: "Eight services. One system.",
    servicesLede:
      "Each service works alone, or as part of a full stack. We usually recommend starting with one and expanding.",
    pricingNum: "04 — Packages",
    pricingTitle: "Our most requested services — in one package.",
    pricingLede:
      "Instead of booking each service separately, we bundled the services our clients book together into ready-made packages at a better price. No long contracts — cancel anytime.",
    pricing: {
      basic: {
        badge: "Content + Social",
        name: "Basic",
        price: "2,500",
        per: "SAR / month",
        features: [
          "Monthly content generation in your brand voice",
          "One social media account management",
          "A monthly report with results and numbers",
          "Direct WhatsApp channel with the team",
        ],
        cta: "Get started",
      },
      professional: {
        badge: "🔥 4 services in one package",
        name: "Professional",
        price: "4,000",
        per: "SAR / month",
        features: [
          "Website management",
          "Search engine optimization (SEO)",
          "Content creation and automatic posting to two accounts",
          "A monthly report with results and numbers",
          "Direct WhatsApp channel with the team",
        ],
        cta: "Book your spot",
      },
      custom: {
        badge: "All services + custom systems",
        name: "Ecosystem",
        price: "Custom",
        per: "—",
        features: [
          "Everything in Professional + multiple systems",
          "Integration with your internal tools",
          "Dedicated account manager",
          "SLA with per-minute response",
        ],
        cta: "Talk to us",
      },
    },
    ctaNum: "05 — Contact",
    ctaTitle: "Let's talk.",
    ctaBody:
      "Send us your project details and we'll get back to you within 24 hours.",
    ctaWhatsApp: "Start on WhatsApp",
    ctaEmail: "Write us an email",
  },
  services: {
    eyebrow: "02 — Services",
    title: "Eight services. One system that works like a full team.",
    lede:
      "We don't sell hours or tools. We deliver outcomes: a live system, monitored, improved monthly.",
    backLabel: "\u2190 Back to Services",
    detailLabel: "Read details",
    list: [
      {
        num: "01",
        slug: "website-design",
        name: "Web design",
        summary:
          "Quiet interfaces, written in clean Arabic and correct English.",
        bullets: [
          "Custom design. No templates.",
          "Full Arabic and right-to-left support.",
          "A structure optimized for search from day one.",
          "Training your team to run it themselves.",
        ],
        outcome: "A site that arrives before the visitor clicks.",
      },
      {
        num: "02",
        slug: "search-engine-optimization",
        name: "Search optimization",
        summary:
          "We show your work to people actually searching, in words they use — not translated glossaries.",
        bullets: [
          "Keyword research in local dialects",
          "Technical performance and page speed",
          "Content built around search intent",
          "Clear reports — no jargon",
        ],
        outcome: "Organic growth that is measured, not claimed.",
      },
      {
        num: "03",
        slug: "content-production",
        name: "Content production",
        summary:
          "Articles, posts, short videos. Drafted by AI, edited by a human writer.",
        bullets: [
          "A monthly content plan in your voice",
          "Elegant Arabic — not stiff, not machine-translated",
          "Unified visual design across channels",
          "Automated publishing and scheduling",
        ],
        outcome: "Content your audience shares — not promoted.",
      },
      {
        num: "04",
        slug: "social-media-management",
        name: "Social media management",
        summary:
          "Planning, design, publishing, reply handling. One quiet system.",
        bullets: [
          "A weekly visual content calendar",
          "Auto-replies for common messages",
          "Monthly performance analysis",
          "A working session with you every two weeks",
        ],
        outcome: "An account that looks like a team of ten stands behind it.",
      },
      {
        num: "05",
        slug: "mobile-app-design",
        name: "Mobile application design",
        summary:
          "Smooth apps on iOS and Android, designed for the Arab user experience first.",
        bullets: [
          "Intuitive interfaces tailored to the local market",
          "Full Arabic and bidirectional support",
          "A consistent experience between mobile and web",
          "Tested on real devices before launch",
        ],
        outcome: "An app users love from the first tap.",
      },
      {
        num: "06",
        slug: "brand-identity",
        name: "Corporate identity design",
        summary:
          "A complete visual identity that sets your brand apart and builds instant trust.",
        bullets: [
          "Logo, colors, and typography that reflect your brand personality",
          "A comprehensive brand identity guide",
          "Identity applied consistently across all channels",
          "Designs that work equally well in Arabic and English",
        ],
        outcome: "A brand recognized before it is read.",
      },
      {
        num: "07",
        slug: "ecommerce-design",
        name: "E-commerce design",
        summary:
          "Stores built to sell, not just display — with a fast, frictionless buying experience.",
        bullets: [
          "Product pages designed to convert visitors into buyers",
          "Integration with local payment gateways",
          "Cart and checkout experience optimized for mobile",
          "An easy dashboard to manage products and orders",
        ],
        outcome: "A store that sells while you are busy with something else.",
      },
      {
        num: "08",
        slug: "digital-marketing",
        name: "Electronic marketing",
        summary:
          "Targeted campaigns on the platforms where your customers actually spend their time.",
        bullets: [
          "Paid ads on Google and Meta with controlled budgets",
          "Email campaigns that build relationships, not just sales",
          "Data analysis and decisions driven by real numbers",
          "Monthly performance reports in plain language",
        ],
        outcome: "Every riyal spent on ads returns a measured result.",
      },
    ],
  },
  blog: {
    eyebrow: "03 — Journal",
    title: "Essays on automation, business, and AI.",
    lede:
      "We write for people running real businesses — not people chasing noise. Short, practical, built on what we saw in the field.",
    backLabel: "\u2190 Back to Blog",
    posts: [
      {
        num: "01",
        slug: "web-app-design",
        kicker: "Design",
        title:
          "Your website is not a brochure — it is your best salesperson.",
        excerpt:
          "Why templates lose your customers, and how a custom-built site converts visitors into revenue around the clock.",
        date: "April 15, 2026",
        readTime: "8 min",
      },
      {
        num: "02",
        slug: "search-optimization-seo",
        kicker: "SEO",
        title:
          "SEO for Arabic websites: what actually moves the needle.",
        excerpt:
          "From keyword research in local dialects to technical performance — a guide for anyone who wants real results in Arabic Google.",
        date: "April 10, 2026",
        readTime: "10 min",
      },
      {
        num: "03",
        slug: "content-production",
        kicker: "Content",
        title:
          "Content that sells without selling — AI-assisted content production.",
        excerpt:
          "How to produce consistent, high-quality Arabic content that builds trust and drives leads without burning out your team.",
        date: "April 3, 2026",
        readTime: "9 min",
      },
      {
        num: "04",
        slug: "social-media-management",
        kicker: "Social media",
        title:
          "Social media management as a system, not a daily hustle.",
        excerpt:
          "How to turn chaos into a calm, repeatable process that runs your accounts professionally without consuming your time.",
        date: "March 25, 2026",
        readTime: "8 min",
      },
      {
        num: "05",
        slug: "mobile-app-design",
        kicker: "Mobile apps",
        title:
          "Your customers are on their phones — is your brand there?",
        excerpt:
          "Why a mobile app is not a luxury, and how to design it right for Arab markets.",
        date: "March 18, 2026",
        readTime: "9 min",
      },
      {
        num: "06",
        slug: "corporate-identity-design",
        kicker: "Brand identity",
        title:
          "Your brand is recognized before it is read — or not at all.",
        excerpt:
          "Why a logo alone is not enough, and how to build a visual identity that works equally well in Arabic and English.",
        date: "March 10, 2026",
        readTime: "8 min",
      },
      {
        num: "07",
        slug: "e-commerce-design",
        kicker: "E-commerce",
        title:
          "Your online store is a selling machine — or a catalog no one reads.",
        excerpt:
          "From product pages to checkout, how to design a store that converts visitors into buyers in the Arab market.",
        date: "March 3, 2026",
        readTime: "10 min",
      },
      {
        num: "08",
        slug: "digital-marketing",
        kicker: "Digital marketing",
        title:
          "Stop spending more — start spending smarter.",
        excerpt:
          "How to build a digital marketing engine that delivers measured returns instead of vanity metrics that don't pay salaries.",
        date: "February 25, 2026",
        readTime: "11 min",
      },
    ],
    subscribe: {
      title: "Subscribe to the monthly letter.",
      body:
        "One long essay, first Sunday of every month. No ads. No promotions. You can unsubscribe any time.",
      placeholder: "Your email address",
      cta: "Subscribe",
    },
  },
  about: {
    eyebrow: "04 — About",
    title: "Cloud Valley started as a question. It became an agency.",
    lede:
      "Three of us — engineers and writers — began with a single question: why does simple work exhaust whole teams? The answer turned into a company.",
    sections: [
      {
        num: "01",
        heading: "Beginning",
        body:
          "In 2024 we worked together at a large tech company. We watched Arab family businesses pay high salaries for work that had become twenty times cheaper through automation. So we started Cloud Valley.",
      },
      {
        num: "02",
        heading: "Principle",
        body:
          "We believe AI is not a replacement for people. It is a replacement for the dull tasks that drain them. We free up time — we do not replace humans.",
      },
      {
        num: "03",
        heading: "Method",
        body:
          "We don't sell a plan we haven't tried. Every system we ship runs inside Cloud Valley first. No experiments on our clients.",
      },
      {
        num: "04",
        heading: "Limits",
        body:
          "We take on one new client per week. Not because we couldn't do more — rushing ruins good work.",
      },
    ],
    team: {
      title: "The team",
      body:
        "Four engineers, two writers, one designer. We meet in person once a month.",
    },
  },
  trust: {
    eyebrow: "05 — Why us",
    title: "Trust is built in the details, not the slogans.",
    lede: "Four commitments, written here before they are asked for.",
    pillars: [
      {
        num: "01",
        title: "Transparent pricing.",
        body:
          "No hidden fees, no surprise hours. The number on the quote is the number you pay.",
      },
      {
        num: "02",
        title: "Your full ownership.",
        body:
          "Everything we build belongs to you. The code, the data, the accounts. If we ended tomorrow, the system would keep running.",
      },
      {
        num: "03",
        title: "Weekly reports.",
        body:
          "Every Monday, one short document arrives: what shipped, what's next, where the problems are.",
      },
      {
        num: "04",
        title: "A four-hour reply guarantee.",
        body:
          "During business hours, a human reply arrives within four hours. It's written into the contract.",
      },
    ],
    guarantee: {
      title: "The 30-day guarantee.",
      body:
        "If in the first month you don't see a documented saving or a measured result, we return everything you paid. No questions. No one has asked yet — but it's in writing.",
    },
    testimonials: [
      {
        quote:
          "In two months we replaced three support agents with one system. Our customers didn't notice the difference. Costs dropped by 70%.",
        author: "Layla Abdul-Rahman",
        role: "Head of Operations, Nawa Perfumery",
      },
      {
        quote:
          "The first agency that explained what they do in words I understood. The weekly reports alone are worth the subscription.",
        author: "Karim Haddad",
        role: "Founder, Hadath",
      },
      {
        quote:
          "We subscribed to the basic plan and saw clear results from the first month.",
        author: "Reem Al-Zahrani",
        role: "Marketing Director",
      },
    ],
  },
  contact: {
    eyebrow: "05 — Contact",
    title: "Get in touch.",
    lede: "Send us your project details and we'll get back to you within 24 hours.",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Work Email",
      company: "Company",
      mobile: "Mobile",
      city: "City",
      details: "Project Details",
      submit: "Submit",
    },
  },
  thankYou: {
    title: "Thank you",
    heading: "We received your message.",
    body: "We'll get back to you within 24 hours. Thank you for trusting Cloud Valley.",
    cta: "Back to home",
  },
  footer: {
    columns: [
      {
        heading: "Site",
        links: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Why us", href: "/trust" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Services",
        links: [
          { label: "Web design", href: "/services/website-design" },
          { label: "Search optimization", href: "/services/search-engine-optimization" },
          { label: "Content", href: "/services/content-production" },
          { label: "Social media", href: "/services/social-media-management" },
          { label: "Mobile apps", href: "/services/mobile-app-design" },
          { label: "Corporate identity", href: "/services/brand-identity" },
          { label: "E-commerce", href: "/services/ecommerce-design" },
          { label: "Electronic marketing", href: "/services/digital-marketing" },
        ],
      },
    ],
    contact: "Contact",
    whatsapp: "Business WhatsApp",
    email: "Email",
    copyright: "© 2026 Cloud Valley. All rights reserved.",
    colophonLeft: "",
    colophonRight: "",
  },
};

const dictionaries: Record<Locale, Dict> = { ar, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
