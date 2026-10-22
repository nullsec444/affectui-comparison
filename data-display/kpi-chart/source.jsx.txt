// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { t as T } from "./component-BZJ0c7rx.jsx";
const n = t();
const labels = [`Mar 3`, `Mar 4`, `Mar 5`, `Mar 6`, `Mar 7`, `Mar 8`, `Mar 9`];
const tooltipLabels = [`Mon, Mar 3`, `Tue, Mar 4`, `Wed, Mar 5`, `Thu, Mar 6`, `Fri, Mar 7`, `Sat, Mar 8`, `Sun, Mar 9`];
const a = [`#2f6bff`, `#ec4899`, `#8b5cf6`, `#14b8a6`, `#a3a3a3`];
const o = [`Organic`, `Paid ads`, `Referral`, `Email`, `Direct`];
const series = (e => e.map((values, t) => ({
  label: o[t],
  color: a[t],
  values
})))([[4200, 4700, 3900, 4600, 5400, 5100, 5900], [3600, 3300, 4400, 4800, 4000, 4500, 4200], [1800, 2300, 2000, 1500, 2400, 2200, 2700], [1200, 1100, 1700, 2100, 1600, 1300, 1500], [600, 900, 700, 800, 1000, 1400, 1100]]);
const format = e => {
  if (e >= 1000) {
    return `$${+(e / 1000).toFixed(1)}k`;
  }
  return `$${Math.round(e)}`;
};
function LComponent() {
  return <div className={`kpi-demo`}><T title={`Revenue`} value={`$96.4k`} delta={7900} format={format} labels={labels} tooltipLabels={tooltipLabels} series={series} footer={`Top 5 channels`} /></div>;
}
export { LComponent as default };
