import"./chunk-MOQMIKSW.js";var e={requirements:["React 19"],whenToUse:["A hero or integrations section that shows your product sitting between the tools a team already uses","Landing pages where a calm, self-playing data flow explains \u201Cwe connect to X and Y\u201D faster than a logo wall"],whenNotToUse:["A real integration settings page \u2013 pausing a tool here is only part of the scene, nothing is saved","More than four tools per side \u2013 the beams get crowded; use Integration Grid or Logo Cluster for long lists"],usage:`import { IntegrationBeam } from "@/components/ui/integration-beam";

export function IntegrationsSection() {
  return (
    <section style={{ maxWidth: 640, margin: "0 auto" }}>
      <IntegrationBeam />
    </section>
  );
}`,examples:[{title:"Your own product and tools",code:`<IntegrationBeam
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
/>`}],props:[{name:"left",type:"{ name: string; logo: ReactNode }[]",default:"Slack, Notion, Gmail",description:"Tools that send data in \u2013 on the left, or above the hub on narrow widths. The logo fills a 28 \xD7 28 box"},{name:"right",type:"{ name: string; logo: ReactNode }[]",default:"HubSpot, Linear, Google Drive",description:"Tools that receive data \u2013 on the right, or below the hub on narrow widths"},{name:"center",type:"{ name: string; logo?: ReactNode }",default:'{ name: "Acme" }',description:"Your product. The logo is drawn white into a 36 \xD7 36 box on the dark tile (currentColor); a neutral flower mark when left out"},{name:"label",type:"string",default:'"Acme connected to Slack, Notion, \u2026"',description:"Accessible name of the scene"},{name:"className",type:"string",description:"Extra class on the root, e.g. for width or margins"}],keyboard:[{keys:["Tab"],description:"Moves between the tool tiles; the focused tool's beam comes forward and its name shows"},{keys:["Enter","Space"],description:"Pauses or reconnects the focused tool"}],accessibility:["The scene is a labelled group; every tool is a toggle button with aria-pressed and a name like \u201CSlack, connected\u201D","Pausing or reconnecting is announced in a polite live region, with the new count (\u201C5 of 6 connected\u201D)","The beams, pulses and logos are decorative and hidden from screen readers","Visible focus ring on the tiles; the tooltip also shows on keyboard focus"],motion:["Sync cycles: pulses leave the left tools 280 ms apart, travel 1.5 s along their beam and, as they land, the hub glows and the next wave leaves for the right tools","Each pulse is a short gradient \u2013 clear tail, accent body, pale tip \u2013 with a soft blurred glow; one accent color only","The status chip under the hub slides between \u201CSyncing\u2026\u201D and \u201C6 connected\u201D, and its width glides with the text","When the layout switches between side by side and stacked, the tiles glide to their new spots and the curves morph with them (460 ms)","The loop only runs while the scene is on screen (IntersectionObserver)","With prefers-reduced-motion the beams are drawn as static lines \u2013 no pulses, no glides; hover, focus and pausing still work"],responsive:["The beams are measured from the real tile positions (ResizeObserver), so the scene reflows with its container","Below 460px of container width the senders stack above the hub and the receivers below, with vertical beams; fits 320px screens","On touch screens a tap pauses a tool and shows its name for a moment instead of a hover tooltip",'Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"'],related:["integration-grid","integration-flow","logo-cluster","agent-team"]};export{e as docs};
