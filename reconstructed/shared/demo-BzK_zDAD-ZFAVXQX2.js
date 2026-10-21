import {
  IComponent
} from "./chunk-E34NVF32.js";
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

// reconstructed/demo-BzK_zDAD.jsx
init_react_BkAXpnfr();
var r = n();
var i = n2();
var AComponent = ({
  d
}) => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.8`, strokeLinecap: `round`, strokeLinejoin: `round`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d }) });
var o = [{
  value: `overview`,
  label: `Overview`
}, {
  value: `analytics`,
  label: `Analytics`
}, {
  value: `reports`,
  label: `Reports`
}, {
  value: `notifications`,
  label: `Notifications`,
  count: 3
}];
var s = [{
  value: `list`,
  label: `List`,
  icon: /* @__PURE__ */ jsx(AComponent, { d: `M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01` })
}, {
  value: `board`,
  label: `Board`,
  icon: /* @__PURE__ */ jsx(AComponent, { d: `M5 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM15 4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z` })
}, {
  value: `calendar`,
  label: `Calendar`,
  icon: /* @__PURE__ */ jsx(AComponent, { d: `M8 3v3M16 3v3M4 9.5h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z` })
}];
var c = [{
  value: `monthly`,
  label: `Monthly`
}, {
  value: `yearly`,
  label: `Yearly`,
  badge: `Save 20%`
}];
var l = [`analytics`, `reports`, `notifications`, `overview`];
function UComponent() {
  let [e, setE] = r.useState(`overview`);
  let [a, setA] = r.useState(`board`);
  let [d, setD] = r.useState(`yearly`);
  let pRef = r.useRef([]);
  let m = r.useId();
  let h = () => {
    pRef.current.forEach(clearTimeout);
    pRef.current = [];
  };
  r.useEffect(() => {
    pRef.current = l.map((e2, n3) => window.setTimeout(() => setE(e2), 1e3 + n3 * 1400));
    return h;
  }, []);
  return /* @__PURE__ */ jsx("div", { className: `seg-demo`, onPointerDownCapture: h, onKeyDownCapture: h, children: /* @__PURE__ */ jsxs("div", { className: `seg-demo__card`, children: [
    /* @__PURE__ */ jsxs("div", { className: `seg-demo__row`, children: [
      /* @__PURE__ */ jsx("span", { className: `seg-demo__label`, id: `${m}-section`, children: `Dashboard` }),
      /* @__PURE__ */ jsx(IComponent, { options: o, value: e, onChange: setE, "aria-labelledby": `${m}-section` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `seg-demo__row`, children: [
      /* @__PURE__ */ jsx("span", { className: `seg-demo__label`, id: `${m}-view`, children: `Layout` }),
      /* @__PURE__ */ jsx(IComponent, { options: s, value: a, onChange: setA, size: `sm`, "aria-labelledby": `${m}-view` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `seg-demo__row`, children: [
      /* @__PURE__ */ jsx("span", { className: `seg-demo__label`, id: `${m}-billing`, children: `Billing` }),
      /* @__PURE__ */ jsx(IComponent, { options: c, value: d, onChange: setD, variant: `underline`, "aria-labelledby": `${m}-billing` })
    ] })
  ] }) });
}
export {
  UComponent as default
};
