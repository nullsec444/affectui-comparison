var e={requirements:[`React 19`],whenToUse:[`Feature cards about files, uploads, storage or a knowledge base; empty states for documents`,`Bento grids that need a calm, friendly illustration above the text`],whenNotToUse:[`Showing real files – the documents are decorative and contain placeholder lines only`,`Dark sections – the folder and documents are drawn for a light theme`],usage:`import { GlassFolder } from "@/components/ui/glass-folder";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 360 }}>
      <GlassFolder />
      <h3>Card title</h3>
      <p>Short description of the feature.</p>
    </article>
  );
}`,props:[{name:`label`,type:`string`,default:`"Blue folder holding three documents…"`,description:`Accessible description of the illustration`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`Exposed as one image with a descriptive label; the folder parts inside are hidden from screen readers`,`The hover effect is purely decorative, nothing needs to be reached with the keyboard`],motion:[`Hover the folder: the frosted pocket tips forward and each document shifts and turns on its own`,`With prefers-reduced-motion the changes happen instantly`],responsive:[`Transparent background, so it sits on any light surface`,`Keeps a 3 : 2 aspect ratio and scales to the width of its container – every detail is sized in container units`]};export{e as docs};