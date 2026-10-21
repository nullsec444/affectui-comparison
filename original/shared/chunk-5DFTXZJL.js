import {
  o
} from "./chunk-M3H3T3W5.js";
import {
  n
} from "./chunk-Y3JEZZ7A.js";

// current-assets/demo-BQ61UvP8.js
var n2 = n();
var r = [`Mar 3`, `Mar 4`, `Mar 5`, `Mar 6`, `Mar 7`, `Mar 8`, `Mar 9`];
var i = [`Mon, Mar 3`, `Tue, Mar 4`, `Wed, Mar 5`, `Thu, Mar 6`, `Fri, Mar 7`, `Sat, Mar 8`, `Sun, Mar 9`];
var a = [`#2f6bff`, `#ec4899`, `#8b5cf6`, `#14b8a6`, `#a3a3a3`];
var o2 = [`Organic`, `Paid ads`, `Referral`, `Email`, `Direct`];
var s = ((e) => e.map((e2, t) => ({ label: o2[t], color: a[t], values: e2 })))([[4200, 4700, 3900, 4600, 5400, 5100, 5900], [3600, 3300, 4400, 4800, 4e3, 4500, 4200], [1800, 2300, 2e3, 1500, 2400, 2200, 2700], [1200, 1100, 1700, 2100, 1600, 1300, 1500], [600, 900, 700, 800, 1e3, 1400, 1100]]);
var c = (e) => e >= 1e3 ? `$${+(e / 1e3).toFixed(1)}k` : `$${Math.round(e)}`;
function l() {
  return (0, n2.jsx)(`div`, { className: `kpi-demo`, children: (0, n2.jsx)(o, { title: `Revenue`, value: `$96.4k`, delta: 7900, format: c, labels: r, tooltipLabels: i, series: s, footer: `Top 5 channels` }) });
}

export {
  l
};
