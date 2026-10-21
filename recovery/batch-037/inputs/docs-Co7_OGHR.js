var e={requirements:[`React 19`],whenToUse:[`Analytics, reports and dashboards where people switch between periods and compare them`,`Filters for bookings, invoices or logs that need a start and an end date`],whenNotToUse:[`A single date, like a birthday – a plain date field is quicker`,`Ranges that span many years – type the dates instead`],usage:`import { DateRangePicker, type DateRange } from "@/components/ui/date-range-picker";

export function ReportFilter() {
  return (
    <DateRangePicker
      onChange={(range, compare) => {
        loadReport(range.start, range.end);
        if (compare) loadComparison(compare.start, compare.end);
      }}
    />
  );
}`,examples:[{title:`Controlled, Sunday first, no comparison`,code:`const [range, setRange] = useState<DateRange>({ start: new Date(2026, 8, 1), end: new Date(2026, 8, 30) });

<DateRangePicker value={range} onChange={setRange} weekStartsOn={0} compare={false} />`},{title:`Your own presets`,code:`import { DateRangePicker, defaultPresets } from "@/components/ui/date-range-picker";

<DateRangePicker
  presets={[
    ...defaultPresets.slice(2, 5),
    { id: "14d", label: "Last 14 days", range: (t) => ({ start: new Date(t.getFullYear(), t.getMonth(), t.getDate() - 13), end: t }) },
  ]}
/>`}],props:[{name:`value`,type:`{ start: Date; end: Date }`,description:`Controlled range`},{name:`defaultValue`,type:`{ start: Date; end: Date }`,default:`last 30 days`,description:`Starting range when uncontrolled`},{name:`onChange`,type:`(range, compare, mode) => void`,description:`Called on Apply with the range, the comparison range (or null) and the compare mode`},{name:`presets`,type:`{ id, label, range: (today) => DateRange }[]`,default:`Today … Year to date`,description:`The list on the left (chips on phones)`},{name:`compare`,type:`boolean`,default:`true`,description:`Show "Compare: Off / Previous period / Previous year"`},{name:`defaultCompare`,type:`"off" | "previous" | "year"`,default:`"previous"`,description:`Comparison selected at the start`},{name:`weekStartsOn`,type:`0 | 1`,default:`1`,description:`0 = Sunday, 1 = Monday`},{name:`min / max`,type:`Date`,default:`max: today`,description:`Days outside can't be picked`},{name:`defaultOpen`,type:`boolean`,default:`false`,description:`Open the panel right away`},{name:`today`,type:`Date`,default:`now`,description:`Reference day for the presets – handy for tests and screenshots`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`←`,`→`,`↑`,`↓`],description:`Move day by day and week by week`},{keys:[`PageUp`,`PageDown`],description:`Previous / next month`},{keys:[`Home`,`End`],description:`Start / end of the week`},{keys:[`↵`],description:`Pick the start, then the end`},{keys:[`Esc`],description:`Close without applying`}],accessibility:[`The trigger opens a dialog; each month is a grid and every day button has its full date as name`,`Today is marked with aria-current, picked days with aria-selected; the month name is announced when it changes`,`Focus moves with the arrow keys and returns to the trigger when the panel closes`],motion:[`The panel opens with a short scale and fade; months slide in from the side you're moving to`,`After the first click the band follows the pointer as a lighter preview until the second click`,`The comparison period appears as a gray band with outlined ends`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Below 600px the presets turn into a scrolling row of chips and only the month the range ends in is shown; the footer stacks`,`The panel is as wide as the screen allows (up to 652px); set --ui-drp-panel-width, e.g. to 100%, to match your layout`,`Bigger day cells and buttons on touch screens`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`kpi-chart`,`filter-menu`,`breakdown-chart`]};export{e as docs};