/**
 * Article cover illustrations, drawn in code.
 *
 * Every blog article gets a cover picked from its service number ("01".."08")
 * and varied by its slug, so a new article written by the automation gets a
 * cover with no extra step. The output is a standalone SVG string that renders
 * the same in browsers and in Satori/resvg (next/og): basic shapes only, no
 * text, fonts, images, filters, masks, gradients, CSS or external references.
 *
 * Style: the site's paper-and-ink journal look. Paper ground, ink line work,
 * and one terracotta accent on the single element that matters.
 */

export const COVER_WIDTH = 1200;
export const COVER_HEIGHT = 630;

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

type Rand = { int: (min: number, max: number) => number; bool: () => boolean };

function rand(seed: string): Rand {
  const r = rng(hash(seed));
  return {
    int: (min, max) => min + Math.floor(r() * (max - min + 1)),
    bool: () => r() < 0.5,
  };
}

/* ---------- tiny SVG builders ---------- */

const f = (n: number) => String(Math.round(n * 10) / 10);

function rect(x: number, y: number, w: number, h: number, r: number, fill: string, stroke?: string, sw?: number): string {
  return `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}"${r ? ` rx="${f(r)}"` : ""} fill="${fill}"${
    stroke ? ` stroke="${stroke}" stroke-width="${sw ?? 4}"` : ""
  }/>`;
}

function circle(cx: number, cy: number, r: number, fill: string, stroke?: string, sw?: number): string {
  return `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw ?? 4}"` : ""}/>`;
}

function line(x1: number, y1: number, x2: number, y2: number, stroke: string, sw: number): string {
  return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" fill="none" stroke="${stroke}" stroke-width="${sw}"/>`;
}

