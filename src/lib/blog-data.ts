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

  "mobile-app-design": {
    slug: "mobile-app-design",
    description:
      "Your customers live on their phones. A well-designed mobile app is not a luxury — it is the shortest path between your brand and a paying customer. Here is how to get it right for Arab markets.",
    serviceNum: "05",
    body: [
      {
        type: "heading",
        text: "Your customers are already on mobile",
      },
      {
        type: "paragraph",
        text: "In the Arab world, mobile is not a secondary channel — it is the primary one. Saudi Arabia has one of the highest smartphone penetration rates on earth. Egypt, the UAE, and Jordan are not far behind. Your customers browse, compare, and buy on screens that fit in their palms. If your brand does not meet them there, a competitor will.",
      },
      {
        type: "paragraph",
        text: "Yet most businesses still treat mobile apps as a scaled-down version of their website. They shrink the same layout, cram the same navigation, and wonder why users uninstall within a week. A mobile app is not a smaller website. It is a different product with different rules.",
      },
      {
        type: "heading",
        text: "What makes a mobile app succeed in Arab markets",
      },
      {
        type: "paragraph",
        text: "The apps that win in this region share four traits:",
      },
      {
        type: "list",
        items: [
          "Arabic-first design — not English interfaces with Arabic text patched in. Layouts built for right-to-left from the first wireframe, with typography that respects Arabic letterforms.",
          "Speed on real networks — not just fast on Wi-Fi in a testing lab, but fast on a 4G connection in a crowded mall in Riyadh or Cairo. Every extra second of loading costs you users.",
          "Intuitive navigation — Arab users expect certain patterns. Payment flows should integrate local gateways like Mada, STC Pay, or Fawry. Contact should lead to WhatsApp, not a web form.",
          "Consistency with the web experience — your app and your website should feel like the same brand. Different does not mean disconnected.",
        ],
      },
      {
        type: "heading",
        text: "Native, hybrid, or cross-platform?",
      },
      {
        type: "paragraph",
        text: "This is the first question every business asks, and the answer depends on what the app needs to do — not on what is trendy. Native apps offer the best performance and access to device features. Cross-platform frameworks like React Native or Flutter let you ship to iOS and Android from one codebase, cutting time and cost.",
      },
      {
        type: "paragraph",
        text: "For most service businesses, a well-built cross-platform app delivers ninety-five percent of native performance at sixty percent of the cost. We recommend native only when the app requires heavy use of device hardware — cameras, sensors, or complex animations.",
      },
      {
        type: "quote",
        text: "The best app is the one your customer actually uses. Technology choice should serve the user experience, not the other way around.",
      },
      {
        type: "heading",
        text: "The cost of a bad first impression",
      },
      {
        type: "paragraph",
        text: "App store competition is brutal. Users decide within the first thirty seconds whether to keep or delete an app. A slow launch screen, a confusing onboarding flow, or a single crash is enough to lose them permanently. And unlike a website, you cannot fix a bad app experience instantly — you need to push an update, wait for review, and hope users bother to download it.",
      },
      {
        type: "paragraph",
        text: "This is why we test on real devices before launch. Not emulators, not simulators — actual phones on actual networks in actual cities. If the app works in our lab but fails in a user's hand, we have not done our job.",
      },
      {
        type: "heading",
        text: "From design to the app store",
      },
      {
        type: "paragraph",
        text: "Our process starts with your user, not your feature list. We map the three to five core actions your customer needs to take, design the shortest path to each, and strip away everything else. The result is an app that feels simple — which is the hardest thing to build.",
      },
      {
        type: "list",
        items: [
          "User research and journey mapping before a single pixel is drawn.",
          "Wireframes and interactive prototypes you can test with real users.",
          "Full Arabic and English support with bidirectional layouts.",
          "App store optimization for both Apple App Store and Google Play.",
          "Post-launch analytics to track usage patterns and improve.",
        ],
      },
      {
        type: "heading",
        text: "An app is a relationship, not a project",
      },
      {
        type: "paragraph",
        text: "Launching is not the finish line — it is the starting point. The best apps improve every month based on user behavior data. We do not hand over a finished product and walk away. We monitor, we iterate, and we help you turn usage data into product decisions.",
      },
      {
        type: "paragraph",
        text: "Your customers are already holding the device. The question is whether your brand is on it.",
      },
    ],
  },

  "corporate-identity-design": {
    slug: "corporate-identity-design",
    description:
      "A strong corporate identity is not a logo — it is the visual language that makes your brand recognizable before a single word is read. Here is why Arab businesses need more than a template.",
    serviceNum: "06",
    body: [
      {
        type: "heading",
        text: "A brand is recognized before it is read",
      },
      {
        type: "paragraph",
        text: "Think of the brands you trust most. You recognize them from a color, a shape, a feeling — before you read the name. That instant recognition is not an accident. It is the result of a carefully designed corporate identity: a system of visual elements that work together to tell your story without words.",
      },
      {
        type: "paragraph",
        text: "For Arab businesses, this matters even more. In a market where trust is built through relationships and reputation, your visual identity is often the first handshake. A polished, consistent brand signals professionalism. An inconsistent one signals the opposite — whether or not it reflects the quality of your actual work.",
      },
      {
        type: "heading",
        text: "What a corporate identity actually includes",
      },
      {
        type: "paragraph",
        text: "A logo is where most businesses start and stop. But a logo alone is like a name without a face. A complete corporate identity includes:",
      },
      {
        type: "list",
        items: [
          "Logo system — primary mark, secondary versions, icon, and clear-space rules so the logo works on everything from a business card to a billboard.",
          "Color palette — primary and secondary colors with exact codes for print, screen, and digital. Not just 'blue' — but which blue, at which contrast ratio, on which backgrounds.",
          "Typography — typefaces for Arabic and English that carry the brand personality. A law firm and a coffee shop should not use the same fonts.",
          "Visual patterns and photography style — the textures, shapes, and image treatment that make your content recognizable even without the logo.",
          "Brand guidelines document — the rule book that ensures consistency whether your team, a freelancer, or an agency creates the next piece of content.",
        ],
      },
      {
        type: "heading",
        text: "The bilingual challenge",
      },
      {
        type: "paragraph",
        text: "Most corporate identity work is designed for Latin scripts. When an Arab business adopts these identities, the Arabic version feels like an afterthought — because it is. Arabic typography has its own rules, its own proportions, its own rhythm. A brand identity that looks beautiful in English but awkward in Arabic is only half a brand.",
      },
      {
        type: "quote",
        text: "The test of a bilingual brand identity is simple: does the Arabic version look designed, or does it look translated?",
      },
      {
        type: "paragraph",
        text: "We design both directions simultaneously. The Arabic and English versions are siblings, not a parent and a copy. They share DNA — colors, spatial relationships, energy — but each respects the conventions of its script.",
      },
      {
        type: "heading",
        text: "When to invest in identity",
      },
      {
        type: "paragraph",
        text: "Three moments when corporate identity investment has the highest return:",
      },
      {
        type: "list",
        items: [
          "At launch — get it right from the start and avoid the expensive rebrand later. First impressions compound.",
          "Before a growth phase — if you are about to hire, expand, or enter a new market, your brand needs to scale with you. A DIY logo will not survive a billboard.",
          "When inconsistency is costing you — if your social media, website, packaging, and business cards all look like they belong to different companies, you are losing trust with every touchpoint.",
        ],
      },
      {
        type: "heading",
        text: "Identity is a system, not a deliverable",
      },
      {
        type: "paragraph",
        text: "The value of a corporate identity is not in the files we hand over — it is in the system that ensures every piece of communication your brand produces looks intentional. A good identity makes decisions easier: your team knows which colors to use, which fonts to pick, how much space to leave around the logo. It reduces friction, speeds up content creation, and eliminates the 'does this look right?' question.",
      },
      {
        type: "paragraph",
        text: "Your brand should be recognized before it is read. If it is not, the identity is not doing its job.",
      },
    ],
  },

  "e-commerce-design": {
    slug: "e-commerce-design",
    description:
      "An e-commerce store is not a catalog — it is a selling machine. From product pages to checkout, every pixel should move the visitor closer to a purchase. Here is how to design a store that actually converts.",
    serviceNum: "07",
    body: [
      {
        type: "heading",
        text: "Most online stores are catalogs, not selling machines",
      },
      {
        type: "paragraph",
        text: "The majority of e-commerce sites in the Arab world make the same mistake: they list products. Here is the image, here is the price, here is the add-to-cart button. They treat the online store like a shelf in a physical shop — put the product there and hope someone picks it up.",
      },
      {
        type: "paragraph",
        text: "But online shopping does not work like that. There is no salesperson to answer questions, no ability to touch the product, no social pressure to buy. Every element on the page has to do the selling. And if the page does not actively persuade, the visitor leaves — usually within ten seconds.",
      },
      {
        type: "heading",
        text: "What a high-converting product page looks like",
      },
      {
        type: "paragraph",
        text: "The product page is where the sale happens or does not. A page that converts well does five things:",
      },
      {
        type: "list",
        items: [
          "Answers the top three objections before the customer thinks of them — shipping time, return policy, and payment security should be visible, not buried in a footer link.",
          "Shows the product in context — lifestyle images outperform plain white-background photos by a wide margin. Show the product being used, not just existing.",
          "Uses urgency honestly — 'Only 3 left in stock' works when it is true. Fake scarcity destroys trust faster than it creates conversions.",
          "Makes the price feel justified — anchor the price against value, not against cost. 'SAR 200 for a year of daily use' reframes a purchase differently than just 'SAR 200'.",
          "Reduces friction at every step — every additional click between 'I want this' and 'I own this' loses a percentage of buyers.",
        ],
      },
      {
        type: "heading",
        text: "The checkout problem",
      },
      {
        type: "paragraph",
        text: "Cart abandonment in the Middle East runs above seventy percent. That means seven out of ten people who put something in their cart leave without paying. The reasons are predictable:",
      },
      {
        type: "list",
        items: [
          "Surprise shipping costs revealed at checkout.",
          "Forced account creation before purchase.",
          "Missing local payment options — Mada, Apple Pay, Tamara, or cash on delivery.",
          "A checkout flow that takes more than two minutes on mobile.",
        ],
      },
      {
        type: "quote",
        text: "The best checkout is the one the customer barely notices. If they remember the process, it was too complicated.",
      },
      {
        type: "heading",
        text: "Mobile-first is not optional",
      },
      {
        type: "paragraph",
        text: "In Saudi Arabia, over seventy-five percent of online purchases happen on mobile devices. If your store's mobile experience is a squeezed version of the desktop layout, you are losing the majority of your revenue. Mobile-first means designing for the phone screen first and then adapting upward — not the other way around.",
      },
      {
        type: "paragraph",
        text: "Thumb zones, tap targets, swipe gestures, and one-handed navigation are not nice-to-haves. They are the difference between a store that sells and a store that frustrates.",
      },
      {
        type: "heading",
        text: "Integration matters",
      },
      {
        type: "paragraph",
        text: "A beautiful store that does not connect to your operations is just a pretty catalog. We build stores that integrate with:",
      },
      {
        type: "list",
        items: [
          "Local payment gateways — Mada, STC Pay, Tamara, Tabby, Apple Pay, and cash on delivery.",
          "Shipping providers — Aramex, SMSA, J&T, and same-day delivery services.",
          "Inventory management — so your store never sells something you do not have.",
          "WhatsApp — for order confirmations, shipping updates, and customer support.",
        ],
      },
      {
        type: "heading",
        text: "A store that runs itself",
      },
      {
        type: "paragraph",
        text: "The goal is not just to build a store — it is to build a system. A store with automated inventory alerts, abandoned cart recovery emails, and performance dashboards that tell you exactly which products sell, which pages convert, and where customers drop off.",
      },
      {
        type: "paragraph",
        text: "You should be making product decisions, not wrestling with your platform. The technology should disappear — and the sales should not.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    description:
      "Digital marketing is not about spending more — it is about spending smarter. From paid ads to email campaigns, here is how to build a marketing engine that delivers measurable returns for Arab businesses.",
    serviceNum: "08",
    body: [
      {
        type: "heading",
        text: "The problem with most digital marketing",
      },
      {
        type: "paragraph",
        text: "Most businesses in the Arab world approach digital marketing the same way: run some Google Ads, boost a few Instagram posts, and hope for the best. When results are disappointing, they increase the budget. When results are still disappointing, they blame the platform.",
      },
      {
        type: "paragraph",
        text: "The platform is rarely the problem. The problem is strategy — or more precisely, the absence of one. Spending money on ads without a clear funnel, without proper tracking, and without a plan for what happens after the click is not marketing. It is gambling with a screen.",
      },
      {
        type: "heading",
        text: "What a marketing engine looks like",
      },
      {
        type: "paragraph",
        text: "Effective digital marketing is a system with four stages, and most businesses only invest in the first one:",
      },
      {
        type: "list",
        items: [
          "Attract — paid ads, SEO, and social content bring the right people to your door. The keyword is 'right.' A thousand irrelevant clicks cost more than ten targeted ones.",
          "Capture — landing pages, lead magnets, and forms convert visitors into contacts. If your ad sends people to your homepage, you are wasting most of your ad spend.",
          "Nurture — email sequences, retargeting, and content keep your brand in mind until the prospect is ready to buy. Most purchases happen after five to seven touchpoints, not after the first click.",
          "Convert — clear offers, limited-time incentives, and frictionless purchase flows turn prospects into customers.",
        ],
      },
      {
        type: "paragraph",
        text: "Most businesses pour money into Stage 1 and ignore the rest. That is why their cost per acquisition never improves.",
      },
      {
        type: "heading",
        text: "Paid ads: Google vs. Meta vs. TikTok",
      },
      {
        type: "paragraph",
        text: "Each platform serves a different intent. Google Ads capture demand — people searching for what you sell right now. Meta (Facebook and Instagram) creates demand — showing your brand to people who match your ideal customer profile. TikTok builds awareness — reaching younger audiences with short-form content that feels native, not promotional.",
      },
      {
        type: "quote",
        text: "The right platform is the one where your customer is already looking. Not the one with the biggest audience — the one with the most relevant audience.",
      },
      {
        type: "paragraph",
        text: "We do not recommend running ads on every platform. We recommend running ads on the platforms where your specific audience spends time and shows purchase intent. For a B2B service company in Riyadh, that might be Google and LinkedIn. For a fashion brand targeting young women in the Gulf, that might be Instagram and TikTok. The budget follows the data, not the trend.",
      },
      {
        type: "heading",
        text: "Email is not dead — it is underused",
      },
      {
        type: "paragraph",
        text: "In the rush to social media, most Arab businesses abandoned email marketing. That is a mistake. Email remains the highest-ROI digital marketing channel — returning an average of thirty-six riyals for every riyal spent. The key is using email to build relationships, not to blast promotions.",
      },
      {
        type: "list",
        items: [
          "Welcome sequences that introduce new subscribers to your brand story.",
          "Educational content that positions you as an expert before you ask for the sale.",
          "Abandoned cart recovery that brings back seventy percent of lost sales.",
          "Post-purchase follow-ups that turn one-time buyers into repeat customers.",
        ],
      },
      {
        type: "heading",
        text: "Measuring what matters",
      },
      {
        type: "paragraph",
        text: "Impressions, reach, and followers are vanity metrics. They make reports look good but do not pay salaries. The metrics that matter for a marketing engine are:",
      },
      {
        type: "list",
        items: [
          "Cost per lead — how much you pay to get a qualified contact.",
          "Cost per acquisition — how much you pay to get a paying customer.",
          "Customer lifetime value — how much a customer is worth over time, not just on the first purchase.",
          "Return on ad spend — for every riyal you put into ads, how many come back.",
        ],
      },
      {
        type: "paragraph",
        text: "We report on these numbers monthly, in plain language, with clear recommendations. No jargon, no vanity charts, no fifty-page decks that no one reads.",
      },
      {
        type: "heading",
        text: "Stop spending more. Start spending smarter.",
      },
      {
        type: "paragraph",
        text: "The businesses that win at digital marketing are not the ones with the biggest budgets. They are the ones with the best systems — clear funnels, proper tracking, continuous optimization, and the discipline to cut what does not work. Every riyal should have a job. If it does not, it should not be spent.",
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

  "mobile-app-design": {
    slug: "mobile-app-design",
    description:
      "عملاؤك يعيشون على هواتفهم. التطبيق المصمّم بعناية ليس ترفًا — بل أقصر مسافةٍ بين علامتك والعميل الذي يدفع. إليك كيف تصمّمه للسوق العربي.",
    serviceNum: "05",
    body: [
      {
        type: "heading",
        text: "عملاؤك موجودون على الجوال بالفعل",
      },
      {
        type: "paragraph",
        text: "في العالم العربي، الجوال ليس قناة ثانوية — بل هو القناة الأولى. السعودية تمتلك واحدًا من أعلى معدلات انتشار الهواتف الذكية على وجه الأرض. مصر والإمارات والأردن ليست بعيدة. عملاؤك يتصفّحون ويقارنون ويشترون على شاشاتٍ تناسب راحة يدهم. إذا لم تلقَهم هناك، سيفعل منافسك.",
      },
      {
        type: "paragraph",
        text: "ومع ذلك، أغلب الشركات تتعامل مع تطبيقات الجوال كنسخة مصغّرة من موقعها. تُقلّص نفس التخطيط، تحشر نفس القوائم، وتتساءل لماذا يحذف المستخدمون التطبيق خلال أسبوع. تطبيق الجوال ليس موقعًا أصغر. هو منتج مختلف بقواعد مختلفة.",
      },
      {
        type: "heading",
        text: "ما يجعل تطبيق الجوال ناجحًا في الأسواق العربية",
      },
      {
        type: "paragraph",
        text: "التطبيقات الناجحة في هذه المنطقة تشترك في أربع سمات:",
      },
      {
        type: "list",
        items: [
          "تصميم عربي أولاً — لا واجهات إنجليزية بنص عربي ملصق. تخطيطات مبنية من اليمين لليسار من أول إطار سلكي، بطباعة تحترم أشكال الحروف العربية.",
          "سرعة على شبكات حقيقية — ليس فقط على الواي فاي في مختبر اختبار، بل على اتصال 4G في مول مزدحم في الرياض أو القاهرة. كل ثانية إضافية تكلّفك مستخدمين.",
          "تنقّل بديهي — المستخدمون العرب يتوقعون أنماطًا معيّنة. تدفقات الدفع يجب أن تدمج البوابات المحلية مثل مدى وSTC Pay وفوري. التواصل يجب أن يقود لواتساب، لا لنموذج ويب.",
          "اتساق مع تجربة الموقع — تطبيقك وموقعك يجب أن يشعرا كأنهما نفس العلامة. مختلف لا يعني منفصل.",
        ],
      },
      {
        type: "heading",
        text: "أصلي أم هجين أم متعدد المنصات؟",
      },
      {
        type: "paragraph",
        text: "هذا أول سؤال يطرحه كل صاحب عمل، والجواب يعتمد على ما يحتاج التطبيق فعله — لا على ما هو رائج. التطبيقات الأصلية تقدّم أفضل أداء ووصول لميزات الجهاز. أطر العمل متعددة المنصات مثل React Native أو Flutter تتيح لك الإطلاق على iOS وAndroid من قاعدة كود واحدة، مما يقلّل الوقت والتكلفة.",
      },
      {
        type: "paragraph",
        text: "لأغلب شركات الخدمات، تطبيق متعدد المنصات مبني جيدًا يقدّم خمسة وتسعين بالمئة من أداء التطبيق الأصلي بستين بالمئة من التكلفة. نوصي بالأصلي فقط عندما يتطلب التطبيق استخدامًا مكثفًا لعتاد الجهاز — كاميرات أو مستشعرات أو رسوم متحركة معقدة.",
      },
      {
        type: "quote",
        text: "أفضل تطبيق هو الذي يستخدمه عميلك فعلاً. اختيار التقنية يجب أن يخدم تجربة المستخدم، لا العكس.",
      },
      {
        type: "heading",
        text: "ثمن الانطباع الأول السيئ",
      },
      {
        type: "paragraph",
        text: "المنافسة في متاجر التطبيقات شرسة. المستخدمون يقرّرون خلال أول ثلاثين ثانية هل يحتفظون بالتطبيق أو يحذفونه. شاشة تحميل بطيئة، أو تدفق تسجيل مربك، أو تعطّل واحد يكفي لخسارتهم نهائيًا. وبخلاف الموقع، لا يمكنك إصلاح تجربة تطبيق سيئة فورًا — تحتاج لدفع تحديث والانتظار وتأمّل أن المستخدمين يُكلّفون أنفسهم تنزيله.",
      },
      {
        type: "paragraph",
        text: "لهذا نختبر على أجهزة حقيقية قبل الإطلاق. لا محاكيات ولا بيئات افتراضية — هواتف فعلية على شبكات فعلية في مدن فعلية.",
      },
      {
        type: "heading",
        text: "من التصميم إلى متجر التطبيقات",
      },
      {
        type: "paragraph",
        text: "عمليتنا تبدأ بمستخدمك، لا بقائمة الميزات. نرسم الثلاث إلى خمس إجراءات الأساسية التي يحتاج عميلك اتخاذها، نصمّم أقصر مسار لكل منها، ونزيل كل شيء آخر.",
      },
      {
        type: "list",
        items: [
          "بحث مستخدمين ورسم رحلات قبل رسم أي بكسل.",
          "إطارات سلكية ونماذج تفاعلية يمكنك اختبارها مع مستخدمين حقيقيين.",
          "دعم كامل للعربية والإنجليزية بتخطيطات ثنائية الاتجاه.",
          "تحسين متجر التطبيقات لكل من Apple App Store وGoogle Play.",
          "تحليلات بعد الإطلاق لتتبّع أنماط الاستخدام والتحسين.",
        ],
      },
      {
        type: "heading",
        text: "التطبيق علاقة، لا مشروع",
      },
      {
        type: "paragraph",
        text: "الإطلاق ليس خط النهاية — بل نقطة البداية. أفضل التطبيقات تتحسّن كل شهر بناءً على بيانات سلوك المستخدمين. لا نُسلّم منتجًا نهائيًا ونمشي. نراقب ونكرّر ونساعدك في تحويل بيانات الاستخدام إلى قرارات منتج.",
      },
      {
        type: "paragraph",
        text: "عملاؤك يمسكون الجهاز بالفعل. السؤال هو هل علامتك موجودة عليه.",
      },
    ],
  },

  "corporate-identity-design": {
    slug: "corporate-identity-design",
    description:
      "الهوية التجارية القوية ليست شعارًا — بل اللغة البصرية التي تجعل علامتك معروفة قبل أن تُقرأ كلمة واحدة. إليك لماذا تحتاج الشركات العربية أكثر من قالب.",
    serviceNum: "06",
    body: [
      {
        type: "heading",
        text: "العلامة تُعرَف قبل أن تُقرأ",
      },
      {
        type: "paragraph",
        text: "فكّر في العلامات التي تثق بها أكثر. تعرفها من لون، من شكل، من إحساس — قبل أن تقرأ الاسم. هذا التعرّف الفوري ليس صدفة. هو نتيجة هوية تجارية مصمّمة بعناية: منظومة عناصر بصرية تعمل معًا لتروي قصتك بلا كلمات.",
      },
      {
        type: "paragraph",
        text: "للشركات العربية، هذا يهم أكثر. في سوق تُبنى فيه الثقة عبر العلاقات والسمعة، هويتك البصرية غالبًا هي المصافحة الأولى. علامة مصقولة ومتّسقة تُشير للاحترافية. وعلامة غير متّسقة تُشير للعكس — سواء عكست جودة عملك الفعلي أم لا.",
      },
      {
        type: "heading",
        text: "ما تتضمّنه الهوية التجارية فعلاً",
      },
      {
        type: "paragraph",
        text: "الشعار هو حيث تبدأ أغلب الشركات وتتوقف. لكن الشعار وحده كاسم بلا وجه. الهوية التجارية المتكاملة تشمل:",
      },
      {
        type: "list",
        items: [
          "منظومة شعار — العلامة الأساسية، النسخ الثانوية، الأيقونة، وقواعد المسافات حتى يعمل الشعار على كل شيء من بطاقة أعمال إلى لوحة إعلانية.",
          "لوحة ألوان — ألوان أساسية وثانوية بأكواد دقيقة للطباعة والشاشة والرقمي. ليس فقط 'أزرق' — بل أي أزرق، بأي نسبة تباين، على أي خلفيات.",
          "طباعة — خطوط للعربية والإنجليزية تحمل شخصية العلامة. مكتب محاماة ومقهى لا يجب أن يستخدما نفس الخطوط.",
          "أنماط بصرية وأسلوب تصوير — القوام والأشكال ومعالجة الصور التي تجعل محتواك معروفًا حتى بدون الشعار.",
          "دليل الهوية البصرية — كتاب القواعد الذي يضمن الاتساق سواء أنشأ فريقك أو مستقل أو وكالة القطعة التالية من المحتوى.",
        ],
      },
      {
        type: "heading",
        text: "التحدي ثنائي اللغة",
      },
      {
        type: "paragraph",
        text: "أغلب أعمال الهوية التجارية مصمّمة للحروف اللاتينية. عندما تتبنّى شركة عربية هذه الهويات، تبدو النسخة العربية كفكرة لاحقة — لأنها كذلك. الطباعة العربية لها قواعدها ونسبها وإيقاعها. هوية تجارية تبدو جميلة بالإنجليزية لكن محرجة بالعربية هي نصف علامة فقط.",
      },
      {
        type: "quote",
        text: "اختبار الهوية ثنائية اللغة بسيط: هل تبدو النسخة العربية مصمَّمة، أم تبدو مترجَمة؟",
      },
      {
        type: "paragraph",
        text: "نصمّم الاتجاهين في وقت واحد. النسختان العربية والإنجليزية أختان، لا أم ونسخة. تشتركان في الحمض النووي — الألوان، العلاقات المكانية، الطاقة — لكن كل منهما تحترم تقاليد خطها.",
      },
      {
        type: "heading",
        text: "متى تستثمر في الهوية",
      },
      {
        type: "paragraph",
        text: "ثلاث لحظات يكون فيها الاستثمار في الهوية التجارية أعلى عائدًا:",
      },
      {
        type: "list",
        items: [
          "عند الإطلاق — اضبطها من البداية وتجنّب إعادة البناء المكلفة لاحقًا. الانطباعات الأولى تتراكم.",
          "قبل مرحلة نمو — إذا كنت على وشك التوظيف أو التوسّع أو دخول سوق جديد، علامتك تحتاج أن تكبر معك. شعار صنعته بنفسك لن ينجو على لوحة إعلانية.",
          "عندما يكلّفك عدم الاتساق — إذا كانت حساباتك وموقعك وتغليفك وبطاقات أعمالك تبدو وكأنها لشركات مختلفة، فأنت تخسر ثقة مع كل نقطة تواصل.",
        ],
      },
      {
        type: "heading",
        text: "الهوية نظام، لا تسليم",
      },
      {
        type: "paragraph",
        text: "قيمة الهوية التجارية ليست في الملفات التي نسلّمها — بل في النظام الذي يضمن أن كل قطعة تواصل تنتجها علامتك تبدو مقصودة. الهوية الجيدة تسهّل القرارات: فريقك يعرف أي ألوان يستخدم، أي خطوط يختار، كم مسافة يترك حول الشعار. تقلّل الاحتكاك، تسرّع إنتاج المحتوى، وتلغي سؤال 'هل هذا يبدو صحيحًا؟'.",
      },
      {
        type: "paragraph",
        text: "علامتك يجب أن تُعرَف قبل أن تُقرأ. إذا لم تكن كذلك، فالهوية لا تؤدي عملها.",
      },
    ],
  },

  "e-commerce-design": {
    slug: "e-commerce-design",
    description:
      "المتجر الإلكتروني ليس كتالوجًا — بل آلة بيع. من صفحات المنتجات إلى الدفع، كل بكسل يجب أن يقرّب الزائر من الشراء. إليك كيف تصمّم متجرًا يُحوِّل فعلاً.",
    serviceNum: "07",
    body: [
      {
        type: "heading",
        text: "أغلب المتاجر الإلكترونية كتالوجات، لا آلات بيع",
      },
      {
        type: "paragraph",
        text: "الأغلبية الساحقة من مواقع التجارة الإلكترونية في العالم العربي ترتكب نفس الخطأ: تعرض المنتجات. هذه الصورة، هذا السعر، هذا زر الإضافة للسلة. يتعاملون مع المتجر الإلكتروني كرف في متجر فعلي — ضع المنتج هناك وتأمّل أن يلتقطه أحد.",
      },
      {
        type: "paragraph",
        text: "لكن التسوق الإلكتروني لا يعمل هكذا. لا يوجد بائع يجيب على الأسئلة، ولا إمكانية لمس المنتج، ولا ضغط اجتماعي للشراء. كل عنصر في الصفحة يجب أن يقوم بالبيع. وإذا لم تقنع الصفحة بفعالية، يغادر الزائر — عادةً خلال عشر ثوانٍ.",
      },
      {
        type: "heading",
        text: "كيف تبدو صفحة المنتج عالية التحويل",
      },
      {
        type: "paragraph",
        text: "صفحة المنتج هي حيث يحدث البيع أو لا يحدث. الصفحة التي تحوّل جيدًا تفعل خمسة أشياء:",
      },
      {
        type: "list",
        items: [
          "تجيب على أهم ثلاثة اعتراضات قبل أن يفكر فيها العميل — وقت الشحن، سياسة الإرجاع، وأمان الدفع يجب أن تكون مرئية، لا مدفونة في رابط بالذيل.",
          "تعرض المنتج في سياقه — صور أسلوب الحياة تتفوّق على صور الخلفية البيضاء بفارق كبير. اعرض المنتج وهو يُستخدم، لا وهو موجود فقط.",
          "تستخدم الاستعجال بصدق — 'بقي ٣ فقط في المخزون' تعمل عندما تكون حقيقية. الندرة المزيّفة تدمّر الثقة أسرع مما تخلق تحويلات.",
          "تجعل السعر يبدو مبرّرًا — اربط السعر بالقيمة، لا بالتكلفة. '٢٠٠ ريال لسنة كاملة من الاستخدام اليومي' تؤطّر الشراء بشكل مختلف عن '٢٠٠ ريال' فقط.",
          "تقلّل الاحتكاك في كل خطوة — كل نقرة إضافية بين 'أريد هذا' و'أملكه' تخسر نسبة من المشترين.",
        ],
      },
      {
        type: "heading",
        text: "مشكلة الدفع",
      },
      {
        type: "paragraph",
        text: "التخلّي عن السلة في الشرق الأوسط يتجاوز سبعين بالمئة. هذا يعني أن سبعة من كل عشرة أشخاص يضعون شيئًا في السلة ويغادرون بدون دفع. الأسباب متوقعة:",
      },
      {
        type: "list",
        items: [
          "تكاليف شحن مفاجئة تظهر عند الدفع.",
          "إجبار على إنشاء حساب قبل الشراء.",
          "غياب خيارات الدفع المحلية — مدى، Apple Pay، تمارا، أو الدفع عند الاستلام.",
          "تدفّق دفع يستغرق أكثر من دقيقتين على الجوال.",
        ],
      },
      {
        type: "quote",
        text: "أفضل عملية دفع هي التي بالكاد يلاحظها العميل. إذا تذكّر العملية، فهي معقّدة أكثر مما ينبغي.",
      },
      {
        type: "heading",
        text: "الجوال أولاً ليس اختياريًا",
      },
      {
        type: "paragraph",
        text: "في السعودية، أكثر من خمسة وسبعين بالمئة من المشتريات الإلكترونية تتم على أجهزة الجوال. إذا كانت تجربة متجرك على الجوال نسخة مضغوطة من تخطيط سطح المكتب، فأنت تخسر أغلبية إيرادك. الجوال أولاً يعني التصميم لشاشة الهاتف أولاً ثم التكيّف صعودًا — لا العكس.",
      },
      {
        type: "paragraph",
        text: "مناطق الإبهام، أهداف اللمس، حركات التمرير، والتنقل بيد واحدة ليست كماليات. هي الفرق بين متجر يبيع ومتجر يُحبط.",
      },
      {
        type: "heading",
        text: "التكامل مهم",
      },
      {
        type: "paragraph",
        text: "متجر جميل لا يتصل بعملياتك هو مجرد كتالوج جميل. نبني متاجر تتكامل مع:",
      },
      {
        type: "list",
        items: [
          "بوابات الدفع المحلية — مدى، STC Pay، تمارا، تابي، Apple Pay، والدفع عند الاستلام.",
          "شركات الشحن — أرامكس، SMSA، J&T، وخدمات التوصيل في نفس اليوم.",
          "إدارة المخزون — حتى لا يبيع متجرك شيئًا ليس لديك.",
          "واتساب — لتأكيدات الطلبات وتحديثات الشحن والدعم.",
        ],
      },
      {
        type: "heading",
        text: "متجر يُدير نفسه",
      },
      {
        type: "paragraph",
        text: "الهدف ليس بناء متجر فقط — بل بناء نظام. متجر بتنبيهات مخزون تلقائية، ورسائل استرداد سلة مهجورة، ولوحات أداء تخبرك بالضبط أي منتجات تبيع، وأي صفحات تحوّل، وأين ينسحب العملاء.",
      },
      {
        type: "paragraph",
        text: "يجب أن تتّخذ قرارات منتجات، لا تصارع منصّتك. التقنية يجب أن تختفي — والمبيعات لا.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    description:
      "التسويق الإلكتروني ليس عن إنفاق أكثر — بل عن إنفاق أذكى. من الإعلانات المدفوعة إلى حملات البريد الإلكتروني، إليك كيف تبني محرّك تسويق يقدّم عوائد مقيسة للشركات العربية.",
    serviceNum: "08",
    body: [
      {
        type: "heading",
        text: "المشكلة مع أغلب التسويق الإلكتروني",
      },
      {
        type: "paragraph",
        text: "أغلب الشركات في العالم العربي تتعامل مع التسويق الإلكتروني بنفس الطريقة: تشغّل بعض إعلانات Google، تموّل بعض منشورات Instagram، وتأمل الأفضل. عندما تخيّب النتائج، تزيد الميزانية. وعندما تخيّب النتائج مرة أخرى، تلوم المنصة.",
      },
      {
        type: "paragraph",
        text: "المنصة نادرًا ما تكون المشكلة. المشكلة هي الاستراتيجية — أو بدقة أكثر، غيابها. إنفاق المال على إعلانات بدون قمع واضح، بدون تتبّع سليم، وبدون خطة لما يحدث بعد النقرة ليس تسويقًا. بل مقامرة بشاشة.",
      },
      {
        type: "heading",
        text: "كيف يبدو محرّك التسويق",
      },
      {
        type: "paragraph",
        text: "التسويق الإلكتروني الفعّال نظام من أربع مراحل، وأغلب الشركات تستثمر في الأولى فقط:",
      },
      {
        type: "list",
        items: [
          "جذب — الإعلانات المدفوعة والسيو والمحتوى الاجتماعي يجلبون الأشخاص المناسبين لبابك. الكلمة المفتاحية هي 'المناسبين.' ألف نقرة غير ذات صلة تكلّف أكثر من عشر نقرات مستهدفة.",
          "التقاط — صفحات الهبوط ومغناطيسات العملاء والنماذج تحوّل الزوار إلى جهات اتصال. إذا كان إعلانك يرسل الناس لصفحتك الرئيسية، فأنت تهدر أغلب إنفاقك الإعلاني.",
          "رعاية — سلاسل البريد الإلكتروني وإعادة الاستهداف والمحتوى تبقي علامتك في الذهن حتى يكون العميل المحتمل مستعدًا للشراء. أغلب المشتريات تحدث بعد خمس إلى سبع نقاط تواصل، لا بعد النقرة الأولى.",
          "تحويل — عروض واضحة، حوافز محدودة الوقت، وتدفقات شراء سلسة تحوّل العملاء المحتملين إلى عملاء فعليين.",
        ],
      },
      {
        type: "paragraph",
        text: "أغلب الشركات تضخّ المال في المرحلة الأولى وتتجاهل الباقي. لهذا تكلفة اكتسابهم لا تتحسّن أبدًا.",
      },
      {
        type: "heading",
        text: "الإعلانات المدفوعة: Google مقابل Meta مقابل TikTok",
      },
      {
        type: "paragraph",
        text: "كل منصة تخدم نية مختلفة. إعلانات Google تلتقط الطلب — أشخاص يبحثون عما تبيعه الآن. Meta (فيسبوك وإنستجرام) تخلق الطلب — تعرض علامتك لأشخاص يطابقون ملف عميلك المثالي. TikTok تبني الوعي — تصل لجماهير أصغر سنًا بمحتوى قصير يبدو طبيعيًا لا ترويجيًا.",
      },
      {
        type: "quote",
        text: "المنصة الصحيحة هي التي يتواجد فيها عميلك بالفعل. ليست التي فيها أكبر جمهور — بل التي فيها أكثر جمهور ملائم.",
      },
      {
        type: "paragraph",
        text: "لا نوصي بتشغيل إعلانات على كل منصة. نوصي بتشغيل إعلانات على المنصات التي يقضي فيها جمهورك المحدّد وقته ويُظهر نية شراء. لشركة خدمات B2B في الرياض، قد يكون ذلك Google وLinkedIn. لعلامة أزياء تستهدف شابات الخليج، قد يكون Instagram وTikTok. الميزانية تتبع البيانات، لا الموضة.",
      },
      {
        type: "heading",
        text: "البريد الإلكتروني لم يمت — بل غير مستغل",
      },
      {
        type: "paragraph",
        text: "في اندفاعهم نحو السوشيال ميديا، تخلّت أغلب الشركات العربية عن التسويق بالبريد الإلكتروني. هذا خطأ. البريد الإلكتروني يظل أعلى قناة تسويق رقمي من حيث العائد على الاستثمار — يعيد في المتوسط ستة وثلاثين ريالاً لكل ريال يُنفق. المفتاح هو استخدام البريد لبناء علاقات، لا لإرسال عروض ترويجية.",
      },
      {
        type: "list",
        items: [
          "سلاسل ترحيب تعرّف المشتركين الجدد على قصة علامتك.",
          "محتوى تعليمي يضعك كخبير قبل أن تطلب البيع.",
          "استرداد السلة المهجورة الذي يعيد سبعين بالمئة من المبيعات الضائعة.",
          "متابعات بعد الشراء تحوّل المشترين لمرة واحدة إلى عملاء متكرّرين.",
        ],
      },
      {
        type: "heading",
        text: "قياس ما يهم",
      },
      {
        type: "paragraph",
        text: "مرّات الظهور والوصول والمتابعون مقاييس شكلية. تجعل التقارير تبدو جيدة لكنها لا تدفع الرواتب. المقاييس المهمة لمحرّك التسويق هي:",
      },
      {
        type: "list",
        items: [
          "تكلفة العميل المحتمل — كم تدفع للحصول على جهة اتصال مؤهّلة.",
          "تكلفة الاكتساب — كم تدفع للحصول على عميل يدفع.",
          "قيمة العميل مدى الحياة — كم يساوي العميل على المدى الطويل، لا فقط في أول شراء.",
          "عائد الإنفاق الإعلاني — لكل ريال تضعه في الإعلانات، كم يعود.",
        ],
      },
      {
        type: "paragraph",
        text: "نُبلّغ عن هذه الأرقام شهريًا، بلغة واضحة، مع توصيات محدّدة. لا مصطلحات، لا رسوم بيانية شكلية، لا عروض من خمسين صفحة لا يقرأها أحد.",
      },
      {
        type: "heading",
        text: "توقّف عن إنفاق أكثر. ابدأ بإنفاق أذكى.",
      },
      {
        type: "paragraph",
        text: "الشركات التي تفوز بالتسويق الإلكتروني ليست تلك بأكبر الميزانيات. بل تلك بأفضل الأنظمة — قمع واضح، تتبّع سليم، تحسين مستمر، والانضباط لقطع ما لا يعمل. كل ريال يجب أن يكون له وظيفة. إذا لم يكن، فلا ينبغي إنفاقه.",
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
