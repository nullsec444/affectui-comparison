var e={requirements:[`React 19`],whenToUse:[`Assigning people, labels, tags or projects – anything picked from a list that's too long to scan`,`Filters where several values can apply at once, like owners or statuses`,`Tag fields that should also accept new values (creatable)`],whenNotToUse:[`Up to five fixed choices – checkboxes or a segmented control show them all at once`,`Free text with no list behind it – use a plain input`,`Running actions rather than picking values – use the command menu`],usage:`import { Combobox, type ComboboxOption } from "@/components/ui/combobox-clean";

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
      placeholder="Add reviewers…"
      maxVisibleTags={4}
    />
  );
}`,examples:[{title:`Labels with color dots, new ones on the fly`,code:`<Combobox
  label="Labels"
  options={[
    { value: "bug", label: "Bug", color: "#e5484d" },
    { value: "feature", label: "Feature", color: "#2f6bff" },
    { value: "docs", label: "Docs", color: "#8f8f8f" },
  ]}
  creatable
  onCreate={(text) => ({ value: text.toLowerCase(), label: text, color: "#b5b5b5" })}
/>`},{title:`Single choice`,code:`<Combobox label="Owner" multiple={false} options={people} defaultValue={["sara"]} />`}],props:[{name:`options`,type:`{ value, label, hint?, avatar?, color?, icon?, group?, keywords? }[]`,description:`The list. avatar is an image URL or true for initials; options with the same group are listed under one title`},{name:`multiple`,type:`boolean`,default:`true`,description:`Pick many (chips) or one – one closes the list after picking`},{name:`value`,type:`string[]`,description:`Controlled values (also for single choice, with at most one entry)`},{name:`defaultValue`,type:`string[]`,default:`[]`,description:`Starting values when uncontrolled`},{name:`onChange`,type:`(value: string[], options: ComboboxOption[]) => void`,description:`Called on every pick, removal or creation`},{name:`placeholder`,type:`string`,default:`"Search…"`,description:`Shown while nothing is picked`},{name:`creatable`,type:`boolean`,default:`false`,description:`Offer a create row when no option matches the typed text exactly`},{name:`onCreate`,type:`(text: string) => ComboboxOption | void`,description:`Builds the new option – defaults to { value: text, label: text }`},{name:`createLabel`,type:`(text: string) => string`,default:`Create “…”`,description:`Text of the create row, e.g. Invite “…”`},{name:`maxVisibleTags`,type:`number`,description:`An upper limit for the chips. The field always stays one line – chips that don't fit go into a "+3" chip on their own`},{name:`label`,type:`string`,description:`Visible label above the field (also names the list)`},{name:`defaultOpen`,type:`boolean`,default:`false`,description:`Open the list right away`},{name:`emptyText`,type:`string`,default:`"No results"`,description:`Shown when nothing matches`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`↑`,`↓`],description:`Open the list, then move between rows`},{keys:[`↵`],description:`Pick or unpick the active row (or create)`},{keys:[`⌫`],description:`In the empty field: highlight the last chip, press again to remove it`},{keys:[`Esc`],description:`Close the list; when closed, clear the typed text`},{keys:[`Tab`],description:`Close the list and move on`}],accessibility:[`Follows the ARIA combobox pattern: the input has role combobox with aria-expanded, aria-controls and aria-activedescendant; the list is a listbox with grouped options`,`Picked rows carry aria-selected, the listbox is aria-multiselectable in multiple mode`,`Picks and removals are announced in a polite live region, together with the count`,`Focus stays in the input while clicking rows and chip × buttons; the field shows a blue focus ring`],motion:[`Chips grow in with a small pop and fold away after a short flash; the field stays one line and the "+N" count rolls when chips no longer fit`,`A gray highlight follows the active row with a short, crisp move and fades out when the pointer leaves the list; the popover with its count row glides to its new height while filtering`,`Blue check marks pop in with a gentle spring; the "+3" chip and the count roll up or down`,`With prefers-reduced-motion everything switches instantly`],responsive:[`The list is as wide as the field, so it always fits the screen`,`Chips wrap onto new lines and long names truncate – works down to 320px`,`Touch screens get 44px rows, bigger chip buttons and 16px input text (no iOS zoom)`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`filter-menu`,`command-menu`,`integration-picker`]};export{e as docs};