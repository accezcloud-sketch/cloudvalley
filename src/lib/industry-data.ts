import type { Locale } from "./i18n";

/*
 * Industry pages (/<locale>/industries/<slug>).
 *
 * Every claim on these pages is taken from what the eight service pages
 * already say (src/lib/service-data.ts and services.list in
 * src/lib/dictionaries.ts). No numbers, prices, timelines, clients or results
 * that the site does not already state, and none of its unverified figures.
 * Each `help` entry points at an existing service slug.
 */

export type IndustryProblem = {
  label: string;
  body: string;
};

export type IndustryHelp = {
  /** Slug of an existing service in services.list. */
  service: string;
  body: string;
};

export type IndustryFAQ = {
  question: string;
  answer: string;
};

export type IndustryPageData = {
  slug: string;
  /** Short sector name for navigation and breadcrumbs. */
  name: string;
  h1: string;
  /** <title>: search words first. */
  metaTitle: string;
  /** Meta description, 140 to 155 characters. */
  description: string;
  intro: string;
  problems: IndustryProblem[];
  help: IndustryHelp[];
  faq: IndustryFAQ[];
  /** Prefilled WhatsApp message. */
  waMessage: string;
};

/* ------------------------------------------------------------------ */
/*  Arabic                                                             */
/* ------------------------------------------------------------------ */

