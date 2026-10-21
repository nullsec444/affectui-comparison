import "./chunk-CTH3ASD6.js";

// current-assets/docs.clean-tUSra5Eq.js
var e = { requirements: [`React 19`], whenToUse: [`The integrations step of a command menu or settings dialog`, `Letting people find a service quickly and switch it on without leaving what they're doing`], whenNotToUse: [`A full marketplace with categories and many details per app \u2013 use a page instead`, `Two or three integrations \u2013 a simple list with switches is enough`], usage: `import { IntegrationPicker } from "@/components/ui/integration-picker-clean";

export function Integrations() {
  return (
    <IntegrationPicker
      appName="affectUI"
      onToggle={(id, connected) => saveIntegration(id, connected)}
      onExplore={(id) => router.push(\`/integrations/\${id}\`)}
      onBack={() => setPage("root")}
      onClose={closeMenu}
    />
  );
}`, props: [{ name: `integrations`, type: `Integration[]`, default: `10 sample services`, description: `Each { id, name, domain, category, description, features, path + color or icon, connected }` }, { name: `appName`, type: `string`, default: `"affectUI"`, description: `Your product's name in the title, e.g. \u201CaffectUI + Linear\u201D` }, { name: `appIcon`, type: `ReactNode`, default: `the affectUI mark`, description: `Your product's mark on the black tile` }, { name: `defaultSelected`, type: `string`, default: `the first item`, description: `Id of the integration that is picked first` }, { name: `onToggle`, type: `(id: string, connected: boolean) => void`, description: `Called when an integration is switched on or off` }, { name: `onExplore`, type: `(id: string) => void`, description: `Called by \u201CExplore integration\u201D` }, { name: `onBack`, type: `() => void`, description: `Shows the back button and runs on \u2190 in an empty search` }, { name: `onClose`, type: `() => void`, description: `Runs on Esc in an empty search` }, { name: `className`, type: `string`, description: `Extra class on the root` }], keyboard: [{ keys: [`\u2191`, `\u2193`], description: `Move through the list` }, { keys: [`\u21B5`], description: `Switch the picked integration on or off` }, { keys: [`Esc`], description: `Clear the search, then close` }, { keys: [`\u2190`], description: `Back to the parent page when the search is empty` }, { keys: [`\u2318`, `/`], description: `Jump into the search from anywhere (Ctrl / on Windows)` }], accessibility: [`The search is a combobox that controls the list; the picked row is announced as the active option`, `The connection switch is a real switch with a label that says what it will do`, `Details update in a polite live region when the pick changes`], motion: [`The highlight steps quickly from row to row, also across the Connected and Available groups \u2013 no long glide`, `The service tile swaps in with a short blur and lift; the arrows between the tiles turn once when connected`, `While connected, a thin blue ring keeps spreading out from the tiles \u2013 paused when the picker is off screen`, `With prefers-reduced-motion everything switches instantly`], responsive: [`Follows its own width: below 560px the list sits above the details and the key hints in the last row are left out; below 400px the capabilities are too`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`] };
export {
  e as docs
};
