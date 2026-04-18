import type { Locale } from "./i18n";

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export type BlogPostData = {
  slug: string;
  description: string;
  body: BlogSection[];
  serviceNum: string;
};

/* ------------------------------------------------------------------ */
/*  English posts                                                      */
/* ------------------------------------------------------------------ */

const en: Record<string, BlogPostData> = {
  "web-app-design": {
    slug: "web-app-design",
    description:
      "Your website is not a brochure — it is your best salesperson. Learn why custom web design matters for Arab businesses and how a well-built site converts visitors into leads around the clock.",
    serviceNum: "01",
    body: [
      {
        type: "heading",
        text: "Your website works while you sleep",
      },
      {
        type: "paragraph",
        text: "Most business owners in the Arab world treat their website like a digital business card: a logo, a phone number, and a generic stock photo. They spend thousands on rent, signage, and employee salaries, but hand their online presence to a template that looks like every other template on the internet.",
      },
      {
        type: "paragraph",
        text: "Here is the problem with that approach: a template does not understand your customer. It does not speak their language — literally. Arabic typography is an afterthought in ninety percent of website templates. Text runs left-to-right in places it should not. Fonts render poorly. The mobile experience is broken. And every visitor who bounces is a lead you paid for but never captured.",
      },
      {
        type: "heading",
        text: "What a custom-built site actually delivers",
      },
      {
        type: "paragraph",
        text: "A properly designed website does three things a template cannot:",
      },
      {
        type: "list",
        items: [
          "It loads in under two seconds on a mobile connection in Riyadh, Jeddah, or Cairo — because performance is not optional, it is revenue.",
          "It speaks fluent Arabic with correct right-to-left layout, proper line heights, and typefaces designed for Arabic letterforms — not Latin fonts with Arabic characters bolted on.",
          "It is structured for search engines from day one, with semantic HTML, clean URLs, and metadata that Google can actually read.",
        ],
      },
      {
        type: "paragraph",
        text: "These are not luxury features. They are the baseline for a site that converts. Everything else — animations, interactions, brand storytelling — is built on top of this foundation.",
      },
      {
        type: "heading",
        text: "The real cost of a cheap website",
      },
      {
        type: "paragraph",
        text: "We see this pattern repeatedly: a business launches with a cheap template, then spends twelve months wondering why their Google Ads traffic does not convert. The answer is almost always the landing experience. Visitors arrive, see a generic page that does not speak to them, and leave.",
      },
      {
        type: "quote",
        text: "A website that costs five thousand riyals but converts at one percent will outperform a website that costs five hundred riyals and converts at zero point one percent — every single month, compounding.",
      },
      {
        type: "paragraph",
        text: "The math is straightforward. If your average customer lifetime value is ten thousand riyals, a one-percent improvement in conversion rate on a site that gets a thousand visitors per month means an additional hundred thousand riyals per year. The design investment pays for itself in the first quarter.",
      },
      {
        type: "heading",
        text: "What we build differently",
      },
      {
        type: "paragraph",
        text: "At Cloud Valley, every interface we ship starts with a content-first approach. We write the words before we draw the pixels. We test on real devices, on real networks, with real users. We do not hand over a Figma file and walk away — we deliver a working system that your team can manage.",
      },
      {
        type: "list",
        items: [
          "No templates. Every layout is drawn for your content and your audience.",
          "Full Arabic and right-to-left support, tested in both directions.",
          "SEO structure built in from the first commit — not patched on later.",
          "Training sessions so your team can update content without calling us.",
        ],
      },
      {
        type: "heading",
        text: "Is your site working for you?",
      },
      {
        type: "paragraph",
        text: "Open your website on your phone right now. Load it on a slow connection. Read the Arabic text. Try to find your services page in under three seconds. If any of that felt frustrating, your customers feel it too — and they have less patience than you do.",
      },
      {
        type: "paragraph",
        text: "A good website is not an expense. It is your quietest, most reliable employee — the one who never takes a day off and never forgets the pitch.",
      },
    ],
  },

  "search-optimization-seo": {
    slug: "search-optimization-seo",
    description:
      "SEO for Arabic websites is not the same as SEO in English. From keyword research in local dialects to technical performance, here is what actually moves the needle for businesses targeting Arab audiences.",
    serviceNum: "02",
    body: [
      {
        type: "heading",
        text: "Why Arabic SEO is a different discipline",
      },
      {
        type: "paragraph",
        text: "Most SEO advice on the internet is written for English-language markets. The tools are built for English. The case studies are in English. The keyword databases are overwhelmingly English. If you take that playbook and apply it to an Arabic website without adaptation, you will waste months chasing rankings that never come.",
      },
      {
        type: "paragraph",
        text: "Arabic search is structurally different. A single root word can generate dozens of valid search forms. Dialects vary dramatically between the Gulf, the Levant, and North Africa. A user in Saudi Arabia searches for services using words a user in Egypt would never type, and vice versa.",
      },
      {
        type: "heading",
        text: "The six mistakes we see most often",
      },
      {
        type: "list",
        items: [
          "Translating English keywords into formal Arabic instead of researching what people actually type.",
          "Ignoring dialect variations — a term that ranks in UAE Arabic may be invisible in Egyptian Arabic.",
          "Neglecting technical SEO: slow pages, missing structured data, broken mobile layouts.",
          "Publishing thin content to hit a keyword count instead of writing something genuinely useful.",
          "Skipping internal linking because the site only has five pages.",
          "Never updating published content, even when the information is two years out of date.",
        ],
      },
      {
        type: "heading",
        text: "Keyword research in Arabic: how to do it right",
      },
      {
        type: "paragraph",
        text: "The starting point is not a keyword tool — it is a conversation. What does your customer say when they describe their problem? How do they search for a solution? The answer is almost never the formal Arabic term. It is a colloquial phrase, sometimes mixed with English, sometimes misspelled.",
      },
      {
        type: "quote",
        text: "The best Arabic keywords are the ones your customer service team hears on WhatsApp every day. Start there.",
      },
      {
        type: "paragraph",
        text: "We start every SEO engagement by auditing the client's WhatsApp conversations, support tickets, and social media comments. These real-world phrases become the foundation of the keyword strategy — not a translated glossary from an English competitor.",
      },
      {
        type: "heading",
        text: "Technical performance is not optional",
      },
      {
        type: "paragraph",
        text: "Google's Core Web Vitals are the same regardless of language. A page that takes four seconds to load in Arabic is penalized the same as a page that takes four seconds to load in English. But Arabic sites carry extra technical burdens:",
      },
      {
        type: "list",
        items: [
          "RTL layout bugs that cause content shifts and poor CLS scores.",
          "Heavy Arabic web fonts that add hundreds of kilobytes if not subset properly.",
          "Incorrect hreflang tags that confuse Google about which version to show.",
          "Missing structured data because most schema markup tools default to English.",
        ],
      },
      {
        type: "paragraph",
        text: "Fixing these technical issues often delivers more ranking improvement in the first month than any amount of content creation.",
      },
      {
        type: "heading",
        text: "Content that ranks and converts",
      },
      {
        type: "paragraph",
        text: "The goal of SEO content is not to rank — it is to rank and then persuade the visitor to take action. A blog post that gets a thousand visitors and zero inquiries is a cost center, not an asset.",
      },
      {
        type: "paragraph",
        text: "Every piece of content we produce targets a specific search intent, answers the question better than the current top result, and ends with a clear next step. We measure success by leads generated, not by rankings achieved.",
      },
      {
        type: "heading",
        text: "The compounding effect",
      },
      {
        type: "paragraph",
        text: "SEO is the only marketing channel that gets cheaper over time. A well-written article published today can generate leads for years without additional spend. Paid ads stop the moment you stop paying. SEO compounds.",
      },
      {
        type: "paragraph",
        text: "For Arab businesses competing in markets where most competitors have not invested in proper Arabic SEO, the opportunity window is wide open. The question is not whether to start — it is how much ground you are willing to lose by waiting.",
      },
    ],
  },

  "content-production": {
    slug: "content-production",
    description:
      "Content that sells without selling — how AI-assisted content production delivers consistent, high-quality Arabic content that builds trust and drives leads without burning out your team.",
    serviceNum: "03",
    body: [
      {
        type: "heading",
        text: "The content problem most businesses face",
      },
      {
        type: "paragraph",
        text: "Every business owner knows they need content. Blog posts, social media updates, newsletters, video scripts. The advice is everywhere: publish consistently, add value, build trust. The problem is not understanding why — it is finding the capacity to do it.",
      },
      {
        type: "paragraph",
        text: "A small business in Riyadh does not have a content team. The founder writes a few posts in the first month, gets busy with operations, and the blog goes silent for six months. Sound familiar?",
      },
      {
        type: "heading",
        text: "Why most content fails",
      },
      {
        type: "paragraph",
        text: "Content fails for three reasons, and none of them have to do with quality:",
      },
      {
        type: "list",
        items: [
          "Inconsistency — publishing three articles one week and nothing for two months destroys audience trust and search rankings.",
          "No strategy — writing about whatever comes to mind instead of mapping content to the buyer journey.",
          "Wrong voice — content that reads like a press release or a translated English blog does not connect with Arab audiences.",
        ],
      },
      {
        type: "paragraph",
        text: "The solution is not to hire more writers. It is to build a system.",
      },
      {
        type: "heading",
        text: "How AI-assisted content production works",
      },
      {
        type: "paragraph",
        text: "We use AI as a first-draft engine, not as a replacement for human judgment. The workflow looks like this:",
      },
      {
        type: "list",
        items: [
          "A monthly content plan aligned with your business goals and seasonal patterns.",
          "AI generates first drafts based on detailed briefs, target keywords, and your brand voice guidelines.",
          "A human editor rewrites, refines, and fact-checks every piece before it goes live.",
          "Visual design is created to match your brand identity across all channels.",
          "Publishing and scheduling happen automatically — you approve, we handle the rest.",
        ],
      },
      {
        type: "quote",
        text: "AI writes the skeleton. A human writer adds the soul. The result is content that sounds like you, published on time, every time.",
      },
      {
        type: "heading",
        text: "Arabic content deserves better",
      },
      {
        type: "paragraph",
        text: "Most AI-generated Arabic content is terrible. It reads like a machine translation of English ideas, full of formal constructions no one uses in real life. The vocabulary is stiff. The rhythm is off. Readers can tell within two sentences.",
      },
      {
        type: "paragraph",
        text: "Good Arabic content writing requires understanding register — when to use Modern Standard Arabic, when to lean colloquial, when to mix. It requires knowing that a Saudi audience responds differently than an Egyptian one. It requires caring about typography, about the way a paragraph breaks on a mobile screen, about the spacing between Arabic characters.",
      },
      {
        type: "paragraph",
        text: "This is why the human editor in our workflow is not optional. AI gives us speed. The editor gives us quality. Together, they deliver what neither could alone: consistent, high-volume content that actually reads well.",
      },
      {
        type: "heading",
        text: "Content as a lead engine",
      },
      {
        type: "paragraph",
        text: "The best content does not just attract visitors — it pre-qualifies them. A business owner who reads your article about common SEO mistakes and reaches out to fix theirs is already educated, already trusts you, and already understands the value. The sales conversation is shorter and the close rate is higher.",
      },
      {
        type: "paragraph",
        text: "We measure content success by the leads it generates, not by the likes it collects. Every article, every post, every video has a purpose tied to a business outcome. Vanity metrics are not in the plan.",
      },
      {
        type: "heading",
        text: "Start with a system, not a sprint",
      },
      {
        type: "paragraph",
        text: "The businesses that win at content are not the ones that produce the most — they are the ones that never stop. A single well-written article per week, published consistently for a year, will outperform a burst of twenty articles followed by silence.",
      },
      {
        type: "paragraph",
        text: "Build the system first. The results follow.",
      },
    ],
  },

  "social-media-management": {
    slug: "social-media-management",
    description:
      "Social media management is not about posting every day — it is about building a system that runs your accounts professionally without consuming your time. Here is how we turn chaos into a calm, repeatable process.",
    serviceNum: "04",
    body: [
      {
        type: "heading",
        text: "Social media is not a side task",
      },
      {
        type: "paragraph",
        text: "Every business owner who has tried to manage their own social media knows the cycle: you post enthusiastically for two weeks, reply to every comment, experiment with stories and reels. Then a project deadline hits, a client escalates, and the accounts go dark. When you return three weeks later, the algorithm has forgotten you exist.",
      },
      {
        type: "paragraph",
        text: "Social media management is a full-time discipline. Treating it as something the intern handles between other tasks is why most business accounts look abandoned by March.",
      },
      {
        type: "heading",
        text: "What professional management looks like",
      },
      {
        type: "paragraph",
        text: "The difference between an amateur social media presence and a professional one is not creativity — it is consistency and systems. Professional management means:",
      },
      {
        type: "list",
        items: [
          "A visual content calendar published every week, reviewed and approved before anything goes live.",
          "Content designed specifically for each platform — not the same image resized four times.",
          "Auto-replies for common questions so customers are never left waiting.",
          "Monthly performance analysis with clear metrics: reach, engagement, click-throughs, and actual leads generated.",
          "Bi-weekly working sessions with you to align content with upcoming promotions, events, or product launches.",
        ],
      },
      {
        type: "heading",
        text: "The hidden cost of doing it yourself",
      },
      {
        type: "paragraph",
        text: "Business owners often think managing social media saves money. Let us run the numbers. If you spend eight hours per week on content creation, scheduling, replying, and analytics — and your time is worth two hundred riyals per hour — you are spending sixty-four hundred riyals per month on social media. You could hire a professional system for less and get better results.",
      },
      {
        type: "quote",
        text: "The most expensive social media manager is the business owner who does it themselves — because their time has the highest opportunity cost.",
      },
      {
        type: "heading",
        text: "Automation without losing the human touch",
      },
      {
        type: "paragraph",
        text: "People worry that automation means robotic replies and soulless content. It does not have to. The parts we automate are the parts that should be automated: scheduling, recurring replies to FAQs, performance tracking, and report generation.",
      },
      {
        type: "paragraph",
        text: "The parts that stay human are the parts that matter: brand voice, creative direction, community engagement, and crisis response. A customer who sends a genuine complaint needs a human reply. A customer who asks about your working hours can get an instant, accurate auto-reply — and they prefer it that way.",
      },
      {
        type: "heading",
        text: "Measuring what matters",
      },
      {
        type: "paragraph",
        text: "Follower count is the most overrated metric in social media. A business account with two thousand engaged followers who buy will always outperform an account with fifty thousand followers who scroll past.",
      },
      {
        type: "list",
        items: [
          "We track engagement rate, not follower count.",
          "We track click-throughs to your website, not impressions.",
          "We track leads generated from social, not likes received.",
          "We track response time to customer inquiries, not post frequency.",
        ],
      },
      {
        type: "paragraph",
        text: "Every metric ties back to a business outcome. If a metric does not affect revenue or customer satisfaction, we do not report on it.",
      },
      {
        type: "heading",
        text: "One system, not ten tools",
      },
      {
        type: "paragraph",
        text: "Most businesses cobble together a mix of scheduling tools, analytics dashboards, and spreadsheets. They end up spending more time managing the tools than managing the content. We replace that patchwork with a single, unified system: one calendar, one approval flow, one analytics report, one point of contact.",
      },
      {
        type: "paragraph",
        text: "The result is an account that looks like a team of ten stands behind it — even when it is just us and a well-built system.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Arabic posts                                                       */
/* ------------------------------------------------------------------ */

const ar: Record<string, BlogPostData> = {
  "web-app-design": {
    slug: "web-app-design",
    description:
      "موقعك ليس كتيّبًا رقميًا — بل هو أفضل مندوب مبيعات لديك. تعرَّف على أهمية التصميم المخصّص للمواقع العربية وكيف يحوّل الموقع الجيد الزوّار إلى عملاء على مدار الساعة.",
    serviceNum: "01",
    body: [
      {
        type: "heading",
        text: "موقعك يعمل وأنت نائم",
      },
      {
        type: "paragraph",
        text: "أغلب أصحاب الأعمال في العالم العربي يتعاملون مع موقعهم الإلكتروني كبطاقة أعمال رقمية: شعار، ورقم هاتف، وصورة عامة من الإنترنت. يُنفقون آلاف الريالات على الإيجار واللوحات الإعلانية ورواتب الموظفين، لكنهم يُسلّمون حضورهم الرقمي لقالبٍ جاهزٍ يشبه كلَّ قالبٍ آخر.",
      },
      {
        type: "paragraph",
        text: "المشكلة أن القالب لا يفهم عميلك. لا يتحدث لغته — حرفيًا. الخط العربي فكرة ثانوية في تسعين بالمئة من القوالب. النصوص تسير من اليسار لليمين في أماكن لا ينبغي لها ذلك. الخطوط تظهر بشكل سيئ. تجربة الجوال معطّلة. وكل زائرٍ يغادر هو عميلٌ محتمل دفعتَ ثمنه ولم تحصل عليه.",
      },
      {
        type: "heading",
        text: "ما يقدّمه الموقع المخصّص فعلاً",
      },
      {
        type: "paragraph",
        text: "الموقع المصمَّم بعناية يفعل ثلاثة أشياء لا يستطيعها أي قالب:",
      },
      {
        type: "list",
        items: [
          "يُحمَّل في أقل من ثانيتين على شبكة جوال في الرياض أو جدة أو القاهرة — لأن السرعة ليست ترفًا، بل إيراد.",
          "يتحدث عربيةً سليمة بتخطيط صحيح من اليمين لليسار، وارتفاعات أسطر مناسبة، وخطوط مصمَّمة للحروف العربية — لا خطوط لاتينية أُلصقت بها أحرف عربية.",
          "مُهيَّأ لمحركات البحث من اليوم الأول، ببنية HTML نظيفة، وروابط واضحة، وبيانات وصفية يستطيع Google قراءتها.",
        ],
      },
      {
        type: "paragraph",
        text: "هذه ليست ميزات فاخرة. هي الحد الأدنى لموقع يُحوِّل الزوار لعملاء. كل شيء آخر — الحركات، التفاعلات، سرد قصة العلامة — يُبنى فوق هذا الأساس.",
      },
      {
        type: "heading",
        text: "التكلفة الحقيقية للموقع الرخيص",
      },
      {
        type: "paragraph",
        text: "نرى هذا النمط باستمرار: ينطلق مشروعٌ بقالب رخيص، ثم يقضي اثني عشر شهرًا يتساءل لماذا لا يتحوّل زوار إعلانات Google إلى عملاء. الجواب دائمًا تقريبًا هو تجربة الهبوط. يصل الزائر، يرى صفحة عامّة لا تخاطبه، فيغادر.",
      },
      {
        type: "quote",
        text: "موقعٌ بخمسة آلاف ريال يحوّل واحدًا بالمئة سيتفوّق كل شهر على موقعٍ بخمسمئة ريال يحوّل واحدًا من الألف — والفرق يتراكم.",
      },
      {
        type: "paragraph",
        text: "الحساب بسيط. إذا كانت قيمة العميل الواحد عشرة آلاف ريال، فإن تحسّنًا بنسبة واحد بالمئة في معدّل التحويل على موقع يستقبل ألف زائر شهريًا يعني مئة ألف ريال إضافية في السنة. استثمار التصميم يسترد نفسه في الربع الأول.",
      },
      {
        type: "heading",
        text: "ما نبنيه بطريقة مختلفة",
      },
      {
        type: "paragraph",
        text: "في وادي السحاب، كل واجهة نُسلّمها تبدأ بالمحتوى أولاً. نكتب الكلمات قبل أن نرسم البكسلات. نختبر على أجهزة حقيقية، وشبكات حقيقية، ومستخدمين حقيقيين. لا نُسلّم ملف تصميم ونمشي — نُسلّم نظامًا يعمل يستطيع فريقك إدارته.",
      },
      {
        type: "list",
        items: [
          "لا قوالب. كل تخطيط مرسوم لمحتواك وجمهورك.",
          "دعم كامل للعربية والكتابة من اليمين لليسار، مُختبَر في الاتجاهين.",
          "بنية سيو مدمجة من أول سطر كود — لا ترقيعات لاحقة.",
          "جلسات تدريبية ليستطيع فريقك تحديث المحتوى دون الاتصال بنا.",
        ],
      },
      {
        type: "heading",
        text: "هل موقعك يعمل لصالحك؟",
      },
      {
        type: "paragraph",
        text: "افتح موقعك على جوالك الآن. حمّله على اتصال بطيء. اقرأ النص العربي. حاول أن تجد صفحة الخدمات في أقل من ثلاث ثوانٍ. إذا شعرت بالإحباط في أي لحظة، فعملاؤك يشعرون بنفس الشيء — وصبرهم أقل من صبرك.",
      },
      {
        type: "paragraph",
        text: "الموقع الجيد ليس مصروفًا. هو أهدأ موظفيك وأكثرهم موثوقية — لا يأخذ إجازة ولا ينسى العرض أبدًا.",
      },
    ],
  },

  "search-optimization-seo": {
    slug: "search-optimization-seo",
    description:
      "تحسين محركات البحث للمواقع العربية ليس كالإنجليزية. من البحث عن الكلمات المفتاحية باللهجات المحلية إلى الأداء التقني، إليك ما يُحرّك النتائج فعلاً للشركات التي تستهدف الجمهور العربي.",
    serviceNum: "02",
    body: [
      {
        type: "heading",
        text: "لماذا السيو العربي تخصّص مختلف",
      },
      {
        type: "paragraph",
        text: "أغلب نصائح تحسين محركات البحث على الإنترنت مكتوبة للسوق الإنجليزي. الأدوات مبنية للإنجليزية. دراسات الحالة بالإنجليزية. قواعد بيانات الكلمات المفتاحية إنجليزية بأغلبيتها الساحقة. إذا أخذت هذا الدليل وطبّقته على موقع عربي دون تكييف، ستهدر أشهرًا في ملاحقة ترتيبات لن تأتي.",
      },
      {
        type: "paragraph",
        text: "البحث العربي مختلف بنيويًا. جذر كلمة واحد يُولّد عشرات الأشكال الصالحة للبحث. اللهجات تتباين تباينًا حادًا بين الخليج والشام وشمال أفريقيا. المستخدم في السعودية يبحث عن خدمات بكلمات لن يكتبها المستخدم في مصر أبدًا، والعكس صحيح.",
      },
      {
        type: "heading",
        text: "الأخطاء الستة التي نراها أكثر من غيرها",
      },
      {
        type: "list",
        items: [
          "ترجمة الكلمات المفتاحية الإنجليزية إلى عربية فصحى بدلاً من البحث عمّا يكتبه الناس فعلاً.",
          "تجاهل تنوّع اللهجات — مصطلح يتصدّر في عربية الإمارات قد يكون غير مرئي في العربية المصرية.",
          "إهمال السيو التقني: صفحات بطيئة، بيانات منظمة مفقودة، تخطيط جوال معطّل.",
          "نشر محتوى سطحي لاستهداف عدد كلمات بدلاً من كتابة شيء مفيد حقًا.",
          "تجاهل الروابط الداخلية لأن الموقع لا يحتوي سوى خمس صفحات.",
          "عدم تحديث المحتوى المنشور أبدًا، حتى عندما تكون المعلومات قديمة بسنتين.",
        ],
      },
      {
        type: "heading",
        text: "البحث عن الكلمات المفتاحية بالعربية: كيف تفعلها صح",
      },
      {
        type: "paragraph",
        text: "نقطة البداية ليست أداة كلمات مفتاحية — بل محادثة. ماذا يقول عميلك عندما يصف مشكلته؟ كيف يبحث عن حل؟ الجواب لن يكون المصطلح العربي الفصيح أبدًا تقريبًا. بل عبارة عامّية، أحيانًا مخلوطة بإنجليزية، وأحيانًا بأخطاء إملائية.",
      },
      {
        type: "quote",
        text: "أفضل الكلمات المفتاحية العربية هي تلك التي يسمعها فريق خدمة العملاء على واتساب كل يوم. ابدأ من هناك.",
      },
      {
        type: "paragraph",
        text: "نبدأ كل مشروع سيو بتدقيق محادثات واتساب العميل، وتذاكر الدعم، وتعليقات السوشيال ميديا. هذه العبارات الواقعية تصبح أساس استراتيجية الكلمات المفتاحية — لا قاموسًا مترجمًا من منافس إنجليزي.",
      },
      {
        type: "heading",
        text: "الأداء التقني ليس اختياريًا",
      },
      {
        type: "paragraph",
        text: "مؤشرات Google الأساسية للويب (Core Web Vitals) واحدة بغض النظر عن اللغة. صفحة تستغرق أربع ثوانٍ للتحميل بالعربية تُعاقَب كصفحة تستغرق أربع ثوانٍ بالإنجليزية. لكن المواقع العربية تحمل أعباءً تقنية إضافية:",
      },
      {
        type: "list",
        items: [
          "أخطاء تخطيط RTL التي تسبّب إزاحات في المحتوى ودرجات CLS سيئة.",
          "خطوط عربية ثقيلة تضيف مئات الكيلوبايتات إذا لم تُقتطع بشكل صحيح.",
          "وسوم hreflang خاطئة تُربك Google حول النسخة التي يجب عرضها.",
          "بيانات منظمة مفقودة لأن أغلب أدوات Schema تعمل بالإنجليزية افتراضيًا.",
        ],
      },
      {
        type: "paragraph",
        text: "إصلاح هذه المشكلات التقنية غالبًا يُحقّق تحسّنًا في الترتيب في الشهر الأول أكثر من أي كمية من إنتاج المحتوى.",
      },
      {
        type: "heading",
        text: "محتوى يتصدّر ويُحوِّل",
      },
      {
        type: "paragraph",
        text: "هدف محتوى السيو ليس التصدّر — بل التصدّر ثم إقناع الزائر باتخاذ إجراء. مقال يحصل على ألف زائر وصفر استفسارات هو مركز تكلفة، لا أصل.",
      },
      {
        type: "paragraph",
        text: "كل قطعة محتوى ننتجها تستهدف نية بحث محدّدة، وتجيب على السؤال أفضل من النتيجة الأولى الحالية، وتنتهي بخطوة تالية واضحة. نقيس النجاح بالعملاء المحتملين المُولَّدين، لا بالترتيبات المُحقَّقة.",
      },
      {
        type: "heading",
        text: "الأثر التراكمي",
      },
      {
        type: "paragraph",
        text: "السيو هو القناة التسويقية الوحيدة التي تصبح أرخص مع الوقت. مقال مكتوب جيدًا اليوم يمكن أن يُولّد عملاء محتملين لسنوات دون إنفاق إضافي. الإعلانات المدفوعة تتوقف لحظة توقفك عن الدفع. السيو يتراكم.",
      },
      {
        type: "paragraph",
        text: "للشركات العربية التي تتنافس في أسواق لم يستثمر فيها أغلب المنافسين في سيو عربي سليم، نافذة الفرصة مفتوحة على مصراعيها. السؤال ليس هل تبدأ — بل كم أرضًا مستعدّ أن تخسر بانتظارك.",
      },
    ],
  },

  "content-production": {
    slug: "content-production",
    description:
      "محتوى يبيع دون أن يبيع — كيف تُنتج صناعة المحتوى بمساعدة الذكاء الاصطناعي محتوى عربيًا عالي الجودة باستمرار، يبني الثقة ويجلب العملاء دون إرهاق فريقك.",
    serviceNum: "03",
    body: [
      {
        type: "heading",
        text: "مشكلة المحتوى التي تواجهها أغلب الشركات",
      },
      {
        type: "paragraph",
        text: "كل صاحب عمل يعرف أنه يحتاج محتوى. مقالات، منشورات سوشيال ميديا، نشرات بريدية، نصوص فيديو. النصيحة في كل مكان: انشر باستمرار، أضف قيمة، ابنِ ثقة. المشكلة ليست في فهم السبب — بل في إيجاد الطاقة لفعل ذلك.",
      },
      {
        type: "paragraph",
        text: "المشروع الصغير في الرياض ليس لديه فريق محتوى. المؤسّس يكتب بضعة منشورات في الشهر الأول، ينشغل بالعمليات، ويصمت المدوّنة لستة أشهر. يبدو مألوفًا؟",
      },
      {
        type: "heading",
        text: "لماذا يفشل أغلب المحتوى",
      },
      {
        type: "paragraph",
        text: "المحتوى يفشل لثلاثة أسباب، ولا علاقة لأيٍّ منها بالجودة:",
      },
      {
        type: "list",
        items: [
          "عدم الاتساق — نشر ثلاثة مقالات في أسبوع ثم لا شيء لشهرين يُدمّر ثقة الجمهور وترتيب البحث.",
          "غياب الاستراتيجية — الكتابة عن أي موضوع يخطر ببالك بدلاً من ربط المحتوى برحلة المشتري.",
          "الصوت الخاطئ — محتوى يقرأ كبيان صحفي أو مدوّنة إنجليزية مترجمة لا يتّصل بالجمهور العربي.",
        ],
      },
      {
        type: "paragraph",
        text: "الحل ليس توظيف مزيد من الكتّاب. الحل هو بناء نظام.",
      },
      {
        type: "heading",
        text: "كيف يعمل إنتاج المحتوى بمساعدة الذكاء الاصطناعي",
      },
      {
        type: "paragraph",
        text: "نستخدم الذكاء الاصطناعي كمحرّك مسوّدات أولى، لا كبديل للحكم البشري. سير العمل يبدو هكذا:",
      },
      {
        type: "list",
        items: [
          "خطة محتوى شهرية متوافقة مع أهداف عملك والأنماط الموسمية.",
          "الذكاء الاصطناعي يُنتج مسوّدات أولى بناءً على موجزات مفصّلة وكلمات مفتاحية وإرشادات صوت علامتك.",
          "محرّر بشري يُعيد الكتابة والتنقيح والتدقيق في كل قطعة قبل النشر.",
          "تصميم مرئي يتوافق مع هوية علامتك عبر جميع القنوات.",
          "النشر والجدولة يتمّان تلقائيًا — أنت توافق، ونحن نتولّى الباقي.",
        ],
      },
      {
        type: "quote",
        text: "الذكاء الاصطناعي يكتب الهيكل. الكاتب البشري يضيف الروح. النتيجة محتوى يبدو كأنك أنت، يُنشر في وقته، كل مرة.",
      },
      {
        type: "heading",
        text: "المحتوى العربي يستحق أفضل",
      },
      {
        type: "paragraph",
        text: "أغلب المحتوى العربي المُنتج بالذكاء الاصطناعي سيئ. يُقرأ كترجمة آلية لأفكار إنجليزية، مليء بتراكيب رسمية لا يستخدمها أحد في الحياة. المفردات جامدة. الإيقاع مختلّ. القارئ يكتشف ذلك من أول جملتين.",
      },
      {
        type: "paragraph",
        text: "كتابة المحتوى العربي الجيد تتطلّب فهم المستوى اللغوي — متى تستخدم الفصحى، ومتى تميل للعامّية، ومتى تمزج. تتطلّب معرفة أن الجمهور السعودي يستجيب بشكل مختلف عن المصري. تتطلّب الاهتمام بالطباعة، بالطريقة التي تنكسر بها الفقرة على شاشة الجوال، بالمسافات بين الحروف العربية.",
      },
      {
        type: "paragraph",
        text: "لهذا السبب المحرّر البشري في سير عملنا ليس اختياريًا. الذكاء الاصطناعي يمنحنا السرعة. المحرّر يمنحنا الجودة. معًا، يُقدّمان ما لا يستطيع أيٌّ منهما وحده: محتوى مستمر بحجم كبير يُقرأ فعلاً بشكل جيد.",
      },
      {
        type: "heading",
        text: "المحتوى كمحرّك عملاء",
      },
      {
        type: "paragraph",
        text: "أفضل محتوى لا يجذب الزوار فحسب — بل يُصفّيهم مسبقًا. صاحب العمل الذي يقرأ مقالك عن أخطاء السيو الشائعة ثم يتواصل لإصلاحها هو بالفعل متعلّم، ويثق بك، ويفهم القيمة. محادثة البيع أقصر ونسبة الإغلاق أعلى.",
      },
      {
        type: "paragraph",
        text: "نقيس نجاح المحتوى بالعملاء المحتملين الذين يولّدهم، لا بالإعجابات التي يجمعها. كل مقال، وكل منشور، وكل فيديو له هدف مرتبط بنتيجة عمل. المقاييس الشكلية ليست في الخطة.",
      },
      {
        type: "heading",
        text: "ابدأ بنظام، لا بموجة حماس",
      },
      {
        type: "paragraph",
        text: "الشركات التي تفوز بالمحتوى ليست تلك التي تنتج الأكثر — بل تلك التي لا تتوقف أبدًا. مقال واحد مكتوب جيدًا أسبوعيًا، يُنشر باستمرار لمدة سنة، سيتفوّق على موجة عشرين مقالاً يتبعها صمت.",
      },
      {
        type: "paragraph",
        text: "ابنِ النظام أولاً. النتائج تتبع.",
      },
    ],
  },

  "social-media-management": {
    slug: "social-media-management",
    description:
      "إدارة السوشيال ميديا ليست عن النشر اليومي — بل عن بناء نظام يُدير حساباتك باحترافية دون استهلاك وقتك. إليك كيف نحوّل الفوضى إلى عملية هادئة قابلة للتكرار.",
    serviceNum: "04",
    body: [
      {
        type: "heading",
        text: "السوشيال ميديا ليست مهمة جانبية",
      },
      {
        type: "paragraph",
        text: "كل صاحب عمل جرّب إدارة حساباته بنفسه يعرف الدورة: تنشر بحماس لأسبوعين، ترد على كل تعليق، تجرّب الستوريز والريلز. ثم يأتي موعد تسليم مشروع، يتصاعد عميل، وتصمت الحسابات. عندما تعود بعد ثلاثة أسابيع، تكون الخوارزمية قد نسيت وجودك.",
      },
      {
        type: "paragraph",
        text: "إدارة السوشيال ميديا تخصّص بدوام كامل. التعامل معها كمهمة يتولاها المتدرّب بين أعماله الأخرى هو السبب في أن أغلب حسابات الشركات تبدو مهجورة بحلول مارس.",
      },
      {
        type: "heading",
        text: "كيف تبدو الإدارة الاحترافية",
      },
      {
        type: "paragraph",
        text: "الفرق بين حضور سوشيال ميديا هاوٍ وآخر احترافي ليس الإبداع — بل الاتساق والأنظمة. الإدارة الاحترافية تعني:",
      },
      {
        type: "list",
        items: [
          "تقويم محتوى مرئي يُنشر كل أسبوع، يُراجَع ويُعتمَد قبل أن يظهر أي شيء.",
          "محتوى مصمَّم خصيصًا لكل منصة — لا نفس الصورة مُعاد تحجيمها أربع مرات.",
          "ردود تلقائية على الأسئلة المتكرّرة حتى لا ينتظر العملاء أبدًا.",
          "تحليل أداء شهري بمقاييس واضحة: الوصول، التفاعل، النقرات، والعملاء الفعليين المُولَّدين.",
          "جلسات عمل نصف شهرية معك لمواءمة المحتوى مع العروض والفعاليات وإطلاقات المنتجات القادمة.",
        ],
      },
      {
        type: "heading",
        text: "التكلفة الخفية لفعلها بنفسك",
      },
      {
        type: "paragraph",
        text: "أصحاب الأعمال غالبًا يظنّون أن إدارة السوشيال ميديا بأنفسهم توفّر المال. لنحسب. إذا كنت تقضي ثماني ساعات أسبوعيًا في إنشاء المحتوى والجدولة والردود والتحليل — وقيمة وقتك مئتا ريال في الساعة — فأنت تنفق ستة آلاف وأربعمئة ريال شهريًا على السوشيال ميديا. يمكنك توظيف نظام احترافي بأقل وتحصل على نتائج أفضل.",
      },
      {
        type: "quote",
        text: "أغلى مدير سوشيال ميديا هو صاحب العمل الذي يديرها بنفسه — لأن تكلفة فرصة وقته هي الأعلى.",
      },
      {
        type: "heading",
        text: "الأتمتة دون فقدان اللمسة البشرية",
      },
      {
        type: "paragraph",
        text: "الناس يقلقون أن الأتمتة تعني ردودًا آلية ومحتوى بلا روح. ليست كذلك بالضرورة. الأجزاء التي نؤتمتها هي التي يجب أن تُؤتمت: الجدولة، الردود المتكرّرة على الأسئلة الشائعة، تتبّع الأداء، وإنشاء التقارير.",
      },
      {
        type: "paragraph",
        text: "الأجزاء التي تبقى بشرية هي التي تهم: صوت العلامة، التوجيه الإبداعي، التفاعل مع المجتمع، والتعامل مع الأزمات. العميل الذي يُرسل شكوى حقيقية يحتاج ردًا بشريًا. العميل الذي يسأل عن ساعات العمل يمكنه الحصول على رد تلقائي فوري ودقيق — ويُفضّله.",
      },
      {
        type: "heading",
        text: "قياس ما يهم",
      },
      {
        type: "paragraph",
        text: "عدد المتابعين أكثر مقياس مُبالَغ في قيمته في السوشيال ميديا. حساب شركة بألفي متابع متفاعلين يشترون سيتفوّق دائمًا على حساب بخمسين ألف متابع يمرّرون ولا يتوقفون.",
      },
      {
        type: "list",
        items: [
          "نتتبّع معدّل التفاعل، لا عدد المتابعين.",
          "نتتبّع النقرات إلى موقعك، لا مرّات الظهور.",
          "نتتبّع العملاء المحتملين من السوشيال، لا الإعجابات.",
          "نتتبّع وقت الرد على استفسارات العملاء، لا تكرار النشر.",
        ],
      },
      {
        type: "paragraph",
        text: "كل مقياس مرتبط بنتيجة عمل. إذا كان المقياس لا يؤثّر على الإيراد أو رضا العملاء، لا نُبلّغ عنه.",
      },
      {
        type: "heading",
        text: "نظام واحد، لا عشر أدوات",
      },
      {
        type: "paragraph",
        text: "أغلب الشركات تجمع خليطًا من أدوات الجدولة ولوحات التحليل وجداول البيانات. ينتهي بها الأمر بقضاء وقت أطول في إدارة الأدوات من إدارة المحتوى. نستبدل هذه الرقع بنظام واحد موحَّد: تقويم واحد، ومسار اعتماد واحد، وتقرير تحليلات واحد، ونقطة تواصل واحدة.",
      },
      {
        type: "paragraph",
        text: "النتيجة حساب يبدو وكأن فريقًا من عشرة يقف خلفه — حتى لو كنّا نحن ونظام مبني بعناية.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const data: Record<Locale, Record<string, BlogPostData>> = { ar, en };

const slugs = Object.keys(en);

export function getBlogPost(
  locale: Locale,
  slug: string,
): BlogPostData | undefined {
  return data[locale]?.[slug];
}

export function getAllBlogPosts(locale: Locale): BlogPostData[] {
  return Object.values(data[locale]);
}

export function getAllSlugs(): string[] {
  return slugs;
}
