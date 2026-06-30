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
  privacy: {
    eyebrow: string;
    title: string;
    lede: string;
    updated: string;
    sections: { num: string; heading: string; body: string[] }[];
  };
  terms: {
    eyebrow: string;
    title: string;
    lede: string;
    updated: string;
    sections: { num: string; heading: string; body: string[] }[];
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
    displayA: "موظفك القادم",
    displayB: "ليس شخصًا.",
    displayC: "بل نظام.",
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
    pricingTitle: "سيو، محتوى، وسوشيال ميديا — الثلاثية التي لا يحجزها عملاؤنا منفردة.",
    pricingLede:
      "جمعنا الخدمات التي يختارها عملاؤنا دائمًا في باقاتٍ جاهزة بسعرٍ أفضل. بلا عقودٍ طويلة — ألغِ متى شئت.",
    pricing: {
      basic: {
        badge: "محتوى + سوشيال",
        name: "الأساسية",
        price: "١٬٥٠٠",
        per: "ريال / شهريًا",
        features: [
          "صناعةُ محتوىً شهريٍّ بصوتِ علامتك",
          "إدارةُ حسابِ سوشيال ميديا واحد",
          "تقريرٌ شهريٌّ بالنتائج والأرقام",
        ],
        cta: "ابدأ الآن",
      },
      professional: {
        badge: "🔥 ٤ خدمات في باقة واحدة",
        name: "الاحترافية",
        price: "٣٬٠٠٠",
        per: "ريال / شهريًا",
        features: [
          "إدارةُ الموقع الإلكتروني + تحسين محركات البحث",
          "صناعةُ محتوىً ونشرٌ تلقائيٌّ على حسابين",
          "إدارةُ السوشيال ميديا بتقويمٍ أسبوعي",
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
          "كلُّ ما في الاحترافية + أنظمةٌ متعدّدة متصلة",
          "تكاملٌ مع أنظمتك الداخلية (CRM، ERP، إلخ)",
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
      title: "الجودةُ هي الضمان.",
      body:
        "لا نُسلّم عملًا لا نفخر به. كلُّ تفصيلةٍ تُبنى بمعيارٍ نضع اسمنا عليه — لأنّنا فعلًا نفعل. إذا أقلقك شيء، فهو يُقلقنا أيضًا، ونعالجه حتى يصبح صحيحًا.",
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
  privacy: {
    eyebrow: "٠٦ — الخصوصية",
    title: "سياسة الخصوصية.",
    lede:
      "نحترم خصوصيتك ونتعامل مع بياناتك بالعناية ذاتها التي نضعها في عملنا. تشرح هذه الصفحة ما نجمعه فعلًا، ولماذا، وكيف نحميه.",
    updated: "آخر تحديث: ٣٠ حزيران ٢٠٢٦",
    sections: [
      {
        num: "٠١",
        heading: "من نحن",
        body: [
          "وادي السحاب وكالةُ أتمتةٍ وخدماتٍ رقمية، مسجّلةٌ بالسجل التجاري رقم ١٠١٠٦٣٧٨٤٥. نقدّم خدمات تصميم المواقع، وتحسين محركات البحث، وصناعة المحتوى، وإدارة السوشيال ميديا، وتصميم تطبيقات الجوال، والهوية التجارية، والمتاجر الإلكترونية، والتسويق الإلكتروني.",
          "تُوضّح هذه السياسة كيف نتعامل مع بياناتك الشخصية وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية. باستخدامك لموقعنا أو تواصلك معنا، فإنك توافق على الممارسات الموضّحة هنا.",
        ],
      },
      {
        num: "٠٢",
        heading: "المعلومات التي نجمعها",
        body: [
          "المعلومات التي تقدّمها عبر نموذج التواصل: الاسم الأول، اسم العائلة، البريد الإلكتروني، رقم الجوال، اسم الشركة، المدينة، وتفاصيل مشروعك.",
          "بريدك الإلكتروني عند اشتراكك في رسالتنا الشهرية.",
          "بيانات تُجمع تلقائيًا عند تصفّحك للموقع: عنوان IP، نوع المتصفّح والجهاز، والصفحات التي تزورها — عبر ملفّات تعريف الارتباط وأدوات التحليل.",
        ],
      },
      {
        num: "٠٣",
        heading: "كيف نستخدم معلوماتك",
        body: [
          "للردّ على استفساراتك وإعداد عروض الأسعار وتقديم الخدمات التي تطلبها.",
          "للتواصل معك بشأن مشروعك عبر البريد الإلكتروني أو واتساب الأعمال.",
          "لإرسال رسالتنا الشهرية إن اشتركتَ فيها — ويمكنك إلغاء الاشتراك في أي وقت.",
          "لتحسين موقعنا وفهم كيفية استخدام الزوّار له.",
        ],
      },
      {
        num: "٠٤",
        heading: "بيانات العملاء أثناء تقديم الخدمات",
        body: [
          "عند تنفيذنا لخدمةٍ مثل إدارة السوشيال ميديا أو الحملات الإعلانية أو إدارة موقعك أو متجرك، قد تمنحنا صلاحية الوصول إلى حساباتك أو منصّاتك أو محتواك.",
          "نستخدم هذا الوصول حصريًا لتقديم الخدمة المتّفق عليها، ونحافظ على سرّية بياناتك، ولا نشاركها مع أي طرفٍ خارج نطاق العمل.",
          "تبقى ملكيّة هذه الحسابات والبيانات لك بالكامل، ونُعيدها أو نحذف صلاحيات وصولنا عند انتهاء التعاون أو بناءً على طلبك.",
        ],
      },
      {
        num: "٠٥",
        heading: "ملفّات تعريف الارتباط والتحليلات",
        body: [
          "نستخدم ملفّات تعريف الارتباط (Cookies) وأدوات تحليلٍ لتشغيل الموقع وتذكّر تفضيلاتك وقياس الأداء.",
          "يمكنك ضبط متصفّحك لرفض ملفّات تعريف الارتباط، لكن قد لا تعمل بعض أجزاء الموقع بشكلٍ كامل عندئذٍ.",
        ],
      },
      {
        num: "٠٦",
        heading: "مشاركة المعلومات والإفصاح عنها",
        body: [
          "نحن لا نبيع بياناتك الشخصية ولا نؤجّرها لأي طرف.",
          "قد نشارك بياناتٍ محدودةً مع مزوّدي خدماتٍ موثوقين نعتمد عليهم في تشغيل أعمالنا — مثل الاستضافة، وأدوات التحليل، ومنصّات الإعلان (مثل Google وMeta)، وخدمات البريد — وذلك ضمن حدود ما يلزم لأداء عملهم فقط.",
          "قد نُفصح عن المعلومات إذا اقتضى القانون ذلك أو لحماية حقوقنا.",
        ],
      },
      {
        num: "٠٧",
        heading: "الاحتفاظ بالبيانات",
        body: [
          "نحتفظ بمعلوماتك طالما كان ذلك ضروريًا لتقديم خدماتنا أو لتحقيق الأغراض الموضّحة في هذه السياسة، أو طالما يقتضي القانون ذلك.",
          "عند انتفاء الحاجة إليها، نحذف بياناتك أو نجعلها مجهولة الهوية بشكلٍ آمن.",
        ],
      },
      {
        num: "٠٨",
        heading: "أمان البيانات",
        body: [
          "نطبّق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرّح به أو الفقد أو سوء الاستخدام.",
          "ومع ذلك، لا توجد طريقة نقلٍ أو تخزينٍ إلكترونيٍّ آمنة بنسبة مئة بالمئة، ولا يمكننا ضمان الأمان المطلق.",
        ],
      },
      {
        num: "٠٩",
        heading: "حقوقك",
        body: [
          "لك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو طلب حذفها.",
          "لك الحق في الاعتراض على معالجة بياناتك أو سحب موافقتك في أي وقت.",
          "لممارسة أيٍّ من هذه الحقوق، تواصل معنا عبر بيانات الاتصال في نهاية هذه الصفحة.",
        ],
      },
      {
        num: "١٠",
        heading: "التعديلات على هذه السياسة",
        body: [
          "قد نُحدّث سياسة الخصوصية هذه من وقتٍ لآخر. سننشر أي تغييرات على هذه الصفحة مع تحديث تاريخ «آخر تحديث» أعلاه.",
          "استمرارك في استخدام الموقع بعد نشر التغييرات يعني موافقتك على السياسة المُحدّثة.",
        ],
      },
      {
        num: "١١",
        heading: "تواصل معنا",
        body: [
          "إذا كان لديك أي سؤال حول سياسة الخصوصية هذه أو حول بياناتك، تواصل معنا عبر البريد contact@wady.cloud أو عبر واتساب الأعمال.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "٠٧ — الشروط",
    title: "شروط الخدمة.",
    lede:
      "تُحدّد هذه الشروط القواعد المنظِّمة لاستخدامك موقعنا وخدماتنا. اقرأها بعنايةٍ قبل التعاقد معنا.",
    updated: "آخر تحديث: ٣٠ حزيران ٢٠٢٦",
    sections: [
      {
        num: "٠١",
        heading: "الموافقة على الشروط",
        body: [
          "تُحدّد شروط الخدمة هذه القواعد المنظِّمة لاستخدامك موقع وادي السحاب وخدماتنا. باستخدامك للموقع أو التعاقد معنا، فإنك توافق على هذه الشروط بالكامل. إن لم توافق عليها، فنرجو عدم استخدام الموقع أو خدماتنا.",
          "وادي السحاب وكالةُ أتمتةٍ وخدماتٍ رقمية مسجّلة بالسجل التجاري رقم ١٠١٠٦٣٧٨٤٥.",
        ],
      },
      {
        num: "٠٢",
        heading: "خدماتنا",
        body: [
          "نقدّم خدمات تصميم المواقع، وتحسين محركات البحث، وصناعة المحتوى، وإدارة السوشيال ميديا، وتصميم تطبيقات الجوال، والهوية التجارية، والمتاجر الإلكترونية، والتسويق الإلكتروني.",
          "يُتّفق على نطاق كل خدمة ومخرجاتها كتابةً قبل بدء العمل، عبر عرض سعرٍ أو اتفاقية.",
        ],
      },
      {
        num: "٠٣",
        heading: "الباقات والتسعير",
        body: [
          "نوفّر باقاتٍ شهرية وخدماتٍ مخصّصة. الأسعار المعروضة بالريال السعودي وقد تتغيّر، لكن أي تغيير لا يسري على اشتراكٍ قائمٍ إلا بإشعارٍ مسبق.",
        ],
      },
      {
        num: "٠٤",
        heading: "الدفع",
        body: [
          "تُسدَّد الرسوم الشهرية مقدّمًا في بداية كل دورة، ويبدأ العمل بعد تأكيد الدفع الأول.",
          "التأخّر في السداد قد يؤدي إلى إيقاف الخدمة مؤقتًا حتى تسوية المستحقّات.",
        ],
      },
      {
        num: "٠٥",
        heading: "مسؤوليات العميل",
        body: [
          "تزويدنا بالمعلومات والمحتوى والصلاحيات اللازمة لتنفيذ الخدمة في الوقت المناسب.",
          "مراجعة المخرجات وتقديم ملاحظاتك ضمن المدّة المتّفق عليها؛ فالتأخّر في الموافقة قد يؤخّر التسليم.",
          "ضمان أنّ ما تزوّدنا به من محتوى أو علاماتٍ تجارية لا ينتهك حقوق أي طرفٍ آخر.",
        ],
      },
      {
        num: "٠٦",
        heading: "الملكية الفكرية",
        body: [
          "بعد سداد المستحقّات كاملةً، تؤول إليك ملكية المخرجات النهائية التي أنشأناها لك.",
          "نحتفظ بحقّ عرض الأعمال المنجَزة ضمن معرض أعمالنا وموادّنا التسويقية، ما لم تطلب خلاف ذلك كتابةً.",
          "تبقى الأدوات والأطر والمعرفة العامة التي نستخدمها في عملنا ملكًا لنا.",
        ],
      },
      {
        num: "٠٧",
        heading: "المراجعات والاعتماد",
        body: [
          "يشمل كل عملٍ عددًا متّفقًا عليه من جولات المراجعة. الطلبات الإضافية خارج النطاق المتّفق عليه قد تترتّب عليها رسومٌ إضافية.",
        ],
      },
      {
        num: "٠٨",
        heading: "السرّية",
        body: [
          "نتعامل مع معلوماتك وبيانات أعمالك بسرّيةٍ تامّة، ولا نُفصح عنها لأي طرفٍ خارج نطاق تنفيذ الخدمة.",
        ],
      },
      {
        num: "٠٩",
        heading: "الضمانات وإخلاء المسؤولية",
        body: [
          "نلتزم بتقديم عملٍ بمعيار جودةٍ عالٍ نضع اسمنا عليه. ومع ذلك، لا نضمن نتائج أعمالٍ محدّدة مثل ترتيبٍ معيّن في محركات البحث أو حجم مبيعاتٍ بعينه، لأنها تعتمد على عوامل خارجة عن سيطرتنا.",
          "تُقدَّم الخدمات «كما هي» دون ضماناتٍ ضمنيةٍ تتجاوز ما نصّت عليه هذه الشروط.",
        ],
      },
      {
        num: "١٠",
        heading: "حدود المسؤولية",
        body: [
          "إلى الحد الذي يجيزه النظام، لا تتجاوز مسؤوليتنا الإجمالية تجاهك قيمة المبالغ التي دفعتها لنا خلال الأشهر الثلاثة السابقة للحدث المسبّب للمطالبة.",
          "لا نتحمّل مسؤولية أي أضرارٍ غير مباشرةٍ أو تبعية.",
        ],
      },
      {
        num: "١١",
        heading: "منصّات الأطراف الثالثة",
        body: [
          "قد تعتمد بعض خدماتنا على منصّاتٍ خارجية (مثل Google وMeta ومزوّدي الاستضافة). نحن لا نتحكّم في هذه المنصّات ولا نتحمّل مسؤولية تغييراتٍ في سياساتها أو أسعارها أو توافرها.",
        ],
      },
      {
        num: "١٢",
        heading: "الإنهاء",
        body: [
          "يحقّ لأيٍّ من الطرفين إنهاء التعاون بإشعار. عند الإنهاء، نُسلّمك ما أُنجز ونزيل صلاحيات وصولنا إلى أنظمتك.",
        ],
      },
      {
        num: "١٣",
        heading: "القانون الواجب التطبيق",
        body: [
          "تخضع هذه الشروط لأنظمة المملكة العربية السعودية، وتُحلّ أي نزاعاتٍ تنشأ عنها وفقًا لها.",
        ],
      },
      {
        num: "١٤",
        heading: "التعديلات على الشروط",
        body: [
          "قد نُحدّث هذه الشروط من وقتٍ لآخر. تُنشر التغييرات على هذه الصفحة مع تحديث تاريخ «آخر تحديث» أعلاه، واستمرارك في استخدام خدماتنا يعني موافقتك على النسخة المُحدّثة.",
        ],
      },
      {
        num: "١٥",
        heading: "تواصل معنا",
        body: [
          "لأي استفسارٍ حول هذه الشروط، تواصل معنا عبر البريد contact@wady.cloud أو عبر واتساب الأعمال.",
        ],
      },
    ],
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
          { label: "سياسة الخصوصية", href: "/privacy" },
          { label: "شروط الخدمة", href: "/terms" },
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
    displayA: "Your next hire",
    displayB: "isn't a person.",
    displayC: "It's a system.",
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
    pricingTitle: "SEO, content, and social media — the combo our clients never book apart.",
    pricingLede:
      "We bundled the services our clients always choose together into ready-made packages at a better price. No long contracts — cancel anytime.",
    pricing: {
      basic: {
        badge: "Content + Social",
        name: "Basic",
        price: "1,500",
        per: "SAR / month",
        features: [
          "Monthly content generation in your brand voice",
          "One social media account management",
          "A monthly report with results and numbers",
        ],
        cta: "Get started",
      },
      professional: {
        badge: "🔥 4 services in one package",
        name: "Professional",
        price: "3,000",
        per: "SAR / month",
        features: [
          "Website management + search engine optimization",
          "Content creation and automatic posting to two accounts",
          "Social media management with a weekly calendar",
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
          "Everything in Professional + multiple connected systems",
          "Integration with your internal tools (CRM, ERP, etc.)",
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
      title: "Quality is the guarantee.",
      body:
        "We don't ship work we're not proud of. Every detail is crafted to a standard we'd put our name on — because we do. If something concerns you, it concerns us, and we address it until it's right.",
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
  privacy: {
    eyebrow: "06 — Privacy",
    title: "Privacy policy.",
    lede:
      "We respect your privacy and handle your data with the same care we put into our work. This page explains what we actually collect, why, and how we protect it.",
    updated: "Last updated: June 30, 2026",
    sections: [
      {
        num: "01",
        heading: "Who we are",
        body: [
          "Cloud Valley is an automation and digital services agency, registered under commercial registration number 1010637845. We provide web design, search engine optimization, content production, social media management, mobile app design, brand identity, e-commerce, and electronic marketing.",
          "This policy explains how we handle your personal data in line with Saudi Arabia's Personal Data Protection Law (PDPL). By using our website or contacting us, you agree to the practices described here.",
        ],
      },
      {
        num: "02",
        heading: "Information we collect",
        body: [
          "Information you provide through our contact form: first name, last name, email, mobile number, company name, city, and your project details.",
          "Your email address when you subscribe to our monthly letter.",
          "Information collected automatically as you browse: IP address, browser and device type, and pages visited — gathered through cookies and analytics tools.",
        ],
      },
      {
        num: "03",
        heading: "How we use your information",
        body: [
          "To respond to your inquiries, prepare quotes, and deliver the services you request.",
          "To communicate with you about your project via email or Business WhatsApp.",
          "To send our monthly letter if you subscribed — you can unsubscribe at any time.",
          "To improve our website and understand how visitors use it.",
        ],
      },
      {
        num: "04",
        heading: "Client data while delivering services",
        body: [
          "When we deliver a service such as social media management, ad campaigns, or running your website or store, you may grant us access to your accounts, platforms, or content.",
          "We use that access solely to deliver the agreed service, keep your data confidential, and never share it outside the scope of the work.",
          "Ownership of those accounts and data remains entirely yours. We hand them back or remove our access when the engagement ends or whenever you ask.",
        ],
      },
      {
        num: "05",
        heading: "Cookies and analytics",
        body: [
          "We use cookies and analytics tools to run the site, remember your preferences, and measure performance.",
          "You can set your browser to refuse cookies, but some parts of the site may not function fully if you do.",
        ],
      },
      {
        num: "06",
        heading: "Sharing and disclosure",
        body: [
          "We do not sell or rent your personal data to anyone.",
          "We may share limited data with trusted service providers we rely on to run our business — such as hosting, analytics, advertising platforms (e.g. Google and Meta), and email services — limited to what they need to perform their work.",
          "We may disclose information where required by law, or to protect our rights.",
        ],
      },
      {
        num: "07",
        heading: "Data retention",
        body: [
          "We keep your information for as long as necessary to deliver our services, fulfil the purposes described in this policy, or as required by law.",
          "When it is no longer needed, we securely delete or anonymize your data.",
        ],
      },
      {
        num: "08",
        heading: "Data security",
        body: [
          "We apply appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.",
          "However, no method of electronic transmission or storage is one hundred percent secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        num: "09",
        heading: "Your rights",
        body: [
          "You have the right to access, correct, or request deletion of your personal data.",
          "You have the right to object to the processing of your data or to withdraw your consent at any time.",
          "To exercise any of these rights, contact us using the details at the end of this page.",
        ],
      },
      {
        num: "10",
        heading: "Changes to this policy",
        body: [
          "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated “Last updated” date above.",
          "Your continued use of the site after changes are posted means you accept the updated policy.",
        ],
      },
      {
        num: "11",
        heading: "Contact us",
        body: [
          "If you have any questions about this privacy policy or your data, contact us at contact@wady.cloud or through Business WhatsApp.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "07 — Terms",
    title: "Terms of service.",
    lede:
      "These terms set the rules that govern your use of our website and services. Please read them carefully before engaging us.",
    updated: "Last updated: June 30, 2026",
    sections: [
      {
        num: "01",
        heading: "Acceptance of terms",
        body: [
          "These terms of service set the rules that govern your use of the Cloud Valley website and our services. By using the site or engaging us, you agree to these terms in full. If you do not agree, please do not use the site or our services.",
          "Cloud Valley is an automation and digital services agency, registered under commercial registration number 1010637845.",
        ],
      },
      {
        num: "02",
        heading: "Our services",
        body: [
          "We provide web design, search engine optimization, content production, social media management, mobile app design, brand identity, e-commerce, and electronic marketing.",
          "The scope and deliverables of each service are agreed in writing — through a quote or agreement — before work begins.",
        ],
      },
      {
        num: "03",
        heading: "Packages and pricing",
        body: [
          "We offer monthly packages and custom services. Listed prices are in Saudi Riyals (SAR) and may change, but no change applies to an active subscription without prior notice.",
        ],
      },
      {
        num: "04",
        heading: "Payment",
        body: [
          "Monthly fees are paid in advance at the start of each cycle, and work begins after the first payment is confirmed.",
          "Late payment may result in a temporary suspension of service until outstanding amounts are settled.",
        ],
      },
      {
        num: "05",
        heading: "Client responsibilities",
        body: [
          "Providing the information, content, and access we need to deliver the service in a timely manner.",
          "Reviewing deliverables and giving feedback within the agreed timeframe — delays in approval may delay delivery.",
          "Ensuring that any content or trademarks you provide do not infringe the rights of others.",
        ],
      },
      {
        num: "06",
        heading: "Intellectual property and ownership",
        body: [
          "Once fees are paid in full, ownership of the final deliverables we created for you transfers to you.",
          "We retain the right to showcase completed work in our portfolio and marketing materials, unless you request otherwise in writing.",
          "The tools, frameworks, and general know-how we use in our work remain ours.",
        ],
      },
      {
        num: "07",
        heading: "Revisions and approvals",
        body: [
          "Each engagement includes an agreed number of revision rounds. Additional requests outside the agreed scope may incur extra fees.",
        ],
      },
      {
        num: "08",
        heading: "Confidentiality",
        body: [
          "We treat your information and business data as strictly confidential and do not disclose it to anyone outside the scope of delivering the service.",
        ],
      },
      {
        num: "09",
        heading: "Warranties and disclaimer",
        body: [
          "We commit to delivering work to a high quality standard we'd put our name on. However, we do not guarantee specific business outcomes — such as a particular search ranking or sales volume — as these depend on factors beyond our control.",
          "Services are provided “as is”, without implied warranties beyond what these terms state.",
        ],
      },
      {
        num: "10",
        heading: "Limitation of liability",
        body: [
          "To the extent permitted by law, our total liability to you will not exceed the amounts you paid us in the three months preceding the event giving rise to the claim.",
          "We are not liable for any indirect or consequential damages.",
        ],
      },
      {
        num: "11",
        heading: "Third-party platforms",
        body: [
          "Some of our services rely on external platforms (such as Google, Meta, and hosting providers). We do not control these platforms and are not responsible for changes to their policies, pricing, or availability.",
        ],
      },
      {
        num: "12",
        heading: "Termination",
        body: [
          "Either party may end the engagement with notice. On termination, we hand over completed work and remove our access to your systems.",
        ],
      },
      {
        num: "13",
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of the Kingdom of Saudi Arabia, and any disputes arising from them are resolved accordingly.",
        ],
      },
      {
        num: "14",
        heading: "Changes to these terms",
        body: [
          "We may update these terms from time to time. Changes are posted on this page with an updated “Last updated” date above, and your continued use of our services means you accept the updated version.",
        ],
      },
      {
        num: "15",
        heading: "Contact us",
        body: [
          "For any questions about these terms, contact us at contact@wady.cloud or through Business WhatsApp.",
        ],
      },
    ],
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
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
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
