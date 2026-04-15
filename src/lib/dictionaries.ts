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
      free: {
        badge: string;
        name: string;
        price: string;
        per: string;
        features: string[];
        cta: string;
      };
      paid: {
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
    list: {
      num: string;
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
    posts: {
      num: string;
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
    title: "كلاود فالي — وكالة أتمتة الذكاء الاصطناعي",
    description:
      "نستبدل المهام البشرية المتكررة بأنظمة ذكاء اصطناعي موثوقة. تصميم، سيو، محتوى، واتساب، وسائل تواصل، وعمليات.",
  },
  brand: {
    name: "كلاود فالي",
    wordmark: "Cloud Valley — كلاود فالي",
    tagline: "وكالة أتمتة للعالم العربي.",
  },
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    blog: "المجلة",
    about: "من نحن",
    trust: "لماذا نحن",
    switchLang: "EN",
    cta: "تواصل على واتساب",
  },
  home: {
    eyebrow: "العدد ٠١ — نيسان ٢٠٢٦",
    displayA: "نصنع",
    displayB: "أنظمةً",
    displayC: "بدل الموظفين.",
    lede:
      "كلاود فالي وكالةُ أتمتةٍ للعالم العربي. نُصمّم أنظمة ذكاء اصطناعي تُنجز ما يفعله فريقٌ كامل — بسرعةٍ أعلى، وبتكلفةٍ أقل بستينَ بالمائة.",
    primaryCta: "ابدأ على واتساب",
    secondaryCta: "شاهد الخدمات",
    marquee: [
      "تصميم مواقع",
      "تطبيقات",
      "تحسين محركات البحث",
      "صناعة المحتوى",
      "أتمتة واتساب",
      "إدارة السوشيال ميديا",
      "أتمتة العمليات",
      "ذكاء اصطناعي",
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
    servicesTitle: "ستُّ خدماتٍ، نظامٌ واحد.",
    servicesLede:
      "كلُّ خدمةٍ مصمَّمةٌ لتعمل وحدها أو ضمن منظومةٍ كاملة. نُوصي بالبدء بواحدةٍ ثم التوسّع.",
    pricingNum: "٠٤ — الاشتراكات",
    pricingTitle: "تسعيرٌ صريح، بلا نجومٍ صغيرة.",
    pricingLede:
      "جرِّب الخطةَ المجانية، ثم ارتقِ حين ترى النتائج. لا عقود طويلة، ولا رسومٌ خفيّة.",
    pricing: {
      free: {
        badge: "الخطة المجانية",
        name: "البذرة",
        price: "٠",
        per: "ريال / شهريًا",
        features: [
          "جلسة تشخيصٍ واحدةٌ لمدة ٤٥ دقيقة",
          "خريطةٌ مكتوبةٌ لفرص الأتمتة في أعمالك",
          "قالبُ واتساب تلقائيٌ جاهزٌ للاستخدام",
          "دعمٌ عبر البريد لمدة أسبوع",
        ],
        cta: "احجز جلستك",
      },
      paid: {
        badge: "الأكثر طلبًا",
        name: "النمو",
        price: "٢٬٤٠٠",
        per: "ريال / شهريًا",
        features: [
          "تشغيلُ نظامٍ واحدٍ متكامل (واتساب، محتوى، أو سيو)",
          "إدارةٌ كاملةٌ ومراقبةٌ يومية",
          "تقريرٌ شهريٌّ بالنتائج والأرقام",
          "قناةٌ مباشرةٌ على واتساب مع الفريق",
          "تحديثاتٌ ربعيةٌ بلا رسومٍ إضافية",
        ],
        cta: "اشترك الآن",
      },
      custom: {
        badge: "للشركات",
        name: "المنظومة",
        price: "حسب الطلب",
        per: "—",
        features: [
          "أنظمةٌ متعدّدةٌ متصلةٌ ببعضها",
          "تكاملٌ مع أنظمتك الداخلية",
          "مديرُ حسابٍ مخصّص",
          "اتفاقيةُ مستوى خدمةٍ بالدقيقة",
        ],
        cta: "تحدّث معنا",
      },
    },
    ctaNum: "٠٥ — التواصل",
    ctaTitle: "ابدأ بمحادثة.",
    ctaBody:
      "لا نماذج طويلة، ولا مكالماتٌ باردة. أرسل لنا ما يُرهقك في عملك، ونعودُ إليك بخريطةِ حلٍّ مجانيةٍ خلال ٢٤ ساعة.",
    ctaWhatsApp: "تواصل على واتساب",
    ctaEmail: "راسلنا بالبريد",
  },
  services: {
    eyebrow: "٠٢ — الخدمات",
    title: "ستُّ خدمات. نظامٌ واحدٌ يعمل كفريقٍ كامل.",
    lede:
      "لا نبيعُ ساعاتٍ ولا أدوات. نُسلِّمُ نتائج: نظامٌ حيٌّ يعمل، ويُراقَب، ويُحسَّن شهريًا.",
    list: [
      {
        num: "٠١",
        name: "تصميم المواقع والتطبيقات",
        summary:
          "واجهاتٌ هادئة، سريعةٌ على الجوال، مكتوبةٌ بعربيةٍ نظيفةٍ وإنجليزيةٍ صحيحة.",
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
        name: "أتمتة واتساب",
        summary:
          "مساعدٌ ذكيٌّ يردُّ، يحجز، يبيع، ويُصعِّد للبشر حين يجب. ٢٤ ساعة.",
        bullets: [
          "ردودٌ فوريةٌ بلهجتك أنت",
          "تكاملٌ مع متجرك وجدولك",
          "تصعيدٌ ذكيٌّ للحالات الحرجة",
          "سجلٌّ كاملٌ قابلٌ للتدقيق",
        ],
        outcome: "زبائنُك لا ينتظرون. فريقُك يرتاح.",
      },
      {
        num: "٠٥",
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
        num: "٠٦",
        name: "أتمتة العمليات",
        summary:
          "الفواتير، الموارد البشرية، التقارير، البريد. كلُّ ما يُكرَّر يوميًا — دعه يُنجِز نفسه.",
        bullets: [
          "ربطُ أنظمتك الحالية بلا استبدال",
          "تدفقاتٌ موثَّقةٌ بصريًا",
          "إنذاراتٌ ذكيةٌ عند الشذوذ",
          "توفيرٌ يُقاسُ بالساعات الشهرية",
        ],
        outcome: "وقتٌ يعود لما يستحقُّ اهتمامك.",
      },
    ],
  },
  blog: {
    eyebrow: "٠٣ — المجلة",
    title: "مقالاتٌ عن الأتمتة، الأعمال، والذكاء الاصطناعي.",
    lede:
      "نكتبُ لمن يديرُ أعمالاً حقيقية، لا لمن يلاحقُ الضجيج. مقالاتٌ قصيرة، عملية، ومبنيةٌ على تجارب.",
    posts: [
      {
        num: "٠١",
        kicker: "دليلٌ عملي",
        title: "كيف يُوفِّر متجرٌ صغيرٌ في الرياض ١٢ ساعةً أسبوعيًا بمساعدِ واتساب.",
        excerpt:
          "قصّةٌ موثَّقةٌ لمتجر عطور، من أول محادثةٍ إلى أول شهرٍ من التشغيل. ما نجح، وما لم ينجح.",
        date: "١٠ نيسان ٢٠٢٦",
        readTime: "٧ دقائق",
      },
      {
        num: "٠٢",
        kicker: "رأي",
        title: "لماذا يفشل معظم مشاريع الذكاء الاصطناعي في العالم العربي.",
        excerpt:
          "المشكلة ليست في النموذج ولا في البيانات، بل في ثقافةِ الإدارة. ملاحظاتٌ من ثلاث سنواتٍ في الميدان.",
        date: "٢ نيسان ٢٠٢٦",
        readTime: "٥ دقائق",
      },
      {
        num: "٠٣",
        kicker: "تقنية",
        title: "ستّةٌ أخطاءٍ تُفسِدُ سيو المواقع العربية — وكيف تتلافاها.",
        excerpt:
          "من اختيار الكلمات إلى التكويد، دليلٌ مختصرٌ لمن يريد موقعًا يظهر في Google العربية.",
        date: "٢٥ آذار ٢٠٢٦",
        readTime: "٩ دقائق",
      },
      {
        num: "٠٤",
        kicker: "حوار",
        title: "حديثٌ مع مديرِ تسويقٍ اعتمد على الذكاء الاصطناعي وعاد.",
        excerpt:
          "ليس كلُّ ما يلمعُ ذهب. رحلةٌ صادقةٌ مع مديرِ تسويقٍ عربيٍّ جرّب كلَّ شيءٍ ثم استقرّ.",
        date: "١٨ آذار ٢٠٢٦",
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
    title: "كلاود فالي بدأت سؤالاً، ثم صارت وكالة.",
    lede:
      "بدأ ثلاثةٌ منّا من مهندسين وكُتّاب بسؤالٍ واحد: لماذا يُرهِقُ عملٌ بسيطٌ فرقًا بأكملها؟ الجواب صار شركة.",
    sections: [
      {
        num: "٠١",
        heading: "البداية",
        body:
          "في ٢٠٢٤ كنّا نعمل معًا في شركةِ تقنيةٍ كبرى. كنّا نرى شركاتٍ عائليةً عربيةً تدفعُ رواتبَ مرتفعةً لمهامٍ أصبحتْ أرخصَ بعشرين مرةً عبر الأتمتة. فأنشأنا كلاود فالي.",
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
          "لا نبيعُ خطةً لم نجرّبها. كلُّ نظامٍ نُسلِّمه، مُستخدمٌ أولاً داخل كلاود فالي نفسها. لا تجاربَ على عملائنا.",
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
        "أربعةُ مهندسين، كاتبتان، ومصمِّمةٌ واحدة. نعملُ من بيروت والرياض والقاهرة، ونلتقي مرةً في الشهر وجهًا لوجه.",
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
        role: "مديرة العمليات، متجر «نوى» — الرياض",
      },
      {
        quote:
          "أوَّلُ وكالةٍ تشرحُ لي ما تفعلُهُ بكلماتٍ أفهمها. التقاريرُ الأسبوعيةُ وحدها تستحقُّ الاشتراك.",
        author: "كريم حداد",
        role: "مؤسِّس، شركة «حَدَث» — بيروت",
      },
      {
        quote:
          "اشتركنا في الخطة المجانية، توقَّعتُها حيلة. خرجتُ بخريطةِ حلٍّ موثَّقةٍ استخدمتُها حتى بعد أن أجَّلتُ التعاقد.",
        author: "ريم الزهراني",
        role: "مديرة تسويق — جدّة",
      },
    ],
  },
  footer: {
    columns: [
      {
        heading: "الموقع",
        links: [
          { label: "الرئيسية", href: "/" },
          { label: "الخدمات", href: "/services" },
          { label: "المجلة", href: "/blog" },
          { label: "من نحن", href: "/about" },
          { label: "لماذا نحن", href: "/trust" },
        ],
      },
      {
        heading: "الخدمات",
        links: [
          { label: "تصميم المواقع", href: "/services#01" },
          { label: "تحسين محركات البحث", href: "/services#02" },
          { label: "صناعة المحتوى", href: "/services#03" },
          { label: "أتمتة واتساب", href: "/services#04" },
          { label: "سوشيال ميديا", href: "/services#05" },
          { label: "أتمتة العمليات", href: "/services#06" },
        ],
      },
    ],
    contact: "تواصل",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    copyright: "© ٢٠٢٦ كلاود فالي. جميع الحقوق محفوظة.",
    colophonLeft: "مصنوعٌ في بيروت والرياض والقاهرة.",
    colophonRight: "محارفُ: أميري، فراونسِز، جيت‌براينز مونو.",
  },
};

const en: Dict = {
  meta: {
    title: "Cloud Valley — AI automation for the Arab world.",
    description:
      "We replace repetitive human tasks with reliable AI systems. Design, SEO, content, WhatsApp, social, operations.",
  },
  brand: {
    name: "Cloud Valley",
    wordmark: "Cloud Valley — كلاود فالي",
    tagline: "An automation agency for the Arab world.",
  },
  nav: {
    home: "Home",
    services: "Services",
    blog: "Journal",
    about: "About",
    trust: "Why us",
    switchLang: "ع",
    cta: "Start on WhatsApp",
  },
  home: {
    eyebrow: "Issue 01 — April 2026",
    displayA: "We build",
    displayB: "systems",
    displayC: "not teams.",
    lede:
      "Cloud Valley is an automation agency for the Arab world. We design AI systems that do what a full team does — faster, and at sixty percent less cost.",
    primaryCta: "Start on WhatsApp",
    secondaryCta: "See services",
    marquee: [
      "Web design",
      "Applications",
      "Search optimization",
      "Content production",
      "WhatsApp automation",
      "Social media",
      "Operations automation",
      "Artificial intelligence",
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
    servicesTitle: "Six services. One system.",
    servicesLede:
      "Each service works alone, or as part of a full stack. We usually recommend starting with one and expanding.",
    pricingNum: "04 — Plans",
    pricingTitle: "Honest pricing. No fine print.",
    pricingLede:
      "Try the free plan. Move up when you see the results. No long contracts. No hidden fees.",
    pricing: {
      free: {
        badge: "Free plan",
        name: "Seed",
        price: "0",
        per: "SAR / month",
        features: [
          "One 45-minute diagnostic session",
          "A written map of automation opportunities",
          "A ready-to-use WhatsApp auto-reply template",
          "Email support for one week",
        ],
        cta: "Book a session",
      },
      paid: {
        badge: "Most popular",
        name: "Growth",
        price: "2,400",
        per: "SAR / month",
        features: [
          "One integrated system (WhatsApp, content, or SEO)",
          "Full management and daily monitoring",
          "A monthly report with results and numbers",
          "Direct WhatsApp channel with the team",
          "Quarterly updates at no extra fee",
        ],
        cta: "Subscribe",
      },
      custom: {
        badge: "Enterprise",
        name: "Ecosystem",
        price: "Custom",
        per: "—",
        features: [
          "Multiple connected systems",
          "Integration with internal tools",
          "Dedicated account manager",
          "SLA with per-minute response",
        ],
        cta: "Talk to us",
      },
    },
    ctaNum: "05 — Contact",
    ctaTitle: "Start with a conversation.",
    ctaBody:
      "No long forms. No cold calls. Tell us what drains your week and we'll reply within 24 hours with a free, written solution map.",
    ctaWhatsApp: "Start on WhatsApp",
    ctaEmail: "Write us an email",
  },
  services: {
    eyebrow: "02 — Services",
    title: "Six services. One system that works like a full team.",
    lede:
      "We don't sell hours or tools. We deliver outcomes: a live system, monitored, improved monthly.",
    list: [
      {
        num: "01",
        name: "Web & app design",
        summary:
          "Quiet interfaces, fast on mobile, written in clean Arabic and correct English.",
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
        name: "WhatsApp automation",
        summary:
          "A smart assistant that replies, books, sells, and escalates to humans when it should. Around the clock.",
        bullets: [
          "Instant replies in your own tone",
          "Integrates with your store and calendar",
          "Smart escalation for sensitive cases",
          "A fully auditable log",
        ],
        outcome: "Your customers don't wait. Your team exhales.",
      },
      {
        num: "05",
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
        num: "06",
        name: "Operations automation",
        summary:
          "Invoicing, HR, reporting, inbox. The things that repeat every day — let them run themselves.",
        bullets: [
          "Connects to your existing stack — no rip-and-replace",
          "Flows documented visually",
          "Smart alerts on anomalies",
          "Savings measured in monthly hours",
        ],
        outcome: "Time returned to the work that deserves you.",
      },
    ],
  },
  blog: {
    eyebrow: "03 — Journal",
    title: "Essays on automation, business, and AI.",
    lede:
      "We write for people running real businesses — not people chasing noise. Short, practical, built on what we saw in the field.",
    posts: [
      {
        num: "01",
        kicker: "Case study",
        title:
          "How a small Riyadh shop saves 12 hours a week with a WhatsApp assistant.",
        excerpt:
          "A documented story of a perfume shop, from first conversation to the first month of operation. What worked, what didn't.",
        date: "April 10, 2026",
        readTime: "7 min",
      },
      {
        num: "02",
        kicker: "Opinion",
        title:
          "Why most AI projects in the Arab world fail — and what fixes it.",
        excerpt:
          "The problem isn't the model or the data. It's management culture. Notes from three years in the field.",
        date: "April 2, 2026",
        readTime: "5 min",
      },
      {
        num: "03",
        kicker: "Technical",
        title:
          "Six mistakes that ruin SEO for Arabic sites — and how to avoid them.",
        excerpt:
          "From keyword choice to markup, a short guide for anyone who wants their site to rank in Arabic Google.",
        date: "March 25, 2026",
        readTime: "9 min",
      },
      {
        num: "04",
        kicker: "Conversation",
        title:
          "A talk with a marketing director who went all-in on AI — and pulled back.",
        excerpt:
          "Not everything that glitters is gold. An honest journey with an Arab marketing director who tried it all.",
        date: "March 18, 2026",
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
        "Four engineers, two writers, one designer. We work from Beirut, Riyadh, and Cairo, and meet in person once a month.",
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
        role: "Head of Operations, Nawa Perfumery — Riyadh",
      },
      {
        quote:
          "The first agency that explained what they do in words I understood. The weekly reports alone are worth the subscription.",
        author: "Karim Haddad",
        role: "Founder, Hadath — Beirut",
      },
      {
        quote:
          "We subscribed to the free plan expecting a trick. Walked away with a written map we used even after I delayed signing.",
        author: "Reem Al-Zahrani",
        role: "Marketing Director — Jeddah",
      },
    ],
  },
  footer: {
    columns: [
      {
        heading: "Site",
        links: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Journal", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Why us", href: "/trust" },
        ],
      },
      {
        heading: "Services",
        links: [
          { label: "Web design", href: "/services#01" },
          { label: "Search optimization", href: "/services#02" },
          { label: "Content", href: "/services#03" },
          { label: "WhatsApp automation", href: "/services#04" },
          { label: "Social media", href: "/services#05" },
          { label: "Operations", href: "/services#06" },
        ],
      },
    ],
    contact: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    copyright: "© 2026 Cloud Valley. All rights reserved.",
    colophonLeft: "Made in Beirut, Riyadh, and Cairo.",
    colophonRight: "Set in Amiri, Fraunces, and JetBrains Mono.",
  },
};

const dictionaries: Record<Locale, Dict> = { ar, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
