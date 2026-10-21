import "./chunk-CTH3ASD6.js";

// reconstructed/docs-1TxNi_aU.jsx
var docs = {
  requirements: [`React 19`],
  whenToUse: [`Integration sections and feature cards like \u201CWorks with the tools you already use\u201D`, `Landing pages that show your product at the centre of an ecosystem`],
  whenNotToUse: [`A real, clickable list of integrations \u2013 the tiles are decorative and not links`, `More than 22 logos \u2013 the grid has 22 outer tiles, extra logos are left out`],
  usage: `import { IntegrationGrid } from "@/components/ui/integration-grid";

export function IntegrationsSection() {
  return (
    <section style={{ maxWidth: 760 }}>
      <IntegrationGrid mark={<img src="/logo.svg" alt="" width={40} height={40} />} />
      <h3>Plays well with your stack</h3>
      <p>Connect the tools your team already relies on.</p>
    </section>
  );
}`,
  props: [{
    name: `logos`,
    type: `IntegrationGridLogo[]`,
    default: `22 well-known tools`,
    description: `Logos filled row by row around the centre \u2013 each { name, path, color?, darkColor? } with a single 24 \xD7 24 SVG path (e.g. from simple-icons); without color the mark follows the ink color`
  }, {
    name: `mark`,
    type: `ReactNode`,
    default: `a neutral flower mark`,
    description: `Content of the larger centre tile \u2013 usually your product logo`
  }, {
    name: `columns`,
    type: `5 | 7 | 9`,
    default: `9`,
    description: `Tiles in the middle row \u2013 the rows above and below get two fewer. Fewer columns make the tiles larger`
  }, {
    name: `label`,
    type: `string`,
    description: `Accessible description \u2013 by default lists the integrations`
  }, {
    name: `className`,
    type: `string`,
    description: `Extra class on the root, e.g. for width or margins`
  }],
  accessibility: [`Exposed as one image whose label lists every integration; tiles and logos are hidden from screen readers`, `Nothing in the scene is interactive`],
  motion: [`Still by default; on hover a tile turns fully white and its logo grows a little from the centre`, `With prefers-reduced-motion the hover lift is switched off`],
  responsive: [`Transparent background, so it sits on any light or dark surface`, `Keeps a 1520 : 560 aspect ratio and scales to the width of its container \u2013 every size is in container units`, `Tile fills fade toward the edges while the logos keep their full brand colors`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]
};
export {
  docs
};
