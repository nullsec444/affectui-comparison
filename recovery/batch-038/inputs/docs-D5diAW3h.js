var e={requirements:[`React 19`],whenToUse:[`The top of a dashboard: a few headline numbers with their trend, one chart that compares this period with the last, and one product or plan in focus`,`Sales, growth and usage overviews of a SaaS or AI product, above a table or a list`,`When the charts belong together – same range, same filter – and should react as one`],whenNotToUse:[`One metric in depth – use KPI Chart or Breakdown Chart`,`Parts of a whole (shares, funnels, rankings) – the board only draws trends over time`,`Reports that are printed or exported – this is built for pointing and switching`],usage:`import { KpiBoard, type KpiBoardData } from "@/components/ui/kpi-board";

const ranges = [
  { id: "7d", label: "Last 7 days" },
  { id: "30d", label: "Last 30 days" },
];

export function Overview({ data }: { data: Record<string, KpiBoardData> }) {
  // data["30d"] = { stats, overview, focus }
  return <KpiBoard data={data} ranges={ranges} defaultRange="30d" compareLabel="vs. last month" />;
}`,examples:[{title:`The shape of one range`,code:`const thirtyDays: KpiBoardData = {
  stats: [
    { id: "revenue", label: "Total revenue", kind: "money", labels: ["13 Sep", /* … */ "Today"], values: [156, 171 /* … */], previous: 5128 },
    { id: "emails", label: "Emails sent", kind: "count", labels, values: [1620 /* … */], previous: 46200 },
    { id: "refunds", label: "Refunds", kind: "count", labels, values: [1, 0 /* … */], previous: 45, lowerIsBetter: true },
  ],
  overview: {
    title: "Sales overview",
    labels,
    current: [122, 140 /* … */],
    previous: [98, 101 /* … */],
    // optional: the lines per filter id – ids without an entry show the two lines above
    segments: { pro: { current: [80, 91 /* … */], previous: [61, 66 /* … */] } },
  },
  focus: { title: "Pro license", note: "One-time", metric: "Licenses sold", unit: "licenses", labels, values: [24, 31 /* … */], previous: 742 },
};`},{title:`With a second filter and an action`,code:`const [range, setRange] = useState("30d");
const { data } = useOverview(range); // includes overview.segments.pro

<KpiBoard
  data={{ [range]: data }}
  ranges={ranges}
  range={range}
  onRangeChange={setRange}
  segments={[
    { id: "all", label: "All items" },
    { id: "pro", label: "Pro" },
  ]}
  formatMoney={(n) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n)}
  title="Dashboard"
  setup={{ label: "Set up", onClick: () => openProductSettings() }}
  action={{ label: "See full analytics", onClick: () => router.push("/analytics") }}
/>`}],props:[{name:`data`,type:`Record<string, KpiBoardData>`,description:`One data set per range id: { stats, overview, focus }`},{name:`ranges`,type:`{ id: string; label: string }[]`,description:`Options of the date range picker`},{name:`range`,type:`string`,description:`Controlled range id`},{name:`defaultRange`,type:`string`,default:`first range`,description:`Starting range when uncontrolled`},{name:`onRangeChange`,type:`(id: string) => void`,description:`Called with the new range`},{name:`segments`,type:`{ id: string; label: string }[]`,description:`A filter inside the overview card, e.g. All items / Pro / Team – it only switches that card's lines; no filter when left out`},{name:`segment`,type:`string`,description:`Controlled segment id`},{name:`defaultSegment`,type:`string`,default:`first segment`,description:`Starting segment when uncontrolled`},{name:`onSegmentChange`,type:`(id: string) => void`,description:`Called with the new segment`},{name:`compareLabel`,type:`string`,default:`"vs. last period"`,description:`Words after every change`},{name:`currentLabel`,type:`string`,default:`"This period"`,description:`Name of the main line in the tooltip and the focus card`},{name:`previousLabel`,type:`string`,default:`"Last period"`,description:`Name of the comparison line`},{name:`formatMoney`,type:`(value: number) => string`,default:`$1,234.00`,description:`Formats money values`},{name:`icon`,type:`ReactNode`,description:`Icon in the focus card`},{name:`title`,type:`string`,description:`Heading on the left of the bar above the cards`},{name:`setup`,type:`{ label: string; onClick: () => void }`,description:`The small button at the top right of the focus card, e.g. Set up`},{name:`action`,type:`{ label: string; onClick: () => void }`,description:`The button at the bottom of the focus card`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Through the pickers and the action`},{keys:[`Enter`,`Space`,`↓`],description:`On a picker: opens its menu`},{keys:[`↑`,`↓`,`Home`,`End`],description:`In an open menu: moves through the choices`},{keys:[`Enter`],description:`Picks the highlighted choice`},{keys:[`Esc`],description:`Closes the menu without changing anything`}],accessibility:[`Every card is a labelled region with its numbers as text; the charts themselves are decorative`,`The pickers are comboboxes with a listbox: the open state, the highlighted and the chosen option are announced`,`Changes carry an arrow or a sign next to the color, and the color follows whether the change is good news (lowerIsBetter)`],motion:[`On first view the cards rise in one after another and every line draws itself in from the left`,`Switching the range rolls every number in one shared tween while every line is drawn in again from the left`,`The filter inside the overview does the same for that card only – the other cards stay still`,`Hovering a small card marks the day under the pointer with a dot, its value in a tag and the date on the axis`,`Hovering the overview shows a dark tooltip that compares this period with the last at that day`,`With prefers-reduced-motion everything switches without movement`],responsive:[`The date range sits above the cards on the right. Three small cards over a wide overview and the focus card; below 820px of container width the two lower cards take a full row each, below 600px everything stacks`,`It follows its container, not the window`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Series may have different numbers of points per range (7 days, 30 days, 13 weeks) – each range is drawn in fresh`,"A stat's value is the sum of its series; `previous` is the total of the period before and drives the change on the right",`The date range sits in the bar above the cards because it changes all of them; the picker inside the overview is the segment and only switches the overview's own lines (overview.segments)`],related:[`metrics-dashboard`,`kpi-chart`,`usage-meter`]};export{e as docs};