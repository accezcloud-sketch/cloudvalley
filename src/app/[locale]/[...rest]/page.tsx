import { notFound } from "next/navigation";

// Any address under /ar or /en that matches no page lands here, so it is
// answered by [locale]/not-found.tsx inside the site layout (header, footer,
// correct language and direction) with a 404 status, instead of Next.js's
// bare English default page.
export default function UnmatchedRoute() {
  notFound();
}
