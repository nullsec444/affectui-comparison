import {
  OComponent
} from "./chunk-L6Z5PQ6Z.js";
import {
  jsx,
  n
} from "./chunk-57INBORX.js";

// reconstructed/demo-BQ61UvP8.jsx
var n2 = n();
var labels = [`Mar 3`, `Mar 4`, `Mar 5`, `Mar 6`, `Mar 7`, `Mar 8`, `Mar 9`];
var tooltipLabels = [`Mon, Mar 3`, `Tue, Mar 4`, `Wed, Mar 5`, `Thu, Mar 6`, `Fri, Mar 7`, `Sat, Mar 8`, `Sun, Mar 9`];
var a = [`#2f6bff`, `#ec4899`, `#8b5cf6`, `#14b8a6`, `#a3a3a3`];
var o = [`Organic`, `Paid ads`, `Referral`, `Email`, `Direct`];
var series = ((e) => e.map((values, t) => ({
  label: o[t],
  color: a[t],
  values
})))([[4200, 4700, 3900, 4600, 5400, 5100, 5900], [3600, 3300, 4400, 4800, 4e3, 4500, 4200], [1800, 2300, 2e3, 1500, 2400, 2200, 2700], [1200, 1100, 1700, 2100, 1600, 1300, 1500], [600, 900, 700, 800, 1e3, 1400, 1100]]);
var format = (e) => {
  if (e >= 1e3) {
    return `$${+(e / 1e3).toFixed(1)}k`;
  }
  return `$${Math.round(e)}`;
};
function LComponent() {
  return /* @__PURE__ */ jsx("div", { className: `kpi-demo`, children: /* @__PURE__ */ jsx(OComponent, { title: `Revenue`, value: `$96.4k`, delta: 7900, format, labels, tooltipLabels, series, footer: `Top 5 channels` }) });
}

export {
  LComponent
};
