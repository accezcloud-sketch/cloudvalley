/**
 * Article cover illustrations, drawn in code.
 *
 * Every blog article gets a picture matched to its subject: the English
 * title (then the English excerpt) is checked against COVER_KEYWORDS below,
 * first match wins; with no match the article's service picture ("01".."08")
 * is used. The slug varies the details, so two articles on one subject still
 * look different. A new article written by the automation (title, excerpt,
 * serviceNum) gets a cover with no extra step.
 *
 * The output is a standalone SVG string that renders the same in browsers
 * and in Satori/resvg (next/og): basic shapes only (rect, circle, ellipse,
 * line, path, g with transforms, stroke-dasharray), no text, fonts, images,
 * filters, masks, clip paths, gradients, CSS or external references.
 *
 * Style: the site's paper-and-ink journal look. Paper ground, ink line work,
 * and one terracotta accent on the single element that matters.
 *
 * To add a picture: write a Subject function (drawn in a 560 x 420 box), add
 * it to SUBJECTS, write its alt text in ALT (English and Arabic) and give it
 * keywords in COVER_KEYWORDS. tests/content.test.mjs checks all three agree.
 */

/** Layout size (aspect ratio) of a cover, in CSS pixels. */
export const COVER_WIDTH = 1200;
export const COVER_HEIGHT = 630;
/** The PNG is rendered at 2x for sharp display on high-density screens. */
export const COVER_PNG_WIDTH = COVER_WIDTH * 2;
export const COVER_PNG_HEIGHT = COVER_HEIGHT * 2;

const PAPER = "#f2ede3";
const PAPER2 = "#e8e1d1";
const HAIR = "#d6ccb8";
const INK = "#141210";
const SOFT = "#3b332c";
const MUTE = "#7a6e60";
const ACCENT = "#c14a28";
const NONE = "none";

/* ---------- deterministic variation ---------- */

/** FNV-1a 32-bit string hash. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Small seeded generator (mulberry32), so one slug always draws the same picture. */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Rand = {
  int: (min: number, max: number) => number;
  bool: () => boolean;
  /**
   * A subject's main layout choice. Without a variant number it keeps the
   * seeded value; with one it alternates, so articles that share a picture
   * (variant 0, 1, 2...) do not look alike.
   */
  first: (seeded: boolean) => boolean;
  /** A second choice that changes every two variants. */
  second: (seeded: boolean) => boolean;
  /** One of k options, stepping through them variant by variant. */
  cycle: (k: number, seeded: number) => number;
};

function rand(seed: string, variant?: number): Rand {
  const r = rng(hash(seed));
  const has = variant !== undefined && Number.isInteger(variant) && variant >= 0;
  const n = has ? (variant as number) : 0;
  return {
    int: (min, max) => min + Math.floor(r() * (max - min + 1)),
    bool: () => r() < 0.5,
    first: (seeded) => (has ? n % 2 === 1 : seeded),
    second: (seeded) => (has ? Math.floor(n / 2) % 2 === 1 : seeded),
    cycle: (k, seeded) => (has ? n % k : seeded),
  };
}

/* ---------- tiny SVG builders ---------- */

const f = (n: number) => String(Math.round(n * 10) / 10);

function strokeAttr(stroke?: string, sw?: number): string {
  return stroke ? ` stroke="${stroke}" stroke-width="${sw ?? 4}"` : "";
}

function rect(x: number, y: number, w: number, h: number, r: number, fill: string, stroke?: string, sw?: number): string {
  return `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}"${r ? ` rx="${f(r)}"` : ""} fill="${fill}"${strokeAttr(stroke, sw)}/>`;
}

function circle(cx: number, cy: number, r: number, fill: string, stroke?: string, sw?: number): string {
  return `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${fill}"${strokeAttr(stroke, sw)}/>`;
}

function ellipse(cx: number, cy: number, rx: number, ry: number, fill: string, stroke?: string, sw?: number): string {
  return `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="${fill}"${strokeAttr(stroke, sw)}/>`;
}

function line(x1: number, y1: number, x2: number, y2: number, stroke: string, sw: number): string {
  return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" fill="none" stroke="${stroke}" stroke-width="${sw}"/>`;
}

function path(d: string, fill: string, stroke?: string, sw?: number): string {
  return `<path d="${d}" fill="${fill}"${strokeAttr(stroke, sw)}/>`;
}

/** An unfilled dotted or dashed path, e.g. a flight trail. */
function dashed(d: string, stroke: string, sw: number, dash: string): string {
  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${dash}"/>`;
}

function g(transform: string, body: string): string {
  return `<g transform="${transform}">${body}</g>`;
}

/** Point on a circle; degrees counter-clockwise from 3 o'clock, as on paper. */
function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
}

/** Circular arc from angle a1 to a2 (degrees, going clockwise on screen when a1 > a2). */
function arc(cx: number, cy: number, r: number, a1: number, a2: number): string {
  const [x1, y1] = polar(cx, cy, r, a1);
  const [x2, y2] = polar(cx, cy, r, a2);
  const large = Math.abs(a1 - a2) > 180 ? 1 : 0;
  const sweep = a1 > a2 ? 1 : 0;
  return `M${f(x1)} ${f(y1)}A${f(r)} ${f(r)} 0 ${large} ${sweep} ${f(x2)} ${f(y2)}`;
}

/** Five-pointed star centred on (cx, cy). */
function star(cx: number, cy: number, R: number, r: number): string {
  let d = "";
  for (let i = 0; i < 10; i++) {
    const [x, y] = polar(cx, cy, i % 2 ? r : R, 90 - i * 36);
    d += `${i ? "L" : "M"}${f(x)} ${f(y)}`;
  }
  return d + "Z";
}

/** Gear outline with n teeth, outer radius R, root radius r, turned by `turn` degrees. */
function gear(cx: number, cy: number, n: number, R: number, r: number, turn = 0): string {
  const step = 360 / n;
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = turn + i * step;
    const p1 = polar(cx, cy, r, a - step * 0.3);
    const p2 = polar(cx, cy, R, a - step * 0.17);
    const p3 = polar(cx, cy, R, a + step * 0.17);
    const p4 = polar(cx, cy, r, a + step * 0.3);
    const next = polar(cx, cy, r, a + step * 0.7);
    d += `${i ? "L" : "M"}${f(p1[0])} ${f(p1[1])}L${f(p2[0])} ${f(p2[1])}L${f(p3[0])} ${f(p3[1])}L${f(p4[0])} ${f(p4[1])}`;
    d += `A${f(r)} ${f(r)} 0 0 0 ${f(next[0])} ${f(next[1])}`;
  }
  return d + "Z";
}

/** Speech bubble: a rounded box with its tail on the bottom edge at tx, leaning left (-1) or right (1). */
function bubble(x: number, y: number, w: number, h: number, r: number, tx: number, lean: -1 | 1, tail = 26): string {
  const b = y + h;
  const tw = tail >= 20 ? 12 : 6;
  return (
    `M${x + r} ${y}H${x + w - r}Q${x + w} ${y} ${x + w} ${y + r}V${b - r}Q${x + w} ${b} ${x + w - r} ${b}` +
    `H${tx + tw}L${tx + (lean * tail * 16) / 26} ${b + tail}L${tx - tw} ${b}` +
    `H${x + r}Q${x} ${b} ${x} ${b - r}V${y + r}Q${x} ${y} ${x + r} ${y}Z`
  );
}

/** A heart centred on (0,0), about 80 wide. */
const HEART = "M0 32C-28 14-42 0-42-16C-42-30-31-40-19-40C-10-40-3-35 0-28C3-35 10-40 19-40C31-40 42-30 42-16C42 0 28 14 0 32Z";

/** Little window chrome: three dots and an address bar at the top of a card. */
function chrome(x: number, y: number, w: number): string {
  let s = circle(x + 26, y + 26, 6, MUTE) + circle(x + 46, y + 26, 6, MUTE) + circle(x + 66, y + 26, 6, MUTE);
  s += rect(x + 92, y + 16, Math.min(260, w - 120), 20, 10, PAPER2);
  return s + line(x, y + 52, x + w, y + 52, INK, 4);
}

/* ---------- subjects (each drawn in a 560 x 420 box) ---------- */

type Subject = (v: Rand) => string;

/** 01 Website design: browser window, nav, hero, columns, one CTA. */
const browser: Subject = (v) => {
  const ctaInNav = v.second(v.int(0, 3) === 0);
  const imgLeft = v.first(v.bool());
  const cols = v.int(2, 4);
  let s = rect(0, 0, 560, 410, 16, PAPER, INK, 4);
  s += line(0, 56, 560, 56, INK, 4);
  s += circle(30, 28, 7, MUTE) + circle(54, 28, 7, MUTE) + circle(78, 28, 7, MUTE);
  s += rect(112, 16, 300, 24, 12, PAPER2);
  // nav bar
  s += rect(32, 74, 44, 24, 6, SOFT);
  const links = ctaInNav ? [252, 312] : [312, 372, 432];
  for (const x of links) s += line(x, 86, x + 36, 86, MUTE, 8);
  if (ctaInNav) s += rect(400, 70, 128, 32, 16, ACCENT);
  else s += line(492, 86, 528, 86, MUTE, 8);
  // hero
  s += rect(32, 116, 496, 170, 12, PAPER2);
  const tx = imgLeft ? 270 : 64;
  const ix = imgLeft ? 64 : 316;
  s += line(tx, 156, tx + 200, 156, INK, 14) + line(tx, 184, tx + 150, 184, INK, 14);
  s += line(tx, 214, tx + 180, 214, MUTE, 8);
  if (ctaInNav) s += rect(tx, 234, 124, 34, 17, PAPER, INK, 3);
  else s += rect(tx, 234, 124, 34, 17, ACCENT);
  s += rect(ix, 138, 180, 126, 8, PAPER, INK, 3);
  s += path(`M${ix + 14} ${250}L${ix + 66} ${196}L${ix + 98} ${226}L${ix + 124} ${204}L${ix + 166} ${250}`, NONE, SOFT, 4);
  s += circle(ix + 136, 166, 12, HAIR);
  // columns
  const gap = 16;
  const w = (496 - gap * (cols - 1)) / cols;
  for (let i = 0; i < cols; i++) {
    const x = 32 + i * (w + gap);
    s += rect(x, 304, w, 82, 10, PAPER, MUTE, 3);
    s += line(x + 18, 330, x + w * 0.62, 330, SOFT, 8) + line(x + 18, 358, x + w - 22, 358, HAIR, 8);
  }
  return s;
};

