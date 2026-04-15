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
};

export function Rise({ as = "div", delay = 0, className = "", ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
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
  }, [delay]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLElement>}
      className={`rise ${className}`}
      {...rest}
    />
  );
}
