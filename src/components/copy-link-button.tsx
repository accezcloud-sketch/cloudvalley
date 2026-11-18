"use client";
import { useState } from "react";

type Props = {
  url: string;
  label: string;
  doneLabel: string;
  className: string;
};

/** Copies the article address; says so for two seconds. */
export function CopyLinkButton({ url, label, doneLabel, className }: Props) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      style={{ fontFamily: "var(--font-mono)" }}
      aria-live="polite"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(url);
          setDone(true);
          window.setTimeout(() => setDone(false), 2000);
        } catch {
          // Clipboard blocked (e.g. insecure context): fall back to a prompt
          // the visitor can copy from.
          window.prompt(label, url);
        }
      }}
    >
      {done ? doneLabel : label}
    </button>
  );
}