const ar: Record<string, IndustryPageData> = {
  clinics: {
    slug: "clinics",
    name: "العيادات",
    h1: "حلول تقنية وخدمات رقمية للعيادات في السعودية",
    metaTitle: "تصميم موقع عيادة وسيو وإدارة سوشيال ميديا في السعودية",
    description:
      "تصميم مواقع العيادات وتحسين الظهور في محركات البحث وصناعة المحتوى وإدارة السوشيال ميديا في السعودية، بالعربية أولاً، ليجدك المريض ويثق بك ويتواصل معك.",
    intro:
      "قبل أن يتصل المريض بالعيادة، يبحث عنها. يكتب في Google، ويفتح الموقع، ويتصفّح الحسابات، ثم يرسل رسالة على واتساب. في وادي السحاب نبني كل خطوة من هذه الخطوات للعيادات ونديرها، بالعربية أولاً، مع نسخة إنجليزية مكتوبة لقرّائها.",
    problems: [
      {
        label: "المريض يبحث فيجد غيرك",
        body: "يكتب المريض اسم العلاج أو نوع العيادة في Google بالكلمات التي يستخدمها فعلاً. فإذا لم يُبنَ الموقع للبحث، أو كانت كلماته مترجمة من الإنجليزية، ظهرت عيادة أخرى بدلاً منك.",
      },
      {
        label: "موقع لا يجيب عن الأسئلة الأساسية",
        body: "العنوان وساعات العمل والخدمات وطريقة الحجز صعبة الوصول، والنص العربي مكسور على الجوال، والصفحة بطيئة. فيغلقها المريض وينتقل إلى غيرها.",
      },
      {
        label: "الأسئلة نفسها طوال اليوم",
        body: "يردّ موظف الاستقبال على الرسائل نفسها واحدة تلو الأخرى في واتساب وإنستجرام: هل أنتم مفتوحون اليوم؟ أين موقعكم؟ هل تقدّمون هذه الخدمة؟ وهذا وقت يُقتطع من المرضى الحاضرين أمامه.",
      },
      {
        label: "حسابات تصمت فجأة",
        body: "تنشط الحسابات فترة ثم تتوقف. ومن يزور الصفحة يرى منشورات قديمة، ويتساءل إن كانت العيادة ما زالت تعمل.",
      },
    ],
    help: [
      {
        service: "website-design",
        body: "موقع مصمّم لعيادتك من الصفر بتخطيط عربي صحيح من اليمين إلى اليسار، مهيّأ لمحركات البحث من أول سطر كود، ومحسّن ليُحمَّل بسرعة على شبكات الجوال. ونُدرّب فريقك على تحديث الخدمات والمحتوى دون معرفة تقنية.",
      },
      {
        service: "search-engine-optimization",
        body: "تدقيق تقني مع خطة إصلاح مرتّبة حسب الأولوية، وبحث كلمات مفتاحية باللهجة المحلية التي يكتب بها المرضى، وبيانات منظّمة (Schema) لكل صفحة. ويصلك تقرير شهري بلغة واضحة: ما تحسّن، وما لم يتحسّن، والخطوة التالية.",
      },
      {
        service: "content-production",
        body: "خطة محتوى شهرية مرتبطة بأهدافك وبالمواسم، تُكتب مسوّدتها بالذكاء الاصطناعي ثم يحرّرها كاتب بشري تحريرًا كاملاً. ولا يُنشر شيء قبل موافقتك، وهذا مهم حين يكون الموضوع صحيًا.",
      },
      {
        service: "social-media-management",
        body: "تقويم محتوى أسبوعي تراجعه وتعتمده قبل النشر، وتصميم مخصّص لكل منصة، وردود تلقائية على الأسئلة التي يكرّرها المرضى. وجلسات تنسيق منتظمة معك تُبقي المنشورات متوافقة مع خطط العيادة.",
      },
    ],
    faq: [
      {
        question: "هل يستطيع فريق العيادة تحديث الموقع بعد الإطلاق؟",
        answer: "نعم. نبني الموقع على نظام إدارة محتوى يمكن استخدامه دون معرفة تقنية، وندرّب فريقك عليه، ونسلّمك دليلاً مكتوبًا بالعربية يشرح كل خطوة.",
      },
      {
        question: "هل نعتمد منشورات السوشيال ميديا قبل نشرها؟",
        answer: "نعم. في البداية نراجع كل منشور معك حتى نضبط الأسلوب. بعد ذلك تعتمد تقويم الأسبوع مرة واحدة، ونتولّى نحن النشر.",
      },
      {
        question: "هل تعملون بالعربية والإنجليزية؟",
        answer: "نعم. نصمّم ونكتب بالعربية أولاً، ثم نُعدّ نسخة إنجليزية مكتوبة لجمهورها، لا ترجمة حرفية.",
      },
    ],
    waMessage: "أود الاستفسار عن خدماتكم للعيادات.",
  },

  retail: {
    slug: "retail",
    name: "المحلات والمتاجر الإلكترونية",
    h1: "حلول تقنية وخدمات رقمية للمحلات والمتاجر الإلكترونية في السعودية",
    metaTitle: "تصميم متجر إلكتروني وسيو وإعلانات للمحلات في السعودية",
    description:
      "تصميم المتاجر الإلكترونية وتحسين الظهور في البحث والإعلانات والهوية التجارية للمحلات في السعودية، مع ربط وسائل الدفع والشحن المحلية التي يثق بها عملاؤك.",
    intro:
      "سواء كنت تبيع من محلّ أو عبر الإنترنت أو من الاثنين معًا، فعميلك اليوم يقارن ويسأل ويدفع من جواله. في وادي السحاب نصمّم متاجر إلكترونية مبنية للبيع، ونربطها بوسائل الدفع والشحن التي يتوقّعها العميل في السعودية، ونوصل إليها الزوّار المناسبين عبر البحث والإعلانات.",
    problems: [
      {
        label: "سلّة تمتلئ ثم تُترك",
        body: "يضيف الزائر المنتجات إلى السلة ثم يغادر قبل الدفع. تظهر تكلفة الشحن مفاجأةً في الخطوة الأخيرة، أو تكون خطوات الشراء بطيئة ومربكة على الجوال.",
      },
      {
        label: "وسيلة الدفع التي يريدها العميل غير موجودة",
        body: "يبحث العميل عن مدى أو Apple Pay أو التقسيط أو الدفع عند الاستلام. وحين لا يجد الخيار الذي يثق به، تتوقّف عملية الشراء عند الخطوة الأخيرة.",
      },
      {
        label: "ميزانية إعلانات بلا وجهة",
        body: "تقود الإعلانات والمنشورات المموّلة الزائر إلى الصفحة الرئيسية بلا مسار واضح، ولا صفحة هبوط مخصّصة، ولا تتبّع سليم. فتُصرف الميزانية ولا يخبرك التقرير من اشترى.",
      },
      {
        label: "محلّ لا يظهر في البحث",
        body: "يبحث الناس عن المنتج أو المحلّ بالكلمات التي يستخدمونها كل يوم. فإذا لم تُبنَ صفحات متجرك لهذه العبارات، ذهبت الزيارة إلى منافسك.",
      },
    ],
    help: [
      {
        service: "ecommerce-design",
        body: "صفحات منتجات مصمّمة لتحويل الزائر إلى مشترٍ، وتجربة سلّة ودفع محسّنة للجوال، وتكامل مع بوابات الدفع المحلية (مدى، تمارا، تابي، Apple Pay، الدفع عند الاستلام) وشركات الشحن (أرامكس، SMSA، J&T). مع رسائل تلقائية لاسترداد السلال المتروكة عبر البريد وواتساب، ولوحة تحكّم سهلة للمنتجات والطلبات والمخزون.",
      },
      {
        service: "digital-marketing",
        body: "قمع تسويقي كامل بدل إعلان منفرد: حملات مدفوعة على Google وMeta بميزانية مُحكمة، وصفحة هبوط مخصّصة لكل حملة، وحملات بريد إلكتروني تبني علاقة مع العميل لا مجرّد بيع. ويصلك تقرير شهري بتكلفة العميل وعائد الإنفاق والخطوة التالية.",
      },
      {
        service: "search-engine-optimization",
        body: "تدقيق تقني مع خطة إصلاح مرتّبة حسب الأولوية، وبحث كلمات مفتاحية باللهجات المحلية، وبيانات منظّمة لكل صفحة، ومحتوى مبني على ما يبحث عنه المتسوّقون فعلاً.",
      },
      {
        service: "brand-identity",
        body: "شعار بنسخه المختلفة، ولوحة ألوان بأكواد دقيقة للطباعة والشاشة والرقمي، وخطوط عربية وإنجليزية، يجمعها دليل هوية واحد. فيظهر المتجر والمحلّ والحسابات بصورة واحدة.",
      },
    ],
    faq: [
      {
        question: "على أي منصة تبنون المتجر؟",
        answer: "نختار المنصة حسب حجم المتجر واحتياجاته. للمتاجر الصغيرة والمتوسطة نستخدم Shopify أو Salla، وللمتاجر الأكبر أو ذات المتطلبات الخاصة نبني على WooCommerce أو حلول مخصّصة. ونوصي بعد أن نفهم حالتك.",
      },
      {
        question: "ما وسائل الدفع والشحن التي تربطونها بالمتجر؟",
        answer: "بوابات الدفع المحلية، ومنها مدى وتمارا وتابي وApple Pay والدفع عند الاستلام، وشركات الشحن، ومنها أرامكس وSMSA وJ&T.",
      },
      {
        question: "هل تضيفون المنتجات أم نضيفها نحن؟",
        answer: "نضيف الدفعة الأولى من المنتجات وندرّب فريقك على إضافة الباقي. وبعد التسليم تدير المنتجات والطلبات والمخزون بنفسك من لوحة تحكّم سهلة.",
      },
    ],
    waMessage: "أود الاستفسار عن خدماتكم للمحلات والمتاجر الإلكترونية.",
  },

  restaurants: {
    slug: "restaurants",
    name: "المطاعم والمقاهي",
    h1: "حلول تقنية وخدمات رقمية للمطاعم والمقاهي في السعودية",
    metaTitle: "إدارة سوشيال ميديا وإعلانات وهوية للمطاعم والمقاهي في السعودية",
    description:
      "إدارة السوشيال ميديا وصناعة المحتوى والإعلانات والهوية التجارية للمطاعم والمقاهي في السعودية، بخطة واحدة وبالعربية أولاً، ليعرفك من يبحث عن مكان يقصده.",
    intro:
      "كثيرًا ما يختار الناس مطعمهم أو مقهاهم مما يرونه على جوالهم: منشور، أو مقطع قصير، أو صورة شاركها صديق. في وادي السحاب نخطّط هذا الحضور ونصمّمه ونديره للمطاعم والمقاهي، حتى يشبه ما يراه الناس على الإنترنت ما تقدّمه لهم فعلاً.",
    problems: [
      {
        label: "حسابات تنشط ثم تختفي",
        body: "تنشط الحسابات مع الافتتاح ثم تهدأ، وينشر أحد أفراد الفريق حين يجد وقتًا. ومن دون خطة يبدو الحساب مهجورًا لمن يبحث عن مكان يذهب إليه الليلة.",
      },
      {
        label: "الأسئلة نفسها في كل الرسائل",
        body: "هل أنتم مفتوحون الآن؟ أين موقعكم بالضبط؟ هل تقبلون الحجز؟ أين قائمة الطعام؟ تتراكم الرسائل في أوقات الذروة، حين لا يجد أحد وقتًا للرد.",
      },
      {
        label: "شكل يتغيّر من مكان لآخر",
        body: "اللوحة والحساب والموقع، لكلٍّ منها ألوان وخطوط مختلفة. فيصعب التعرّف على المكان على الإنترنت، حتى على من زاره من قبل.",
      },
      {
        label: "منشورات مموّلة بلا خطة",
        body: "تُموَّل المنشورات لكل الناس بلا جمهور محدّد، ولا صفحة هبوط، ولا طريقة لمعرفة ما عاد به الإنفاق.",
      },
    ],
    help: [
      {
        service: "social-media-management",
        body: "تقويم محتوى مرئي أسبوعي تعتمده قبل النشر، وتصميم مخصّص لكل منصة لا إعادة تحجيم للصورة نفسها، وردود تلقائية على الأسئلة التي يكرّرها العملاء. أما التفاعل الحقيقي والشكاوى فيتولاها بشر لا أتمتة.",
      },
      {
        service: "content-production",
        body: "خطة شهرية للمنشورات والمقالات والمقاطع القصيرة، مرتبطة بأهدافك وبالمواسم مثل رمضان والأعياد. تُكتب مسوّدتها بالذكاء الاصطناعي ويحرّرها كاتب بشري بعربية تناسب جمهورك. أنت توافق، ونحن نجدول وننشر.",
      },
      {
        service: "brand-identity",
        body: "شعار بنسخه الأساسية والثانوية والأيقونة، ولوحة ألوان بأكواد دقيقة للطباعة والشاشة، وخطوط عربية وإنجليزية، وأسلوب تصوير موحّد، يجمعها كلها دليل هوية واحد. وتُطبَّق الهوية بالطريقة نفسها على كل القنوات.",
      },
      {
        service: "digital-marketing",
        body: "حملات على المنصات التي يقضي فيها عملاؤك وقتهم، ومنها Google وMeta وTikTok وSnapchat، نختارها حسب جمهورك ولا نعلن في كل مكان. لكل حملة صفحة هبوط خاصة، ونختبر بميزانية صغيرة قبل التوسّع، ويصلك تقرير شهري بتكلفة العميل والخطوة التالية.",
      },
    ],
    faq: [
      {
        question: "على أي منصات تعلنون؟",
        answer: "نعلن على Google Ads وMeta (فيسبوك وإنستجرام) وTikTok Ads وSnapchat Ads، ونختار المنصات حسب جمهورك، لأن الإعلان على كل منصة يبعثر الميزانية.",
      },
      {
        question: "ماذا يحدث إذا وصلنا تعليق سلبي؟",
        answer: "لدينا بروتوكول تصعيد. نردّ على التعليقات السلبية العادية بأسلوب متّفق عليه معك مسبقًا. أما الأزمات الحقيقية فنُبلغك بها فورًا ونُعدّ الرد معك قبل النشر.",
      },
      {
        question: "هل يمكنكم البناء على شعارنا الحالي بدل البدء من الصفر؟",
        answer: "نعم. إذا كان الشعار الحالي قويًا لكن تطبيقه غير متّسق، نبني نظام هوية حوله دون تغييره. نقيّم أولاً ثم نوصي بالمسار الأنسب.",
      },
    ],
    waMessage: "أود الاستفسار عن خدماتكم للمطاعم والمقاهي.",
  },
};

