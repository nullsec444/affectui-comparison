import {
  o
} from "./chunk-FMEYMQN2.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-qJGH2Gjh.js
init_react_BkAXpnfr();
var r = n();
var i = n2();
var a = [`Thinking`, `Searching the web`, `Reading 12 sources`, `Comparing pricing`, `Writing response`];
var o2 = 2e3;
var s = 2600;
function c() {
  let [e, t] = (0, r.useState)(0), [c2, l] = (0, r.useState)(false);
  return (0, r.useEffect)(() => {
    let e2 = window.setTimeout(() => l(true), a.length * o2), n3 = window.setTimeout(() => {
      l(false), t((e3) => e3 + 1);
    }, a.length * o2 + s);
    return () => {
      window.clearTimeout(e2), window.clearTimeout(n3);
    };
  }, [e]), (0, i.jsx)(`div`, { className: `tl-demo`, children: (0, i.jsxs)(`div`, { className: `tl-demo__chat`, children: [(0, i.jsx)(`p`, { className: `tl-demo__you`, children: `Which CRM fits a 10-person sales team best?` }), (0, i.jsx)(o, { phases: a, interval: o2, done: c2 }, e)] }) });
}
export {
  c as default
};
