"use client";
import { useEffect, useRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?:
    | "div"
    | "section"
    | "article"
    | "li"
    | "header"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "figure";
  delay?: number;
  /**
   * Use on anything above the fold.
   *
   * The default .rise treatment sits at opacity 0 until hydration runs and an
   * IntersectionObserver adds .is-in — which means the LCP element (the h1 on
   * every page) is not painted until the JS bundle has downloaded, parsed and
   * hydrated. `eager` plays the identical entrance as a plain CSS animation
   * that starts on the first frame instead, with no JavaScript involved.
   */
  eager?: boolean;
};

export function Rise({
  as = "div",
  delay = 0,
  eager = false,
  className = "",
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (eager) return;
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              (entry.target as HTMLElement).classList.add("is-in");
            }, delay);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delay, eager]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLElement>}
      className={`${eager ? "rise-eager" : "rise"} ${className}`}
      style={
        eager && delay ? { ...style, animationDelay: `${delay}ms` } : style
      }
      {...rest}
    />
  );
}
