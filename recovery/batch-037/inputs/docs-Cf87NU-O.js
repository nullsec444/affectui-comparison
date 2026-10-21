var e={requirements:[`React 19`],whenToUse:[`A problem card about context switching, research in too many tabs or manual busywork`,`Bento grids and feature cards that need a small illustration above the text`],whenNotToUse:[`Showing real browser content – the windows only contain placeholder blocks`,`Places where the right and bottom edge must stay sharp – the scene fades out there by design`],usage:`import { TabOverload } from "@/components/ui/tab-overload";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 360 }}>
      <TabOverload />
      <h3>Card title</h3>
      <p>Short description of the problem or step.</p>
    </article>
  );
}`,props:[{name:`label`,type:`string`,default:`"Three overlapping browser windows…"`,description:`Accessible description of the illustration`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`Exposed as one image with a descriptive label; the windows inside are hidden from screen readers`,`The hover highlight is purely decorative, nothing needs to be reached with the keyboard`],motion:[`The placeholder blocks shimmer softly`,`The front window is highlighted with colored dots, an outline and a glow; hover a window behind it and the highlight moves over`,`With prefers-reduced-motion the shimmer stops and the highlight switches instantly`],responsive:[`Transparent background; the whole scene fades out towards the right and bottom edge with a CSS mask, so it blends into any surface`,`Keeps a 3 : 2 aspect ratio and scales to the width of its container – set a width or max-width via className`,`The hover swap uses the CSS :has() selector; in browsers without it the front window simply stays highlighted`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};