import {
  a,
  i
} from "./chunk-TXXOGDS5.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-C2oxSuna.js
init_react_BkAXpnfr();
var i2 = n();
var a2 = n2();
var o = [0, 1500, 2700, 4300, 5400, 6700, 8e3];
var s = 11500;
var c = { results: [{ title: `HubSpot Sales Hub pricing`, url: `https://www.hubspot.com/pricing/sales`, price_per_seat: 90 }, { title: `Pipedrive plans and pricing`, url: `https://www.pipedrive.com/en/pricing`, price_per_seat: 49 }, { title: `Attio pricing`, url: `https://attio.com/pricing`, price_per_seat: 59 }, { title: `Salesforce Starter Suite`, url: `https://www.salesforce.com/sales/pricing`, price_per_seat: 25 }, { title: `Close CRM pricing`, url: `https://www.close.com/pricing`, price_per_seat: 49 }], total: 5, cached: false };
function l() {
  let [e, t] = (0, i2.useState)(0), [l2, p] = (0, i2.useState)(0), [m, h] = (0, i2.useState)(true), g = (0, i2.useRef)(false);
  (0, i2.useEffect)(() => {
    g.current = false, p(0), h(true);
    let e2 = o.slice(1).map((e3, t2) => window.setTimeout(() => p((e4) => Math.max(e4, t2 + 1)), e3));
    return e2.push(window.setTimeout(() => !g.current && h(false), o[6])), e2.push(window.setTimeout(() => !g.current && t((e3) => e3 + 1), s)), () => e2.forEach(clearTimeout);
  }, [e]);
  let _ = l2 === 2 ? `error` : l2 >= 4 ? `success` : `running`;
  return (0, a2.jsx)(`div`, { className: `tc-demo`, children: (0, a2.jsxs)(`div`, { className: `tc-demo__chat`, children: [(0, a2.jsx)(`p`, { className: `tc-demo__you`, children: `Compare CRM pricing for our 10-person team and check open deals.` }), (0, a2.jsxs)(a, { open: m, onOpenChange: (e2) => {
    g.current = true, h(e2);
  }, children: [(0, a2.jsx)(i, { name: `search_web`, icon: (0, a2.jsx)(u, {}), status: l2 >= 1 ? `success` : `running`, summary: l2 >= 1 ? `Searched the web for 'CRM pricing 2026'` : `Searching the web for 'CRM pricing 2026'`, args: { query: `CRM pricing 2026 small sales team`, max_results: 5 }, result: l2 >= 1 ? c : void 0 }), l2 >= 1 && (0, a2.jsx)(i, { name: `fetch_page`, icon: (0, a2.jsx)(d, {}), status: _, summary: _ === `success` ? `Read hubspot.com/pricing` : `Reading hubspot.com/pricing`, args: { url: `https://www.hubspot.com/pricing/sales`, timeout_ms: 8e3 }, result: _ === `success` ? { status: 200, title: `Sales Hub Pricing`, words: 2140 } : void 0, error: `Request timed out after 8s \u2013 hubspot.com didn't respond.`, onRetry: () => p((e2) => Math.max(e2, 3)) }), l2 >= 4 && (0, a2.jsx)(i, { name: `crm.list_deals`, icon: (0, a2.jsx)(f, {}), status: l2 >= 5 ? `success` : `running`, summary: l2 >= 5 ? `Found 4 open deals in negotiation` : `Looking up open deals`, args: { stage: `negotiation`, owner: `me`, limit: 10 }, result: l2 >= 5 ? { count: 4, deals: [{ name: `Northwind`, value: 18400 }, { name: `Globex`, value: 9600 }] } : void 0 })] }, e)] }) });
}
function u() {
  return (0, a2.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, a2.jsx)(`circle`, { cx: `7`, cy: `7`, r: `4.25` }), (0, a2.jsx)(`path`, { d: `m10.25 10.25 3 3` })] });
}
function d() {
  return (0, a2.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, a2.jsx)(`path`, { d: `M4 2.75h5l3 3v7.5H4z` }), (0, a2.jsx)(`path`, { d: `M9 2.75v3h3M6 9h4M6 11h3` })] });
}
function f() {
  return (0, a2.jsxs)(`svg`, { viewBox: `0 0 16 16`, children: [(0, a2.jsx)(`ellipse`, { cx: `8`, cy: `4`, rx: `4.75`, ry: `1.75` }), (0, a2.jsx)(`path`, { d: `M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8` })] });
}
export {
  l as default
};
