import {
  AComponent,
  IComponent
} from "./chunk-ITTHP3HH.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-BEJH6NDY.js";
import {
  jsx,
  jsxs,
  n as n2
} from "./chunk-57INBORX.js";
import "./chunk-JTXQSSYA.js";
import "./chunk-CTH3ASD6.js";

// reconstructed/demo-C2oxSuna.jsx
init_react_BkAXpnfr();
var i = n();
var a = n2();
var o = [0, 1500, 2700, 4300, 5400, 6700, 8e3];
var s = 11500;
var c = {
  results: [{
    title: `HubSpot Sales Hub pricing`,
    url: `https://www.hubspot.com/pricing/sales`,
    price_per_seat: 90
  }, {
    title: `Pipedrive plans and pricing`,
    url: `https://www.pipedrive.com/en/pricing`,
    price_per_seat: 49
  }, {
    title: `Attio pricing`,
    url: `https://attio.com/pricing`,
    price_per_seat: 59
  }, {
    title: `Salesforce Starter Suite`,
    url: `https://www.salesforce.com/sales/pricing`,
    price_per_seat: 25
  }, {
    title: `Close CRM pricing`,
    url: `https://www.close.com/pricing`,
    price_per_seat: 49
  }],
  total: 5,
  cached: false
};
function LComponent() {
  let [e, setE] = i.useState(0);
  let [l, setL] = i.useState(0);
  let [open, setOpen] = i.useState(true);
  let gRef = i.useRef(false);
  i.useEffect(() => {
    gRef.current = false;
    setL(0);
    setOpen(true);
    let e2 = o.slice(1).map((e3, t) => window.setTimeout(() => setL((e4) => Math.max(e4, t + 1)), e3));
    e2.push(window.setTimeout(() => !gRef.current && setOpen(false), o[6]));
    e2.push(window.setTimeout(() => !gRef.current && setE((e3) => e3 + 1), s));
    return () => e2.forEach(clearTimeout);
  }, [e]);
  let status = l === 2 ? `error` : l >= 4 ? `success` : `running`;
  return /* @__PURE__ */ jsx("div", { className: `tc-demo`, children: /* @__PURE__ */ jsxs("div", { className: `tc-demo__chat`, children: [
    /* @__PURE__ */ jsx("p", { className: `tc-demo__you`, children: `Compare CRM pricing for our 10-person team and check open deals.` }),
    /* @__PURE__ */ jsxs(AComponent, { open, onOpenChange: (e2) => {
      gRef.current = true;
      setOpen(e2);
    }, children: [
      /* @__PURE__ */ jsx(IComponent, { name: `search_web`, icon: /* @__PURE__ */ jsx(UComponent, {}), status: l >= 1 ? `success` : `running`, summary: l >= 1 ? `Searched the web for 'CRM pricing 2026'` : `Searching the web for 'CRM pricing 2026'`, args: {
        query: `CRM pricing 2026 small sales team`,
        max_results: 5
      }, result: l >= 1 ? c : void 0 }),
      l >= 1 && /* @__PURE__ */ jsx(IComponent, { name: `fetch_page`, icon: /* @__PURE__ */ jsx(DComponent, {}), status, summary: status === `success` ? `Read hubspot.com/pricing` : `Reading hubspot.com/pricing`, args: {
        url: `https://www.hubspot.com/pricing/sales`,
        timeout_ms: 8e3
      }, result: status === `success` ? {
        status: 200,
        title: `Sales Hub Pricing`,
        words: 2140
      } : void 0, error: `Request timed out after 8s \u2013 hubspot.com didn't respond.`, onRetry: () => setL((e2) => Math.max(e2, 3)) }),
      l >= 4 && /* @__PURE__ */ jsx(IComponent, { name: `crm.list_deals`, icon: /* @__PURE__ */ jsx(FComponent, {}), status: l >= 5 ? `success` : `running`, summary: l >= 5 ? `Found 4 open deals in negotiation` : `Looking up open deals`, args: {
        stage: `negotiation`,
        owner: `me`,
        limit: 10
      }, result: l >= 5 ? {
        count: 4,
        deals: [{
          name: `Northwind`,
          value: 18400
        }, {
          name: `Globex`,
          value: 9600
        }]
      } : void 0 })
    ] }, e)
  ] }) });
}
function UComponent() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
    /* @__PURE__ */ jsx("circle", { cx: `7`, cy: `7`, r: `4.25` }),
    /* @__PURE__ */ jsx("path", { d: `m10.25 10.25 3 3` })
  ] });
}
function DComponent() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
    /* @__PURE__ */ jsx("path", { d: `M4 2.75h5l3 3v7.5H4z` }),
    /* @__PURE__ */ jsx("path", { d: `M9 2.75v3h3M6 9h4M6 11h3` })
  ] });
}
function FComponent() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 16 16`, children: [
    /* @__PURE__ */ jsx("ellipse", { cx: `8`, cy: `4`, rx: `4.75`, ry: `1.75` }),
    /* @__PURE__ */ jsx("path", { d: `M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8` })
  ] });
}
export {
  LComponent as default
};
