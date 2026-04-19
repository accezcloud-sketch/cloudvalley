import type { Locale } from "./i18n";

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDifferentiator = {
  label: string;
  body: string;
};

export type ServicePageData = {
  slug: string;
  tagline: string;
  problem: string;
  deliverables: string[];
  differentiators: ServiceDifferentiator[];
  outcome: string;
  faq: ServiceFAQ[];
};

/* ------------------------------------------------------------------ */
/*  Arabic                                                             */
/* ------------------------------------------------------------------ */

const ar: Record<string, ServicePageData> = {
  "website-design": {
    slug: "website-design",
    tagline: "موقعك هو أول موظفٍ يقابل عميلك — والأخير الذي ينساه.",
    problem:
      "صاحب العمل يدفع لمصمّم قالبًا جاهزًا، يحصل على موقع يشبه ألف موقع آخر. النص العربي مكسور، الجوال بطيء، والزائر يغادر قبل أن يفهم ماذا تبيع. ثم يصرف آلاف الريالات على إعلانات Google تقود لصفحة لا تُقنع أحدًا. المشكلة ليست في الإعلان — بل في الوجهة.",
    deliverables: [
      "تصميم واجهات مخصّصة من الصفر — لا قوالب ولا سحب وإفلات.",
      "بناء تخطيط عربي صحيح من اليمين لليسار مع خطوط مصمّمة للحروف العربية.",
      "تهيئة بنية الموقع لمحركات البحث من أول سطر كود.",
      "تحسين سرعة التحميل لتقل عن ثانيتين على شبكات الجوال.",
      "تدريب فريقك على تحديث المحتوى وإدارة الموقع ذاتيًا.",
    ],
    differentiators: [
      {
        label: "عربية أولاً، لا ترجمة لاحقة",
        body: "نصمّم التخطيط العربي أولاً ثم نكيّفه للإنجليزية — لا العكس. هذا يعني أن العميل العربي يرى موقعًا صُنع له، لا موقعًا تُرجم إليه.",
      },
      {
        label: "كود تملكه أنت بالكامل",
        body: "لا منصات مغلقة ولا اشتراكات إجبارية. نُسلّمك الكود المصدري والاستضافة باسمك. لو أنهينا العلاقة غدًا، يبقى الموقع يعمل.",
      },
      {
        label: "أداء يُقاس لا يُدّعى",
        body: "نُسلّم تقرير Core Web Vitals مع كل مشروع. إذا لم يحقّق الموقع درجة أداء أعلى من تسعين على PageSpeed، نُصلح قبل التسليم.",
      },
    ],
    outcome: "موقعٌ يصل للزائر قبل أن يضغط.",
    faq: [
      {
        question: "كم يستغرق تصميم الموقع من البداية إلى الإطلاق؟",
        answer: "موقع من أربع إلى ست صفحات يستغرق عادةً من أربعة إلى ستة أسابيع. المواقع الأكبر أو التي تتضمن وظائف مخصّصة (حجز، بوابة عملاء) قد تصل إلى ثمانية أسابيع. نُحدّد الجدول الدقيق بعد جلسة الاكتشاف الأولى.",
      },
      {
        question: "هل يمكنني إدارة الموقع وتحديث المحتوى بنفسي بعد التسليم؟",
        answer: "نعم. نبني الموقع على نظام إدارة محتوى تستطيع استخدامه بدون معرفة تقنية. نُجري جلستين تدريبيتين لفريقك، ونُسلّم دليلاً مكتوبًا بالعربية يشرح كل خطوة.",
      },
      {
        question: "ماذا يحدث إذا لم يعجبني التصميم؟",
        answer: "نقدّم جولتين من المراجعات مشمولتين في السعر. إذا لم نتفق بعد الجولتين، نعود لنقطة الاتفاق الأخيرة ونعمل من هناك. لم يحدث هذا بعد — لأننا نبدأ بالمحتوى والهيكل قبل البكسلات.",
      },
      {
        question: "هل يشمل السعر الاستضافة والدومين؟",
        answer: "الدومين والاستضافة يُسجّلان باسمك وتدفعهما مباشرةً — عادةً بين ثلاثمئة وخمسمئة ريال سنويًا. هذا يضمن ملكيتك الكاملة. نساعد في الإعداد لكن الحساب لك.",
      },
    ],
  },

  "search-engine-optimization": {
    slug: "search-engine-optimization",
    tagline: "نُظهر عملك لمن يبحث عنه فعلاً — بكلماته هو، لا بكلماتك أنت.",
    problem:
      "صاحب العمل يدفع لوكالة سيو تُرسل تقريرًا شهريًا مليئًا بمصطلحات لا يفهمها. الترتيب لا يتحرّك. الكلمات المفتاحية مترجمة من الإنجليزية بفصحى لا يكتبها أحد في محرك البحث. بعد ستة أشهر، لا شيء تغيّر سوى رصيد الحساب البنكي.",
    deliverables: [
      "تدقيق تقني شامل للموقع مع خطة إصلاح مُرقّمة بالأولوية.",
      "بحث كلمات مفتاحية باللهجات المحلية العربية — لا ترجمة قاموسية.",
      "تحسين بنية الصفحات والبيانات المنظمة (Schema) لكل صفحة.",
      "بناء محتوى مرتكز على نية البحث الفعلية للمستخدم العربي.",
      "تقرير شهري بلغة واضحة: ما تحسّن، ما لم يتحسّن، والخطوة التالية.",
    ],
    differentiators: [
      {
        label: "نبدأ من واتساب عملائك",
        body: "أول شيء نفعله هو تدقيق محادثات عملائك الحقيقية — واتساب، تذاكر الدعم، تعليقات السوشيال. هذه هي الكلمات المفتاحية الحقيقية، لا ما تقوله أداة أمريكية.",
      },
      {
        label: "التقنية قبل المحتوى",
        body: "لا نكتب مقالة واحدة قبل إصلاح الأساس التقني. صفحة بطيئة أو بيانات منظمة مفقودة تعني أن أي محتوى تنشره مهدور. نُصلح أولاً، ننشر ثانيًا.",
      },
      {
        label: "نقيس بالعملاء لا بالترتيب",
        body: "الترتيب مؤشر، لا هدف. نقيس النجاح بعدد الاستفسارات والعملاء القادمين من البحث العضوي. إذا تصدّرت ولم تبع، فالسيو لم ينجح.",
      },
    ],
    outcome: "نموٌّ عضويٌّ يُقاسُ لا يُدَّعى.",
    faq: [
      {
        question: "متى أبدأ أرى نتائج من السيو؟",
        answer: "التحسينات التقنية تظهر عادةً في غضون أسبوعين إلى أربعة أسابيع. نتائج المحتوى والترتيب تحتاج عادةً من تسعين إلى مئة وثمانين يومًا. السيو استثمار تراكمي — الشهر السادس يكون أفضل بكثير من الأول.",
      },
      {
        question: "هل تضمنون الصفحة الأولى في Google؟",
        answer: "لا. أي وكالة تضمن لك الصفحة الأولى إما تكذب أو تستهدف كلمات لا يبحث عنها أحد. ما نضمنه هو عملية واضحة، تقارير صادقة، وتحسّن مُوثّق شهريًا.",
      },
      {
        question: "هل أحتاج سيو إذا كنت أعلن على Google Ads؟",
        answer: "نعم. الإعلانات تتوقف حين تتوقف عن الدفع. السيو يتراكم. أفضل استراتيجية تجمع بينهما: الإعلانات للنتائج الفورية، والسيو للنمو طويل المدى.",
      },
    ],
  },

  "content-production": {
    slug: "content-production",
    tagline: "محتوى يُكتب بصوتك، يُنشر في وقته، ويبيع دون أن يبيع.",
    problem:
      "المؤسّس يكتب ثلاثة منشورات في الأسبوع الأول ثم يصمت ثلاثة أشهر. يستأجر كاتبًا مستقلاً فيحصل على نصوص تبدو مترجمة من الإنجليزية. يجرّب أدوات الذكاء الاصطناعي فيحصل على كلام صحيح نحويًا لكن بلا روح. الجمهور يشعر بالفرق ويتوقف عن القراءة.",
    deliverables: [
      "إعداد خطة محتوى شهرية مرتبطة بأهداف العمل والمواسم.",
      "كتابة مسوّدات أولى بالذكاء الاصطناعي ثم تحرير بشري كامل.",
      "تصميم مرئي موحّد لكل قطعة محتوى عبر جميع القنوات.",
      "جدولة ونشر تلقائي — أنت توافق، نحن ننشر.",
      "تحليل أداء المحتوى شهريًا وتعديل الخطة بناءً على البيانات.",
    ],
    differentiators: [
      {
        label: "الذكاء الاصطناعي يكتب، البشر يحرّرون",
        body: "لا نُسلّم مخرجات AI خام أبدًا. كل قطعة تمر بمحرّر بشري يُعيد الكتابة ويضبط الصوت والإيقاع. النتيجة: سرعة الآلة بجودة الكاتب.",
      },
      {
        label: "عربية راقية لا آلية مُفتعلة",
        body: "نعرف الفرق بين الفصحى الجامدة والعربية الحيّة. نكتب بمستوى لغوي يناسب جمهورك — ليس رسميًا أكثر مما ينبغي، وليس عاميًا أكثر مما يليق.",
      },
      {
        label: "المحتوى مرتبط بنتيجة عمل",
        body: "لا نقيس النجاح بالإعجابات. كل مقال ومنشور له هدف مرتبط بمرحلة في رحلة المشتري — وعي، اهتمام، أو قرار شراء.",
      },
    ],
    outcome: "محتوى ينشره جمهورُك لا تدفعُ لنشره.",
    faq: [
      {
        question: "كم قطعة محتوى تنتجون شهريًا؟",
        answer: "الخطة الأساسية تشمل ثماني قطع شهريًا (مقالتان + ستة منشورات سوشيال). الخطة الاحترافية تشمل ست عشرة قطعة. يمكن تخصيص المزيج حسب قنواتك.",
      },
      {
        question: "هل تكتبون بالعربية والإنجليزية؟",
        answer: "نعم. نكتب كل قطعة بالعربية أولاً ثم نكتب نسخة إنجليزية مستقلة — ليست ترجمة حرفية. كل نسخة مصمّمة لجمهورها.",
      },
      {
        question: "من يملك المحتوى بعد النشر؟",
        answer: "أنت. كل ما نكتبه وننشره ملكك بالكامل. إذا أنهيت الاشتراك غدًا، المحتوى يبقى على حساباتك ومدوّنتك.",
      },
      {
        question: "كيف تضمنون أن المحتوى يمثّل صوت علامتي؟",
        answer: "في الأسبوع الأول نُجري جلسة اكتشاف نسجّل فيها نبرتك وقيمك والكلمات التي تستخدمها والتي تتجنّبها. هذا يصبح دليل الصوت الذي نكتب بموجبه ونراجع عليه.",
      },
    ],
  },

  "social-media-management": {
    slug: "social-media-management",
    tagline: "حساباتك تعمل بنظام، لا بحماس يتلاشى بعد أسبوعين.",
    problem:
      "صاحب العمل يدير الحسابات بنفسه ليلاً بعد يوم عمل طويل. ينشر بحماس أسبوعين ثم تصمت الحسابات شهرًا. يستأجر متدرّبًا فيحصل على منشورات عشوائية بلا خطة. الخوارزمية تنسى الحساب، والعملاء المحتملون يرون علامة تبدو مهجورة.",
    deliverables: [
      "إعداد تقويم محتوى مرئي أسبوعي يُراجَع ويُعتمَد قبل النشر.",
      "تصميم محتوى مخصّص لكل منصة — لا إعادة تحجيم لنفس الصورة.",
      "إعداد ردود تلقائية ذكية على الأسئلة المتكرّرة.",
      "تحليل أداء شهري بمقاييس مرتبطة بالإيراد لا بالإعجابات.",
      "جلسة تنسيق كل أسبوعين لمواءمة المحتوى مع خططك القادمة.",
    ],
    differentiators: [
      {
        label: "نظام واحد لا عشر أدوات",
        body: "نستبدل خليط الأدوات والجداول بنظام موحّد: تقويم واحد، مسار اعتماد واحد، تقرير واحد، ونقطة تواصل واحدة. أقل فوضى، أكثر إنتاجًا.",
      },
      {
        label: "أتمتة ما يُمكن، بشر حيث يهم",
        body: "الجدولة والردود المتكرّرة والتقارير مؤتمتة. صوت العلامة والتفاعل الحقيقي والأزمات يتولاها بشر. العميل لا يشعر بالفرق — يشعر بالسرعة.",
      },
      {
        label: "نقيس التفاعل الحقيقي لا المتابعين",
        body: "لا نُبلّغ عن عدد المتابعين لأنه لا يدفع إيجارًا. نقيس النقرات إلى موقعك، الرسائل الواردة، والعملاء الفعليين القادمين من السوشيال.",
      },
    ],
    outcome: "حسابٌ يبدو وكأنَّ خلفه فريقًا من عشرة.",
    faq: [
      {
        question: "كم حسابًا تديرون ضمن الاشتراك؟",
        answer: "الخطة الأساسية تشمل حسابًا واحدًا. الاحترافية تشمل حسابين. إذا احتجت أكثر، نُسعّر كل حساب إضافي على حدة.",
      },
      {
        question: "هل أحتاج أن أوافق على كل منشور قبل النشر؟",
        answer: "نعم في الشهر الأول حتى نضبط الصوت. بعد ذلك ننتقل لنموذج الاعتماد الأسبوعي: توافق على تقويم الأسبوع مرة واحدة، ونتولى النشر.",
      },
      {
        question: "ماذا لو تلقّيت تعليقًا سلبيًا أو أزمة؟",
        answer: "لدينا بروتوكول تصعيد: التعليقات السلبية العادية نردّ عليها خلال ساعة بأسلوب متّفق عليه مسبقًا. الأزمات الحقيقية نُبلّغك فورًا ونعمل معك على الرد قبل النشر.",
      },
    ],
  },

  "mobile-app-design": {
    slug: "mobile-app-design",
    tagline: "تطبيقٌ يُحبّه المستخدم من أول لمسة — لا من أول تحديث.",
    problem:
      "صاحب العمل يطلب تطبيقًا من شركة تطوير فيحصل على نسخة مصغّرة من الموقع بأزرار أكبر. التطبيق بطيء على شبكات الجوال الحقيقية، التصميم العربي مكسور، والمستخدمون يحذفونه قبل أن يكملوا التسجيل. ألف تحميل وعشرة مستخدمين نشطين.",
    deliverables: [
      "بحث مستخدمين ورسم رحلات قبل رسم أي بكسل.",
      "تصميم واجهات بديهية بتخطيط عربي أولاً ثنائي الاتجاه.",
      "بناء نموذج تفاعلي قابل للاختبار مع مستخدمين حقيقيين.",
      "اختبار على أجهزة وشبكات حقيقية في السوق المستهدف.",
      "تحسين متجر التطبيقات (ASO) لـ App Store وGoogle Play.",
    ],
    differentiators: [
      {
        label: "نصمّم للإبهام، لا للماوس",
        body: "مناطق اللمس، حركات التمرير، والتنقّل بيد واحدة ليست تفاصيل — هي الأساس. نصمّم لطريقة استخدام الناس الحقيقية، لا لما يبدو جميلاً في العرض.",
      },
      {
        label: "اختبار على أجهزة حقيقية لا محاكيات",
        body: "نختبر على هواتف فعلية بشبكات فعلية في مدن فعلية. إذا لم يعمل التطبيق على جوال عميلك، لم نُنجز عملنا.",
      },
      {
        label: "الإطلاق بداية لا نهاية",
        body: "نراقب بيانات الاستخدام بعد الإطلاق ونقترح تحسينات شهرية مبنية على سلوك المستخدمين الحقيقيين، لا على افتراضاتنا.",
      },
    ],
    outcome: "تطبيقٌ يُحبُّه المستخدم من أول لمسة.",
    faq: [
      {
        question: "هل تبنون التطبيق أم تصمّمونه فقط؟",
        answer: "نتولّى التصميم الكامل — بحث المستخدمين، الإطارات السلكية، واجهات المستخدم، والنموذج التفاعلي. البرمجة يمكن أن نتولاها داخليًا أو نعمل مع فريق التطوير لديك. نوضّح هذا في جلسة الاكتشاف.",
      },
      {
        question: "كم يستغرق تصميم تطبيق جوال؟",
        answer: "تطبيق بسيط (خمس إلى ثماني شاشات) يستغرق من ستة إلى ثمانية أسابيع تصميمًا. تطبيق متوسط التعقيد (عشر إلى عشرين شاشة) يستغرق من عشرة إلى أربعة عشر أسبوعًا.",
      },
      {
        question: "هل تدعمون iOS وAndroid معًا؟",
        answer: "نعم. نصمّم لكلا النظامين مع مراعاة اختلافات التفاعل بينهما (أنماط التنقّل، إيماءات الرجوع، حجم الأزرار). نتيجة واحدة تعمل على الاثنين.",
      },
    ],
  },

  "brand-identity": {
    slug: "brand-identity",
    tagline: "هويةٌ بصرية تُعرَف قبل أن تُقرأ — بالعربية والإنجليزية.",
    problem:
      "صاحب العمل يطلب شعارًا من مستقل على الإنترنت. يحصل على ملف PNG وبالتوفيق. لا ألوان محدّدة، لا خطوط، لا دليل استخدام. بعد سنة، حساب الإنستجرام يبدو مختلفًا عن الموقع، والموقع يبدو مختلفًا عن بطاقات الأعمال. العلامة لا تُعرَف — تُخمَّن.",
    deliverables: [
      "تصميم شعار بنسخ متعدّدة (أساسي، ثانوي، أيقونة) مع قواعد مسافات.",
      "تحديد لوحة ألوان بأكواد دقيقة للطباعة والشاشة والرقمي.",
      "اختيار خطوط عربية وإنجليزية تحمل شخصية العلامة.",
      "تصميم أنماط بصرية وأسلوب تصوير موحّد.",
      "تسليم دليل هوية بصرية شامل بالعربية والإنجليزية.",
    ],
    differentiators: [
      {
        label: "نصمّم الاتجاهين معًا",
        body: "النسخة العربية والإنجليزية أختان لا أم ونسخة. نصمّمهما في وقت واحد حتى تعمل كل منهما بقوة متساوية — لا ترجمة بصرية.",
      },
      {
        label: "نظام لا ملف",
        body: "لا نُسلّم شعارًا فقط. نُسلّم نظامًا يُجيب على كل سؤال تصميمي يطرحه فريقك: أي لون؟ أي خط؟ كم مسافة؟ هذا يُسرّع كل قطعة محتوى بعده.",
      },
      {
        label: "مبني للنمو",
        body: "الهوية التي نصمّمها تعمل على بطاقة أعمال وعلى لوحة إعلانية. إذا كنت تنمو، يجب أن تكبر علامتك معك دون إعادة بناء.",
      },
    ],
    outcome: "علامةٌ تُعرَف قبل أن تُقرأ.",
    faq: [
      {
        question: "ما الفرق بين الشعار والهوية التجارية؟",
        answer: "الشعار رمز واحد. الهوية التجارية هي النظام الكامل: الشعار، الألوان، الخطوط، أسلوب الصور، ودليل الاستخدام. الشعار وحده لا يكفي لبناء تعرّف بصري متّسق.",
      },
      {
        question: "كم يستغرق تصميم هوية تجارية كاملة؟",
        answer: "من أربعة إلى ستة أسابيع. الأسبوع الأول اكتشاف وبحث، الأسبوعان الثاني والثالث تصميم واستكشاف، والأسبوعان الأخيران تنقيح وتسليم الدليل النهائي.",
      },
      {
        question: "هل يمكنكم تحديث هوية قائمة بدلاً من البدء من الصفر؟",
        answer: "نعم. إذا كان الشعار الحالي قويًا لكن التطبيق غير متّسق، يمكننا بناء نظام هوية حوله دون تغييره. نُقيّم أولاً ثم نوصي بالمسار الأنسب.",
      },
    ],
  },

  "ecommerce-design": {
    slug: "ecommerce-design",
    tagline: "متجرٌ إلكتروني مبني للبيع — لا للعرض.",
    problem:
      "صاحب المتجر يفتح موقعًا على منصة جاهزة، يضيف المنتجات، وينتظر. سبعة من كل عشرة زوار يضعون شيئًا في السلة ثم يغادرون. الشحن مفاجأة عند الدفع. بوابات الدفع المحلية غير مدعومة. تجربة الجوال بطيئة ومربكة. المتجر موجود — لكنه لا يبيع.",
    deliverables: [
      "تصميم صفحات منتجات مُحسَّنة للتحويل مع صور سياقية وإجابات على الاعتراضات.",
      "بناء تجربة سلة وخروج سلسة ومُحسّنة للجوال.",
      "تكامل مع بوابات الدفع المحلية (مدى، تمارا، تابي، Apple Pay، الدفع عند الاستلام).",
      "تكامل مع شركات الشحن (أرامكس، SMSA، J&T).",
      "لوحة تحكّم سهلة لإدارة المنتجات والطلبات والمخزون.",
    ],
    differentiators: [
      {
        label: "مصمّم للسوق السعودي والخليجي",
        body: "ندمج بوابات الدفع والشحن التي يثق بها عميلك المحلي. مدى ليست خيارًا إضافيًا — هي الخيار الأول.",
      },
      {
        label: "كل بكسل يخدم البيع",
        body: "لا نصمّم صفحات جميلة ونأمل أن تبيع. نبني كل عنصر لتقليل الاحتكاك وزيادة التحويل — من ترتيب الصور إلى موضع زر الشراء.",
      },
      {
        label: "استرداد السلة المهجورة مدمج",
        body: "نُعدّ رسائل استرداد تلقائية عبر البريد والواتساب. هذا وحده يسترد عادةً بين عشرة وعشرين بالمئة من المبيعات الضائعة.",
      },
    ],
    outcome: "متجرٌ يبيع وأنت مشغولٌ بشيءٍ آخر.",
    faq: [
      {
        question: "على أي منصة تبنون المتاجر؟",
        answer: "نختار المنصة حسب حجم المتجر واحتياجاته. للمتاجر الصغيرة والمتوسطة نستخدم Shopify أو Salla. للمتاجر الأكبر أو ذات المتطلبات المخصّصة نبني على WooCommerce أو حلول مخصّصة. نوصي بعد فهم حالتك.",
      },
      {
        question: "كم يستغرق بناء متجر إلكتروني؟",
        answer: "متجر بعشرين إلى خمسين منتجًا يستغرق من أربعة إلى ستة أسابيع. متاجر أكبر أو ذات تكاملات مخصّصة تستغرق من ثمانية إلى اثني عشر أسبوعًا.",
      },
      {
        question: "هل تتولون إضافة المنتجات أم أضيفها بنفسي؟",
        answer: "نضيف أول دفعة من المنتجات (حتى خمسين منتجًا) ونُدرّب فريقك على إضافة الباقي. بعد التسليم، أنت تدير المنتجات بالكامل من لوحة تحكّم سهلة.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    tagline: "كلُّ ريالٍ في إعلانك يعود بنتيجةٍ مقيسة — أو لا يُنفق.",
    problem:
      "صاحب العمل يشغّل إعلانات Google ويموّل منشورات إنستجرام بدون قمع واضح. الزائر يصل للصفحة الرئيسية ويضيع. لا تتبّع سليم، لا صفحات هبوط مخصّصة، ولا خطة لما يحدث بعد النقرة. الميزانية تتبخّر والتقرير مليء بأرقام لا تعني شيئًا.",
    deliverables: [
      "بناء قمع تسويقي كامل: جذب، التقاط، رعاية، تحويل.",
      "إدارة حملات مدفوعة على Google وMeta بميزانية مُحكمة.",
      "تصميم صفحات هبوط مخصّصة لكل حملة.",
      "إعداد حملات بريد إلكتروني تبني علاقة لا مجرّد مبيعات.",
      "تقرير أداء شهري بلغة واضحة: تكلفة العميل، عائد الإنفاق، وتوصيات.",
    ],
    differentiators: [
      {
        label: "قمع كامل لا إعلان وحيد",
        body: "لا نشغّل إعلانًا بدون صفحة هبوط مخصّصة وتسلسل متابعة. الإعلان وحده لا يبيع — النظام الكامل يبيع.",
      },
      {
        label: "ميزانية تتبع البيانات لا الحدس",
        body: "نختبر بميزانية صغيرة أولاً، نقيس، ثم نوسّع ما يعمل. لا ننفق خمسة آلاف ريال على حملة لم نختبرها بخمسمئة أولاً.",
      },
      {
        label: "نُبلّغ بالعملاء لا بالنقرات",
        body: "تقريرنا يبدأ بعدد العملاء الجدد وتكلفة كل واحد. النقرات ومرّات الظهور في الملحق — لا في العنوان.",
      },
    ],
    outcome: "كلُّ ريالٍ في الإعلان يعود بنتيجةٍ مقيسة.",
    faq: [
      {
        question: "كم أحتاج ميزانية إعلانية للبدء؟",
        answer: "نوصي بحد أدنى ألفين إلى ثلاثة آلاف ريال شهريًا كميزانية إعلانية (بخلاف رسوم الإدارة). أقل من ذلك لا يوفّر بيانات كافية لاتخاذ قرارات ذكية.",
      },
      {
        question: "متى أبدأ أرى عائدًا على الإعلانات؟",
        answer: "الحملات المدفوعة تبدأ تُولّد نتائج خلال الأسبوع الأول. لكن تحسين التكلفة يحتاج من أربعة إلى ستة أسابيع من البيانات والاختبار. الشهر الثالث عادةً هو حيث تستقر التكلفة وتبدأ الكفاءة الحقيقية.",
      },
      {
        question: "هل تديرون الإعلانات أم تُعدّونها وتتركونها لي؟",
        answer: "ندير الحملات بالكامل: إعداد، مراقبة يومية، اختبار A/B، وتحسين مستمر. نُرسل تقريرًا أسبوعيًا مختصرًا وتقريرًا شهريًا مفصّلاً.",
      },
      {
        question: "على أي منصات تعلنون؟",
        answer: "Google Ads، Meta (فيسبوك وإنستجرام)، TikTok Ads، وSnapchat Ads. نختار المنصات بناءً على جمهورك المحدّد — لا نُشغّل إعلانات على كل منصة لأن ذلك يُبعثر الميزانية.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  English                                                            */
/* ------------------------------------------------------------------ */

const en: Record<string, ServicePageData> = {
  "website-design": {
    slug: "website-design",
    tagline: "Your website is the first employee your customer meets — and the last one they forget.",
    problem:
      "The business owner pays a designer for a template, gets a site that looks like a thousand others. The Arabic text is broken, the mobile experience is slow, and the visitor leaves before understanding what you sell. Then thousands of riyals go to Google Ads that lead to a page that convinces no one. The problem is not the ad — it is the destination.",
    deliverables: [
      "Design custom interfaces from scratch — no templates, no drag-and-drop.",
      "Build a proper Arabic right-to-left layout with typefaces designed for Arabic letterforms.",
      "Structure the site for search engines from the first line of code.",
      "Optimize loading speed to under two seconds on mobile networks.",
      "Train your team to update content and manage the site independently.",
    ],
    differentiators: [
      {
        label: "Arabic-first, not translated later",
        body: "We design the Arabic layout first and adapt it for English — not the other way around. This means your Arab customer sees a site built for them, not translated at them.",
      },
      {
        label: "Code you fully own",
        body: "No locked platforms, no mandatory subscriptions. We hand over the source code and hosting in your name. If we parted ways tomorrow, the site keeps running.",
      },
      {
        label: "Performance measured, not claimed",
        body: "We deliver a Core Web Vitals report with every project. If the site scores below ninety on PageSpeed, we fix it before handover.",
      },
    ],
    outcome: "A site that arrives before the visitor clicks.",
    faq: [
      {
        question: "How long does it take from start to launch?",
        answer: "A four-to-six-page site typically takes four to six weeks. Larger sites or those with custom functionality (booking, client portal) can take up to eight weeks. We set the exact timeline after the initial discovery session.",
      },
      {
        question: "Can I manage the site and update content myself after handover?",
        answer: "Yes. We build on a CMS you can use without technical knowledge. We run two training sessions for your team and deliver a written guide in Arabic covering every step.",
      },
      {
        question: "What if I don't like the design?",
        answer: "Two rounds of revisions are included in the price. If we still disagree after two rounds, we return to the last agreed point and work from there. This hasn't happened yet — because we start with content and structure before pixels.",
      },
      {
        question: "Does the price include hosting and domain?",
        answer: "Domain and hosting are registered in your name and paid by you directly — typically three hundred to five hundred riyals per year. This ensures full ownership. We help with setup but the account is yours.",
      },
    ],
  },

  "search-engine-optimization": {
    slug: "search-engine-optimization",
    tagline: "We show your work to the people actually searching for it — in their words, not yours.",
    problem:
      "The business owner pays an SEO agency that sends a monthly report full of jargon they don't understand. Rankings don't move. The keywords are translated from English into formal Arabic that nobody types into a search engine. After six months, nothing has changed except the bank balance.",
    deliverables: [
      "Run a comprehensive technical audit with a prioritized fix plan.",
      "Research keywords in local Arabic dialects — not dictionary translations.",
      "Optimize page structure and Schema markup for every page.",
      "Build content anchored to the actual search intent of Arab users.",
      "Deliver a monthly report in plain language: what improved, what didn't, and the next step.",
    ],
    differentiators: [
      {
        label: "We start from your customers' WhatsApp",
        body: "The first thing we do is audit your real customer conversations — WhatsApp, support tickets, social comments. Those are the real keywords, not what an American tool suggests.",
      },
      {
        label: "Technical fixes before content",
        body: "We don't write a single article before fixing the technical foundation. A slow page or missing structured data means any content you publish is wasted. Fix first, publish second.",
      },
      {
        label: "We measure by leads, not rankings",
        body: "Rankings are an indicator, not a goal. We measure success by the number of inquiries and customers coming from organic search. If you rank first and don't sell, the SEO didn't work.",
      },
    ],
    outcome: "Organic growth that is measured, not claimed.",
    faq: [
      {
        question: "When will I start seeing SEO results?",
        answer: "Technical improvements typically show within two to four weeks. Content and ranking results usually take ninety to one hundred eighty days. SEO is a compounding investment — month six is significantly better than month one.",
      },
      {
        question: "Do you guarantee first page on Google?",
        answer: "No. Any agency that guarantees first page is either lying or targeting keywords nobody searches for. What we guarantee is a clear process, honest reporting, and documented improvement every month.",
      },
      {
        question: "Do I need SEO if I'm already running Google Ads?",
        answer: "Yes. Ads stop the moment you stop paying. SEO compounds. The best strategy combines both: ads for immediate results, SEO for long-term growth.",
      },
    ],
  },

  "content-production": {
    slug: "content-production",
    tagline: "Content written in your voice, published on time, and selling without selling.",
    problem:
      "The founder writes three posts in the first week then goes silent for three months. They hire a freelancer and get text that reads like it was translated from English. They try AI tools and get grammatically correct words with no soul. The audience can tell the difference and stops reading.",
    deliverables: [
      "Build a monthly content plan tied to business goals and seasonal patterns.",
      "Draft with AI, then fully edit with a human writer.",
      "Create unified visual design for every content piece across all channels.",
      "Schedule and publish automatically — you approve, we handle the rest.",
      "Analyze content performance monthly and adjust the plan based on data.",
    ],
    differentiators: [
      {
        label: "AI drafts, humans edit",
        body: "We never deliver raw AI output. Every piece passes through a human editor who rewrites and adjusts voice and rhythm. The result: machine speed with writer quality.",
      },
      {
        label: "Elegant Arabic, not stiff machine text",
        body: "We know the difference between rigid formal Arabic and living Arabic. We write at the register that fits your audience — not more formal than necessary, not more casual than appropriate.",
      },
      {
        label: "Content tied to business outcomes",
        body: "We don't measure success by likes. Every article and post has a goal tied to a stage in the buyer journey — awareness, interest, or purchase decision.",
      },
    ],
    outcome: "Content your audience shares — not promoted.",
    faq: [
      {
        question: "How many content pieces do you produce per month?",
        answer: "The basic plan includes eight pieces monthly (two articles plus six social posts). The professional plan includes sixteen. The mix can be customized based on your channels.",
      },
      {
        question: "Do you write in both Arabic and English?",
        answer: "Yes. We write every piece in Arabic first, then write an independent English version — not a literal translation. Each version is crafted for its audience.",
      },
      {
        question: "Who owns the content after publishing?",
        answer: "You do. Everything we write and publish is fully yours. If you end the subscription tomorrow, the content stays on your accounts and blog.",
      },
      {
        question: "How do you ensure the content represents my brand voice?",
        answer: "In the first week we run a discovery session where we record your tone, values, the words you use and the ones you avoid. This becomes the voice guide we write against and review against.",
      },
    ],
  },

  "social-media-management": {
    slug: "social-media-management",
    tagline: "Your accounts run on a system — not on enthusiasm that fades after two weeks.",
    problem:
      "The business owner manages accounts at night after a long workday. Posts enthusiastically for two weeks, then the accounts go silent for a month. Hires an intern who posts randomly with no plan. The algorithm forgets the account, and potential customers see a brand that looks abandoned.",
    deliverables: [
      "Build a weekly visual content calendar, reviewed and approved before publishing.",
      "Design content tailored to each platform — not the same image resized.",
      "Set up smart auto-replies for frequently asked questions.",
      "Deliver monthly performance analysis with metrics tied to revenue, not likes.",
      "Run a bi-weekly alignment session to sync content with your upcoming plans.",
    ],
    differentiators: [
      {
        label: "One system, not ten tools",
        body: "We replace the patchwork of tools and spreadsheets with a unified system: one calendar, one approval flow, one report, and one point of contact. Less chaos, more output.",
      },
      {
        label: "Automate what can be, human where it matters",
        body: "Scheduling, recurring replies, and reports are automated. Brand voice, real engagement, and crisis response are handled by humans. The customer doesn't feel the difference — they feel the speed.",
      },
      {
        label: "We measure real engagement, not followers",
        body: "We don't report follower count because it doesn't pay rent. We measure clicks to your site, inbound messages, and actual customers coming from social.",
      },
    ],
    outcome: "An account that looks like a team of ten stands behind it.",
    faq: [
      {
        question: "How many accounts do you manage per subscription?",
        answer: "The basic plan covers one account. Professional covers two. If you need more, we price each additional account separately.",
      },
      {
        question: "Do I need to approve every post before it goes live?",
        answer: "Yes in the first month until we calibrate the voice. After that we switch to weekly approval: you approve the week's calendar once, and we handle publishing.",
      },
      {
        question: "What if I receive a negative comment or a crisis?",
        answer: "We have an escalation protocol: standard negative comments get a reply within one hour using a pre-agreed tone. Real crises — we notify you immediately and draft the response together before publishing.",
      },
    ],
  },

  "mobile-app-design": {
    slug: "mobile-app-design",
    tagline: "An app users love from the first tap — not the first update.",
    problem:
      "The business owner orders an app from a dev shop and gets a shrunken version of their website with bigger buttons. The app is slow on real mobile networks, the Arabic design is broken, and users uninstall before finishing registration. A thousand downloads and ten active users.",
    deliverables: [
      "Conduct user research and map journeys before drawing a single pixel.",
      "Design intuitive interfaces with an Arabic-first bidirectional layout.",
      "Build interactive prototypes testable with real users.",
      "Test on real devices and real networks in the target market.",
      "Optimize App Store and Google Play listings (ASO).",
    ],
    differentiators: [
      {
        label: "Designed for thumbs, not mice",
        body: "Touch zones, swipe gestures, and one-handed navigation are not details — they are the foundation. We design for how people actually use their phones, not for what looks good in a presentation.",
      },
      {
        label: "Tested on real devices, not emulators",
        body: "We test on actual phones on actual networks in actual cities. If the app doesn't work on your customer's phone, we haven't done our job.",
      },
      {
        label: "Launch is the beginning, not the end",
        body: "We monitor usage data after launch and propose monthly improvements based on real user behavior, not our assumptions.",
      },
    ],
    outcome: "An app users love from the first tap.",
    faq: [
      {
        question: "Do you build the app or just design it?",
        answer: "We handle the full design — user research, wireframes, UI, and interactive prototype. Development can be done in-house by us or with your dev team. We clarify this in the discovery session.",
      },
      {
        question: "How long does mobile app design take?",
        answer: "A simple app (five to eight screens) takes six to eight weeks for design. A medium-complexity app (ten to twenty screens) takes ten to fourteen weeks.",
      },
      {
        question: "Do you support both iOS and Android?",
        answer: "Yes. We design for both systems while respecting their interaction differences (navigation patterns, back gestures, button sizes). One design that works on both.",
      },
    ],
  },

  "brand-identity": {
    slug: "brand-identity",
    tagline: "A visual identity recognized before it is read — in Arabic and English.",
    problem:
      "The business owner orders a logo from a freelancer online. Gets a PNG file and good luck. No defined colors, no fonts, no usage guide. A year later, the Instagram account looks different from the website, and the website looks different from the business cards. The brand isn't recognized — it's guessed.",
    deliverables: [
      "Design a logo with multiple versions (primary, secondary, icon) and clear-space rules.",
      "Define a color palette with exact codes for print, screen, and digital.",
      "Select Arabic and English typefaces that carry the brand personality.",
      "Design visual patterns and a unified photography style.",
      "Deliver a comprehensive brand identity guide in Arabic and English.",
    ],
    differentiators: [
      {
        label: "We design both directions simultaneously",
        body: "The Arabic and English versions are siblings, not a parent and copy. We design them at the same time so each works with equal strength — no visual translation.",
      },
      {
        label: "A system, not a file",
        body: "We don't deliver just a logo. We deliver a system that answers every design question your team will ask: which color? which font? how much space? This speeds up every content piece that follows.",
      },
      {
        label: "Built for growth",
        body: "The identity we design works on a business card and on a billboard. If you're growing, your brand needs to scale with you without a rebuild.",
      },
    ],
    outcome: "A brand recognized before it is read.",
    faq: [
      {
        question: "What's the difference between a logo and a brand identity?",
        answer: "A logo is one symbol. A brand identity is the complete system: logo, colors, fonts, image style, and usage guide. A logo alone is not enough to build consistent visual recognition.",
      },
      {
        question: "How long does a full brand identity take?",
        answer: "Four to six weeks. Week one is discovery and research, weeks two and three are design and exploration, and the final weeks are refinement and delivery of the guide.",
      },
      {
        question: "Can you update an existing identity instead of starting from scratch?",
        answer: "Yes. If the current logo is strong but the application is inconsistent, we can build an identity system around it without changing it. We assess first and then recommend the best path.",
      },
    ],
  },

  "ecommerce-design": {
    slug: "ecommerce-design",
    tagline: "An online store built to sell — not to display.",
    problem:
      "The store owner opens a site on a ready-made platform, adds products, and waits. Seven out of ten visitors add something to the cart then leave. Shipping costs are a surprise at checkout. Local payment gateways aren't supported. The mobile experience is slow and confusing. The store exists — but it doesn't sell.",
    deliverables: [
      "Design product pages optimized for conversion with contextual images and objection handling.",
      "Build a smooth, mobile-optimized cart and checkout experience.",
      "Integrate local payment gateways (Mada, Tamara, Tabby, Apple Pay, cash on delivery).",
      "Integrate shipping providers (Aramex, SMSA, J&T).",
      "Deliver an easy dashboard to manage products, orders, and inventory.",
    ],
    differentiators: [
      {
        label: "Designed for the Saudi and Gulf market",
        body: "We integrate the payment and shipping options your local customer trusts. Mada is not an add-on — it is the default.",
      },
      {
        label: "Every pixel serves the sale",
        body: "We don't design beautiful pages and hope they sell. We build every element to reduce friction and increase conversion — from image order to buy-button placement.",
      },
      {
        label: "Abandoned cart recovery built in",
        body: "We set up automatic recovery messages via email and WhatsApp. This alone typically recovers ten to twenty percent of lost sales.",
      },
    ],
    outcome: "A store that sells while you are busy with something else.",
    faq: [
      {
        question: "Which platform do you build stores on?",
        answer: "We choose the platform based on store size and needs. For small to medium stores we use Shopify or Salla. For larger stores or custom requirements we build on WooCommerce or custom solutions. We recommend after understanding your case.",
      },
      {
        question: "How long does it take to build an online store?",
        answer: "A store with twenty to fifty products takes four to six weeks. Larger stores or those with custom integrations take eight to twelve weeks.",
      },
      {
        question: "Do you add the products or do I add them myself?",
        answer: "We add the first batch (up to fifty products) and train your team to add the rest. After handover, you manage products entirely from an easy dashboard.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    tagline: "Every riyal in your ads returns a measured result — or it doesn't get spent.",
    problem:
      "The business owner runs Google Ads and boosts Instagram posts without a clear funnel. The visitor lands on the homepage and gets lost. No proper tracking, no dedicated landing pages, and no plan for what happens after the click. The budget evaporates and the report is full of numbers that mean nothing.",
    deliverables: [
      "Build a complete marketing funnel: attract, capture, nurture, convert.",
      "Manage paid campaigns on Google and Meta with controlled budgets.",
      "Design dedicated landing pages for each campaign.",
      "Set up email campaigns that build relationships, not just sales.",
      "Deliver a monthly performance report in plain language: cost per lead, return on spend, and recommendations.",
    ],
    differentiators: [
      {
        label: "A full funnel, not a lone ad",
        body: "We don't run an ad without a dedicated landing page and a follow-up sequence. An ad alone doesn't sell — the complete system does.",
      },
      {
        label: "Budget follows data, not instinct",
        body: "We test with a small budget first, measure, then scale what works. We don't spend five thousand riyals on a campaign we haven't tested with five hundred first.",
      },
      {
        label: "We report on customers, not clicks",
        body: "Our report starts with the number of new customers and the cost of each one. Clicks and impressions are in the appendix — not the headline.",
      },
    ],
    outcome: "Every riyal spent on ads returns a measured result.",
    faq: [
      {
        question: "How much ad budget do I need to start?",
        answer: "We recommend a minimum of two to three thousand riyals per month as ad spend (separate from management fees). Less than that doesn't provide enough data to make smart decisions.",
      },
      {
        question: "When will I start seeing returns on ads?",
        answer: "Paid campaigns start generating results within the first week. But optimizing cost takes four to six weeks of data and testing. Month three is typically where cost stabilizes and real efficiency begins.",
      },
      {
        question: "Do you manage the ads or just set them up?",
        answer: "We manage campaigns fully: setup, daily monitoring, A/B testing, and continuous optimization. We send a weekly summary and a detailed monthly report.",
      },
      {
        question: "Which platforms do you advertise on?",
        answer: "Google Ads, Meta (Facebook and Instagram), TikTok Ads, and Snapchat Ads. We choose platforms based on your specific audience — we don't run ads on every platform because that scatters the budget.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const data: Record<Locale, Record<string, ServicePageData>> = { ar, en };

const slugs = Object.keys(en);

export function getServicePage(
  locale: Locale,
  slug: string,
): ServicePageData | undefined {
  return data[locale]?.[slug];
}

export function getAllServicePages(locale: Locale): ServicePageData[] {
  return Object.values(data[locale]);
}

export function getAllServiceSlugs(): string[] {
  return slugs;
}
