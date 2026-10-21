import {
  i
} from "./chunk-CT2IJ575.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-Da5-XF-c.js
init_react_BkAXpnfr();
var r = n();
var i2 = n2();
var a = { fill: `none`, stroke: `currentColor`, strokeWidth: 1.75, strokeLinecap: `round`, strokeLinejoin: `round` };
var o = () => (0, i2.jsxs)(`svg`, { viewBox: `0 0 24 24`, ...a, children: [(0, i2.jsx)(`path`, { d: `M12 5.5V19` }), (0, i2.jsx)(`path`, { d: `M18 11s-4.42-6-6-6-6 6-6 6` })] });
var s = () => (0, i2.jsxs)(`svg`, { viewBox: `0 0 24 24`, ...a, children: [(0, i2.jsx)(`path`, { d: `M18.5 12H5` }), (0, i2.jsx)(`path`, { d: `M13 18s6-4.42 6-6-6-6-6-6` })] });
var c = () => (0, i2.jsx)(`svg`, { viewBox: `0 0 24 24`, ...a, children: (0, i2.jsx)(`path`, { d: `M12 4v16M20 12H4` }) });
var l = () => (0, i2.jsx)(`svg`, { viewBox: `0 0 24 24`, ...a, strokeWidth: 2.5, children: (0, i2.jsx)(`path`, { d: `M6 12h.01M12 12h.01M18 12h.01` }) });
var u = () => (0, i2.jsxs)(`svg`, { viewBox: `0 0 24 24`, ...a, children: [(0, i2.jsx)(`path`, { d: `M7.5 14.5c0-3.3 0-4.95 1.03-5.97C9.55 7.5 11.2 7.5 14.5 7.5s4.95 0 5.97 1.03c1.03 1.02 1.03 2.67 1.03 5.97s0 4.95-1.03 5.97c-1.02 1.03-2.67 1.03-5.97 1.03s-4.95 0-5.97-1.03C7.5 19.45 7.5 17.8 7.5 14.5Z` }), (0, i2.jsx)(`path`, { d: `M7.5 16.5c-1.4 0-2.1 0-2.66-.2a3 3 0 0 1-2.14-2.14c-.2-.57-.2-1.27-.2-2.66v-2c0-3.3 0-4.95 1.03-5.97C4.55 2.5 6.2 2.5 9.5 2.5h2c1.4 0 2.1 0 2.66.2a3 3 0 0 1 2.14 2.14c.2.57.2 1.27.2 2.66` })] });
var d = () => (0, i2.jsxs)(`svg`, { viewBox: `0 0 24 24`, ...a, children: [(0, i2.jsx)(`path`, { d: `M16.5 7.5S13.19 3 12 3 7.5 7.5 7.5 7.5M12 4v11` }), (0, i2.jsx)(`path`, { d: `M3 16.5v1.5A3 3 0 0 0 6 21h12a3 3 0 0 0 3-3v-1.5` })] });
var f = () => (0, i2.jsxs)(`svg`, { viewBox: `0 0 24 24`, ...a, children: [(0, i2.jsx)(`path`, { d: `m19.5 5.5-.62 10.03c-.16 2.56-.24 3.84-.88 4.76a4 4 0 0 1-1.2 1.13C15.84 22 14.56 22 12 22s-3.86 0-4.82-.59a4 4 0 0 1-1.2-1.13c-.64-.92-.72-2.2-.88-4.76L4.5 5.5` }), (0, i2.jsx)(`path`, { d: `M3 5.5h18M16.06 5.5l-.69-1.41c-.45-.94-.68-1.4-1.07-1.7a2 2 0 0 0-.27-.17C13.6 2 13.07 2 12.03 2c-1.06 0-1.6 0-2.04.23a2 2 0 0 0-.27.18c-.4.3-.62.79-1.06 1.76L8.05 5.5M9.5 16.5v-6M14.5 16.5v-6` })] });
var p = () => (0, i2.jsx)(`svg`, { viewBox: `0 0 24 24`, ...a, children: (0, i2.jsx)(`path`, { d: `M5 14l3.5 3.5L19 6.5` }) });
function m(e = 1600) {
  let [t, n3] = (0, r.useState)(false), i3 = (0, r.useRef)(void 0);
  return (0, r.useEffect)(() => () => clearTimeout(i3.current), []), [t, () => {
    clearTimeout(i3.current), n3(true), i3.current = window.setTimeout(() => n3(false), e);
  }];
}
function h({ children: e }) {
  let t = (0, r.useRef)(null), [n3, a2] = (0, r.useState)(0);
  return (0, r.useLayoutEffect)(() => {
    let e2 = t.current?.firstElementChild;
    if (!e2) return;
    let r2 = e2.getBoundingClientRect().width;
    r2 > n3 && a2(r2);
  }), (0, i2.jsx)(`span`, { ref: t, className: `button-demo__slot`, style: { minWidth: n3 || void 0 }, children: e });
}
function g() {
  let [e, t] = (0, r.useState)(`idle`);
  return (0, r.useEffect)(() => {
    if (e !== `loading`) return;
    let n3 = window.setTimeout(() => t(`done`), 1600);
    return () => clearTimeout(n3);
  }, [e]), (0, i2.jsxs)(`div`, { className: `button-demo__row button-demo__compact`, children: [(0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `ghost`, onClick: () => t(`idle`), children: `Cancel` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, icon: e === `done` ? (0, i2.jsx)(p, {}) : (0, i2.jsx)(d, {}), loading: e === `loading`, onClick: () => t((e2) => e2 === `idle` ? `loading` : e2), children: e === `done` ? `Done` : `Upload` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { iconRight: (0, i2.jsx)(o, {}), children: `Send` }) })] });
}
function _() {
  let [e, t] = m(), [a2, o2] = m(), [g2, _2] = (0, r.useState)(`idle`);
  return (0, r.useEffect)(() => {
    if (g2 !== `loading`) return;
    let e2 = window.setTimeout(() => _2(`done`), 1800);
    return () => clearTimeout(e2);
  }, [g2]), (0, i2.jsxs)(`div`, { className: `button-demo__showcase`, children: [(0, i2.jsxs)(`section`, { children: [(0, i2.jsx)(`h4`, { children: `Styles` }), (0, i2.jsxs)(`div`, { className: `button-demo__row`, children: [(0, i2.jsx)(h, { children: (0, i2.jsx)(i, { children: `Save changes` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, children: `Secondary` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `ghost`, children: `Ghost` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `destructive`, icon: (0, i2.jsx)(f, {}), children: `Delete` }) })] })] }), (0, i2.jsxs)(`section`, { children: [(0, i2.jsx)(`h4`, { children: `Icons and sizes` }), (0, i2.jsxs)(`div`, { className: `button-demo__row`, children: [(0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, size: `sm`, icon: (0, i2.jsx)(c, {}), children: `Add item` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { iconRight: (0, i2.jsx)(s, {}), children: `Continue` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `ghost`, icon: (0, i2.jsx)(l, {}), "aria-label": `More options` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, size: `lg`, children: `Large` }) })] })] }), (0, i2.jsxs)(`section`, { children: [(0, i2.jsx)(`h4`, { children: `Feedback and states` }), (0, i2.jsxs)(`div`, { className: `button-demo__row`, children: [(0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, icon: e ? (0, i2.jsx)(p, {}) : (0, i2.jsx)(u, {}), onClick: t, children: e ? `Copied` : `Copy link` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, icon: a2 ? (0, i2.jsx)(p, {}) : (0, i2.jsx)(u, {}), "aria-label": a2 ? `Copied` : `Copy`, onClick: o2 }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, icon: g2 === `done` ? (0, i2.jsx)(p, {}) : (0, i2.jsx)(d, {}), loading: g2 === `loading`, onClick: () => _2((e2) => e2 === `loading` ? e2 : `loading`), children: `Upload file` }) }), (0, i2.jsx)(h, { children: (0, i2.jsx)(i, { variant: `secondary`, disabled: true, children: `Disabled` }) })] }), (0, i2.jsx)(`p`, { className: `button-demo__status`, "aria-live": `polite`, children: g2 === `loading` ? `Uploading\u2026` : g2 === `done` ? `Upload complete` : ` ` })] })] });
}
function v() {
  return (0, i2.jsxs)(`div`, { className: `button-demo`, children: [(0, i2.jsx)(g, {}), (0, i2.jsx)(_, {})] });
}
export {
  v as default
};
