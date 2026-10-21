import "./chunk-CTH3ASD6.js";

// reconstructed/docs-Bg0MHHdB.jsx
var docs = {
  requirements: [`React 19`, `@hugeicons/react`, `@hugeicons/core-free-icons`, `App Shell (installed with it)`],
  whenToUse: [`File, knowledge or document areas in an app`, `Overviews of projects or workspaces as cards`],
  whenNotToUse: [`Thousands of files \u2013 use a virtualised table`],
  usage: `import { FilesScreen } from "@/components/ui/files";

export default function Page() {
  return <FilesScreen workspace="Acme" user={{ name: "Alex Morgan" }} onNavigate={(label) => router.push(routes[label])} />;
}`,
  props: [{
    name: `onNavigate`,
    type: `(label: string) => void`,
    description: `Called with the label of a sidebar item or project`
  }, {
    name: `workspace`,
    type: `string`,
    default: `"Acme"`,
    description: `Workspace name in the sidebar`
  }, {
    name: `user`,
    type: `{ name: string; avatar?: string }`,
    default: `{ name: "Alex Morgan" }`,
    description: `Account at the bottom of the sidebar`
  }, {
    name: `className`,
    type: `string`,
    description: `Extra class on the root`
  }],
  accessibility: [`Sidebar items, projects and the collapse toggle are real buttons with labels`, `Icons are decorative and hidden from screen readers`],
  responsive: [`Fills its container \u2013 give it the full viewport height in your app`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"; colors are CSS variables on .ui-as`]
};
export {
  docs
};