/** 02 SEO: search box, results list, first result highlighted. */
const search: Subject = (v) => {
  const rows = v.int(2, 3);
  const accentTitle = v.second(v.int(0, 2) === 0);
  const lens = v.first(v.bool());
  let s = rect(0, 0, 560, 64, 32, PAPER, INK, 4);
  s += circle(42, 30, 13, NONE, INK, 4) + line(52, 40, 62, 50, INK, 5);
  s += line(86, 32, 270, 32, SOFT, 10);
  // first result, raised
  s += rect(0, 92, 560, 104, 16, PAPER, INK, 4);
  s += rect(24, 114, 30, 30, 7, PAPER2, INK, 3);
  s += line(72, 124, 330, 124, accentTitle ? ACCENT : INK, 12);
  s += line(72, 152, 200, 152, MUTE, 6) + line(72, 174, 440, 174, MUTE, 8);
  if (!accentTitle) {
    s += circle(508, 144, 24, ACCENT);
    s += path("M496 150L508 138L520 150", NONE, PAPER, 5);
  }
  // other results
  for (let i = 0; i < rows; i++) {
    const y = 226 + i * 72;
    s += rect(24, y, 28, 28, 7, PAPER2);
    s += line(72, y + 8, 300 - i * 30, y + 8, SOFT, 10);
    s += line(72, y + 34, 420 - i * 20, y + 34, HAIR, 8);
  }
  if (lens) {
    s += line(500, 390, 540, 430, INK, 10);
    s += circle(462, 352, 52, PAPER, INK, 5);
    s += line(436, 340, 486, 340, HAIR, 8) + line(436, 364, 470, 364, HAIR, 8);
  }
  return s;
};

/** 03 Content production: stacked sheets with heading and lines, a fountain pen. */
const sheets: Subject = (v) => {
  const accentPen = !v.second(v.int(0, 2) === 0);
  const hl = v.int(0, 4);
  const withImg = v.first(v.bool());
  const tilt = v.int(4, 9);
  const angle = v.int(22, 40);
  let s = g(`rotate(-${tilt} 230 220)`, rect(70, 16, 320, 396, 10, PAPER2, MUTE, 3));
  if (v.bool()) s += g(`rotate(${tilt - 2} 230 220)`, rect(70, 12, 320, 396, 10, PAPER, MUTE, 3));
  s += rect(70, 14, 320, 396, 10, PAPER, INK, 4);
  const twoHeads = v.bool();
  s += line(110, 66, 300, 66, INK, 16);
  if (twoHeads) s += line(110, 100, 240, 100, INK, 16);
  let y = twoHeads ? 146 : 112;
  if (withImg) {
    s += rect(110, y - 14, 240, 86, 8, PAPER2);
    y += 106;
  }
  const n = Math.floor((380 - y) / 30) + 1;
  for (let i = 0; i < n; i++) {
    const end = i === n - 1 ? 260 : 350 - ((i * 37) % 50);
    s += line(110, y + i * 30, end, y + i * 30, !accentPen && i === hl % n ? ACCENT : MUTE, 8);
  }
  // fountain pen, laid diagonally across the sheet's edge
  const barrel = accentPen ? ACCENT : PAPER;
  let pen = rect(-17, -190, 34, 150, 17, barrel, INK, 4);
  pen += rect(-14, -40, 28, 44, 4, PAPER2, INK, 4);
  pen += path("M-14 4L0 64L14 4Z", PAPER, INK, 4);
  pen += line(0, 24, 0, 56, INK, 3) + circle(0, 22, 4, INK);
  s += g(`translate(470 ${230 + angle}) rotate(${angle})`, pen);
  return s;
};

/** 04 Social media: phone with a 3x3 grid of posts, speech bubbles, a heart. */
const social: Subject = (v) => {
  const phoneRight = v.first(v.bool());
  const twoBubbles = !v.second(v.int(0, 2) === 0);
  const accentTile = v.int(0, 3) === 0 ? v.int(0, 8) : -1;
  const px = phoneRight ? 310 : 0;
  const bx = phoneRight ? 0 : 300;
  let s = rect(px, 0, 250, 420, 34, PAPER, INK, 4);
  s += line(px + 105, 22, px + 145, 22, INK, 5);
  s += circle(px + 40, 62, 17, PAPER2, INK, 3);
  s += line(px + 70, 56, px + 160, 56, SOFT, 8) + line(px + 70, 72, px + 124, 72, MUTE, 6);
  const dark = [v.int(0, 8), v.int(0, 8)];
  for (let i = 0; i < 9; i++) {
    const x = px + 20 + (i % 3) * 72;
    const y = 100 + Math.floor(i / 3) * 72;
    const fill = i === accentTile ? ACCENT : dark.includes(i) ? HAIR : PAPER2;
    s += rect(x, y, 66, 66, 6, fill);
  }
  s += line(px + 20, 346, px + 230, 346, HAIR, 3);
  s += rect(px + 40, 366, 22, 22, 5, NONE, MUTE, 3) + circle(px + 125, 377, 11, NONE, MUTE, 3) + rect(px + 188, 366, 22, 22, 11, NONE, MUTE, 3);
  // speech bubbles
  s += path(bubble(bx + 20, 40, 220, 88, 28, bx + 66, -1), PAPER, INK, 4);
  s += line(bx + 50, 72, bx + 200, 72, SOFT, 8) + line(bx + 50, 98, bx + 150, 98, MUTE, 8);
  if (twoBubbles) {
    s += path(bubble(bx + 70, 180, 170, 70, 26, bx + 196, 1), PAPER2, INK, 4);
    s += line(bx + 100, 215, bx + 200, 215, MUTE, 8);
  }
  const hy = twoBubbles ? 340 : 270;
  s += g(`translate(${bx + 130} ${hy})`, path(HEART, accentTile < 0 ? ACCENT : PAPER, accentTile < 0 ? undefined : INK, 4));
  return s;
};

/** 05 Mobile app: two phones with app screens (cards, toggles, tab bar). */
const apps: Subject = (v) => {
  const leftUp = v.first(v.bool());
  const accentToggle = !v.second(v.int(0, 2) === 0);
  const cards = v.int(2, 3);
  const onRow = v.int(0, 2);
  const ay = leftUp ? 0 : 20;
  const by = leftUp ? 20 : 0;
  const phone = (x: number, y: number, active: number) => {
    let p = rect(x, y, 230, 400, 32, PAPER, INK, 4) + line(x + 95, y + 20, x + 135, y + 20, INK, 5);
    p += line(x + 18, y + 340, x + 212, y + 340, HAIR, 3);
    for (let i = 0; i < 4; i++) p += rect(x + 33 + i * 46, y + 358, 20, 20, 6, i === active ? INK : NONE, i === active ? undefined : MUTE, 3);
    return p;
  };
  // phone A: list of cards and a primary button
  let s = phone(0, ay, 0);
  s += line(24, ay + 60, 130, ay + 60, INK, 12);
  const ch = cards === 3 ? 62 : 84;
  for (let i = 0; i < cards; i++) {
    const y = ay + 84 + i * (ch + 12);
    s += rect(20, y, 190, ch, 12, PAPER2);
    s += circle(48, y + ch / 2, 14, PAPER, MUTE, 3);
    s += line(74, y + ch / 2 - 8, 170, y + ch / 2 - 8, SOFT, 8) + line(74, y + ch / 2 + 12, 140, y + ch / 2 + 12, MUTE, 6);
  }
  s += rect(20, ay + 284, 190, 40, 20, accentToggle ? SOFT : ACCENT);
  // phone B: settings with toggles
  s += phone(320, by, 2);
  s += rect(340, by + 50, 190, 96, 14, PAPER2);
  s += circle(378, by + 98, 22, PAPER, INK, 3);
  s += line(414, by + 90, 500, by + 90, SOFT, 8) + line(414, by + 110, 470, by + 110, MUTE, 6);
  for (let i = 0; i < 3; i++) {
    const y = by + 186 + i * 50;
    const on = i === onRow;
    s += line(344, y, 420, y, SOFT, 8);
    const fill = on ? (accentToggle ? ACCENT : INK) : PAPER2;
    s += rect(454, y - 15, 56, 30, 15, fill, on ? undefined : MUTE, 3);
    s += circle(on ? 495 : 469, y, 10, PAPER, on ? undefined : MUTE, 3);
  }
  return s;
};

/** 06 Brand identity: a mark built on guide circles, plus colour swatches. */
const brand: Subject = (v) => {
  const column = v.first(v.bool());
  const mark = v.cycle(3, v.int(0, 2));
  const n = v.int(4, 5);
  const accentAt = v.int(0, n - 1);
  const cx = column ? 190 : 280;
  const cy = column ? 210 : 160;
  let s = circle(cx, cy, 150, NONE, HAIR, 3);
  s += line(cx - 190, cy, cx + 190, cy, HAIR, 3) + line(cx, cy - 170, cx, cy + 170, HAIR, 3);
  s += line(cx - 120, cy - 120, cx + 120, cy + 120, HAIR, 3) + line(cx - 120, cy + 120, cx + 120, cy - 120, HAIR, 3);
  let nodes: number[][];
  if (mark === 0) {
    s += circle(cx - 46, cy, 82, NONE, INK, 5) + circle(cx + 46, cy, 82, NONE, INK, 5);
    s += path(`M${cx} ${cy - 67}A82 82 0 0 1 ${cx} ${cy + 67}A82 82 0 0 1 ${cx} ${cy - 67}Z`, SOFT);
    nodes = [[cx, cy - 67], [cx, cy + 67], [cx - 128, cy], [cx + 128, cy]];
  } else if (mark === 1) {
    // a disc split on the diagonal, with a quarter cut out
    const d = 68; // 96 / sqrt(2)
    s += circle(cx, cy, 96, NONE, INK, 5);
    s += path(`M${cx - d} ${cy + d}A96 96 0 0 1 ${cx + d} ${cy - d}Z`, SOFT, INK, 5);
    s += rect(cx - 48, cy - 48, 96, 96, 0, NONE, MUTE, 3);
    nodes = [[cx - d, cy + d], [cx + d, cy - d], [cx, cy]];
  } else {
    s += circle(cx, cy - 44, 62, NONE, INK, 5) + circle(cx - 50, cy + 36, 62, NONE, INK, 5) + circle(cx + 50, cy + 36, 62, NONE, INK, 5);
    s += circle(cx, cy + 10, 18, SOFT);
    nodes = [[cx, cy - 106], [cx - 112, cy + 36], [cx + 112, cy + 36]];
  }
  for (const [x, y] of nodes) s += rect(x - 7, y - 7, 14, 14, 2, PAPER, INK, 3);
  const fills = [INK, SOFT, MUTE, PAPER2, HAIR].slice(0, n - 1);
  fills.splice(accentAt, 0, ACCENT);
  for (let i = 0; i < n; i++) {
    const x = column ? 440 : 280 - (n * 76 - 16) / 2 + i * 76;
    const y = column ? 210 - (n * 70 - 14) / 2 + i * 70 : 356;
    const fill = fills[i];
    s += rect(x, y, column ? 100 : 60, column ? 56 : 60, 8, fill, fill === PAPER2 || fill === HAIR ? MUTE : undefined, 3);
  }
  return s;
};

