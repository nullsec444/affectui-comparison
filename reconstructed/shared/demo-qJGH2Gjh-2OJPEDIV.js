import {
  OComponent
} from "./chunk-BMTLXFHA.js";
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

// reconstructed/demo-qJGH2Gjh.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var phases = [`Thinking`, `Searching the web`, `Reading 12 sources`, `Comparing pricing`, `Writing response`];
var interval = 2e3;
var s = 2600;
function CComponent() {
  let [e, setE] = r.useState(0);
  let [done, setDone] = r.useState(false);
  r.useEffect(() => {
    let e2 = window.setTimeout(() => setDone(true), phases.length * interval);
    let n3 = window.setTimeout(() => {
      setDone(false);
      setE((e3) => e3 + 1);
    }, phases.length * interval + s);
    return () => {
      window.clearTimeout(e2);
      window.clearTimeout(n3);
    };
  }, [e]);
  return /* @__PURE__ */ jsx("div", { className: `tl-demo`, children: /* @__PURE__ */ jsxs("div", { className: `tl-demo__chat`, children: [
    /* @__PURE__ */ jsx("p", { className: `tl-demo__you`, children: `Which CRM fits a 10-person sales team best?` }),
    /* @__PURE__ */ jsx(OComponent, { phases, interval, done }, e)
  ] }) });
}
export {
  CComponent as default
};
