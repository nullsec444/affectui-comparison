import {
  i
} from "./chunk-LTO723IJ.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-BzK_zDAD.js
init_react_BkAXpnfr();
var r = n();
var i2 = n2();
var a = ({ d: e }) => (0, i2.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: (0, i2.jsx)(`path`, { d: e }) });
var o = [{ value: `overview`, label: `Overview` }, { value: `analytics`, label: `Analytics` }, { value: `reports`, label: `Reports` }, { value: `notifications`, label: `Notifications`, count: 3 }];
var s = [{ value: `list`, label: `List`, icon: (0, i2.jsx)(a, { d: `M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01` }) }, { value: `board`, label: `Board`, icon: (0, i2.jsx)(a, { d: `M5 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM15 4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z` }) }, { value: `calendar`, label: `Calendar`, icon: (0, i2.jsx)(a, { d: `M8 3v3M16 3v3M4 9.5h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z` }) }];
var c = [{ value: `monthly`, label: `Monthly` }, { value: `yearly`, label: `Yearly`, badge: `Save 20%` }];
var l = [`analytics`, `reports`, `notifications`, `overview`];
function u() {
  let [e, t] = (0, r.useState)(`overview`), [a2, u2] = (0, r.useState)(`board`), [d, f] = (0, r.useState)(`yearly`), p = (0, r.useRef)([]), m = (0, r.useId)(), h = () => {
    p.current.forEach(clearTimeout), p.current = [];
  };
  return (0, r.useEffect)(() => (p.current = l.map((e2, n3) => window.setTimeout(() => t(e2), 1e3 + n3 * 1400)), h), []), (0, i2.jsx)(`div`, { className: `seg-demo`, onPointerDownCapture: h, onKeyDownCapture: h, children: (0, i2.jsxs)(`div`, { className: `seg-demo__card`, children: [(0, i2.jsxs)(`div`, { className: `seg-demo__row`, children: [(0, i2.jsx)(`span`, { className: `seg-demo__label`, id: `${m}-section`, children: `Dashboard` }), (0, i2.jsx)(i, { options: o, value: e, onChange: t, "aria-labelledby": `${m}-section` })] }), (0, i2.jsxs)(`div`, { className: `seg-demo__row`, children: [(0, i2.jsx)(`span`, { className: `seg-demo__label`, id: `${m}-view`, children: `Layout` }), (0, i2.jsx)(i, { options: s, value: a2, onChange: u2, size: `sm`, "aria-labelledby": `${m}-view` })] }), (0, i2.jsxs)(`div`, { className: `seg-demo__row`, children: [(0, i2.jsx)(`span`, { className: `seg-demo__label`, id: `${m}-billing`, children: `Billing` }), (0, i2.jsx)(i, { options: c, value: d, onChange: f, variant: `underline`, "aria-labelledby": `${m}-billing` })] })] }) });
}
export {
  u as default
};