/* ------------------------------------------------------------------ */
/*  English                                                            */
/* ------------------------------------------------------------------ */

const en: Record<string, IndustryPageData> = {
  clinics: {
    slug: "clinics",
    name: "Clinics",
    h1: "IT and digital services for clinics in Saudi Arabia",
    metaTitle: "Clinic website, SEO and social media in Saudi Arabia",
    description:
      "Clinic websites, search optimization, content and social media in Saudi Arabia, built Arabic first so patients can find you, trust you and get in touch.",
    intro:
      "Before a patient calls a clinic, they look it up. They search on Google, open the website, check the accounts and send a WhatsApp message. Cloud Valley builds and runs each of those steps for clinics, in Arabic first, with an English version written for its own readers.",
    problems: [
      {
        label: "Patients search and find someone else",
        body: "A patient types a treatment or a type of clinic into Google, in the words they actually use. If the site was never built for search, or its keywords were translated from English, another clinic shows up instead.",
      },
      {
        label: "A website that does not answer the basic questions",
        body: "The address, working hours, services and how to book are hard to find, the Arabic text breaks on mobile, and the page is slow to load. The patient closes it and moves on.",
      },
      {
        label: "The same questions, all day",
        body: "Reception answers the same messages one by one on WhatsApp and Instagram: are you open today, where are you, do you offer this service. That time comes out of the patients standing in front of them.",
      },
      {
        label: "Accounts that go quiet",
        body: "The accounts are busy for a while, then stop. A patient checking the page sees old posts and wonders whether the clinic is still open.",
      },
    ],
    help: [
      {
        service: "website-design",
        body: "A website designed for your clinic from scratch, with a proper Arabic right-to-left layout, structured for search from the first line of code and optimized to load quickly on mobile networks. Your team is trained to update services and content without technical knowledge.",
      },
      {
        service: "search-engine-optimization",
        body: "A technical audit with a fix plan in order of priority, keyword research in the local Arabic that patients type, and structured data (Schema) on every page. A monthly report in plain language says what improved, what did not, and the next step.",
      },
      {
        service: "content-production",
        body: "A monthly content plan tied to your goals and the seasons, drafted with AI and then fully edited by a human writer. Nothing is published until you approve it, which matters when the subject is health.",
      },
      {
        service: "social-media-management",
        body: "A weekly content calendar you review and approve before anything goes live, content designed for each platform, and auto-replies for the questions patients ask most often. Regular working sessions with you keep the posts in step with the clinic's plans.",
      },
    ],
    faq: [
      {
        question: "Can our staff update the website after launch?",
        answer: "Yes. The site is built on a content management system you can use without technical knowledge. We train your team and hand over a written guide in Arabic that covers every step.",
      },
      {
        question: "Do we approve social media posts before they go live?",
        answer: "Yes. At the start we review every post with you until the voice is right. After that you approve the week's calendar once, and we handle publishing.",
      },
      {
        question: "Do you work in Arabic and English?",
        answer: "Yes. We design and write in Arabic first, then prepare an English version written for its own audience, not a literal translation.",
      },
    ],
    waMessage: "I'd like to ask about your services for clinics.",
  },

  retail: {
    slug: "retail",
    name: "Shops and online stores",
    h1: "IT and digital services for shops and online stores in Saudi Arabia",
    metaTitle: "Online store design, SEO and ads for shops in Saudi Arabia",
    description:
      "Online store design, search optimization, ads and brand identity for shops in Saudi Arabia, with the local payment and shipping options customers trust.",
    intro:
      "Whether you sell from a shop, online or both, your customers compare, ask and pay on their phones. Cloud Valley designs online stores built to sell, connects the payment and shipping options people in Saudi Arabia expect, and brings the right visitors to them through search and ads.",
    problems: [
      {
        label: "Carts that fill up, then get left",
        body: "Visitors add products to the cart and leave before paying. Shipping costs appear as a surprise at the last step, or checkout is slow and confusing on a phone.",
      },
      {
        label: "The payment method the customer wants is missing",
        body: "Customers look for Mada, Apple Pay, paying in instalments or cash on delivery. When the option they trust is not there, the purchase stops at the last step.",
      },
      {
        label: "Ad spend with nowhere to go",
        body: "Ads and boosted posts send people to the home page with no clear path, no dedicated landing page and no proper tracking. The budget is spent and the report cannot tell you who bought.",
      },
      {
        label: "A shop that does not show up in search",
        body: "People search for a product or a shop in the words they use every day. If your store's pages were not built for those searches, the visit goes to a competitor.",
      },
    ],
    help: [
      {
        service: "ecommerce-design",
        body: "Product pages designed to turn visitors into buyers, a cart and checkout optimized for mobile, and integration with local payment gateways (Mada, Tamara, Tabby, Apple Pay, cash on delivery) and shipping providers (Aramex, SMSA, J&T). Automatic abandoned cart messages by email and WhatsApp, and an easy dashboard for products, orders and inventory.",
      },
      {
        service: "digital-marketing",
        body: "A complete funnel instead of a lone ad: paid campaigns on Google and Meta with controlled budgets, a dedicated landing page for each campaign, and email campaigns that build a relationship with customers, not just sales. A monthly report covers cost per lead, return on spend and the next step.",
      },
      {
        service: "search-engine-optimization",
        body: "A technical audit with a prioritized fix plan, keyword research in local Arabic dialects, structured data on every page, and content built around what shoppers are actually searching for.",
      },
      {
        service: "brand-identity",
        body: "A logo in its different versions, a color palette with exact codes for print, screen and digital, and Arabic and English typefaces, all in one brand guide. Your store, your shop and your accounts then look like the same business.",
      },
    ],
    faq: [
      {
        question: "Which platform will my store be built on?",
        answer: "We choose based on the store's size and needs. For small and medium stores we use Shopify or Salla. For larger stores or custom requirements we build on WooCommerce or a custom solution. We recommend once we understand your case.",
      },
      {
        question: "Which payment and shipping options can you connect?",
        answer: "Local payment gateways including Mada, Tamara, Tabby, Apple Pay and cash on delivery, and shipping providers including Aramex, SMSA and J&T.",
      },
      {
        question: "Do you add the products, or do we?",
        answer: "We add the first batch of products and train your team to add the rest. After handover you manage products, orders and inventory yourself from an easy dashboard.",
      },
    ],
    waMessage: "I'd like to ask about your services for shops and online stores.",
  },

  restaurants: {
    slug: "restaurants",
    name: "Restaurants and cafés",
    h1: "IT and digital services for restaurants and cafés in Saudi Arabia",
    metaTitle: "Restaurant and café social media, ads and branding in Saudi Arabia",
    description:
      "Social media, content, ads and brand identity for restaurants and cafés in Saudi Arabia, planned and run as one system, with content in Arabic first.",
    intro:
      "People often choose where to eat or have coffee from what they see on their phone: a post, a short video, a photo a friend shared. Cloud Valley plans, designs and runs that presence for restaurants and cafés, so what people see online matches what you actually serve.",
    problems: [
      {
        label: "Accounts that post in bursts",
        body: "The accounts are busy around the opening, then go quiet, and someone on the team posts when there is time. Without a plan, the account looks abandoned to people deciding where to go tonight.",
      },
      {
        label: "The same questions in every inbox",
        body: "Are you open now, where exactly are you, do you take bookings, where is the menu? The messages pile up at the busiest hours, when nobody has time to reply.",
      },
      {
        label: "A look that changes from place to place",
        body: "The sign, the account and the website each use different colors and fonts. The place is hard to recognize online, even for people who have been there.",
      },
      {
        label: "Boosted posts without a plan",
        body: "Posts are boosted to everyone, with no defined audience, no landing page and no way to tell what the money brought in.",
      },
    ],
    help: [
      {
        service: "social-media-management",
        body: "A weekly visual content calendar you approve before publishing, content designed for each platform rather than the same image resized, and auto-replies for the questions customers ask most often. Real conversations and complaints are handled by people, not automation.",
      },
      {
        service: "content-production",
        body: "A monthly plan for posts, articles and short videos, tied to your goals and to seasons such as Ramadan and Eid. Drafted with AI and edited by a human writer, in Arabic that suits your audience. You approve, we schedule and publish.",
      },
      {
        service: "brand-identity",
        body: "A logo in primary, secondary and icon versions, a color palette with exact codes for print and screen, Arabic and English typefaces and a unified photography style, all in one brand guide. The identity is then applied the same way across every channel.",
      },
      {
        service: "digital-marketing",
        body: "Campaigns on the platforms where your customers spend their time, including Google, Meta, TikTok and Snapchat, chosen for your audience rather than run everywhere. Each campaign gets its own landing page, budgets are tested small before they grow, and a monthly report shows the cost per customer and the next step.",
      },
    ],
    faq: [
      {
        question: "Which platforms do you advertise on?",
        answer: "Google Ads, Meta (Facebook and Instagram), TikTok Ads and Snapchat Ads. We choose the platforms based on your audience, because running ads on every platform scatters the budget.",
      },
      {
        question: "What happens if we get a negative comment?",
        answer: "We have an escalation protocol. Ordinary negative comments get a reply in a tone agreed with you in advance. For a real crisis we tell you straight away and prepare the response with you before anything is published.",
      },
      {
        question: "Can you build on our current logo instead of starting over?",
        answer: "Yes. If the current logo is strong but applied inconsistently, we can build an identity system around it without changing it. We assess first, then recommend the best path.",
      },
    ],
    waMessage: "I'd like to ask about your services for restaurants and cafés.",
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const data: Record<Locale, Record<string, IndustryPageData>> = { ar, en };

const slugs = Object.keys(en);

export function getAllIndustrySlugs(): string[] {
  return slugs;
}

export function getIndustry(
  locale: Locale,
  slug: string,
): IndustryPageData | undefined {
  return data[locale]?.[slug];
}

/** Short list for menus and footers: [{ slug, name }], in display order. */
export function industryNav(locale: Locale): { slug: string; name: string }[] {
  return slugs.map((slug) => ({ slug, name: data[locale][slug].name }));
}
