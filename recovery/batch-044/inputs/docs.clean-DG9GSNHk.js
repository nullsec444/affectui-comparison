var e={requirements:[`React 19`],whenToUse:[`Dashboards that show one headline number and how its parts moved over a short period`,`Comparing a handful of channels, pages or plans day by day`],whenNotToUse:[`More than about six lines – the chart and the tooltip get hard to read`,`Long time ranges with hundreds of points – use a chart library with zoom and sampling`],usage:`import { KpiChart } from "@/components/ui/kpi-chart-clean";

export function Revenue() {
  return (
    <KpiChart
      title="Revenue"
      value="$96.4k"
      delta={7900}
      format={(n) => \`$\${(n / 1000).toFixed(1)}k\`}
      labels={["Mar 3", "Mar 4", "Mar 5"]}
      series={[
        { label: "Organic", color: "#2f6bff", values: [4600, 4900, 5200] },
        { label: "Paid ads", color: "#ec4899", values: [3100, 3400, 3200] },
      ]}
      footer="Top channels"
    />
  );
}`,examples:[{title:`Tooltip open at rest`,code:`<KpiChart {...props} defaultIndex={5} />`}],props:[{name:`title`,type:`string`,description:`Label above the number`},{name:`value`,type:`string`,description:`Headline value, already formatted`},{name:`delta`,type:`number`,description:`Change against the previous period – green when positive, red when negative`},{name:`labels`,type:`string[]`,description:`One label per point; first, middle and last are shown on the axis`},{name:`tooltipLabels`,type:`string[]`,description:`Longer labels for the tooltip header, falls back to labels`},{name:`series`,type:`KpiSeries[]`,description:`Lines with a label, a color and one value per label`},{name:`format`,type:`(n: number) => string`,default:`compact, e.g. 1.2k`,description:`Formats axis, tooltip and delta values`},{name:`footer`,type:`string`,description:`Line under the chart`},{name:`defaultIndex`,type:`number`,description:`Point that stays highlighted while nobody hovers`},{name:`className`,type:`string`,description:`Extra class on the card`}],keyboard:[{keys:[`Tab`],description:`Focus the chart`},{keys:[`←`,`→`],description:`Move to the previous or next point`},{keys:[`Esc`],description:`Close the tooltip`}],accessibility:[`The chart is focusable and readable with the arrow keys`,`The tooltip is a polite live region, so screen readers announce the values of the current point`],motion:[`Lines draw in from the left on mount`,`Guide, dots and tooltip move between points in a short, crisp step; reduced motion turns this off`],responsive:[`The white card fills its container up to 460px; the plot scales, line widths stay crisp`,`Touch works too – tap or drag across the chart`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`progress-tracker`]};export{e as docs};