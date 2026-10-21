var e={requirements:[`React 19`],whenToUse:[`A step or feature card about enriching, scoring or syncing data around a central record`,`Bento grids that need a calm, continuously moving illustration`],whenNotToUse:[`Places where constant motion would distract from nearby content`],usage:`import { EnrichmentOrbit } from "@/components/ui/enrichment-orbit";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 360 }}>
      <EnrichmentOrbit />
      <h3>Card title</h3>
      <p>Short description of the problem or step.</p>
    </article>
  );
}`,props:[{name:`label`,type:`string`,default:`"A Grok tile with data nodes orbiting…"`,description:`Accessible description of the illustration`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`Exposed as one image with a descriptive label; the rings and nodes inside are hidden from screen readers`],motion:[`Two colored comets run around the inner and outer ring in opposite directions (one turn every 7 s)`,`Three data nodes orbit the outer ring 120° apart (one orbit every 22 s) and stay upright while they travel`,`With prefers-reduced-motion everything is paused, the nodes keep their staggered spots on the ring`],responsive:[`Transparent background, so it sits on any light or dark surface`,`Keeps a 3 : 2 aspect ratio and scales to the width of its container – set a width or max-width via className`,`Drawn on a 320 × 240 viewBox, so rings and nodes scale crisply at any size`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};