function path(d: string, fill: string, stroke?: string, sw?: number): string {
  return `<path d="${d}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw ?? 4}"` : ""}/>`;
}

function g(transform: string, body: string): string {
  return `<g transform="${transform}">${body}</g>`;
}

/** A heart centred on (0,0), about 80 wide. */
const HEART = "M0 32C-28 14-42 0-42-16C-42-30-31-40-19-40C-10-40-3-35 0-28C3-35 10-40 19-40C31-40 42-30 42-16C42 0 28 14 0 32Z";

/* ---------- subjects (each drawn in a 560 x 420 box) ---------- */

type Subject = (v: Rand) => string;

/** 01 Website design: browser window, nav, hero, columns, one CTA. */
const browser: Subject = (v) => {
  const ctaInNav = v.int(0, 3) === 0;
  const imgLeft = v.bool();
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
  const accentTitle = v.int(0, 2) === 0;
  const lens = v.bool();
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
  const accentPen = v.int(0, 2) !== 0;
  const hl = v.int(0, 4);
  const withImg = v.bool();
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
  const phoneRight = v.bool();
  const twoBubbles = v.int(0, 2) !== 0;
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
  s += rect(bx + 20, 40, 220, 88, 28, PAPER, INK, 4);
  s += path(`M${bx + 60} 126L${bx + 48} 156L${bx + 90} 127`, PAPER, INK, 4);
  s += line(bx + 50, 72, bx + 200, 72, SOFT, 8) + line(bx + 50, 98, bx + 150, 98, MUTE, 8);
  if (twoBubbles) {
    s += rect(bx + 70, 180, 170, 70, 26, PAPER2, INK, 4);
    s += path(`M${bx + 200} 248L${bx + 214} 274L${bx + 176} 249`, PAPER2, INK, 4);
    s += line(bx + 100, 215, bx + 200, 215, MUTE, 8);
  }
  const hy = twoBubbles ? 340 : 270;
  s += g(`translate(${bx + 130} ${hy})`, path(HEART, accentTile < 0 ? ACCENT : PAPER, accentTile < 0 ? undefined : INK, 4));
  return s;
};

/** 05 Mobile app: two phones with app screens (cards, toggles, tab bar). */
const apps: Subject = (v) => {
  const leftUp = v.bool();
  const accentToggle = v.int(0, 2) !== 0;
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
  const column = v.bool();
  const mark = v.int(0, 2);
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
  const stack = v.bool();
  const product = v.int(0, 2);
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
  const bars = v.bool();
  const n = v.int(5, 6);
  const megaUp = v.bool();
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

/** Fallback: a valley between hills under a cloud and a sun. */
const valley: Subject = () => {
  let s = rect(0, 0, 560, 410, 16, PAPER, INK, 4);
  s += circle(400, 120, 40, ACCENT);
  s += path("M150 150a34 34 0 0 1 60-22a42 42 0 0 1 80 10a28 28 0 0 1 6 56H162a26 26 0 0 1-12-44Z", PAPER, INK, 4);
  s += path("M20 330C110 210 200 220 280 300C360 220 450 210 540 320V394H20Z", PAPER2, INK, 4);
  s += path("M120 360C200 320 250 330 280 350C320 330 380 320 450 356", NONE, MUTE, 4);
  return s;
};

const SUBJECTS: Record<string, Subject> = {
  "01": browser,
  "02": search,
  "03": sheets,
  "04": social,
  "05": apps,
  "06": brand,
  "07": shop,
  "08": growth,
};

function normNum(serviceNum: string): string {
  return String(serviceNum ?? "").trim().padStart(2, "0");
}

/* ---------- page composition ---------- */

/** Complete standalone SVG cover for an article. */
export function coverSvg(serviceNum: string, seed: string): string {
  const num = normNum(serviceNum);
  const draw = SUBJECTS[num] ?? valley;
  const v = rand(`${num}:${seed}`);
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
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${COVER_WIDTH}" height="${COVER_HEIGHT}" viewBox="0 0 ${COVER_WIDTH} ${COVER_HEIGHT}"><g stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
}

const ALT: Record<string, { en: string; ar: string }> = {
  "01": {
    en: "Line illustration of a browser window showing a page layout with a navigation bar, a hero block and content columns, and one highlighted call-to-action button",
    ar: "رسم خطي لنافذة متصفح تعرض تخطيط صفحة فيه شريط تنقل وواجهة رئيسية وأعمدة محتوى، مع زر دعوة لاتخاذ إجراء بارز",
  },
  "02": {
    en: "Line illustration of a search box above a list of results, with the first result raised and highlighted",
    ar: "رسم خطي لمربع بحث فوق قائمة نتائج، والنتيجة الأولى بارزة في الصدارة",
  },
  "03": {
    en: "Line illustration of stacked paper sheets with a heading and lines of text, and a fountain pen resting across them",
    ar: "رسم خطي لأوراق مكدسة عليها عنوان وأسطر نص، وفوقها قلم حبر",
  },
  "04": {
    en: "Line illustration of a phone showing a grid of posts, beside speech bubbles and a heart",
    ar: "رسم خطي لهاتف يعرض شبكة من المنشورات، وبجانبه فقاعات محادثة وقلب",
  },
  "05": {
    en: "Line illustration of two phones side by side showing app screens with cards, toggle switches and a tab bar",
    ar: "رسم خطي لهاتفين متجاورين يعرضان شاشات تطبيق فيها بطاقات ومفاتيح تبديل وشريط تبويب",
  },
  "06": {
    en: "Line illustration of a logo mark constructed on guide circles and lines, with a set of colour swatches",
    ar: "رسم خطي لشعار يُبنى على دوائر وخطوط إرشادية، ومعه مجموعة من عينات الألوان",
  },
  "07": {
    en: "Line illustration of a product card with an image, a price line and an add-to-cart button, next to a shopping basket",
    ar: "رسم خطي لبطاقة منتج فيها صورة وسطر السعر وزر الإضافة إلى السلة، وبجانبها سلة تسوق",
  },
  "08": {
    en: "Line illustration of a chart rising across its axes to a highlighted high point, with a megaphone beside it",
    ar: "رسم خطي لمخطط بياني يرتفع بين محوريه حتى قمة بارزة، وبجانبه مكبر صوت",
  },
};

const ALT_FALLBACK = {
  en: "Line illustration of a valley between hills under a cloud and a sun",
  ar: "رسم خطي لوادٍ بين التلال تحت سحابة وشمس",
};

/** Alt text describing what the cover for this service actually draws. */
export function coverAlt(serviceNum: string, locale: "ar" | "en"): string {
  const a = ALT[normNum(serviceNum)] ?? ALT_FALLBACK;
  return locale === "ar" ? a.ar : a.en;
}
