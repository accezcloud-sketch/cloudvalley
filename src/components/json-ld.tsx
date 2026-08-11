/**
 * Server-rendered JSON-LD.
 *
 * Deliberately a plain <script> and not next/script: next/script injects the
 * tag from the client, so the markup never appears in the served HTML and
 * crawlers that do not execute JavaScript never see it.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so a stray sequence in content can never close the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