/** 07 E-commerce: product card with image, price and add-to-cart button, a basket. */
const shop: Subject = (v) => {
  const stack = v.first(v.bool());
  const product = v.cycle(3, v.int(0, 2));
  const cardRight = v.int(0, 3) === 0;
  const cx = cardRight ? 260 : 0;
  const bx = cardRight ? 30 : 360;
  let s = "";
  if (stack) s += rect(cx + 34, 22, 280, 390, 18, PAPER2, MUTE, 3);
  s += rect(cx, 0, 280, 410, 18, PAPER, INK, 4);
  s += rect(cx + 20, 20, 240, 210, 12, PAPER2);
  const m = cx + 140;
  if (product === 0) {
    // vase
    s += path(`M${m - 22} 56H${m + 22}V82C${m + 70} 104 ${m + 70} 190 ${m + 30} 204H${m - 30}C${m - 70} 190 ${m - 70} 104 ${m - 22} 82Z`, PAPER, INK, 4);
  } else if (product === 1) {
    // tote bag
    s += path(`M${m - 40} 100C${m - 40} 50 ${m + 40} 50 ${m + 40} 100`, NONE, INK, 5);
    s += rect(m - 70, 96, 140, 110, 10, PAPER, INK, 4);
  } else {
    // shirt
    s += path(`M${m - 30} 56L${m - 84} 84L${m - 66} 124L${m - 48} 114V206H${m + 48}V114L${m + 66} 124L${m + 84} 84L${m + 30} 56C${m + 18} 74 ${m - 18} 74 ${m - 30} 56Z`, PAPER, INK, 4);
  }
  s += line(cx + 26, 264, cx + 200, 264, SOFT, 10);
  s += line(cx + 26, 300, cx + 116, 300, INK, 16);
  s += rect(cx + 24, 332, 232, 52, 26, ACCENT);
  s += path(`M${m - 22} 348H${m - 12}L${m - 6} 368H${m + 18}L${m + 24} 354H${m - 9}`, NONE, PAPER, 4);
  // basket
  let b = path("M-80-10H80L62 92H-62Z", PAPER, INK, 4);
  b += path("M-58-10C-58-96 58-96 58-10", NONE, INK, 5);
  b += line(-92, -10, 92, -10, INK, 5);
  b += line(-34, 18, -28, 70, MUTE, 4) + line(0, 18, 0, 70, MUTE, 4) + line(34, 18, 28, 70, MUTE, 4);
  s += g(`translate(${bx + 100} 300)`, b);
  return s;
};

/** 08 Digital marketing: rising chart on axes, a megaphone. */
const growth: Subject = (v) => {
  const bars = v.first(v.bool());
  const n = v.int(5, 6);
  const megaUp = v.second(v.bool());
  let s = "";
  for (const y of [100, 180, 260]) s += line(44, y, 390, y, HAIR, 3);
  const step = 330 / n;
  const hs: number[] = [];
  for (let i = 0; i < n; i++) hs.push(60 + (i * 250) / (n - 1) + (i > 0 && i < n - 1 ? v.int(-30, 20) : 0));
  if (bars) {
    for (let i = 0; i < n; i++) {
      const x = 64 + i * step;
      s += rect(x, 340 - hs[i], step - 20, hs[i], 4, i === n - 1 ? ACCENT : PAPER2, i === n - 1 ? undefined : INK, 3);
    }
  } else {
    const pts = hs.map((h, i) => `${f(78 + i * step)} ${f(340 - h)}`);
    const last = 78 + (n - 1) * step;
    s += path(`M78 340L${pts.join("L")}L${f(last)} 340Z`, PAPER2);
    s += path(`M${pts.join("L")}`, NONE, INK, 6);
    for (let i = 0; i < n - 1; i++) s += circle(78 + i * step, 340 - hs[i], 10, PAPER, INK, 4);
    s += circle(last, 340 - hs[n - 1], 18, ACCENT);
  }
  s += path("M44 20V340H400", NONE, INK, 4);
  // megaphone
  let m = path("M0-22L72-58V58L0 22Z", PAPER, INK, 4);
  m += rect(-34, -24, 34, 48, 8, PAPER2, INK, 4);
  m += path("M-12 24L-2 62H16L12 24", PAPER, INK, 4);
  m += path("M90-30Q104 0 90 30M108-48Q130 0 108 48", NONE, MUTE, 4);
  s += g(`translate(${megaUp ? 462 : 468} ${megaUp ? 120 : 200}) rotate(${megaUp ? -20 : -8})`, m);
  return g("translate(0 56)", s);
};

/* ---------- topic pictures ---------- */

/** Email, newsletters: an open envelope with a letter rising out, a paper plane on a dotted trail. */
const email: Subject = (v) => {
  const right = v.first(v.bool());
  const accentPlane = v.int(0, 2) === 0;
  const img = v.second(v.bool());
  const ex = right ? 184 : 16;
  const B = 410;
  const T = 196;
  // back of the envelope and its open flap, behind the letter
  let s = rect(ex, T, 360, B - T, 10, PAPER2, INK, 4);
  s += path(`M${ex} ${T}L${ex + 180} ${T - 120}L${ex + 360} ${T}Z`, PAPER2, INK, 4);
  // the letter
  const lx = ex + 44;
  s += rect(lx, 40, 272, 280, 8, PAPER, INK, 4);
  s += rect(lx + 28, 66, 36, 36, 8, SOFT);
  s += line(lx + 82, 76, lx + 220, 76, INK, 12) + line(lx + 82, 98, lx + 170, 98, MUTE, 6);
  if (img) {
    s += rect(lx + 28, 124, 216, 56, 6, PAPER2);
    s += line(lx + 28, 204, lx + 200, 204, MUTE, 8);
  } else {
    s += line(lx + 28, 134, lx + 236, 134, MUTE, 8) + line(lx + 28, 160, lx + 212, 160, MUTE, 8) + line(lx + 28, 186, lx + 150, 186, MUTE, 8);
  }
  s += rect(lx + 76, 222, 120, 34, 17, accentPlane ? SOFT : ACCENT);
  s += line(lx + 108, 239, lx + 164, 239, PAPER, 6);
  // front pocket of the envelope
  s += path(`M${ex} ${T}L${ex + 180} ${T + 110}L${ex + 360} ${T}V${B - 10}Q${ex + 360} ${B} ${ex + 350} ${B}H${ex + 10}Q${ex} ${B} ${ex} ${B - 10}Z`, PAPER, INK, 4);
  s += path(`M${ex + 6} ${B - 6}L${ex + 146} ${T + 96}M${ex + 354} ${B - 6}L${ex + 214} ${T + 96}`, NONE, MUTE, 3);
  // paper plane flying off the open side, on a dotted trail
  let p = path("M-62 4L96-52L8 20Z", accentPlane ? ACCENT : PAPER, INK, 4);
  p += path("M8 20L96-52L40 60Z", PAPER2, INK, 4);
  p += path("M8 20L18 52L40 60", PAPER2, INK, 4);
  p += dashed("M-74 20C-130 44-140 110-96 132C-62 150-30 128-44 104", MUTE, 5, "1 14");
  const planeX = right ? 112 : 448;
  s += g(`translate(${planeX} 92)${right ? " scale(-1 1)" : ""} scale(0.92)`, p);
  return s;
};

/** Ads, campaigns: a large megaphone with sound waves, sponsored post cards. */
const ads: Subject = (v) => {
  const tilt = v.int(14, 24);
  const accentCard = v.first(v.int(0, 3) === 0);
  let m = rect(-92, -36, 60, 72, 14, PAPER2, INK, 4);
  m += path("M-34-36L118-104V104L-34 36Z", PAPER, INK, 4);
  m += path("M28-64L56-77V77L28 64Z", PAPER2, INK, 3);
  m += path("M-8 36L6 98H40L32 28", PAPER, INK, 4);
  m += ellipse(118, 0, 28, 104, accentCard ? PAPER2 : ACCENT, INK, 4);
  m += ellipse(122, 0, 12, 72, SOFT);
  m += path("M172-58Q196 0 172 58M202-96Q240 0 202 96", NONE, MUTE, 5);
  let s = g(`translate(172 246) rotate(-${tilt})`, m);
  // two sponsored cards: picture, a small ink tag, lines
  const card = (x: number, y: number, w: number, h: number, hot: boolean) => {
    let c = rect(x, y, w, h, 14, PAPER, INK, 4);
    c += rect(x + 16, y + 16, w - 32, h * 0.46, 8, hot ? ACCENT : PAPER2);
    c += rect(x + 16, y + 30 + h * 0.46, 34, 18, 6, INK);
    c += line(x + 62, y + 39 + h * 0.46, x + w - 22, y + 39 + h * 0.46, SOFT, 8);
    c += line(x + 16, y + h - 22, x + w * 0.6, y + h - 22, MUTE, 7);
    return c;
  };
  s += card(398, 14, 162, 148, accentCard);
  s += card(412, 262, 148, 132, false);
  return s;
};

