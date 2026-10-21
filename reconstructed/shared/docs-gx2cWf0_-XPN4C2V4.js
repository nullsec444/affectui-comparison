import "./chunk-CTH3ASD6.js";

// reconstructed/docs-gx2cWf0_.jsx
var docs = {
  requirements: [`React 19`],
  whenToUse: [`Assigning people, labels, tags or projects \u2013 anything picked from a list that's too long to scan`, `Filters where several values can apply at once, like owners or statuses`, `Tag fields that should also accept new values (creatable)`],
  whenNotToUse: [`Up to five fixed choices \u2013 checkboxes or a segmented control show them all at once`, `Free text with no list behind it \u2013 use a plain input`, `Running actions rather than picking values \u2013 use the command menu`],
  usage: `import { Combobox, type ComboboxOption } from "@/components/ui/combobox";

const people: ComboboxOption[] = [
  { value: "maya", label: "Maya Chen", hint: "Product Designer", avatar: true, group: "Design" },
  { value: "sara", label: "Sara Okafor", hint: "Staff Engineer", avatar: "/avatars/sara.jpg", group: "Engineering" },
  { value: "elif", label: "Elif Yilmaz", hint: "Head of Product", avatar: true, group: "Product" },
];

export function Reviewers() {
  const [reviewers, setReviewers] = useState<string[]>(["maya"]);
  return (
    <Combobox
      label="Reviewers"
      options={people}
      value={reviewers}
      onChange={setReviewers}
      placeholder="Add reviewers\u2026"
      maxVisibleTags={4}
    />
  );
}`,
  examples: [{
    title: `Labels with color dots, new ones on the fly`,
    code: `<Combobox
  label="Labels"
  options={[
    { value: "bug", label: "Bug", color: "#e5484d" },
    { value: "feature", label: "Feature", color: "#2f6bff" },
    { value: "docs", label: "Docs", color: "#8f8f8f" },
  ]}
  creatable
  onCreate={(text) => ({ value: text.toLowerCase(), label: text, color: "#b5b5b5" })}
/>`
  }, {
    title: `Single choice`,
    code: `<Combobox label="Owner" multiple={false} options={people} defaultValue={["sara"]} />`
  }],
  props: [{
    name: `options`,
    type: `{ value, label, hint?, avatar?, color?, icon?, group?, keywords? }[]`,
    description: `The list. avatar is an image URL or true for initials; options with the same group are listed under one title`
  }, {
    name: `multiple`,
    type: `boolean`,
    default: `true`,
    description: `Pick many (chips) or one \u2013 one closes the list after picking`
  }, {
    name: `value`,
    type: `string[]`,
    description: `Controlled values (also for single choice, with at most one entry)`
  }, {
    name: `defaultValue`,
    type: `string[]`,
    default: `[]`,
    description: `Starting values when uncontrolled`
  }, {
    name: `onChange`,
    type: `(value: string[], options: ComboboxOption[]) => void`,
    description: `Called on every pick, removal or creation`
  }, {
    name: `placeholder`,
    type: `string`,
    default: `"Search\u2026"`,
    description: `Shown while nothing is picked`
  }, {
    name: `creatable`,
    type: `boolean`,
    default: `false`,
    description: `Offer a create row when no option matches the typed text exactly`
  }, {
    name: `onCreate`,
    type: `(text: string) => ComboboxOption | void`,
    description: `Builds the new option \u2013 defaults to { value: text, label: text }`
  }, {
    name: `createLabel`,
    type: `(text: string) => string`,
    default: `Create \u201C\u2026\u201D`,
    description: `Text of the create row, e.g. Invite \u201C\u2026\u201D`
  }, {
    name: `maxVisibleTags`,
    type: `number`,
    description: `Show at most this many chips, the rest as a "+3" chip`
  }, {
    name: `label`,
    type: `string`,
    description: `Visible label above the field (also names the list)`
  }, {
    name: `defaultOpen`,
    type: `boolean`,
    default: `false`,
    description: `Open the list right away`
  }, {
    name: `emptyText`,
    type: `string`,
    default: `"No results"`,
    description: `Shown when nothing matches`
  }, {
    name: `className`,
    type: `string`,
    description: `Extra class on the root`
  }],
  keyboard: [{
    keys: [`\u2191`, `\u2193`],
    description: `Open the list, then move between rows`
  }, {
    keys: [`\u21B5`],
    description: `Pick or unpick the active row (or create)`
  }, {
    keys: [`\u232B`],
    description: `In the empty field: highlight the last chip, press again to remove it`
  }, {
    keys: [`Esc`],
    description: `Close the list; when closed, clear the typed text`
  }, {
    keys: [`Tab`],
    description: `Close the list and move on`
  }],
  accessibility: [`Follows the ARIA combobox pattern: the input has role combobox with aria-expanded, aria-controls and aria-activedescendant; the list is a listbox with grouped options`, `Picked rows carry aria-selected, the listbox is aria-multiselectable in multiple mode`, `Picks and removals are announced in a polite live region, together with the count`, `Focus stays in the input while clicking rows and chip \xD7 buttons; the field shows a soft focus ring`],
  motion: [`Chips grow in with a small pop and fold away after a short flash; the field glides to its new height when chips wrap`, `A gray highlight glides to the active row; the list glides to its new height while filtering`, `Check marks pop in with a gentle spring; the "+3" chip and the count roll up or down`, `With prefers-reduced-motion everything switches instantly`],
  responsive: [`The list is as wide as the field, so it always fits the screen`, `Chips wrap onto new lines and long names truncate \u2013 works down to 320px`, `Touch screens get 44px rows, bigger chip buttons and 16px input text (no iOS zoom)`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],
  related: [`filter-menu`, `command-menu`, `integration-picker`]
};
export {
  docs
};
