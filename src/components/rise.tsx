type Props = React.HTMLAttributes<HTMLElement> & {
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
  /** Delay before the entrance starts; only used with `eager`. */
  delay?: number;
  /**
   * Use on the top block of a page: plays a short fade-and-rise from the
   * first painted frame, in CSS, with no JavaScript involved.
   *
   * Without `eager` the element is rendered as is. It used to start at
   * opacity 0 until hydration and an IntersectionObserver revealed it, so
   * every block below the top waited for the JavaScript bundle (and stayed
   * blank if it failed). It is now a plain server-rendered element.
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
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={eager ? `rise-eager ${className}` : className}
      style={eager && delay ? { ...style, animationDelay: `${delay}ms` } : style}
      {...rest}
    />
  );
}
