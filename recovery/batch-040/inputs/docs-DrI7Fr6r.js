var e={requirements:[`React 19`],whenToUse:[`A hero or integrations section that shows your product sitting between the tools a team already uses`,`Landing pages where a calm, self-playing data flow explains “we connect to X and Y” faster than a logo wall`],whenNotToUse:[`A real integration settings page – pausing a tool here is only part of the scene, nothing is saved`,`More than four tools per side – the beams get crowded; use Integration Grid or Logo Cluster for long lists`],usage:`import { IntegrationBeam } from "@/components/ui/integration-beam";

export function IntegrationsSection() {
  return (
    <section style={{ maxWidth: 640, margin: "0 auto" }}>
      <IntegrationBeam />
    </section>
  );
}`,examples:[{title:`Your own product and tools`,code:`<IntegrationBeam
  center={{ name: "Relay", logo: <RelayMark /> }}
  left={[
    { name: "Stripe", logo: <StripeIcon /> },
    { name: "Shopify", logo: <ShopifyIcon /> },
    { name: "Intercom", logo: <IntercomIcon /> },
  ]}
  right={[
    { name: "Snowflake", logo: <SnowflakeIcon /> },
    { name: "Slack", logo: <SlackIcon /> },
    { name: "Notion", logo: <NotionIcon /> },
  ]}
/>`}],props:[{name:`left`,type:`{ name: string; logo: ReactNode }[]`,default:`Slack, Notion, Gmail`,description:`Tools that send data in – on the left, or above the hub on narrow widths. The logo fills a 28 × 28 box`},{name:`right`,type:`{ name: string; logo: ReactNode }[]`,default:`HubSpot, Linear, Google Drive`,description:`Tools that receive data – on the right, or below the hub on narrow widths`},{name:`center`,type:`{ name: string; logo?: ReactNode }`,default:`{ name: "Acme" }`,description:`Your product. The logo is drawn white into a 36 × 36 box on the dark tile (currentColor); a neutral flower mark when left out`},{name:`label`,type:`string`,default:`"Acme connected to Slack, Notion, …"`,description:`Accessible name of the scene`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],keyboard:[{keys:[`Tab`],description:`Moves between the tool tiles; the focused tool's beam comes forward and its name shows`},{keys:[`Enter`,`Space`],description:`Pauses or reconnects the focused tool`}],accessibility:[`The scene is a labelled group; every tool is a toggle button with aria-pressed and a name like “Slack, connected”`,`Pausing or reconnecting is announced in a polite live region, with the new count (“5 of 6 connected”)`,`The beams, pulses and logos are decorative and hidden from screen readers`,`Visible focus ring on the tiles; the tooltip also shows on keyboard focus`],motion:[`Sync cycles: pulses leave the left tools 280 ms apart, travel 1.5 s along their beam and, as they land, the hub glows and the next wave leaves for the right tools`,`Each pulse is a short gradient – clear tail, accent body, pale tip – with a soft blurred glow; one accent color only`,`The status chip under the hub slides between “Syncing…” and “6 connected”, and its width glides with the text`,`When the layout switches between side by side and stacked, the tiles glide to their new spots and the curves morph with them (460 ms)`,`The loop only runs while the scene is on screen (IntersectionObserver)`,`With prefers-reduced-motion the beams are drawn as static lines – no pulses, no glides; hover, focus and pausing still work`],responsive:[`The beams are measured from the real tile positions (ResizeObserver), so the scene reflows with its container`,`Below 460px of container width the senders stack above the hub and the receivers below, with vertical beams; fits 320px screens`,`On touch screens a tap pauses a tool and shows its name for a moment instead of a hover tooltip`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`integration-grid`,`integration-flow`,`logo-cluster`,`agent-team`]};export{e as docs};