type Props = {
  label?: string;
  align?: "start" | "between";
};

export function SectionRule({ label, align = "between" }: Props) {
  return (
    <div
      className={`flex w-full items-center gap-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute ${
        align === "between" ? "justify-between" : "justify-start"
      }`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label && <span>{label}</span>}
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}
