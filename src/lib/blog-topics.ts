import type { Locale } from "./i18n";
import { getDict } from "./dictionaries";
import { getPostsForService, type BlogListing } from "./blog-data";
import { serviceNumForSlug } from "./service-map";

/**
 * Blog topic pages (owner decision D21): one per service, at
 * /{locale}/blog/topic/{service-slug}. A topic exists only while at least
 * one article carries that service's number.
 */
type TopicCopy = {
  /** Short label for the topic links. */
  label: string;
  /** Page heading and search title. */
  title: string;
  /** One-sentence intro, also the meta description. */
  intro: string;
  /** Link text to the matching service page. */
  serviceLink: string;
};

const copy: Record<Locale, Record<string, TopicCopy>> = {
  en: {
    "website-design": {
      label: "Website design",
      title: "Website design articles",
      intro:
        "Articles on planning and building a business website: what it costs, custom versus template, homepages and landing pages, online booking and choosing a domain.",
      serviceLink: "Our website design service",
    },
    "search-engine-optimization": {
      label: "SEO",
      title: "SEO articles",
      intro:
        "Articles on being found on Google: keyword research, on-page and technical SEO, local search, backlinks, site speed and how to measure results.",
      serviceLink: "Our SEO service",
    },
    "content-production": {
      label: "Content",
      title: "Content production articles",
      intro:
        "Articles on writing content that brings in customers: website copy, headlines, blogging, short video and reusing one piece across every channel.",
      serviceLink: "Our content production service",
    },
    "social-media-management": {
      label: "Social media",
      title: "Social media articles",
      intro:
        "Articles on running social media accounts: choosing platforms, content plans, how often to post, replying to customers and handling negative comments.",
      serviceLink: "Our social media management service",
    },
    "mobile-app-design": {
      label: "Mobile apps",
      title: "Mobile app articles",
      intro:
        "Articles on reaching customers on their phones, and on choosing between a mobile app and a mobile-friendly website.",
      serviceLink: "Our mobile app design service",
    },
    "brand-identity": {
      label: "Brand identity",
      title: "Brand identity articles",
      intro:
        "Articles on building a brand: logo versus identity, colors and fonts, brand story and voice, rebranding and working on a tight budget.",
      serviceLink: "Our brand identity service",
    },
    "ecommerce-design": {
      label: "E-commerce",
      title: "E-commerce articles",
      intro:
        "Articles on online stores that sell: setting up the store, product pages, checkout and payments, and abandoned carts.",
      serviceLink: "Our e-commerce design service",
    },
    "digital-marketing": {
      label: "Digital marketing",
      title: "Digital marketing articles",
      intro:
        "Articles on winning and keeping customers online: ads and budgets, retargeting, email and newsletters, conversion, reviews, referrals, analytics and automation.",
      serviceLink: "Our digital marketing service",
    },
  },
  ar: {
    "website-design": {
      label: "تصميم المواقع",
      title: "مقالات تصميم المواقع",
      intro:
        "مقالات عن تخطيط موقع الشركة وبنائه: التكلفة، والتصميم المخصّص مقابل القوالب الجاهزة، والصفحة الرئيسية وصفحات الهبوط، والحجز الإلكتروني، واختيار اسم النطاق.",
      serviceLink: "تعرّف على خدمة تصميم المواقع",
    },
    "search-engine-optimization": {
      label: "السيو",
      title: "مقالات تحسين محركات البحث (السيو)",
      intro:
        "مقالات عن الظهور في نتائج Google: البحث عن الكلمات المفتاحية، والسيو داخل الصفحة والسيو التقني، والبحث المحلي، والروابط الخلفية، وسرعة الموقع، وقياس النتائج.",
      serviceLink: "تعرّف على خدمة تحسين محركات البحث",
    },
    "content-production": {
      label: "صناعة المحتوى",
      title: "مقالات صناعة المحتوى",
      intro:
        "مقالات عن كتابة محتوى يجلب العملاء: نصوص الموقع، والعناوين، والتدوين، والفيديو القصير، وإعادة استخدام المحتوى الواحد في كل القنوات.",
      serviceLink: "تعرّف على خدمة صناعة المحتوى",
    },
    "social-media-management": {
      label: "السوشيال ميديا",
      title: "مقالات إدارة السوشيال ميديا",
      intro:
        "مقالات عن إدارة حسابات التواصل الاجتماعي: اختيار المنصات، وخطة المحتوى، وعدد مرات النشر، والرد على العملاء، والتعامل مع التعليقات السلبية.",
      serviceLink: "تعرّف على خدمة إدارة السوشيال ميديا",
    },
    "mobile-app-design": {
      label: "تطبيقات الجوال",
      title: "مقالات تطبيقات الجوال",
      intro:
        "مقالات عن الوصول إلى العملاء عبر هواتفهم، والمفاضلة بين تطبيق الجوال والموقع المتوافق مع الجوال.",
      serviceLink: "تعرّف على خدمة تصميم تطبيقات الجوال",
    },
    "brand-identity": {
      label: "الهوية التجارية",
      title: "مقالات الهوية التجارية",
      intro:
        "مقالات عن بناء العلامة التجارية: الفرق بين الشعار والهوية، والألوان والخطوط، وقصة العلامة ونبرتها، وتجديدها، وبناؤها بميزانية محدودة.",
      serviceLink: "تعرّف على خدمة تصميم الهوية التجارية",
    },
    "ecommerce-design": {
      label: "المتاجر الإلكترونية",
      title: "مقالات المتاجر الإلكترونية",
      intro:
        "مقالات عن المتاجر الإلكترونية التي تبيع: إنشاء المتجر، وصفحات المنتجات، وإتمام الشراء والدفع، والسلال المتروكة.",
      serviceLink: "تعرّف على خدمة تصميم المتاجر الإلكترونية",
    },
    "digital-marketing": {
      label: "التسويق الإلكتروني",
      title: "مقالات التسويق الإلكتروني",
      intro:
        "مقالات عن كسب العملاء عبر الإنترنت والحفاظ عليهم: الإعلانات، وإعادة الاستهداف، والبريد الإلكتروني، وتحسين التحويل، والتقييمات، والإحالات، والتحليلات.",
      serviceLink: "تعرّف على خدمة التسويق الإلكتروني",
    },
  },
};

