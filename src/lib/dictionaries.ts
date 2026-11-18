import type { Locale } from "./i18n";

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  /**
   * Titles shown in Google and the browser tab (owner decision D11): the
   * words people search for first. On-page headlines stay as written.
   */
  seoTitles: {
    services: string;
    blog: string;
    about: string;
    trust: string;
    contact: string;
    /** By service slug. */
    service: Record<string, string>;
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
    pricing: string;
    /** Search title of the pricing page. */
    pricingTitle: string;
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
    /** Working days shown with the contact details (owner decision D4). */
    hours: string;
    copyright: string;
    colophonLeft: string;
    colophonRight: string;
  };
};

const ar: Dict = {
  seoTitles: {
    services: "خدمات تقنية ورقمية في السعودية",
    blog: "المدونة: المواقع والسيو والسوشيال ميديا والتسويق",
    about: "من نحن",
    trust: "لماذا تختارنا",
    contact: "تواصل معنا",
    service: {
      "website-design": "تصميم المواقع في السعودية",
      "search-engine-optimization": "تحسين محركات البحث (سيو) في السعودية",
      "content-production": "صناعة المحتوى بالعربية والإنجليزية",
      "social-media-management": "إدارة السوشيال ميديا في السعودية",
      "mobile-app-design": "تصميم تطبيقات الجوال في السعودية",
      "brand-identity": "تصميم الهوية التجارية في السعودية",
      "ecommerce-design": "تصميم المتاجر الإلكترونية في السعودية",
      "digital-marketing": "التسويق الإلكتروني في السعودية",
    },
  },
  meta: {
    title: "حلول تقنية وتصميم مواقع وتسويق رقمي في السعودية | وادي السحاب",
    description:
      "حلول تقنية للأعمال في السعودية: تصميم مواقع وتطبيقات ومتاجر إلكترونية، سيو، صناعة محتوى، إدارة سوشيال ميديا، وتسويق رقمي.",
  },
  brand: {
    name: "وادي السحاب",
    wordmark: "Cloud Valley | وادي السحاب",
    tagline: "حلول تقنية وتصميم مواقع وتسويق رقمي للأعمال في السعودية.",
  },
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    blog: "المدوّنة",
    about: "من نحن",
    trust: "لماذا نحن",
    contact: "تواصل",
    pricing: "الأسعار",
    pricingTitle: "الباقات والأسعار",
    switchLang: "EN",
    cta: "تواصل على واتساب",
  },
  home: {
    eyebrow: "حلول تقنية · السعودية",
    displayA: "مواقع.",
    displayB: "أنظمة.",
    displayC: "نمو.",
    lede:
      "وادي السحاب شركة حلول تقنية في السعودية. نصمّم المواقع والتطبيقات والمتاجر الإلكترونية، ونتولّى السيو والمحتوى والتسويق الرقمي، ونبني الأنظمة التي تربطها معًا، ليعمل عملك على منظومةٍ واحدةٍ متقنة.",
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
    manifestoNum: "٠١ · البيان",
    manifestoTitle: "التقنية يجب أن تُخفّف العمل، لا أن تُثقله.",
    manifestoBody: [
      "كثيرٌ من الشركات تعمل بموقعٍ لا يُحدَّث، وحساباتٍ تُدار يدويًا، وأدواتٍ لا يتحدث بعضها مع بعض. كلُّ قطعةٍ منها تستهلك وقتًا، ولا تجلب عملاءً وحدها.",
      "نحن نبني المنظومة كاملةً ونديرها: الموقع، والظهور في البحث، والمحتوى، والأنظمة التي خلفها، مع الأتمتة والذكاء الاصطناعي حيث يوفّران وقتًا فعلًا. نُسلّم العمل جاهزًا، موثّقًا، وملكًا لك.",
    ],
    servicesNum: "٠٢ · الخدمات",
    servicesTitle: "ثمانِ خدمات، نظامٌ واحد.",
    servicesLede:
      "كلُّ خدمةٍ مصمَّمةٌ لتعمل وحدها أو ضمن منظومةٍ كاملة. نُوصي بالبدء بواحدةٍ ثم التوسّع.",
    pricingNum: "الباقات",
    pricingTitle: "سيو، محتوى، وسوشيال ميديا: ثلاث خدماتٍ تعمل أفضل معًا.",
    pricingLede:
      "جمعنا الخدمات التي تعمل معًا في باقاتٍ جاهزة بسعرٍ أفضل. بلا عقودٍ طويلة. ألغِ متى شئت.",
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
        badge: "٤ خدمات في باقة واحدة",
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
        per: "",
        features: [
          "كلُّ ما في الاحترافية + أنظمةٌ متعدّدة متصلة",
          "تكاملٌ مع أنظمتك الداخلية (CRM، ERP، إلخ)",
          "مديرُ حسابٍ مخصّص",
        ],
        cta: "تحدّث معنا",
      },
    },
    ctaNum: "٠٣ · التواصل",
    ctaTitle: "لنتحدّث",
    ctaBody:
      "أرسل لنا تفاصيل مشروعك ونعود إليك خلال ٢٤ ساعة.",
    ctaWhatsApp: "تواصل على واتساب",
    ctaEmail: "راسلنا بالبريد",
  },
  services: {
    eyebrow: "٠٢ · الخدمات",
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
    eyebrow: "٠٣ · المجلة",
    title: "مقالاتٌ عن المواقع، والبحث، والسوشيال ميديا، والتسويق.",
    lede:
      "نكتبُ لمن يديرُ أعمالاً حقيقية، لا لمن يلاحقُ الضجيج. مقالاتٌ قصيرة، عملية، ومبنيةٌ على تجارب.",
    backLabel: "← العودة للمدوّنة",
  },
  about: {
    eyebrow: "٠٤ · من نحن",
    title: "وادي السحاب بدأت سؤالاً، ثم صارت شركة.",
    lede:
      "بدأ ثلاثةٌ منّا من مهندسين وكُتّاب بسؤالٍ واحد: لماذا يُرهِقُ عملٌ بسيطٌ فرقًا بأكملها؟ الجواب صار شركة.",
    sections: [
      {
        num: "٠١",
        heading: "البداية",
        body:
          "في ٢٠٢٤ كنّا نعمل معًا في شركةِ تقنيةٍ كبرى. كنّا نرى شركاتٍ عائليةً عربيةً تتعامل مع مواقع وحساباتٍ وأدواتٍ متفرّقة، وتدفع كثيرًا لأعمالٍ تُنجزها التقنية المناسبة بشكلٍ أفضل. فأنشأنا وادي السحاب.",
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
    ],
    team: {
      title: "الفريق",
      body:
        "مهندسون وكُتّاب ومصمّمون يعملون معًا على كل مشروع، من الفكرة حتى التسليم.",
    },
  },
  trust: {
    eyebrow: "٠٥ · لماذا نحن",
    title: "الثقةُ تُبنى بالتفاصيل، لا بالشعارات.",
    lede:
      "أربعةُ مبادئ نلتزمُ بها مع كل عميل، مكتوبةٌ هنا قبل أن نُطلَبَ بها.",
    pillars: [
      {
        num: "٠١",
        title: "تسعيرٌ صريح",
        body:
          "لا رسومٌ خفيّة، ولا ساعاتُ عملٍ مفاجئة. ما تراه في عرض السعر هو ما تدفعه.",
      },
      {
        num: "٠٢",
        title: "ملكيّتك الكاملة",
        body:
          "كلُّ شيءٍ نبنيه يعود لك. الكودُ، البياناتُ، الحسابات. لو أنهينا غدًا، يبقى النظامُ يعمل.",
      },
      {
        num: "٠٣",
        title: "تقاريرٌ شهرية",
        body:
          "كلَّ شهر، يصلُك تقريرٌ واحدٌ واضح: ما أُنجزَ، ما الخطوةُ التالية، أين المشكلات.",
      },
      {
        num: "٠٤",
        title: "ردٌّ من إنسانٍ حقيقي",
        body:
          "من الاثنين إلى السبت، يردُّ عليك شخصٌ من الفريق يعرف مشروعك، لا ردٌّ آلي.",
      },
    ],
    guarantee: {
      title: "الجودةُ هي الضمان",
      body:
        "لا نُسلّم عملًا لا نفخر به. كلُّ تفصيلةٍ تُبنى بمعيارٍ نضع اسمنا عليه، لأنّنا فعلًا نفعل. إذا أقلقك شيء، فهو يُقلقنا أيضًا، ونعالجه حتى يصبح صحيحًا.",
    },
  },
  contact: {
    eyebrow: "٠٥ · التواصل",
    title: "تواصل معنا",
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
    eyebrow: "٠٦ · الخصوصية",
    title: "سياسة الخصوصية",
    lede:
      "تشرح هذه السياسة بلغةٍ واضحة البياناتِ الشخصية التي يجمعها هذا الموقع، ولماذا نستخدمها، ومن يتعامل معها، وما حقوقك تجاهها.",
    updated: "آخر تحديث: ١٨ نوفمبر ٢٠٢٦",
    sections: [
      {
        num: "٠١",
        heading: "من نحن",
        body: [
          "وادي السحاب (Cloud Valley) شركة حلول تقنية وتصميم مواقع وتسويق رقمي، تخدم الشركات في المملكة العربية السعودية، ومسجّلة بالسجل التجاري رقم ١٠١٠٦٣٧٨٤٥.",
          "نحن الجهة المسؤولة عن البيانات الشخصية التي تُجمع عبر هذا الموقع (www.wady.cloud)، ونلتزم في ذلك بنظام حماية البيانات الشخصية في المملكة العربية السعودية.",
          "يمكنك التواصل معنا عبر البريد contact@wady.cloud أو عبر واتساب. أيام عملنا من الاثنين إلى السبت.",
        ],
      },
      {
        num: "٠٢",
        heading: "البيانات التي نجمعها",
        body: [
          "نموذج التواصل: الاسم الأول، واسم العائلة، والبريد الإلكتروني، والشركة، ورقم الجوال، والمدينة، وتفاصيل المشروع التي تكتبها. البريد الإلكتروني وحده إلزامي، وبقية الحقول اختيارية.",
          "الرسائل التي ترسلها إلينا: إذا راسلتنا بالبريد أو عبر واتساب، يصلنا بريدك الإلكتروني أو رقم هاتفك، واسمك كما يظهر في التطبيق، ومحتوى رسالتك.",
          "التحليلات، بموافقتك فقط: إذا ضغطت «موافق» في شريط ملفات تعريف الارتباط، يسجّل Google Analytics طريقة استخدام الموقع، مثل الصفحات التي تزورها، ونوع جهازك ومتصفحك، ومنطقتك التقريبية، وهل ضغطت رابط واتساب أو أرسلت نموذج التواصل. ولا يصله ما تكتبه في النموذج أو في واتساب.",
          "السجلات التقنية: كأي موقعٍ إلكتروني، يسجّل مزوّد الاستضافة تلقائيًا تفاصيل تقنية عن كل زيارة، مثل عنوان IP ونوع المتصفح والصفحة المطلوبة ووقت الطلب، لتشغيل الموقع وحمايته.",
        ],
      },
      {
        num: "٠٣",
        heading: "لماذا نستخدمها وعلى أي أساس",
        body: [
          "للردّ على استفسارك وإعداد عرض السعر ومتابعتك بشأنه. نفعل ذلك لأنك طلبته حين أرسلت النموذج أو الرسالة.",
          "إذا أصبحت عميلًا لدينا: لتنفيذ العمل المتّفق عليه والتواصل معك بشأنه، تنفيذًا للاتفاق بيننا.",
          "لفهم طريقة استخدام الموقع وتحسينه عبر Google Analytics، وذلك بموافقتك فقط، ولك أن تسحبها في أي وقت.",
          "لتشغيل الموقع وحمايته، عبر السجلات التقنية التي يحتفظ بها مزوّد الاستضافة.",
          "للوفاء بالتزاماتنا النظامية، كأن يُلزمنا نظامٌ أو جهةٌ مختصّة بحفظ معلومةٍ أو الإفصاح عنها.",
          "نعالج البيانات الشخصية وفق نظام حماية البيانات الشخصية ولوائحه التنفيذية. لا نبيع بياناتك ولا نؤجّرها، ولا نستخدمها لأغراضٍ إعلانية.",
        ],
      },
      {
        num: "٠٤",
        heading: "من يعالج بياناتك",
        body: [
          "نستعين بعددٍ محدود من مزوّدي الخدمات، ولا يتعامل كلٌّ منهم مع البيانات إلا بقدر ما تتطلّبه خدمته:",
          "Salesforce: يستقبل نموذج التواصل مباشرةً حين تضغط «إرسال»، ويحفظ استفسارك لنتابعه.",
          "Google Analytics (من Google): فقط إذا وافقت على ملفات تعريف الارتباط الخاصة بالتحليلات.",
          "Vercel: يستضيف الموقع ويحتفظ بالسجلات التقنية المذكورة أعلاه.",
          "واتساب (Meta): فقط حين تختار مراسلتنا عبر واتساب، وتخضع تلك المحادثة أيضًا لسياسة الخصوصية الخاصة بواتساب.",
          "مزوّد البريد الإلكتروني لدينا: يتعامل مع الرسائل التي ترسلها إلى contact@wady.cloud.",
          "يخزّن بعض هؤلاء المزوّدين البيانات أو يعالجونها خارج المملكة العربية السعودية، في الولايات المتحدة مثلًا. وحين تنتقل البيانات إلى الخارج، لا ننقل إلا ما تحتاجه الخدمة للأغراض الموضّحة هنا، وبما يتّفق مع أحكام النظام بشأن النقل خارج المملكة.",
          "وقد نُفصح عن معلوماتٍ إذا ألزمنا بذلك نظامٌ أو جهةٌ مختصّة.",
        ],
      },
      {
        num: "٠٥",
        heading: "ملفات تعريف الارتباط وموافقتك",
        body: [
          "لا نضع ملفات تعريف ارتباطٍ خاصة بنا. أما ملفات Google Analytics فلا تُوضع إلا بعد أن تضغط «موافق» في الشريط.",
          "إذا ضغطت «رفض»، لا يُحمَّل Google Analytics ولا يُرسَل شيءٌ إلى Google. ولا نفعّل أبدًا أي تخزينٍ لأغراضٍ إعلانية.",
          "نحفظ اختيارك في التخزين المحلي لمتصفحك باسم cv-consent، حتى لا يسألك الشريط مرةً أخرى. يبقى هذا الاختيار على جهازك ولا يُرسَل إلينا.",
          "لتغيير اختيارك في أي وقت، اضغط «إعدادات ملفات الارتباط» أسفل أي صفحة. ويمكنك أيضًا حذف ملفات تعريف الارتباط وبيانات المواقع من إعدادات متصفحك.",
          "إذا لم يظهر في الموقع شريط ملفات تعريف الارتباط ولا رابط «إعدادات ملفات الارتباط»، فالتحليلات غير مفعّلة.",
          "تُحمَّل الخطوط من موقعنا نفسه، فلا يُرسل تصفّحك أي طلبٍ إلى خدمة Google Fonts.",
          "أزرار المشاركة في المقالات روابط عادية، فلا يُرسَل شيءٌ إلى واتساب أو LinkedIn أو X إلا إذا ضغطت أحدها.",
        ],
      },
      {
        num: "٠٦",
        heading: "مدة الاحتفاظ بالبيانات",
        body: [
          "نحتفظ ببيانات الاستفسار طوال المدة التي نحتاجها للردّ عليه ومتابعته.",
          "إذا أصبحت عميلًا، نحتفظ بالبيانات اللازمة لعلاقة العمل طوال مدتها، ثم بعد انتهائها بالقدر الذي تفرضه الأنظمة السعودية، كحفظ السجلات المحاسبية.",
          "تحتفظ Google ببيانات التحليلات وفق إعدادات الاحتفاظ في Google Analytics، ويحتفظ مزوّد الاستضافة بالسجلات التقنية لمدةٍ محدودة.",
          "حين تنتفي الحاجة إلى البيانات، نحذفها أو نجعلها مجهولة الهوية.",
        ],
      },
      {
        num: "٠٧",
        heading: "كيف نحمي بياناتك",
        body: [
          "يُقدَّم الموقع عبر اتصالٍ مشفّر (HTTPS)، ويُرسَل نموذج التواصل عبر اتصالٍ مشفّر مباشرةً إلى Salesforce.",
          "نتّخذ تدابير تقنية وتنظيمية معقولة لحماية البيانات الشخصية، ونقصر الوصول إليها على من يحتاجها لخدمتك.",
          "لا توجد وسيلة إرسالٍ أو تخزينٍ عبر الإنترنت آمنةٌ تمامًا. وإذا وقع تسرّبٌ يمسّ بياناتك، نتصرّف وفق ما يقتضيه النظام، بما في ذلك إبلاغ الجهة المختصّة وإبلاغك متى لزم ذلك.",
        ],
      },
      {
        num: "٠٨",
        heading: "حقوقك",
        body: [
          "يمنحك نظام حماية البيانات الشخصية الحقوق الآتية:",
          "أن تعرف كيف تُجمع بياناتك وكيف تُستخدم، وهذا ما تشرحه هذه السياسة.",
          "أن تطّلع على بياناتك الشخصية وتطلب نسخةً منها.",
          "أن تطلب تصحيح البيانات غير الدقيقة أو غير المكتملة.",
          "أن تطلب حذف البيانات التي لم نعد نحتاجها، ما لم يُلزمنا نظامٌ بالاحتفاظ بها.",
          "أن تسحب موافقتك في أي وقت. وبالنسبة للتحليلات، استخدم «إعدادات ملفات الارتباط» أسفل الصفحة.",
          "لممارسة أيٍّ من هذه الحقوق، راسلنا على contact@wady.cloud. قد نحتاج إلى التحقّق من هويتك أولًا، ونردّ عليك خلال المدة التي يحدّدها النظام.",
          "وإن لم يُرضِك ردّنا، يحقّ لك تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).",
        ],
      },
      {
        num: "٠٩",
        heading: "الأطفال",
        body: [
          "هذا الموقع وخدماتنا موجّهةٌ إلى الشركات والبالغين، ولا نجمع عن علمٍ بياناتٍ شخصية من الأطفال.",
          "إذا كنت تعتقد أن طفلًا أرسل إلينا بياناتٍ شخصية، تواصل معنا وسنحذفها.",
        ],
      },
      {
        num: "١٠",
        heading: "التعديلات على هذه السياسة",
        body: [
          "قد نحدّث هذه السياسة حين يتغيّر موقعنا أو الخدمات التي نستعين بها. تجد النسخة السارية دائمًا على هذه الصفحة، مع تاريخ آخر تحديثٍ في أعلاها.",
          "وإذا أجرينا تغييرًا جوهريًا، كاستخدام بياناتك لغرضٍ جديد، فسنطلب موافقتك من جديد متى اشترط النظام ذلك.",
        ],
      },
      {
        num: "١١",
        heading: "تواصل معنا",
        body: [
          "لأي سؤالٍ أو طلبٍ يخصّ بياناتك الشخصية، راسلنا على contact@wady.cloud أو عبر واتساب. يردّ عليك أحد أعضاء فريقنا من الاثنين إلى السبت.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "٠٧ · الشروط",
    title: "شروط الخدمة",
    lede:
      "تنظّم هذه الشروط استخدامك لهذا الموقع والقواعد الأساسية للتعامل معنا، أما تفاصيل مشروعك فيحدّدها عرض السعر أو الاتفاقية المكتوبة.",
    updated: "آخر تحديث: ١٨ نوفمبر ٢٠٢٦",
    sections: [
      {
        num: "٠١",
        heading: "من نحن",
        body: [
          "هذه الشروط بينك وبين وادي السحاب (Cloud Valley)، وهي شركة حلول تقنية وتصميم مواقع وتسويق رقمي تخدم الشركات في المملكة العربية السعودية، ومسجّلة بالسجل التجاري رقم ١٠١٠٦٣٧٨٤٥. ويُقصد بـ«نحن» في هذه الشروط وادي السحاب.",
          "باستخدامك هذا الموقع فإنك توافق على هذه الشروط، فإن لم توافق عليها فنرجو ألّا تستخدمه.",
        ],
      },
      {
        num: "٠٢",
        heading: "استخدام الموقع",
        body: [
          "يمكنك تصفّح الموقع، وقراءة صفحاته ومشاركتها، والتواصل معنا من خلاله.",
          "نرجو ألّا تسيء استخدامه: فلا تحاول تعطيله أو الوصول إليه دون إذن، ولا ترسل عبر نموذج التواصل رسائل مزعجة أو محتوى ضارًّا، ولا تُدخل بيانات شخصٍ آخر دون إذنه.",
          "قد نغيّر أجزاءً من الموقع أو نوقفها أو نزيلها في أي وقت.",
        ],
      },
      {
        num: "٠٣",
        heading: "معلوماتٌ عامة لا استشارة",
        body: [
          "المقالات ووصف الخدمات وسائر محتوى الموقع معلوماتٌ عامة، وليست استشارةً مهنية لحالتك بعينها.",
          "نحرص على دقّة المحتوى وحداثته، لكننا لا نضمن أن يكون كاملًا أو محدّثًا في كل وقت، فتواصل معنا قبل أن تبني عليه قرارًا.",
          "ولا نضمن نتائج تجارية محدّدة، كترتيبٍ معيّن في محركات البحث أو حجم مبيعاتٍ بعينه، لأنها تعتمد على عوامل خارجة عن سيطرتنا.",
        ],
      },
      {
        num: "٠٤",
        heading: "عروض الأسعار والاتفاقيات",
        body: [
          "إرسال نموذج التواصل أو رسالةٍ إلينا لا يُنشئ عقدًا، بل هو طلبٌ منك لنعود إليك.",
          "قبل بدء أي مشروع، نتّفق كتابةً على نطاقه ومخرجاته وسعره ومدّته، عبر عرض سعرٍ أو اتفاقية.",
          "يحكم عرضُ السعر أو الاتفاقيةُ المكتوبة ذلك المشروع، وإذا تعارض أيٌّ منهما مع هذه الشروط، يُقدَّم العرض أو الاتفاقية في ذلك المشروع.",
          "السعر المكتوب في عرضك هو ما تدفعه، دون رسومٍ خفيّة. وأي عملٍ خارج النطاق المتّفق عليه نسعّره لك على حدة قبل أن نبدأه.",
        ],
      },
      {
        num: "٠٥",
        heading: "الباقات الشهرية والدفع",
        body: [
          "باقاتنا اشتراكاتٌ شهرية تُدفع شهريًا. الأسعار المعروضة في الموقع بالريال السعودي وقد تتغيّر مع الوقت، والسعر الذي يسري عليك هو المذكور في عرض السعر أو الاتفاقية.",
          "بلا عقودٍ طويلة: يمكنك إلغاء الباقة الشهرية متى شئت، وفق شروط باقتك.",
          "يوقف الإلغاءُ الفواتيرَ القادمة، وتبقى رسوم العمل الذي سُلِّم مستحقّة.",
          "تُسعَّر الباقات المخصّصة والمشاريع المستقلة في عرض سعرٍ خاص بها.",
          "إذا تأخّر السداد، يحقّ لنا إيقاف الخدمة مؤقتًا حتى تسوية المستحقّات.",
        ],
      },
      {
        num: "٠٦",
        heading: "التزاماتك",
        body: [
          "لكي يسير العمل كما ينبغي، نطلب منك:",
          "أن تزوّدنا في الوقت المناسب بالمعلومات والمحتوى والصلاحيات اللازمة، علمًا بأن التأخير من أي طرفٍ قد يؤخّر مواعيد التسليم.",
          "أن تتأكّد من أن المحتوى والشعارات والمواد التي تقدّمها لنا مملوكةٌ لك أو مسموحٌ لك باستخدامها، ولا تنتهك حقوق أحد.",
          "أن تراجع عملنا وترسل ملاحظاتك خلال المدة المتّفق عليها في عرض السعر.",
        ],
      },
      {
        num: "٠٧",
        heading: "ملكية ما نبنيه لك",
        body: [
          "بعد سداد مستحقّاته، يصبح كل ما نبنيه لك ملكًا لك: الكود، والمحتوى، والتصاميم، والبيانات، والحسابات. فإذا توقّف تعاوننا، يبقى نظامك يعمل.",
          "حين تمنحنا صلاحية الوصول إلى حساباتك أو منصّاتك لتنفيذ العمل، لا نستخدمها إلا لذلك العمل، ونحافظ على سرّية معلوماتك.",
          "تبقى الأدوات والمنصّات والمواد المرخّصة من أطرافٍ أخرى التي نستخدمها (كالاستضافة والإضافات والخطوط والصور) خاضعةً لشروط مزوّديها.",
          "قد نعرض الأعمال المنجزة ضمن معرض أعمالنا، ما لم تطلب منا خلاف ذلك.",
        ],
      },
      {
        num: "٠٨",
        heading: "محتوانا وعلامتنا التجارية",
        body: [
          "محتوى هذا الموقع، بما فيه النصوص والتصميم والرسومات واسما وادي السحاب وCloud Valley وشعارنا، ملكٌ لنا.",
          "يمكنك مشاركة روابط صفحاتنا واقتباس أجزاءٍ قصيرة منها مع ذكر المصدر. ونرجو ألّا تنسخ محتوانا أو علامتنا أو تعيد استخدامهما لأغراضٍ تجارية دون إذنٍ مكتوبٍ منا.",
        ],
      },
      {
        num: "٠٩",
        heading: "روابط وخدمات الأطراف الأخرى",
        body: [
          "يحتوي الموقع على روابط لخدماتٍ لا نتحكّم بها، مثل واتساب وLinkedIn وX، كما يُرسَل نموذج التواصل إلى Salesforce. وتسري شروط هذه الخدمات وسياسات خصوصيتها حين تستخدمها.",
          "تعتمد بعض خدماتنا على منصّاتٍ خارجية مثل Google وMeta ومزوّدي الاستضافة، ولسنا مسؤولين عن التغييرات التي تجريها هذه المنصّات على قواعدها أو أسعارها أو توافرها.",
        ],
      },
      {
        num: "١٠",
        heading: "حدود المسؤولية",
        body: [
          "ننفّذ عملنا بعنايةٍ ومهارةٍ معقولتين، وإذا لم يكن ما سلّمناه صحيحًا نعمل على إصلاحه.",
          "يُقدَّم الموقع كما هو، ولا نتحمّل مسؤولية الخسائر الناتجة عن استخدامه أو عن الاعتماد على معلوماته العامة.",
          "وفي الحدود التي تجيزها الأنظمة السعودية، لا نتحمّل مسؤولية الخسائر غير المباشرة، كفوات الربح أو الفرص، ولا تتجاوز مسؤوليتنا الإجمالية عن أي خدمةٍ الرسومَ التي دفعتها لنا مقابلها خلال الأشهر الثلاثة السابقة لنشوء المطالبة.",
          "ولا يحدّ شيءٌ في هذه الشروط من مسؤوليةٍ لا تجيز الأنظمة السعودية تقييدها.",
        ],
      },
      {
        num: "١١",
        heading: "التعديلات على الشروط",
        body: [
          "قد نحدّث هذه الشروط من وقتٍ لآخر. تجد النسخة السارية دائمًا على هذه الصفحة، مع تاريخ آخر تحديثٍ في أعلاها.",
          "تسري التعديلات من تاريخ نشرها، ولا تغيّر عرض سعرٍ أو اتفاقيةً سبق أن وافقت عليها.",
        ],
      },
      {
        num: "١٢",
        heading: "القانون الواجب التطبيق",
        body: [
          "تخضع هذه الشروط لأنظمة المملكة العربية السعودية.",
          "نسعى أولًا إلى حلّ أي خلافٍ مباشرةً وبحسن نية، فإن تعذّر ذلك، يُحال إلى المحاكم المختصّة في المملكة العربية السعودية.",
        ],
      },
      {
        num: "١٣",
        heading: "تواصل معنا",
        body: [
          "لأي سؤالٍ حول هذه الشروط، راسلنا على contact@wady.cloud أو عبر واتساب. يردّ عليك أحد أعضاء فريقنا من الاثنين إلى السبت.",
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
          { label: "الأسعار", href: "/pricing" },
          { label: "المدوّنة", href: "/blog" },
          { label: "من نحن", href: "/about" },
          { label: "لماذا نحن", href: "/trust" },
          { label: "تواصل", href: "/contact" },
          { label: "الأسئلة الشائعة", href: "/faq" },
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
    hours: "أيام العمل: من الاثنين إلى السبت",
    copyright: "© ٢٠٢٦ وادي السحاب. جميع الحقوق محفوظة.",
    colophonLeft: "",
    colophonRight: "",
  },
};

const en: Dict = {
  seoTitles: {
    services: "IT and digital services in Saudi Arabia",
    blog: "Blog: websites, SEO, social media and marketing",
    about: "About us",
    trust: "Why choose us",
    contact: "Contact us",
    service: {
      "website-design": "Website design in Saudi Arabia",
      "search-engine-optimization": "SEO services in Saudi Arabia",
      "content-production": "Content production in Arabic and English",
      "social-media-management": "Social media management in Saudi Arabia",
      "mobile-app-design": "Mobile app design in Saudi Arabia",
      "brand-identity": "Brand identity design in Saudi Arabia",
      "ecommerce-design": "E-commerce store design in Saudi Arabia",
      "digital-marketing": "Digital marketing in Saudi Arabia",
    },
  },
  meta: {
    title: "IT solutions, websites and digital marketing in Saudi Arabia | Cloud Valley",
    description:
      "IT solutions for businesses in Saudi Arabia: websites, apps and online stores, SEO, content, social media and digital marketing.",
  },
  brand: {
    name: "Cloud Valley",
    wordmark: "Cloud Valley | وادي السحاب",
    tagline: "IT solutions, websites and digital marketing for businesses in Saudi Arabia.",
  },
  nav: {
    home: "Home",
    services: "Services",
    blog: "Blog",
    about: "About",
    trust: "Why us",
    contact: "Contact",
    pricing: "Pricing",
    pricingTitle: "Packages and prices",
    switchLang: "ع",
    cta: "Start on WhatsApp",
  },
  home: {
    eyebrow: "IT solutions · Saudi Arabia",
    displayA: "Websites.",
    displayB: "Systems.",
    displayC: "Growth.",
    lede:
      "Cloud Valley is an IT solutions company in Saudi Arabia. We design websites, apps and online stores, run SEO, content and digital marketing, and build the systems that connect them, so your business runs on one well-built setup.",
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
      "Digital marketing",
    ],
    manifestoNum: "01 · Manifesto",
    manifestoTitle: "Technology should make work lighter, not heavier.",
    manifestoBody: [
      "Many businesses run on a website nobody updates, social accounts handled by hand, and tools that don't talk to each other. Each piece takes time, and none of it brings in customers on its own.",
      "We build and run the whole setup: the website, the search presence, the content and the systems behind them, with automation and AI where they genuinely save time. We deliver finished work: documented, handed over, and yours.",
    ],
    servicesNum: "02 · Services",
    servicesTitle: "Eight services. One system.",
    servicesLede:
      "Each service works alone, or as part of a full stack. We usually recommend starting with one and expanding.",
    pricingNum: "Packages",
    pricingTitle: "SEO, content, and social media: three services that work best together.",
    pricingLede:
      "We bundled the services that work together into ready-made packages at a better price. No long contracts. Cancel anytime.",
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
        badge: "4 services in one package",
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
        per: "",
        features: [
          "Everything in Professional + multiple connected systems",
          "Integration with your internal tools (CRM, ERP, etc.)",
          "Dedicated account manager",
        ],
        cta: "Talk to us",
      },
    },
    ctaNum: "03 · Contact",
    ctaTitle: "Let's talk",
    ctaBody:
      "Send us your project details and we'll get back to you within 24 hours.",
    ctaWhatsApp: "Start on WhatsApp",
    ctaEmail: "Write us an email",
  },
  services: {
    eyebrow: "02 · Services",
    title: "Eight services. One system that works like a full team.",
    lede:
      "We don't sell hours or tools. We deliver outcomes: a live system, monitored, improved monthly.",
    backLabel: "\u2190 Back to services",
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
          "We show your work to people actually searching, in words they use, not translated glossaries.",
        bullets: [
          "Keyword research in local dialects",
          "Technical performance and page speed",
          "Content built around search intent",
          "Clear reports, no jargon",
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
          "Elegant Arabic, not stiff or machine-translated",
          "Unified visual design across channels",
          "Automated publishing and scheduling",
        ],
        outcome: "Content your audience shares, not promoted.",
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
          "Stores built to sell, not just display, with a fast and frictionless buying experience.",
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
        name: "Digital marketing",
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
    eyebrow: "03 · Journal",
    title: "Articles on websites, search, social media and marketing.",
    lede:
      "We write for people running real businesses, not people chasing noise. Short, practical, built on what we saw in the field.",
    backLabel: "\u2190 Back to blog",
  },
  about: {
    eyebrow: "04 · About",
    title: "Cloud Valley started as a question. It became a company.",
    lede:
      "Three of us, engineers and writers, began with a single question: why does simple work exhaust whole teams? The answer turned into a company.",
    sections: [
      {
        num: "01",
        heading: "Beginning",
        body:
          "In 2024 we worked together at a large tech company. We watched Arab family businesses juggle scattered websites, accounts and tools, and pay a lot for work the right technology does better. So we started Cloud Valley.",
      },
      {
        num: "02",
        heading: "Principle",
        body:
          "We believe AI is not a replacement for people. It is a replacement for the dull tasks that drain them. We free up time; we do not replace humans.",
      },
      {
        num: "03",
        heading: "Method",
        body:
          "We don't sell a plan we haven't tried. Every system we ship runs inside Cloud Valley first. No experiments on our clients.",
      },
    ],
    team: {
      title: "The team",
      body:
        "Engineers, writers and designers working together on every project, from the first idea to handover.",
    },
  },
  trust: {
    eyebrow: "05 · Why us",
    title: "Trust is built in the details, not the slogans.",
    lede: "Four commitments, written here before they are asked for.",
    pillars: [
      {
        num: "01",
        title: "Transparent pricing",
        body:
          "No hidden fees, no surprise hours. The number on the quote is the number you pay.",
      },
      {
        num: "02",
        title: "Your full ownership",
        body:
          "Everything we build belongs to you. The code, the data, the accounts. If we ended tomorrow, the system would keep running.",
      },
      {
        num: "03",
        title: "Monthly reports",
        body:
          "Every month, one clear report arrives: what shipped, what's next, where the problems are.",
      },
      {
        num: "04",
        title: "A reply from a real person",
        body:
          "Monday to Saturday, someone from the team who knows your project replies. Not a bot.",
      },
    ],
    guarantee: {
      title: "Quality is the guarantee",
      body:
        "We don't ship work we're not proud of. Every detail is crafted to a standard we'd put our name on, because we do. If something concerns you, it concerns us, and we address it until it's right.",
    },
  },
  contact: {
    eyebrow: "05 · Contact",
    title: "Get in touch",
    lede: "Send us your project details and we'll get back to you within 24 hours.",
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Work email",
      company: "Company",
      mobile: "Mobile",
      city: "City",
      details: "Project details",
      submit: "Submit",
    },
  },
  privacy: {
    eyebrow: "06 · Privacy",
    title: "Privacy policy",
    lede:
      "This policy explains, in plain language, what personal data this site collects, why we use it, who handles it, and the rights you have.",
    updated: "Last updated: 18 November 2026",
    sections: [
      {
        num: "01",
        heading: "Who we are",
        body: [
          "Cloud Valley (وادي السحاب) is an IT solutions, websites and digital marketing company serving businesses in Saudi Arabia, registered under commercial registration number 1010637845.",
          "We are responsible for the personal data collected through this website (www.wady.cloud), and we follow the Personal Data Protection Law (PDPL) of the Kingdom of Saudi Arabia.",
          "You can reach us at contact@wady.cloud or on WhatsApp. Our working days are Monday to Saturday.",
        ],
      },
      {
        num: "02",
        heading: "What we collect",
        body: [
          "Contact form: your first name, last name, email address, company, mobile number, city and the project details you write. Only the email address is required; the other fields are optional.",
          "Messages you send us: if you email us or message us on WhatsApp, we receive your email address or phone number, your name as it appears in that app, and what you write.",
          "Analytics, only with your consent: if you click Accept in the cookie banner, Google Analytics records how the site is used, such as the pages you view, your device and browser type, your approximate region, and whether you clicked a WhatsApp link or sent the contact form. It does not receive what you type in the form or in WhatsApp.",
          "Technical logs: like any website, our hosting provider automatically records technical details of each visit, such as your IP address, browser type, the page requested and the time, to run the site and keep it secure.",
        ],
      },
      {
        num: "03",
        heading: "Why we use it, and on what basis",
        body: [
          "To answer your enquiry, prepare a quote and follow up with you about it. We do this because you asked us to, by sending the form or a message.",
          "If you become a client: to deliver the agreed work and communicate with you about it, as part of our agreement with you.",
          "To understand how the site is used and improve it, through Google Analytics, only with your consent. You can withdraw that consent at any time.",
          "To run the site and keep it secure, through the technical logs kept by our host.",
          "To meet our legal obligations, for example where a law or a competent authority requires us to keep or disclose information.",
          "We process personal data in line with the PDPL and its implementing regulations. We do not sell or rent your personal data, and we do not use it for advertising.",
        ],
      },
      {
        num: "04",
        heading: "Who processes your data",
        body: [
          "We use a small number of service providers. Each one handles data only as far as its service requires:",
          "Salesforce: receives the contact form directly when you press Send, and stores your enquiry so we can follow it up.",
          "Google Analytics (Google): only if you accept analytics cookies.",
          "Vercel: hosts the website and keeps the technical logs described above.",
          "WhatsApp (Meta): only when you choose to message us on WhatsApp. That conversation is also subject to WhatsApp's own privacy policy.",
          "Our email provider: handles the messages you send to contact@wady.cloud.",
          "Some of these providers store or process data outside Saudi Arabia, for example in the United States. When data leaves the Kingdom, we transfer only what the service needs for the purposes described here, in line with the PDPL's rules on transfers outside the Kingdom.",
          "We may also disclose information when a law or a competent authority requires it.",
        ],
      },
      {
        num: "05",
        heading: "Cookies and your consent",
        body: [
          "We do not set cookies of our own. Google Analytics cookies are placed only after you click Accept in the banner.",
          "If you click Decline, Google Analytics is not loaded and nothing is sent to Google. Advertising storage is never turned on.",
          "Your choice is saved in your browser's local storage under the name cv-consent, so the banner does not ask you again. It stays on your device and is not sent to us.",
          "To change your choice at any time, click Cookie settings at the bottom of any page. You can also clear cookies and site data in your browser settings.",
          "If the site shows no cookie banner and no Cookie settings link, analytics is switched off.",
          "Fonts are served from our own site, so browsing it sends no request to Google Fonts.",
          "Share buttons on articles are plain links. Nothing is sent to WhatsApp, LinkedIn or X unless you click one.",
        ],
      },
      {
        num: "06",
        heading: "How long we keep data",
        body: [
          "We keep enquiry details for as long as we need them to answer and follow up on your enquiry.",
          "If you become a client, we keep the data our business relationship needs for as long as it lasts, and afterwards for as long as Saudi law requires, for example for accounting records.",
          "Google keeps analytics data according to the retention settings of Google Analytics, and our host keeps technical logs for a limited period.",
          "When data is no longer needed, we delete it or make it anonymous.",
        ],
      },
      {
        num: "07",
        heading: "How we protect it",
        body: [
          "The site is served over an encrypted connection (HTTPS), and the contact form is sent over an encrypted connection directly to Salesforce.",
          "We take reasonable technical and organizational measures to protect personal data, and we limit access to the people who need it to serve you.",
          "No way of sending or storing data online is completely secure. If a breach affects your data, we will act as the PDPL requires, including notifying the competent authority and you where required.",
        ],
      },
      {
        num: "08",
        heading: "Your rights",
        body: [
          "The PDPL gives you the right to:",
          "Know how your personal data is collected and used, which is what this policy explains.",
          "Access your personal data and ask for a copy of it.",
          "Ask us to correct data that is inaccurate or incomplete.",
          "Ask us to delete data we no longer need, unless a law requires us to keep it.",
          "Withdraw your consent at any time. For analytics, use Cookie settings at the bottom of the page.",
          "To use any of these rights, email us at contact@wady.cloud. We may need to confirm your identity first, and we will reply within the period set by law.",
          "If you are not satisfied with our reply, you can file a complaint with the Saudi Data and AI Authority (SDAIA).",
        ],
      },
      {
        num: "09",
        heading: "Children",
        body: [
          "This site and our services are meant for businesses and adults. We do not knowingly collect personal data from children.",
          "If you believe a child has sent us personal data, contact us and we will delete it.",
        ],
      },
      {
        num: "10",
        heading: "Changes to this policy",
        body: [
          "We may update this policy when our site or the services we use change. The current version is always on this page, with the date it was last updated at the top.",
          "If we make an important change, such as using your data for a new purpose, we will ask for your consent again where the law requires it.",
        ],
      },
      {
        num: "11",
        heading: "Contact us",
        body: [
          "For any question or request about your personal data, email contact@wady.cloud or message us on WhatsApp. A member of our team replies Monday to Saturday.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "07 · Terms",
    title: "Terms of service",
    lede:
      "These terms cover your use of this website and the basic rules for working with us. The written quote or agreement for your project sets out the specifics.",
    updated: "Last updated: 18 November 2026",
    sections: [
      {
        num: "01",
        heading: "Who we are",
        body: [
          "These terms are between you and Cloud Valley (وادي السحاب), an IT solutions, websites and digital marketing company serving businesses in Saudi Arabia, registered under commercial registration number 1010637845. “We” and “us” in these terms mean Cloud Valley.",
          "By using this website, you agree to these terms. If you do not agree, please do not use the site.",
        ],
      },
      {
        num: "02",
        heading: "Using this site",
        body: [
          "You may browse the site, read and share its pages, and contact us through it.",
          "Please do not misuse it: do not try to disrupt it or access it without permission, do not send spam or harmful content through the contact form, and do not submit someone else's details without their permission.",
          "We may change, pause or remove parts of the site at any time.",
        ],
      },
      {
        num: "03",
        heading: "General information, not advice",
        body: [
          "Articles, service descriptions and the rest of the content on this site are general information. They are not professional advice for your specific situation.",
          "We work to keep the content accurate and current, but we do not guarantee that it is complete or up to date at all times. Please contact us before relying on it for a decision.",
          "We do not guarantee specific business results, such as a particular search ranking or sales figure, because they depend on factors outside our control.",
        ],
      },
      {
        num: "04",
        heading: "Quotes and agreements",
        body: [
          "Sending the contact form or a message does not create a contract. It is a request for us to get back to you.",
          "Before any project starts, we agree its scope, deliverables, price and timeline in writing, through a quote or an agreement.",
          "That written quote or agreement governs the project. If either one conflicts with these terms, the quote or agreement takes priority for that project.",
          "The price in your quote is the price you pay, with no hidden fees. Any work outside the agreed scope is priced separately before we start it.",
        ],
      },
      {
        num: "05",
        heading: "Monthly plans and payment",
        body: [
          "Our packages are monthly plans, billed monthly. Prices on the site are in Saudi riyals and may change over time; the price that applies to you is the one in your quote or agreement.",
          "No long contracts: you can cancel a monthly plan at any time, in line with the terms of your plan.",
          "Cancelling stops future billing. Fees for work already delivered remain due.",
          "Custom packages and one-off projects are priced in their own quote.",
          "If a payment is overdue, we may pause the service until it is settled.",
        ],
      },
      {
        num: "06",
        heading: "Your part",
        body: [
          "To make the work go well, we ask you to:",
          "Give us the information, content and access we need, on time. Delays on either side can move delivery dates.",
          "Make sure the content, logos and materials you give us are yours or that you are allowed to use them, and that they do not infringe anyone's rights.",
          "Review our work and send your feedback within the time agreed in the quote.",
        ],
      },
      {
        num: "07",
        heading: "Ownership of what we build for you",
        body: [
          "Once it is paid for, everything we build for you belongs to you: the code, the content, the designs, the data and the accounts. If we stop working together, your system keeps running.",
          "When you give us access to your accounts or platforms to do the work, we use that access only for that work and keep your information confidential.",
          "Third party tools, platforms and licensed materials we use (such as hosting, plugins, fonts and images) remain subject to their providers' own terms.",
          "We may show completed work in our portfolio, unless you ask us not to.",
        ],
      },
      {
        num: "08",
        heading: "Our content and brand",
        body: [
          "The content of this website, including its text, design and graphics, and the Cloud Valley and وادي السحاب names and logo, belongs to us.",
          "You may share links to our pages and quote short parts with credit. Please do not copy or reuse our content or brand for commercial purposes without our written permission.",
        ],
      },
      {
        num: "09",
        heading: "Third party links and services",
        body: [
          "This site links to services we do not control, such as WhatsApp, LinkedIn and X, and the contact form is sent to Salesforce. Their own terms and privacy policies apply when you use them.",
          "Some of our services rely on outside platforms such as Google, Meta and hosting providers. We are not responsible for changes these platforms make to their rules, prices or availability.",
        ],
      },
      {
        num: "10",
        heading: "Limitation of liability",
        body: [
          "We do our work with reasonable care and skill, and if something we delivered is not right, we work to fix it.",
          "The website is provided as it is. We are not liable for losses caused by using it or by relying on its general information.",
          "To the extent Saudi law allows, we are not liable for indirect losses, such as lost profit or lost opportunity, and our total liability for any service is limited to the fees you paid us for that service in the three months before the claim arose.",
          "Nothing in these terms limits any liability that Saudi law does not allow to be limited.",
        ],
      },
      {
        num: "11",
        heading: "Changes to these terms",
        body: [
          "We may update these terms from time to time. The current version is always on this page, with the date it was last updated at the top.",
          "Changes apply from the date they are posted. They do not change a quote or agreement you have already accepted.",
        ],
      },
      {
        num: "12",
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of the Kingdom of Saudi Arabia.",
          "We will first try to resolve any disagreement directly and in good faith. If that does not work, it will be referred to the competent courts in the Kingdom of Saudi Arabia.",
        ],
      },
      {
        num: "13",
        heading: "Contact us",
        body: [
          "For any question about these terms, email contact@wady.cloud or message us on WhatsApp. A member of our team replies Monday to Saturday.",
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
          { label: "Pricing", href: "/pricing" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Why us", href: "/trust" },
          { label: "Contact", href: "/contact" },
          { label: "FAQ", href: "/faq" },
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
          { label: "Digital marketing", href: "/services/digital-marketing" },
        ],
      },
    ],
    contact: "Contact",
    whatsapp: "Business WhatsApp",
    email: "Email",
    hours: "Working days: Monday to Saturday",
    copyright: "© 2026 Cloud Valley. All rights reserved.",
    colophonLeft: "",
    colophonRight: "",
  },
};

const dictionaries: Record<Locale, Dict> = { ar, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