/** Analytics, metrics: a dashboard with KPI tiles, a chart and a donut. */
const analytics: Subject = (v) => {
  const bars = v.first(v.bool());
  const donutAccent = v.second(v.bool());
  const hiTile = v.int(0, 2);
  let s = rect(0, 0, 560, 410, 16, PAPER, INK, 4) + chrome(0, 0, 560);
  // KPI tiles
  const tw = (496 - 32) / 3;
  for (let i = 0; i < 3; i++) {
    const x = 32 + i * (tw + 16);
    s += rect(x, 76, tw, 84, 10, i === hiTile ? PAPER2 : PAPER, MUTE, 3);
    s += line(x + 18, 100, x + 70, 100, MUTE, 6);
    s += line(x + 18, 132, x + 18 + (i === hiTile ? 86 : 64), 132, INK, 14);
    s += path(`M${x + tw - 44} 138L${x + tw - 32} 122L${x + tw - 22} 130L${x + tw - 12} 112`, NONE, i === hiTile ? INK : MUTE, 4);
  }
  // chart panel
  s += rect(32, 178, 300, 208, 10, PAPER, MUTE, 3);
  for (const y of [222, 268, 314]) s += line(52, y, 312, y, HAIR, 3);
  const hs = [46, 70, 58, 98, 86, 132];
  const base = 358;
  if (bars) {
    hs.forEach((h, i) => {
      s += rect(56 + i * 42, base - h, 26, h, 4, i === 5 ? (donutAccent ? INK : ACCENT) : PAPER2, i === 5 ? undefined : SOFT, 3);
    });
  } else {
    const pts = hs.map((h, i) => `${69 + i * 42} ${base - h}`);
    s += path(`M69 ${base}L${pts.join("L")}L279 ${base}Z`, PAPER2);
    s += path(`M${pts.join("L")}`, NONE, INK, 5);
    s += circle(279, base - 132, 12, donutAccent ? INK : ACCENT);
  }
  s += line(52, base, 312, base, INK, 3);
  // donut panel: segments drawn as dashes on one circle
  s += rect(348, 178, 180, 208, 10, PAPER, MUTE, 3);
  const cx = 438;
  const cy = 258;
  const r = 50;
  const c = 2 * Math.PI * r;
  s += circle(cx, cy, r, NONE, HAIR, 22);
  const seg = (from: number, len: number, color: string) =>
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="22" stroke-dasharray="${f(len * c)} ${f(c)}" stroke-dashoffset="${f(-from * c)}" transform="rotate(-90 ${cx} ${cy})"/>`;
  s += seg(0, 0.42, donutAccent ? ACCENT : SOFT) + seg(0.42, 0.28, MUTE);
  s += rect(370, 338, 14, 14, 3, donutAccent ? ACCENT : SOFT) + line(394, 345, 446, 345, MUTE, 6);
  s += rect(370, 360, 14, 14, 3, MUTE) + line(394, 367, 430, 367, MUTE, 6);
  return s;
};

/** Budgets, costs, spending: stacks of coins growing in height and a price tag on a string. */
const budget: Subject = (v) => {
  const accentTag = v.first(v.bool());
  const heights = v.bool() ? [3, 5, 7] : [2, 4, 6];
  const pie = v.second(v.bool());
  let s = line(0, 404, 420, 404, HAIR, 3);
  const coin = (cx: number, top: number, hot: boolean) => {
    let c = path(`M${cx - 60} ${top}V${top + 22}A60 17 0 0 0 ${cx + 60} ${top + 22}V${top}Z`, hot ? ACCENT : PAPER2, INK, 4);
    c += ellipse(cx, top, 60, 17, hot ? ACCENT : PAPER, INK, 4);
    c += ellipse(cx, top, 36, 9, NONE, hot ? PAPER : HAIR, 3);
    return c;
  };
  const xs = [60, 180, 300];
  heights.forEach((n, i) => {
    for (let k = 0; k < n; k++) s += coin(xs[i], 382 - (k + 1) * 22, !accentTag && i === 2 && k === n - 1);
  });
  // price tag hanging from a string, at the top right
  let t = path("M-104-58Q-104-66-96-66H52L112 0L52 66H-96Q-104 66-104 58Z", accentTag ? ACCENT : PAPER, INK, 4);
  t += circle(76, 0, 12, PAPER, INK, 4);
  t += line(-76, -20, 16, -20, accentTag ? PAPER : INK, 14);
  t += line(-76, 20, -20, 20, accentTag ? PAPER : MUTE, 8);
  s += path("M520 0C532 24 524 46 506 64", NONE, SOFT, 3);
  s += g("translate(506 64) rotate(-30) translate(-76 0)", t);
  // a small pie or a percent sign on the open side
  if (pie) {
    s += circle(90, 96, 44, PAPER, INK, 4);
    s += path("M90 96V52A44 44 0 0 1 128 118Z", SOFT, INK, 4);
  } else {
    s += circle(70, 80, 13, NONE, MUTE, 5) + circle(118, 128, 13, NONE, MUTE, 5) + line(122, 70, 66, 138, MUTE, 5);
  }
  return s;
};

/** Chatbots, customer replies: a friendly bot beside a chat window, a clock for round-the-clock answers. */
const chat: Subject = (v) => {
  const botRight = v.first(v.bool());
  const accentSend = v.int(0, 2) === 0;
  const clock = v.second(v.bool());
  const wx = botRight ? 0 : 196;
  const bx = botRight ? 464 : 96;
  const W = 364;
  let s = rect(wx, 0, W, 410, 22, PAPER, INK, 4);
  s += circle(wx + 40, 34, 14, PAPER2, INK, 3) + line(wx + 66, 28, wx + 160, 28, SOFT, 8) + line(wx + 66, 44, wx + 110, 44, MUTE, 5);
  s += line(wx, 66, wx + W, 66, INK, 4);
  // incoming, outgoing, typing
  s += path(bubble(wx + 24, 90, 220, 62, 20, wx + 54, -1), PAPER2);
  s += line(wx + 48, 114, wx + 214, 114, SOFT, 8) + line(wx + 48, 134, wx + 150, 134, MUTE, 6);
  s += path(bubble(wx + 116, 182, 224, 62, 20, wx + 310, 1), INK);
  s += line(wx + 140, 206, wx + 310, 206, PAPER, 8) + line(wx + 140, 226, wx + 250, 226, HAIR, 6);
  s += path(bubble(wx + 24, 272, 112, 48, 20, wx + 54, -1), PAPER2);
  for (let i = 0; i < 3; i++) s += circle(wx + 54 + i * 26, 296, 7, i === 0 ? SOFT : MUTE);
  s += rect(wx + 22, 350, W - 44, 42, 21, PAPER, MUTE, 3);
  s += line(wx + 46, 371, wx + 180, 371, HAIR, 6);
  s += circle(wx + W - 42, 371, 15, accentSend ? ACCENT : SOFT);
  s += path(`M${wx + W - 48} 364L${wx + W - 36} 371L${wx + W - 48} 378`, NONE, PAPER, 4);
  // the bot: head, face screen, antenna, ears, shoulders
  let b = path("M-62 150V128C-62 102-40 92 0 92S62 102 62 128V150", PAPER2, INK, 4);
  b += rect(-12, 60, 24, 36, 4, PAPER2, INK, 4);
  b += rect(-80, -60, 160, 128, 38, PAPER, INK, 4);
  b += rect(-58, -38, 116, 82, 24, INK);
  b += circle(-24, -6, 10, PAPER) + circle(24, -6, 10, PAPER);
  b += path("M-16 18Q0 30 16 18", NONE, PAPER, 4);
  b += rect(-96, -18, 16, 44, 7, PAPER2, INK, 4) + rect(80, -18, 16, 44, 7, PAPER2, INK, 4);
  b += line(0, -60, 0, -94, INK, 4) + circle(0, -104, 13, accentSend ? SOFT : ACCENT);
  s += g(`translate(${bx} 250)`, b);
  if (clock) {
    const cx = bx;
    const cy = 64;
    s += circle(cx, cy, 44, PAPER, INK, 4);
    for (let i = 0; i < 12; i++) {
      const [x1, y1] = polar(cx, cy, 36, i * 30);
      const [x2, y2] = polar(cx, cy, i % 3 ? 32 : 28, i * 30);
      s += line(x1, y1, x2, y2, i % 3 ? HAIR : MUTE, 3);
    }
    s += line(cx, cy, cx, cy - 26, INK, 5) + line(cx, cy, cx + 18, cy + 9, INK, 5) + circle(cx, cy, 5, INK);
  }
  return s;
};

/** Reviews, ratings, case studies: review cards with a row of stars, one big star. */
const reviews: Subject = (v) => {
  const filled = v.int(4, 5);
  const starRight = v.first(v.bool());
  const quote = v.second(v.bool());
  const ox = starRight ? 0 : 140;
  // the card behind
  let s = g(`rotate(-6 ${ox + 200} 150)`, rect(ox + 20, 40, 380, 190, 16, PAPER2, MUTE, 3) + line(ox + 140, 84, ox + 300, 84, HAIR, 8));
  // the front card
  s += rect(ox + 40, 130, 380, 236, 16, PAPER, INK, 4);
  s += circle(ox + 96, 188, 30, PAPER2, INK, 3);
  s += circle(ox + 96, 180, 10, SOFT) + path(`M${ox + 78} 206Q${ox + 96} 186 ${ox + 114} 206`, SOFT, SOFT, 3);
  s += line(ox + 144, 176, ox + 270, 176, INK, 10);
  for (let i = 0; i < 5; i++) {
    const on = i < filled;
    s += path(star(ox + 156 + i * 34, 206, 15, 6.5), on ? INK : PAPER, on ? INK : MUTE, 3);
  }
  s += line(ox + 70, 256, ox + 390, 256, MUTE, 8) + line(ox + 70, 284, ox + 370, 284, MUTE, 8) + line(ox + 70, 312, ox + 270, 312, MUTE, 8);
  if (quote) {
    for (const dx of [0, 34]) s += circle(ox + 360 + dx, 184, 11, SOFT) + path(`M${ox + 371 + dx} 182C${ox + 372 + dx} 200 ${ox + 362 + dx} 210 ${ox + 350 + dx} 214`, NONE, SOFT, 5);
  }
  // the big star
  const sx = starRight ? 468 : 88;
  s += path(star(sx, 92, 74, 32), ACCENT, ACCENT, 10);
  s += path(`M${sx - 96} 30L${sx - 80} 42M${sx + 82} 162L${sx + 98} 172M${sx + 60} 6L${sx + 52} 24`, NONE, MUTE, 4);
  return s;
};

/** Website security: a two-tone shield with a padlock in front of a browser window. */
const security: Subject = (v) => {
  const shieldRight = v.first(v.bool());
  const checks = v.int(2, 3);
  const wx = shieldRight ? 0 : 196;
  let s = rect(wx, 24, 364, 320, 16, PAPER, INK, 4) + chrome(wx, 24, 364);
  // padlock in the address bar
  s += rect(wx + 100, 46, 12, 10, 2, INK) + path(`M${wx + 102} 46V42A4 4 0 0 1 ${wx + 110} 42V46`, NONE, INK, 3);
  const tx = shieldRight ? wx + 32 : wx + 150;
  for (let i = 0; i < checks; i++) {
    const y = 120 + i * 56;
    s += circle(tx + 14, y, 14, PAPER2, INK, 3) + path(`M${tx + 7} ${y}L${tx + 12} ${y + 6}L${tx + 22} ${y - 6}`, NONE, INK, 3);
    s += line(tx + 44, y - 6, tx + 170, y - 6, SOFT, 8) + line(tx + 44, y + 12, tx + 130, y + 12, HAIR, 6);
  }
  // shield
  const outline = "M0-150C46-122 86-116 128-116V-12C128 76 72 128 0 160C-72 128-128 76-128-12V-116C-86-116-46-122 0-150Z";
  let sh = path(outline, PAPER, INK, 5);
  sh += path("M0-150C-46-122-86-116-128-116V-12C-128 76-72 128 0 160Z", PAPER2);
  sh += path(outline, NONE, INK, 5);
  sh += path("M0-124C38-102 70-96 104-96V-12C104 62 58 106 0 134C-58 106-104 62-104-12V-96C-70-96-38-102 0-124Z", NONE, MUTE, 3);
  sh += path("M-30-8V-36A30 30 0 0 1 30-36V-8", NONE, INK, 9);
  sh += rect(-48, -12, 96, 80, 14, ACCENT);
  sh += circle(0, 18, 10, PAPER) + rect(-4, 22, 8, 24, 4, PAPER);
  s += g(`translate(${shieldRight ? 420 : 140} 244)`, sh);
  return s;
};

/** Local SEO, Google Business Profile: a folded map with roads and a big location pin. */
const local: Subject = (v) => {
  const pinAt = v.second(v.int(1, 2) === 2) ? 2 : 1;
  const river = v.first(v.bool());
  const xs = [16, 148, 280, 412, 544];
  const tops = [166, 140, 166, 140, 166];
  const bots = [404, 384, 404, 384, 404];
  let s = "";
  for (let i = 0; i < 4; i++) {
    s += path(`M${xs[i]} ${tops[i]}L${xs[i + 1]} ${tops[i + 1]}V${bots[i + 1]}L${xs[i]} ${bots[i]}Z`, i % 2 ? PAPER2 : PAPER);
  }
  // roads and a river, kept inside the map
  s += path("M30 330C150 300 210 250 300 262S470 300 530 236", NONE, HAIR, 16);
  s += path("M200 160C210 230 230 300 250 392", NONE, HAIR, 12);
  if (river) s += path("M30 210C100 230 140 196 200 206S320 236 400 196S500 186 530 200", NONE, MUTE, 3);
  else s += path("M330 152C340 220 380 300 360 390", NONE, HAIR, 10);
  // small places
  for (const [x, y] of [[90, 260], [470, 330], [384, 214]]) s += rect(x - 10, y - 10, 20, 20, 4, PAPER, MUTE, 3);
  // fold outline on top
  s += path(`M${xs[0]} ${tops[0]}L${xs[1]} ${tops[1]}L${xs[2]} ${tops[2]}L${xs[3]} ${tops[3]}L${xs[4]} ${tops[4]}V${bots[4]}L${xs[3]} ${bots[3]}L${xs[2]} ${bots[2]}L${xs[1]} ${bots[1]}L${xs[0]} ${bots[0]}Z`, NONE, INK, 4);
  for (let i = 1; i < 4; i++) s += line(xs[i], tops[i], xs[i], bots[i], MUTE, 3);
  // the pin
  const px = pinAt === 1 ? 236 : 330;
  const py = 286;
  s += ellipse(px, py + 4, 38, 10, SOFT);
  let p = path("M0 0C-14-42-70-70-70-126A70 70 0 0 1 70-126C70-70 14-42 0 0Z", ACCENT);
  p += circle(0, -126, 28, PAPER);
  s += g(`translate(${px} ${py})`, p);
  return s;
};

/** Video, short videos: a player with a big play button and a phone playing a short. */
const video: Subject = (v) => {
  const phoneLeft = v.first(v.bool());
  const progress = v.int(36, 62) / 100;
  const px = phoneLeft ? 160 : 0;
  const fx = phoneLeft ? 0 : 368;
  // player
  let s = rect(px, 36, 400, 290, 16, PAPER, INK, 4);
  s += rect(px + 20, 56, 360, 196, 8, PAPER2);
  s += path(`M${px + 40} 236L${px + 120} 170L${px + 170} 208L${px + 230} 156L${px + 360} 236`, NONE, HAIR, 6);
  s += circle(px + 200, 154, 46, ACCENT);
  s += path(`M${px + 186} 130L${px + 224} 154L${px + 186} 178Z`, PAPER, PAPER, 6);
  s += line(px + 24, 280, px + 376, 280, HAIR, 6) + line(px + 24, 280, px + 24 + 352 * progress, 280, INK, 6);
  s += circle(px + 24 + 352 * progress, 280, 9, PAPER, INK, 3);
  s += path(`M${px + 26} 302L${px + 38} 310L${px + 26} 318Z`, INK, INK, 3) + line(px + 56, 310, px + 110, 310, MUTE, 6);
  // phone playing a short, dark screen
  let p = rect(0, 0, 192, 340, 30, PAPER, INK, 4);
  p += rect(14, 16, 164, 308, 18, SOFT);
  p += line(30, 34, 82, 34, PAPER, 4) + line(90, 34, 140, 34, MUTE, 4);
  p += circle(84, 130, 28, MUTE) + path("M36 234C36 184 132 184 132 234Z", MUTE);
  p += g("translate(154 168) scale(0.32)", path(HEART, PAPER));
  p += circle(154, 210, 10, NONE, PAPER, 3) + path("M146 246L162 238L146 230", NONE, PAPER, 3);
  p += line(32, 270, 120, 270, PAPER, 6) + line(32, 292, 96, 292, HAIR, 5);
  s += g(`translate(${fx} 70)`, p);
  return s;
};

/** Checkout, payments, carts: an order summary with a pay button and a bank card. */
const checkout: Subject = (v) => {
  const cardLeft = v.first(v.int(0, 3) === 0);
  const items = v.int(2, 3);
  const tilt = v.int(8, 16);
  const ox = cardLeft ? 230 : 0;
  let s = rect(ox, 0, 330, 410, 16, PAPER, INK, 4);
  // cart icon and heading
  s += path(`M${ox + 26} 34H${ox + 38}L${ox + 46} 62H${ox + 76}L${ox + 84} 42H${ox + 42}`, NONE, INK, 4);
  s += circle(ox + 52, 72, 4, INK) + circle(ox + 72, 72, 4, INK);
  s += line(ox + 104, 50, ox + 220, 50, INK, 12);
  s += line(ox + 24, 96, ox + 306, 96, HAIR, 3);
  for (let i = 0; i < items; i++) {
    const y = 116 + i * 62;
    s += rect(ox + 24, y, 44, 44, 8, PAPER2, MUTE, 3);
    s += line(ox + 84, y + 14, ox + 190, y + 14, SOFT, 8) + line(ox + 84, y + 32, ox + 150, y + 32, HAIR, 6);
    s += line(ox + 250, y + 14, ox + 300, y + 14, SOFT, 8);
  }
  const ty = 116 + items * 62 + 12;
  s += line(ox + 24, ty, ox + 306, ty, INK, 3);
  s += line(ox + 24, ty + 30, ox + 110, ty + 30, MUTE, 8) + line(ox + 220, ty + 30, ox + 300, ty + 30, INK, 14);
  s += rect(ox + 24, 336, 282, 52, 26, ACCENT);
  s += rect(ox + 132, 357, 16, 14, 3, PAPER) + path(`M${ox + 135} 357V352A5 5 0 0 1 ${ox + 145} 352V357`, NONE, PAPER, 3);
  s += line(ox + 160, 362, ox + 200, 362, PAPER, 6);
  // the card, dark so it reads at any size
  let c = rect(-140, -88, 280, 176, 18, SOFT, INK, 4);
  c += rect(-110, -48, 50, 38, 8, PAPER2) + line(-110, -29, -60, -29, MUTE, 3) + line(-85, -48, -85, -10, MUTE, 3);
  c += path("M78-46Q88-30 78-14M94-54Q108-30 94-6", NONE, PAPER, 4);
  for (let i = 0; i < 4; i++) c += line(-110 + i * 58, 26, -74 + i * 58, 26, PAPER, 8);
  c += line(-110, 58, -40, 58, HAIR, 6) + circle(92, 56, 14, MUTE) + circle(112, 56, 14, HAIR);
  const cx = cardLeft ? 140 : 412;
  s += g(`translate(${cx} 272) rotate(${cardLeft ? tilt : -tilt})`, c);
  return s;
};

/** Loyalty, referrals: a gift box with a ribbon and a stamp card. */
const loyalty: Subject = (v) => {
  const giftRight = v.first(v.bool());
  const stamped = v.int(4, 6);
  const gx = giftRight ? 300 : 20;
  const cx = giftRight ? 16 : 300;
  // stamp card
  let c = rect(0, 0, 244, 168, 14, PAPER, INK, 4);
  c += line(22, 32, 140, 32, INK, 10) + line(22, 54, 96, 54, MUTE, 6);
  for (let i = 0; i < 8; i++) {
    const x = 38 + (i % 4) * 56;
    const y = 96 + Math.floor(i / 4) * 46;
    if (i === 7) c += path(star(x, y, 18, 8), PAPER, INK, 3);
    else if (i < stamped) c += circle(x, y, 17, SOFT) + path(`M${x - 7} ${y}L${x - 2} ${y + 6}L${x + 8} ${y - 6}`, NONE, PAPER, 3);
    else c += circle(x, y, 17, NONE, MUTE, 3);
  }
  let s = g(`translate(${cx} ${giftRight ? 40 : 30}) rotate(${giftRight ? -7 : 7} 122 84)`, c);
  // gift box: body, lid, ribbon, bow
  s += rect(gx + 16, 214, 208, 190, 10, PAPER2, INK, 4);
  s += rect(gx + 100, 214, 40, 190, 0, ACCENT, INK, 4);
  s += rect(gx, 168, 240, 56, 10, PAPER, INK, 4);
  s += rect(gx + 98, 168, 44, 56, 0, ACCENT, INK, 4);
  const m = gx + 120;
  s += path(`M${m} 166C${m - 26} 118 ${m - 92} 110 ${m - 86} 142C${m - 82} 162 ${m - 40} 168 ${m} 166Z`, ACCENT, INK, 4);
  s += path(`M${m} 166C${m + 26} 118 ${m + 92} 110 ${m + 86} 142C${m + 82} 162 ${m + 40} 168 ${m} 166Z`, ACCENT, INK, 4);
  s += path(`M${m - 6} 168L${m - 30} 206M${m + 6} 168L${m + 30} 206`, NONE, INK, 4);
  s += rect(m - 14, 154, 28, 24, 8, ACCENT, INK, 4);
  // confetti
  const k = giftRight ? 1 : -1;
  s += path(`M${m + k * 140} 120L${m + k * 150} 104M${m + k * 120} 80L${m + k * 136} 86M${m + k * 166} 160L${m + k * 180} 152`, NONE, MUTE, 4);
  s += circle(m + k * 150, 210, 5, MUTE) + circle(m - k * 132, 116, 5, HAIR);
  return s;
};

/** Retargeting, conversion: a target with an arrow in the bullseye and a dotted path looping back to it. */
const target: Subject = (v) => {
  const loop = !v.second(v.int(0, 2) === 0);
  const ang = v.int(28, 40);
  const mirror = v.first(v.bool());
  const tx = loop ? 224 : 270;
  const ty = 222;
  let s = circle(tx, ty, 180, PAPER, INK, 4);
  s += circle(tx, ty, 135, PAPER2, INK, 3);
  s += circle(tx, ty, 90, PAPER, INK, 3);
  s += circle(tx, ty, 45, ACCENT);
  // arrow stuck in the bullseye: shaft, two feathers, a nock
  let a = line(0, 0, 232, 0, INK, 7);
  a += path("M176-4L204-34H244L216-4Z", PAPER2, INK, 4);
  a += path("M176 4L204 34H244L216 4Z", PAPER2, INK, 4);
  a += line(196, -14, 228, -14, MUTE, 3) + line(196, 14, 228, 14, MUTE, 3);
  s += g(`translate(${tx} ${ty}) rotate(-${ang})`, a);
  s += circle(tx, ty, 10, INK);
  if (loop) {
    const sx = tx + 150;
    const sy = ty + 160;
    s += dashed(`M${sx} ${sy}C${sx + 120} ${sy - 60} ${sx + 150} ${ty - 120} ${tx + 214} ${ty - 196}`, MUTE, 5, "2 14");
    s += path(`M${sx + 26} ${sy - 8}L${sx} ${sy}L${sx + 10} ${sy - 26}`, NONE, MUTE, 5);
  }
  // the shadow always falls down and to the right, mirrored or not
  const shadow = circle((mirror ? 560 - tx : tx) + 14, ty + 14, 180, HAIR);
  return shadow + (mirror ? g("translate(560 0) scale(-1 1)", s) : s);
};

/** Copywriting, headlines, words: a page with a big headline, a text caret, and a toolbar, quote marks or a highlighter. */
const copy: Subject = (v) => {
  const kind = v.cycle(3, v.int(0, 2)); // 0 toolbar, 1 quote marks, 2 highlighter
  const line2 = v.int(180, 250);
  const lx = 40;
  let s = rect(lx + 18, 74, 470, 330, 16, PAPER2);
  s += rect(lx, 56, 470, 330, 16, PAPER, INK, 4);
  s += line(lx + 40, 124, lx + 400, 124, INK, 24);
  s += rect(lx + 28, 152, line2 + 24, 44, 6, kind === 2 ? HAIR : PAPER2);
  s += line(lx + 40, 174, lx + 40 + line2, 174, INK, 24);
  const cx = lx + 58 + line2;
  s += line(cx, 146, cx, 202, ACCENT, 6) + line(cx - 10, 146, cx + 10, 146, ACCENT, 5) + line(cx - 10, 202, cx + 10, 202, ACCENT, 5);
  for (let i = 0; i < 4; i++) {
    const end = [380, 410, 350, 220][i];
    s += line(lx + 40, 238 + i * 34, lx + end, 238 + i * 34, i === 3 ? HAIR : MUTE, 9);
  }
  if (kind === 2) {
    // a highlighter lying across the top corner
    let m = rect(-17, -96, 34, 126, 10, SOFT, INK, 4) + rect(-17, -96, 34, 30, 8, INK);
    m += line(-6, -50, -6, 10, MUTE, 4);
    m += path("M-12 30H12L8 54L-8 46Z", PAPER2, INK, 4);
    s += g(`translate(${lx + 446} 64) rotate(38)`, m);
  } else if (kind === 1) {
    // big closing quote marks over the top corner
    for (const dx of [0, 46]) s += circle(lx + 400 + dx, 40, 17, INK) + path(`M${lx + 417 + dx} 38C${lx + 418 + dx} 66 ${lx + 402 + dx} 80 ${lx + 384 + dx} 86`, NONE, INK, 8);
  } else {
    // editing toolbar
    s += rect(lx + 270, 6, 220, 52, 26, PAPER, INK, 4);
    s += line(lx + 298, 24, lx + 318, 24, INK, 5) + line(lx + 298, 34, lx + 324, 34, INK, 5) + line(lx + 298, 44, lx + 314, 44, INK, 5);
    s += path(`M${lx + 350} 22H${lx + 376}M${lx + 363} 22V46`, NONE, INK, 5);
    s += line(lx + 400, 18, lx + 400, 46, HAIR, 3);
    s += circle(lx + 430, 32, 10, SOFT) + circle(lx + 458, 32, 10, NONE, MUTE, 3);
  }
  return s;
};

/** Content plans, posting schedules, bookings: a calendar page with planned days and a clock. */
const calendar: Subject = (v) => {
  const hot = v.int(8, 26);
  const clockTop = v.first(v.bool());
  const seedDays = [v.int(1, 6), v.int(9, 13), v.int(15, 20), v.int(22, 24), v.int(28, 33)];
  let s = rect(12, 56, 400, 354, 18, PAPER2);
  s += rect(0, 40, 400, 360, 18, PAPER, INK, 4);
  s += path("M18 40H382Q400 40 400 58V108H0V58Q0 40 18 40Z", SOFT, INK, 4);
  s += line(150, 74, 250, 74, PAPER, 10);
  s += path("M40 74L28 74M360 74L372 74", NONE, HAIR, 6);
  for (const x of [96, 304]) s += rect(x - 9, 16, 18, 48, 9, PAPER, INK, 4);
  for (let i = 0; i < 7; i++) s += line(38 + i * 52, 128, 54 + i * 52, 128, MUTE, 5);
  for (let d = 0; d < 35; d++) {
    const x = 22 + (d % 7) * 52;
    const y = 146 + Math.floor(d / 7) * 48;
    if (d === hot) {
      s += rect(x + 2, y + 2, 44, 40, 8, ACCENT);
      s += path(`M${x + 14} ${y + 22}L${x + 22} ${y + 30}L${x + 36} ${y + 14}`, NONE, PAPER, 5);
    } else if (seedDays.includes(d) || d % 9 === 4) {
      s += rect(x + 2, y + 2, 44, 40, 8, PAPER2);
      s += rect(x + 12, y + 14, 24, 16, 4, d % 2 ? SOFT : MUTE);
    } else {
      s += circle(x + 24, y + 22, 3, HAIR);
    }
  }
  // clock
  const cy = clockTop ? 120 : 320;
  s += circle(468, cy + 8, 82, PAPER2);
  s += circle(460, cy, 82, PAPER, INK, 4);
  for (let i = 0; i < 12; i++) {
    const [x1, y1] = polar(460, cy, 70, i * 30);
    const [x2, y2] = polar(460, cy, i % 3 ? 64 : 56, i * 30);
    s += line(x1, y1, x2, y2, i % 3 ? HAIR : MUTE, 4);
  }
  s += line(460, cy, 460, cy - 50, INK, 6) + line(460, cy, 492, cy + 18, INK, 6) + circle(460, cy, 8, INK);
  return s;
};

/** Lead magnets, list growth, more customers: a horseshoe magnet pulling in people and mail. */
const magnet: Subject = (v) => {
  const down = v.second(v.bool());
  const mirror = v.first(v.bool());
  const rot = down ? 14 : -14;
  const U = "M64-74H-10A74 74 0 0 0-10 74H64";
  let m = `<path d="${U}" fill="none" stroke="${INK}" stroke-width="66" stroke-linecap="butt" stroke-linejoin="round"/>`;
  m += `<path d="${U}" fill="none" stroke="${ACCENT}" stroke-width="58" stroke-linecap="butt" stroke-linejoin="round"/>`;
  m += path("M-10-58A58 58 0 0 0-56-22", NONE, PAPER, 5);
  m += rect(62, -107, 46, 66, 6, PAPER2, INK, 4) + rect(62, 41, 46, 66, 6, PAPER2, INK, 4);
  let s = g(`translate(150 214) rotate(${rot}) scale(1.3)`, m);
  // what it draws in
  const badge = (x: number, y: number, r: number, kind: number) => {
    let b = circle(x, y, r, PAPER, INK, 4);
    if (kind === 1) {
      b += rect(x - r * 0.5, y - r * 0.34, r, r * 0.7, 4, PAPER2, INK, 3);
      b += path(`M${x - r * 0.5} ${y - r * 0.34}L${x} ${y + 4}L${x + r * 0.5} ${y - r * 0.34}`, NONE, INK, 3);
    } else {
      b += circle(x, y - r * 0.2, r * 0.26, SOFT);
      b += path(`M${x - r * 0.46} ${y + r * 0.56}C${x - r * 0.46} ${y + r * 0.1} ${x + r * 0.46} ${y + r * 0.1} ${x + r * 0.46} ${y + r * 0.56}Z`, SOFT);
    }
    return b;
  };
  const items: [number, number, number, number][] = down
    ? [[420, 110, 44, 0], [500, 230, 40, 1], [400, 338, 46, 0]]
    : [[400, 82, 46, 0], [494, 196, 40, 1], [418, 318, 44, 0]];
  for (const [x, y, r] of items) {
    const dx = 300 - x;
    const dy = 214 - y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    s += dashed(`M${f(x + ux * (r + 14))} ${f(y + uy * (r + 14))}L${f(x + ux * (r + 70))} ${f(y + uy * (r + 70))}`, MUTE, 4, "10 12");
  }
  for (const [x, y, r, k] of items) s += badge(x, y, r, k);
  return mirror ? g("translate(560 0) scale(-1 1)", s) : s;
};

/** Backlinks: two pages joined by a chain, the middle link highlighted. */
const links: Subject = (v) => {
  const up = v.first(v.bool());
  const ay = up ? 150 : 20;
  const by = up ? 20 : 150;
  const page = (x: number, y: number, src: boolean) => {
    let p = rect(x, y, 200, 250, 14, PAPER, INK, 4);
    p += line(x + 26, y + 38, x + 150, y + 38, INK, 12);
    for (let i = 0; i < 5; i++) p += line(x + 26, y + 80 + i * 30, x + 174 - ((i * 29) % 50), y + 80 + i * 30, MUTE, 7);
    if (src) p += line(x + 26, y + 156, x + 128, y + 156, INK, 3);
    return p;
  };
  let s = page(0, ay, true) + page(360, by, false);
  // chain: two links seen face on, a highlighted one edge on between them
  const x1 = 100;
  const y1 = ay + 125;
  const x2 = 460;
  const y2 = by + 125;
  const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  const band = (d: string, color: string) =>
    `<path d="${d}" fill="none" stroke="${INK}" stroke-width="30"/><path d="${d}" fill="none" stroke="${color}" stroke-width="20"/>`;
  const stadium = (cx: number) => `M${cx - 44} -36H${cx + 44}A36 36 0 0 1 ${cx + 44} 36H${cx - 44}A36 36 0 0 1 ${cx - 44} -36Z`;
  let c = band(stadium(-104), PAPER2) + band(stadium(104), PAPER2);
  c += rect(-84, -14, 168, 28, 14, ACCENT, INK, 4);
  // the left link passes back over the middle one, so they interlock
  c += band(arc(-60, 0, 36, 28, -28), PAPER2);
  s += g(`translate(${f((x1 + x2) / 2)} ${f((y1 + y2) / 2)}) rotate(${f(ang)})`, c);
  return s;
};

/** Site speed, technical SEO: a speedometer with the needle near the top, a finished load bar. */
const speed: Subject = (v) => {
  const val = v.int(74, 88) / 100;
  // the accent goes either on the needle or on the fast end of the scale
  const hotBand = v.first(v.bool());
  const cx = 280;
  const cy = 300;
  const R = 230;
  let s = path(`M${cx - R - 14} ${cy}A${R + 14} ${R + 14} 0 0 1 ${cx + R + 14} ${cy}Z`, PAPER2);
  s += path(`M${cx - R} ${cy}A${R} ${R} 0 0 1 ${cx + R} ${cy}Z`, PAPER, INK, 4);
  // scale bands, slow to fast
  s += path(arc(cx, cy, 180, 180, 72), NONE, HAIR, 28);
  s += path(arc(cx, cy, 180, 72, 32), NONE, MUTE, 28);
  s += path(arc(cx, cy, 180, 32, 0), NONE, hotBand ? ACCENT : SOFT, 28);
  for (let i = 0; i <= 10; i++) {
    const a = 180 - i * 18;
    const [x1, y1] = polar(cx, cy, 212, a);
    const [x2, y2] = polar(cx, cy, i % 5 ? 204 : 196, a);
    s += line(x1, y1, x2, y2, INK, i % 5 ? 3 : 5);
  }
  for (const a of [150, 120, 90, 60, 30]) s += circle(...polar(cx, cy, 132, a), 4, HAIR);
  // needle
  const a = 180 - val * 180;
  const [tx, ty] = polar(cx, cy, 168, a);
  const [lx, ly] = polar(cx, cy, 15, a + 90);
  const [rx, ry] = polar(cx, cy, 15, a - 90);
  s += path(`M${f(lx)} ${f(ly)}L${f(tx)} ${f(ty)}L${f(rx)} ${f(ry)}Z`, hotBand ? INK : ACCENT, hotBand ? INK : ACCENT, 4);
  s += circle(cx, cy, 26, INK) + circle(cx, cy, 9, PAPER);
  s += line(cx - R - 14, cy, cx + R + 14, cy, INK, 4);
  // page load bar, done
  s += rect(cx - 180, 340, 360, 46, 23, PAPER, INK, 4);
  s += rect(cx - 170, 350, 296, 26, 13, SOFT);
  s += circle(cx + 152, 363, 13, PAPER2, INK, 3) + path(`M${cx + 146} 363L${cx + 150} 368L${cx + 159} 358`, NONE, INK, 3);
  return s;
};

/** Calls to action, homepages, landing pages: a page with one big button and a cursor clicking it. */
const cta: Subject = (v) => {
  const right = v.first(v.bool());
  const form = v.second(v.bool());
  const ox = right ? 90 : 0;
  let s = rect(ox, 10, 470, 350, 16, PAPER, INK, 4) + chrome(ox, 10, 470);
  if (form) {
    s += line(ox + 40, 112, ox + 250, 112, INK, 16) + line(ox + 40, 146, ox + 200, 146, INK, 16);
    s += line(ox + 40, 182, ox + 230, 182, MUTE, 8);
    s += rect(ox + 300, 96, 130, 34, 8, PAPER, MUTE, 3) + line(ox + 314, 113, ox + 360, 113, HAIR, 6);
    s += rect(ox + 300, 142, 130, 34, 8, PAPER, MUTE, 3) + line(ox + 314, 159, ox + 380, 159, HAIR, 6);
  } else {
    s += line(ox + 40, 112, ox + 290, 112, INK, 16) + line(ox + 40, 146, ox + 230, 146, INK, 16);
    s += line(ox + 40, 182, ox + 270, 182, MUTE, 8);
    s += rect(ox + 336, 90, 100, 100, 10, PAPER2) + path(`M${ox + 350} 176L${ox + 380} 144L${ox + 400} 162L${ox + 414} 150L${ox + 428} 176`, NONE, MUTE, 3);
  }
  // the button, raised
  s += rect(ox + 48, 226, 270, 76, 38, SOFT);
  s += rect(ox + 40, 218, 270, 76, 38, ACCENT);
  s += line(ox + 86, 256, ox + 170, 256, PAPER, 8);
  s += path(`M${ox + 204} 256H${ox + 252}M${ox + 234} 238L${ox + 252} 256L${ox + 234} 274`, NONE, PAPER, 7);
  // cursor, its tip on the button's edge, and click rays off to the right
  const cx = ox + 290;
  const cy = 280;
  s += path(`M${cx} ${cy}V${cy + 116}L${cx + 28} ${cy + 90}L${cx + 48} ${cy + 134}L${cx + 70} ${cy + 124}L${cx + 50} ${cy + 82}H${cx + 88}Z`, PAPER, INK, 5);
  for (const a of [-5, 30, 65]) {
    const [x1, y1] = polar(cx, cy, 34, a);
    const [x2, y2] = polar(cx, cy, 56, a);
    s += line(x1, y1, x2, y2, INK, 5);
  }
  return s;
};

/** AI, automation, tech stack: meshing gears driven by a small workflow. */
const automation: Subject = (v) => {
  const accentSmall = v.first(v.bool());
  const sparkle = !v.second(!v.bool());
  const bx = 330;
  const by = 238;
  let s = "";
  // workflow nodes feeding the big gear
  const ys = [70, 190, 310];
  for (const y of ys) {
    s += path(`M136 ${y + 30}H${bx - 150}`, NONE, MUTE, 3);
    s += rect(0, y, 136, 60, 14, PAPER, INK, 4);
    s += rect(16, y + 16, 28, 28, 7, y === 190 ? SOFT : PAPER2, y === 190 ? undefined : MUTE, 3);
    s += line(58, y + 24, 112, y + 24, SOFT, 7) + line(58, y + 40, 94, y + 40, HAIR, 6);
  }
  s += path(`M${bx - 150} 100V340`, NONE, MUTE, 3) + circle(bx - 150, 220, 7, MUTE);
  // gears
  s += path(gear(bx, by, 12, 124, 100, 0), PAPER2, INK, 4);
  s += circle(bx, by, 64, NONE, MUTE, 3) + circle(bx, by, 30, PAPER, INK, 4);
  const sm = polar(bx, by, 174, 45);
  s += path(gear(sm[0], sm[1], 8, 70, 50, 8), accentSmall ? ACCENT : PAPER, INK, 4);
  s += circle(sm[0], sm[1], 18, PAPER, INK, 4);
  const tn = polar(bx, by, 166, -38);
  s += path(gear(tn[0], tn[1], 7, 58, 40, 4), accentSmall ? PAPER : ACCENT, INK, 4);
  s += circle(tn[0], tn[1], 14, PAPER, INK, 4);
  if (sparkle) {
    const [x, y] = [bx - 6, 46];
    s += path(`M${x} ${y - 30}C${x + 4} ${y - 6} ${x + 6} ${y - 4} ${x + 30} ${y}C${x + 6} ${y + 4} ${x + 4} ${y + 6} ${x} ${y + 30}C${x - 4} ${y + 6} ${x - 6} ${y + 4} ${x - 30} ${y}C${x - 6} ${y - 4} ${x - 4} ${y - 6} ${x} ${y - 30}Z`, INK);
  }
  return s;
};

/** One piece on every channel: a central piece of content wired to channel icons. */
const channels: Subject = (v) => {
  const n = v.first(v.int(4, 5) === 5) ? 5 : 4;
  const shift = v.int(0, 4);
  const cx = 280;
  const cy = 210;
  const spots: [number, number][] =
    n === 4
      ? [[70, 80], [490, 80], [70, 340], [490, 340]]
      : [[66, 92], [494, 92], [56, 330], [504, 330], [280, 382]];
  let s = "";
  for (const [x, y] of spots) {
    const sx = x < cx ? cx - 78 : x > cx ? cx + 78 : cx;
    const sy = y > cy + 100 ? cy + 102 : y < cy ? cy - 44 : cy + 44;
    s += dashed(`M${sx} ${sy}C${(sx + x) / 2} ${sy} ${(sx + x) / 2} ${y} ${x} ${y}`, MUTE, 4, "2 12");
  }
  // centre piece
  s += rect(cx - 70, cy - 96, 156, 206, 12, PAPER2);
  s += rect(cx - 78, cy - 104, 156, 206, 12, PAPER, INK, 4);
  s += rect(cx - 58, cy - 84, 116, 74, 8, ACCENT);
  s += line(cx - 58, cy + 14, cx + 44, cy + 14, INK, 13);
  s += line(cx - 58, cy + 44, cx + 52, cy + 44, MUTE, 7) + line(cx - 58, cy + 70, cx + 22, cy + 70, MUTE, 7);
  // channel badges with small icons
  const icon = (k: number, x: number, y: number) => {
    switch (k % 5) {
      case 0:
        return path(`M${x - 8} ${y - 14}L${x + 14} ${y}L${x - 8} ${y + 14}Z`, INK, INK, 3);
      case 1:
        return rect(x - 20, y - 14, 40, 28, 4, PAPER2, INK, 3) + path(`M${x - 20} ${y - 14}L${x} ${y + 2}L${x + 20} ${y - 14}`, NONE, INK, 3);
      case 2:
        return rect(x - 12, y - 22, 24, 44, 6, PAPER2, INK, 3) + line(x - 4, y + 15, x + 4, y + 15, INK, 3);
      case 3:
        return path(bubble(x - 20, y - 16, 40, 28, 10, x - 6, -1, 9), PAPER2, INK, 3);
      default:
        return g(`translate(${x} ${y + 2}) scale(0.4)`, path(HEART, SOFT));
    }
  };
  spots.forEach(([x, y], i) => {
    s += circle(x, y, 44, PAPER, INK, 4) + g(`translate(${x} ${y}) scale(1.2) translate(${-x} ${-y})`, icon(i + shift, x, y));
  });
  return s;
};

/** Fallback: a valley between hills under a cloud and a sun. */
const valley: Subject = () => {
  let s = rect(0, 0, 560, 410, 16, PAPER, INK, 4);
  s += circle(400, 120, 40, ACCENT);
  s += path("M150 150a34 34 0 0 1 60-22a42 42 0 0 1 80 10a28 28 0 0 1 6 56H162a26 26 0 0 1-12-44Z", PAPER, INK, 4);
  s += path("M20 330C110 210 200 220 280 300C360 220 450 210 540 320V394H20Z", PAPER2, INK, 4);
  s += path("M120 360C200 320 250 330 280 350C320 330 380 320 450 356", NONE, MUTE, 4);
  return s;
};

/* ---------- subjects, alt text and matching ---------- */

export const SUBJECTS = {
  browser,
  search,
  sheets,
  social,
  apps,
  brand,
  shop,
  growth,
  email,
  ads,
  analytics,
  budget,
  chat,
  reviews,
  security,
  local,
  video,
  checkout,
  loyalty,
  target,
  copy,
  calendar,
  magnet,
  links,
  speed,
  cta,
  automation,
  channels,
  valley,
} satisfies Record<string, Subject>;

export type CoverSubject = keyof typeof SUBJECTS;

/** The service picture used when no keyword matches. */
export const SERVICE_SUBJECTS: Record<string, CoverSubject> = {
  "01": "browser",
  "02": "search",
  "03": "sheets",
  "04": "social",
  "05": "apps",
  "06": "brand",
  "07": "shop",
  "08": "growth",
};

/**
 * Keywords per picture, checked in this order against the English title,
 * then the English excerpt; the first match wins. Whole words or phrases,
 * any case ("e-commerce" and "e commerce" are the same). To give an article a
 * different picture, add a more specific keyword to an earlier row.
 */
export const COVER_KEYWORDS: [CoverSubject, string[]][] = [
  ["security", ["security", "secure", "protection", "protect", "hackers", "hacked", "hacking", "malware", "ssl", "https", "passwords", "privacy", "backups"]],
  ["email", ["email", "emails", "newsletter", "newsletters", "inbox", "mailing list", "email marketing"]],
  ["magnet", ["lead magnet", "lead magnets", "grow your list", "list building", "leads", "lead generation", "lead generating", "more customers", "attract customers"]],
  ["chat", ["chatbot", "chatbots", "chat", "live chat", "whatsapp", "customer service", "customer support", "customer replies", "replies", "response times", "messaging"]],
  ["reviews", ["review", "reviews", "ratings", "rating", "testimonials", "case study", "case studies", "reputation", "feedback", "complaints"]],
  ["local", ["local seo", "local", "google business profile", "google maps", "maps", "nearby", "near me"]],
  ["links", ["backlink", "backlinks", "link building", "links"]],
  ["speed", ["speed", "slow", "faster website", "page speed", "core web vitals", "technical seo", "performance", "load time"]],
  ["video", ["video", "videos", "short videos", "reels", "tiktok", "youtube"]],
  ["calendar", ["booking", "bookings", "appointments", "appointment", "reservations", "posting frequency", "posting", "content plan", "content calendar", "schedule", "scheduling", "social media management"]],
  ["checkout", ["checkout", "payment", "payments", "cart", "carts", "cart abandonment", "abandoned"]],
  ["loyalty", ["loyalty", "loyal", "referral", "referrals", "rewards", "repeat customers", "retention", "gift", "coupons"]],
  ["target", ["retargeting", "remarketing", "cro", "conversion rate", "conversion rate optimization", "targeting"]],
  ["cta", ["cta", "ctas", "call to action", "calls to action", "homepage", "landing page", "landing pages", "buttons"]],
  ["social", ["without ads", "organic", "followers", "social media growth"]],
  ["ads", ["ads", "ad", "advertising", "adverts", "ad spend", "ppc", "google ads", "sponsored", "campaign", "campaigns"]],
  ["analytics", ["analytics", "metrics", "kpi", "kpis", "dashboard", "dashboards", "tracking", "measure", "reports"]],
  ["budget", ["budget", "budgets", "cost", "costs", "price", "prices", "pricing", "roi", "spend", "spending"]],
  ["brand", ["brand identity", "visual identity", "logo", "logos", "rebranding", "rebrand", "colors", "colours", "fonts"]],
  ["shop", ["e commerce", "ecommerce", "online store", "store", "product page", "product pages"]],
  ["apps", ["app", "apps", "mobile app", "mobile apps"]],
  ["sheets", ["content production", "blog", "blogging", "articles"]],
  ["search", ["seo", "keyword", "keywords", "keyword research", "rank", "ranking", "rankings"]],
  ["automation", ["ai", "automation", "automate", "personalization", "personalisation", "tech stack", "digital engine", "tools", "workflow", "workflows", "integrations"]],
  ["channels", ["channel", "channels", "platform", "platforms", "omnichannel", "multichannel", "repurpose", "repurposing"]],
  ["copy", ["headline", "headlines", "words", "copy", "copywriting", "story", "storytelling", "voice", "tone"]],
];

/** Lower-case words separated by single spaces, with spaces at both ends. */
function words(text: string): string {
  return ` ${String(text ?? "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()} `;
}

function matchKeywords(text: string): CoverSubject | undefined {
  const t = words(text);
  if (t.trim() === "") return undefined;
  for (const [subject, keys] of COVER_KEYWORDS) {
    for (const k of keys) if (t.includes(words(k))) return subject;
  }
  return undefined;
}

function normNum(serviceNum: string): string {
  return String(serviceNum ?? "").trim().padStart(2, "0");
}

/**
 * The picture for an article: from its English title, else its English
 * excerpt, else its service. Use the English text for both languages so an
 * article and its translation share one cover.
 */
export function coverSubject(serviceNum: string, titleEn: string, excerptEn = ""): CoverSubject {
  return matchKeywords(titleEn) ?? matchKeywords(excerptEn) ?? SERVICE_SUBJECTS[normNum(serviceNum)] ?? "valley";
}

/* ---------- page composition ---------- */

function isSubject(s: string): s is CoverSubject {
  return Object.prototype.hasOwnProperty.call(SUBJECTS, s);
}

/**
 * Complete standalone SVG cover: a subject name (see coverSubject), varied
 * by the seed (the slug). `variant` is the article's place among articles
 * with the same picture (0, 1, 2... oldest first); it steps the main layout
 * choices so those articles do not look alike.
 */
export function coverSvg(subject: string, seed: string, variant?: number): string {
  const name: CoverSubject = isSubject(subject) ? subject : "valley";
  const draw = SUBJECTS[name];
  const v = rand(`${name}:${seed}`, variant);
  const left = v.bool();
  const k = 1.12; // subjects are drawn in a 560 x 420 box, shown at 627 x 470
  const x0 = left ? 120 : 453;
  const y0 = 80;
  // backdrop disc peeking out behind the subject, toward the open side
  const pr = v.int(150, 200);
  const px = left ? x0 + 600 + v.int(-20, 40) : x0 + 27 - v.int(-20, 40);
  const py = v.int(pr + 30, COVER_HEIGHT - pr - 30);
  // registration marks on the open side, like a print sheet
  const cols = v.int(3, 4);
  const rows = v.int(2, 3);
  const sp = v.int(34, 44);
  const gx = left ? 1120 - (cols - 1) * sp : 80;
  const gy = v.bool() ? 80 : 550 - (rows - 1) * sp;
  let marks = "";
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) {
      const x = gx + i * sp;
      const y = gy + j * sp;
      marks += `M${x - 7} ${y}H${x + 7}M${x} ${y - 7}V${y + 7}`;
    }
  const body =
    rect(0, 0, COVER_WIDTH, COVER_HEIGHT, 0, PAPER) +
    circle(px, py, pr, PAPER2) +
    path(marks, NONE, HAIR, 3) +
    line(x0 - 40, 566, x0 + 667, 566, HAIR, 3) +
    g(`translate(${x0} ${y0}) scale(${k})`, draw(v));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${COVER_PNG_WIDTH}" height="${COVER_PNG_HEIGHT}" viewBox="0 0 ${COVER_WIDTH} ${COVER_HEIGHT}"><g stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
}

export const ALT: Record<CoverSubject, { en: string; ar: string }> = {
  browser: {
    en: "Line illustration of a browser window showing a page layout with a navigation bar, a hero block and content columns, and one highlighted call-to-action button",
    ar: "رسم خطي لنافذة متصفح تعرض تخطيط صفحة فيه شريط تنقل وواجهة رئيسية وأعمدة محتوى، مع زر دعوة لاتخاذ إجراء بارز",
  },
  search: {
    en: "Line illustration of a search box above a list of results, with the first result raised and highlighted",
    ar: "رسم خطي لمربع بحث فوق قائمة نتائج، والنتيجة الأولى بارزة في الصدارة",
  },
  sheets: {
    en: "Line illustration of stacked paper sheets with a heading and lines of text, and a fountain pen resting across them",
    ar: "رسم خطي لأوراق مكدسة عليها عنوان وأسطر نص، وفوقها قلم حبر",
  },
  social: {
    en: "Line illustration of a phone showing a grid of posts, beside speech bubbles and a heart",
    ar: "رسم خطي لهاتف يعرض شبكة من المنشورات، وبجانبه فقاعات محادثة وقلب",
  },
  apps: {
    en: "Line illustration of two phones side by side showing app screens with cards, toggle switches and a tab bar",
    ar: "رسم خطي لهاتفين متجاورين يعرضان شاشات تطبيق فيها بطاقات ومفاتيح تبديل وشريط تبويب",
  },
  brand: {
    en: "Line illustration of a logo mark constructed on guide circles and lines, with a set of colour swatches",
    ar: "رسم خطي لشعار يُبنى على دوائر وخطوط إرشادية، ومعه مجموعة من عينات الألوان",
  },
  shop: {
    en: "Line illustration of a product card with an image, a price line and an add-to-cart button, next to a shopping basket",
    ar: "رسم خطي لبطاقة منتج فيها صورة وسطر السعر وزر الإضافة إلى السلة، وبجانبها سلة تسوق",
  },
  growth: {
    en: "Line illustration of a chart rising across its axes to a highlighted high point, with a megaphone beside it",
    ar: "رسم خطي لمخطط بياني يرتفع بين محوريه حتى قمة بارزة، وبجانبه مكبر صوت",
  },
  email: {
    en: "Line illustration of an open envelope with a newsletter rising out of it, and a paper plane flying off on a dotted trail",
    ar: "رسم خطي لظرف مفتوح تخرج منه نشرة بريدية، وطائرة ورقية تنطلق على مسار منقط",
  },
  ads: {
    en: "Line illustration of a large megaphone sending out sound waves toward two sponsored post cards",
    ar: "رسم خطي لمكبر صوت كبير تنطلق منه موجات صوتية نحو بطاقتين لمنشورات إعلانية ممولة",
  },
  analytics: {
    en: "Line illustration of an analytics dashboard with figure tiles, a rising chart and a donut chart",
    ar: "رسم خطي للوحة تحليلات فيها مربعات أرقام ومخطط صاعد ومخطط دائري",
  },
  budget: {
    en: "Line illustration of stacks of coins growing in height beside a price tag hanging on a string",
    ar: "رسم خطي لأكوام من العملات تتزايد في الارتفاع، وبجانبها بطاقة سعر معلقة بخيط",
  },
  chat: {
    en: "Line illustration of a friendly chatbot beside a chat window with message bubbles and a typing indicator",
    ar: "رسم خطي لروبوت محادثة ودود بجانب نافذة دردشة فيها فقاعات رسائل ومؤشر كتابة",
  },
  reviews: {
    en: "Line illustration of customer review cards with a row of star ratings, and one large highlighted star",
    ar: "رسم خطي لبطاقات تقييم من العملاء فيها صف من النجوم، ونجمة كبيرة بارزة",
  },
  security: {
    en: "Line illustration of a shield with a padlock in front of a browser window with a secure address bar and checked items",
    ar: "رسم خطي لدرع عليه قفل أمام نافذة متصفح فيها شريط عنوان آمن وعناصر مؤكدة",
  },
  local: {
    en: "Line illustration of a folded paper map with roads and small places, and a large location pin standing on it",
    ar: "رسم خطي لخريطة ورقية مطوية فيها طرق وأماكن صغيرة، وعليها دبوس موقع كبير",
  },
  video: {
    en: "Line illustration of a video player with a large play button, beside a phone playing a short vertical video",
    ar: "رسم خطي لمشغل فيديو فيه زر تشغيل كبير، وبجانبه هاتف يعرض مقطعا قصيرا عموديا",
  },
  checkout: {
    en: "Line illustration of a checkout order summary with a highlighted pay button, and a bank card in front of it",
    ar: "رسم خطي لملخص طلب الدفع وفيه زر دفع بارز، وأمامه بطاقة بنكية",
  },
  loyalty: {
    en: "Line illustration of a gift box tied with a ribbon and bow, beside a loyalty stamp card",
    ar: "رسم خطي لصندوق هدية مربوط بشريط وفيونكة، وبجانبه بطاقة ولاء بالأختام",
  },
  target: {
    en: "Line illustration of a target with an arrow in the bullseye and a dotted path looping back to it",
    ar: "رسم خطي لهدف أصاب سهم مركزه، ومسار منقط يعود إليه",
  },
  copy: {
    en: "Line illustration of a page with a large headline, a text cursor at the end of it and lines of body text",
    ar: "رسم خطي لصفحة فيها عنوان كبير ومؤشر كتابة في آخره وأسطر من النص",
  },
  calendar: {
    en: "Line illustration of a calendar page with planned days and one highlighted day, beside a clock",
    ar: "رسم خطي لصفحة تقويم فيها أيام مخططة ويوم واحد بارز، وبجانبها ساعة",
  },
  magnet: {
    en: "Line illustration of a horseshoe magnet drawing in people and an envelope",
    ar: "رسم خطي لمغناطيس على شكل حدوة يجذب إليه أشخاصا وظرف رسالة",
  },
  links: {
    en: "Line illustration of two web pages joined by a chain, with the middle link highlighted",
    ar: "رسم خطي لصفحتي ويب تربطهما سلسلة، والحلقة الوسطى بارزة",
  },
  speed: {
    en: "Line illustration of a speedometer with its needle near the top of the scale, above a finished loading bar",
    ar: "رسم خطي لعداد سرعة مؤشره قرب أعلى المقياس، فوق شريط تحميل مكتمل",
  },
  cta: {
    en: "Line illustration of a web page with one large highlighted button and a mouse pointer clicking it",
    ar: "رسم خطي لصفحة ويب فيها زر كبير بارز ومؤشر فأرة ينقر عليه",
  },
  automation: {
    en: "Line illustration of meshing gears driven by a small workflow of connected steps",
    ar: "رسم خطي لتروس متشابكة تحركها سلسلة خطوات عمل مترابطة",
  },
  channels: {
    en: "Line illustration of one piece of content in the centre connected to several channels: video, email, mobile, messages and social",
    ar: "رسم خطي لمحتوى واحد في المنتصف متصل بعدة قنوات: الفيديو والبريد والجوال والرسائل ومواقع التواصل",
  },
  valley: {
    en: "Line illustration of a valley between hills under a cloud and a sun",
    ar: "رسم خطي لوادٍ بين التلال تحت سحابة وشمس",
  },
};

/** Alt text describing what the cover for this subject actually draws. */
export function coverAlt(subject: string, locale: "ar" | "en"): string {
  const a = ALT[isSubject(subject) ? subject : "valley"];
  return locale === "ar" ? a.ar : a.en;
}
