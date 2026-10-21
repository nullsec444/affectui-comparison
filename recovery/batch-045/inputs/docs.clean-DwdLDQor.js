var e={requirements:[`React 19`],whenToUse:[`One number and what it is made of – revenue by channel, usage by feature, tokens by model, tickets by category`,`Dashboards where the card sits next to others and a full chart would be too much`,`Whenever people switch between periods and should see what moved`],whenNotToUse:[`Trends over time – a line chart shows those; this card compares the parts of one total`,`More than about seven parts – group the small ones into "Other" first`,`Several measures and slicing options – use Breakdown Chart`],usage:`import { CompactBreakdown } from "@/components/ui/compact-breakdown-clean";

export function RevenueByChannel() {
  const [period, setPeriod] = useState("30d");
  const { items, delta } = useRevenue(period); // [{ label: "Direct", value: 16900 }, …]
  return (
    <CompactBreakdown
      title="Revenue by channel"
      periods={[
        { id: "7d", label: "7d" },
        { id: "30d", label: "30d" },
        { id: "90d", label: "90d" },
      ]}
      period={period}
      onPeriodChange={setPeriod}
      items={items}
      delta={delta}
      format={(n) => \`$\${Math.round(n).toLocaleString("en-US")}\`}
      totalLabel="Total revenue"
    />
  );
}`,examples:[{title:`Without a period switch`,code:`<CompactBreakdown
  title="Tokens by model"
  items={[
    { label: "claude-sonnet-5-5", value: 1840000 },
    { label: "claude-haiku-5-5", value: 920000 },
    { label: "claude-opus-5-5", value: 310000 },
  ]}
  totalLabel="Tokens this month"
/>`},{title:`Own colors and last row`,code:`<CompactBreakdown
  title="Tickets by priority"
  items={[
    { id: "urgent", label: "Urgent", value: 12, color: "#e5484d" },
    { id: "high", label: "High", value: 34, color: "#f59e0b" },
    { id: "normal", label: "Normal", value: 96, color: "#a8a8ae" },
  ]}
  footer={<a href="/tickets">Open all tickets</a>}
/>`}],props:[{name:`items`,type:`BreakdownItem[]`,description:`{ id?, label, value, color? } – the parts of the shown period; the list ranks them by value. Give an id when labels can change`},{name:`title`,type:`string`,default:`"Breakdown"`,description:`Heading of the card`},{name:`periods`,type:`{ id: string; label: string }[]`,description:`Options of the period switch – no switch when left out`},{name:`period`,type:`string`,description:`Controlled period id`},{name:`defaultPeriod`,type:`string`,default:`first period`,description:`Starting period when uncontrolled`},{name:`onPeriodChange`,type:`(id: string) => void`,description:`Called with the new period – pass the matching items and delta back in`},{name:`delta`,type:`number`,description:`Change against the previous period in percent (12.4 or -3) – a small green or red tag next to the total`},{name:`format`,type:`(value: number) => string`,default:`whole numbers with separators`,description:`Formats every value – the total, the rows and the hovered part`},{name:`totalLabel`,type:`string`,default:`"Total"`,description:`Line under the big number while nothing is hovered`},{name:`footer`,type:`ReactNode | null`,default:`"Largest: <part>"`,description:`Replaces the last row of the card (under a hairline); null hides it`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Moves to the period switch, then through the rows – a focused row is highlighted like a hovered one`},{keys:[`←`,`→`],description:`In the period switch: previous or next period (wraps around)`},{keys:[`Home`,`End`],description:`In the period switch: first or last period`}],accessibility:[`A group named by its title; the period switch is a radiogroup with one tab stop`,`The rolling numbers are aria-hidden – screen readers get the final total and the change in one sentence, and every row with its value and share`,`Rows can be focused, so the highlight and the part's value are reachable without a mouse`,`The bar is decorative: everything it shows is in the list`],motion:[`On a new period every number rolls to its value in one shared tween, so the total, the rows and the bar move in step`,`The bar keeps each part's place and color and only glides to the new widths`,`Rows slide to their new rank when the order changes; a part that is not in the new period folds away`,`Hovering a part dims the others, lifts its segment and rolls the big number to that part's value – leaving rolls it back to the total`,`The light fill of the period switch slides to the chosen option in a short, crisp move; the change tag pops in`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Fills its container up to 360px; below 250px the share column goes and the values stay`,`Touch screens: taller rows and period options`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Keep the same id (or label) for a part across periods – that is what lets rows and bar segments animate instead of being replaced`,`Pass raw numbers and do the formatting in format, so the rolling values stay smooth`],related:[`usage-meter`,`breakdown-chart`,`kpi-chart`]};export{e as docs};