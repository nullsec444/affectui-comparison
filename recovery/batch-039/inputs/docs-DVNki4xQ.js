var e={requirements:[`React 19`],whenToUse:[`A hero or feature section that shows your product pulling data in from the tools teams already use`,`Integration or data-platform pages where a short, self-playing loop explains the idea better than a logo wall`],whenNotToUse:[`A real list of connected integrations – the pills are decorative, not interactive`,`Very small spaces below ~320px wide, where the pill text gets hard to read`,`Brands that clash with the warm coral background`],usage:`import { IntegrationFlow } from "@/components/ui/integration-flow";

export function IntegrationsSection() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto" }}>
      <IntegrationFlow />
    </section>
  );
}`,examples:[{title:`Your own integrations`,code:`<IntegrationFlow
  items={[
    { name: "GitHub", mono: true, icon: <GitHubIcon /> },
    { name: "Notion", mono: true, icon: <NotionIcon /> },
    { name: "HubSpot", icon: <HubSpotIcon /> },
    { name: "Stripe", icon: <StripeIcon /> },
    { name: "Linear", icon: <LinearIcon />, title: "Webhook" },
  ]}
/>`}],props:[{name:`items`,type:`{ name: string; icon: ReactNode; title?: string; mono?: boolean }[]`,default:`Okta, Snowflake, Slack, ClickUp, Zendesk`,description:`Integrations that rotate through the pills (5 or more look best). The icon fills a 64 × 64 box; mono logos turn black in the centre`},{name:`label`,type:`string`,default:`"Integrations like Slack, Okta and Snowflake…"`,description:`Accessible description of the scene`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`The scene is exposed as one image with a descriptive label; the pills and cards inside are hidden from screen readers`],motion:[`The pills travel along the dashed arc one slot at a time (0.9 s); the one landing in the centre turns light and shows its logo in color`,`The centre pill charges up, a beam sweeps over to the Data Analysis hub (1.1 s) and the hub lights up as it arrives`,`The coral background blobs drift and breathe slowly on a 16 s loop`,`With prefers-reduced-motion everything stands still in the centre state, with the beam drawn in`],responsive:[`Drawn on a 2400 × 1490 stage and scaled to the width of its container, so the layout never reflows`,`Keeps its 2400 : 1490 aspect ratio; set a width or max-width via className`,`Set --ui-if-bg and --ui-if-fade to change the stage background and the color the bottom fades into`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};