export type BlogTopic = TopicCopy & {
  slug: string;
  posts: BlogListing[];
};

/** One topic with all its articles, newest first; undefined if it has none. */
export function getTopic(locale: Locale, slug: string): BlogTopic | undefined {
  const text = copy[locale][slug];
  const num = serviceNumForSlug(slug);
  if (!text || !num) return undefined;
  const posts = getPostsForService(locale, num, Infinity);
  return posts.length > 0 ? { slug, ...text, posts } : undefined;
}

/** Every topic that has at least one article, in the services' order. */
export function getTopics(locale: Locale): BlogTopic[] {
  return getDict("en")
    .services.list.map((s) => getTopic(locale, s.slug))
    .filter((t): t is BlogTopic => t !== undefined);
}

/** Slugs of the topics that have articles (identical in both languages). */
export function getTopicSlugs(): string[] {
  return getTopics("en").map((t) => t.slug);
}

export const topicPath = (slug: string) => `/blog/topic/${slug}`;

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";

/** "8 articles" / "٨ مقالات", with Arabic number agreement. */
export function articleCount(n: number, locale: Locale): string {
  if (locale === "en") return `${n} ${n === 1 ? "article" : "articles"}`;
  if (n === 1) return "مقال واحد";
  if (n === 2) return "مقالان";
  const d = String(n).replace(/\d/g, (c) => AR_DIGITS[Number(c)]);
  const rem = n % 100;
  if (rem >= 3 && rem <= 10) return `${d} مقالات`;
  if (rem >= 11) return `${d} مقالًا`;
  return `${d} مقال`;
}
