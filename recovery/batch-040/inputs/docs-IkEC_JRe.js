var e={requirements:[`React 19`],whenToUse:[`Showing how a set of records splits up – tasks by status and priority, tickets by team, orders by region`,`Reports where people want to switch the view themselves without leaving the page`],whenNotToUse:[`Values over time – use the KPI Chart`,`More than about twelve bars or eight segments – the bars and the legend get hard to read`],usage:`import { BreakdownChart } from "@/components/ui/breakdown-chart";

const dimensions = [
  { key: "status", label: "Status", values: ["Todo", "In progress", "Done"] },
  { key: "priority", label: "Priority", values: ["High", "Medium", "Low"], colors: { High: "#e5484d" } },
];
const measures = [
  { key: "count", label: "Task count", unit: "tasks" },
  { key: "points", label: "Story points", unit: "points", field: "points" },
];

export function Sprint({ tasks }) {
  return <BreakdownChart title="Sprint 24" records={tasks} dimensions={dimensions} measures={measures} />;
}`,props:[{name:`records`,type:`BreakdownRecord[]`,description:`Flat records – one per task, ticket or order – with a field per dimension`},{name:`dimensions`,type:`Dimension[]`,description:`key, label, values in order, optional colors and icons per value`},{name:`measures`,type:`Measure[]`,description:`key, label, unit and the field to sum – without a field records are counted`},{name:`title`,type:`string`,default:`"Workload"`,description:`Heading in the gray tray`},{name:`defaultMeasure`,type:`string`,description:`Measure shown first`},{name:`defaultSlice`,type:`string`,description:`Dimension along the bars`},{name:`defaultSegment`,type:`string`,description:`Dimension that stacks the bars, or "none"`},{name:`className`,type:`string`,description:`Extra class on the tray`}],keyboard:[{keys:[`Tab`],description:`Move through the pickers, the bars and the legend`},{keys:[`↑`,`↓`],description:`Move through an open picker`},{keys:[`Escape`],description:`Close a picker`}],accessibility:[`Each bar is a button that reads its slice and total; focusing it shows the breakdown`,`The table repeats every number, so nothing depends on color or hover`,`Legend entries are toggle buttons with a pressed state`],motion:[`Bars grow and re-stack smoothly when the measure, slice or segment changes`,`Hovering dims the other bars and highlights the matching table row; reduced motion turns transitions off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`kpi-chart`,`data-table`,`change-summary`]};export{e as docs};