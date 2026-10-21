import "./chunk-CTH3ASD6.js";

// reconstructed/docs.clean-DAMwFsKO.jsx
var docs = {
  requirements: [`React 19`],
  whenToUse: [`Suggesting the next step an app or assistant thinks is best \u2013 with a way out`, `Settings people rarely change but should get a nudge on, like sync modes or plans`],
  whenNotToUse: [`Choices without a clear favorite \u2013 show them side by side instead`],
  usage: `import { SmartRecommendation } from "@/components/ui/smart-recommendation-clean";

const options = [
  { id: "incremental", label: "Incremental sync", reason: "Only 4% of rows changed.", signal: 3 },
  { id: "full", label: "Full refresh", reason: "Rebuilds every table.", signal: 1 },
];

export function Sync() {
  return <SmartRecommendation options={options} onAccept={(o) => api.setMode(o.id)} />;
}`,
  props: [{
    name: `options`,
    type: `Recommendation[]`,
    description: `The first is recommended, the rest are alternatives \u2013 id, label, reason and signal (0\u20133)`
  }, {
    name: `onAccept`,
    type: `(option) => void`,
    description: `Called when an option is accepted`
  }, {
    name: `onUndo`,
    type: `(option) => void`,
    description: `Called when an accept is undone`
  }, {
    name: `defaultOpen`,
    type: `boolean`,
    default: `true`,
    description: `Starts with the reason visible`
  }, {
    name: `title`,
    type: `string`,
    default: `"Smart recommendation"`,
    description: `Heading of the card`
  }],
  keyboard: [{
    keys: [`Enter`, `Space`],
    description: `Fold the card, open alternatives or accept`
  }, {
    keys: [`Escape`],
    description: `Close the alternatives`
  }],
  accessibility: [`The heading is a button with aria-expanded; alternatives are a menu of radio items`, `The signal is written out in words next to the bars`],
  motion: [`The reason swaps softly when an alternative is picked; reduced motion turns this off`],
  responsive: [`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],
  related: [`decision-inbox`, `comment-thread`]
};
export {
  docs
};
