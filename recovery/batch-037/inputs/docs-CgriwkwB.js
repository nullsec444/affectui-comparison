var e={requirements:[`React 19`],whenToUse:[`A step or feature card about sending messages across several channels`,`Integration sections that show one action fanning out to a few apps`],whenNotToUse:[`Communicating real integrations you don't offer – swap the logos for your own channels`],usage:`import { OutreachBranches } from "@/components/ui/outreach-branches";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 360 }}>
      <OutreachBranches />
      <h3>Card title</h3>
      <p>Short description of the problem or step.</p>
    </article>
  );
}`,props:[{name:`label`,type:`string`,default:`"Lines branching out to Gmail, Slack and Notion…"`,description:`Accessible description of the illustration`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`Exposed as one image with a descriptive label; the logos and lines inside are hidden from screen readers`],motion:[`Short colored pulses flow down each of the three lines, staggered by one second (3 s loop)`,`With prefers-reduced-motion the pulses are hidden and only the gray lines remain`],responsive:[`Transparent background, so it sits on any light or dark surface`,`Keeps a 3 : 2 aspect ratio and scales to the width of its container – set a width or max-width via className`,`Drawn on a 320 × 240 viewBox, so logos and tiles scale crisply at any size`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};