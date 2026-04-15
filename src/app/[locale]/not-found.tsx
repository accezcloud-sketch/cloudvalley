import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] flex-col items-start justify-center gap-6 px-6 md:px-10">
      <div
        className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        404 — not found
      </div>
      <h1
        className="text-[clamp(3rem,10vw,8rem)] leading-[0.95]"
        style={{
          fontFamily: "var(--font-serif-latin)",
          letterSpacing: "-0.03em",
        }}
      >
        Wrong turn.
      </h1>
      <Link
        href="/"
        className="border-b border-ink pb-0.5 text-base link-sweep underline-offset-heavy"
      >
        Return home →
      </Link>
    </div>
  );
}
