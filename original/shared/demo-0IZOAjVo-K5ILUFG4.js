import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/demo-0IZOAjVo.js
init_react_BkAXpnfr();
var n3 = n();
var r = n2();
function i(e) {
  let t = Array.from(e), n4 = [], r2 = 0, i2 = 0;
  for (let e2 = t.length - 1; e2 >= 0; e2--) {
    let a2 = t[e2];
    a2 >= `0` && a2 <= `9` ? n4.unshift({ key: `d${r2++}`, digit: a2.charCodeAt(0) - 48 }) : n4.unshift({ key: `s${i2++}`, char: a2 });
  }
  return n4;
}
var a = (e) => (e % 10 + 10) % 10;
var o = (e) => 1 - (1 - e) ** 4;
var s = (e, t) => {
  e.style.transform = `translateY(${-a(t) / 11 * 100}%)`;
};
function c({ value: e, format: t, locale: c2, duration: u2 = 900, delay: d2 = 0, className: f2 }) {
  let p2 = JSON.stringify(t ?? {}), m = (0, n3.useMemo)(() => new Intl.NumberFormat(c2, t).format(e), [e, c2, p2]), h = (0, n3.useMemo)(() => i(m), [m]), g = (0, n3.useRef)(null), _ = (0, n3.useRef)(/* @__PURE__ */ new Map()), v = (0, n3.useRef)(/* @__PURE__ */ new Map()), y = (0, n3.useRef)(0), b = (0, n3.useRef)(true), x = (0, n3.useRef)(false), S = (0, n3.useRef)(/* @__PURE__ */ new Set()), C = (0, n3.useRef)(/* @__PURE__ */ new Set()), [w, T] = (0, n3.useState)(false), E = new Set(h.filter((e2) => `digit` in e2).map((e2) => e2.key));
  for (let e2 of E) x.current && !C.current.has(e2) && S.current.add(e2);
  for (let e2 of S.current) E.has(e2) || S.current.delete(e2);
  return C.current = E, (0, n3.useEffect)(() => {
    x.current = true;
    let e2 = g.current;
    if (!e2 || typeof IntersectionObserver > `u`) {
      T(true);
      return;
    }
    let t2 = 0, n4 = new IntersectionObserver(([e3]) => {
      e3.isIntersecting && (n4.disconnect(), t2 = window.setTimeout(() => T(true), d2));
    }, { threshold: 0.3 });
    return n4.observe(e2), () => {
      n4.disconnect(), clearTimeout(t2);
    };
  }, []), (0, n3.useEffect)(() => {
    if (!w) return;
    e !== y.current && (b.current = e > y.current), y.current = e;
    let t2 = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches, n4 = /* @__PURE__ */ new Set();
    for (let e2 of h) {
      if (!(`digit` in e2)) continue;
      n4.add(e2.key);
      let r3 = _.current.get(e2.key) ?? { pos: 0, from: 0, to: 0 }, i3 = b.current ? a(e2.digit - r3.pos) : -a(r3.pos - e2.digit);
      r3.from = r3.pos, r3.to = r3.pos + i3, t2 && (r3.pos = r3.from = r3.to), _.current.set(e2.key, r3);
    }
    for (let e2 of _.current.keys()) n4.has(e2) || _.current.delete(e2);
    let r2 = () => {
      for (let [e2, t3] of _.current) {
        let n5 = v.current.get(e2);
        n5 && s(n5, t3.pos);
      }
    };
    if (t2) return r2();
    let i2 = 0, c3 = performance.now(), l2 = (e2) => {
      let t3 = Math.min(1, (e2 - c3) / u2), n5 = o(t3);
      for (let e3 of _.current.values()) e3.pos = e3.from + (e3.to - e3.from) * n5;
      r2(), t3 < 1 && (i2 = requestAnimationFrame(l2));
    };
    return i2 = requestAnimationFrame(l2), () => cancelAnimationFrame(i2);
  }, [h, w, e, u2]), (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`style`, { href: `ui-number-ticker`, precedence: `default`, children: l }), (0, r.jsxs)(`span`, { ref: g, className: [`ui-nt`, f2].filter(Boolean).join(` `), "aria-live": `polite`, children: [(0, r.jsx)(`span`, { className: `ui-nt__sr`, children: m }), (0, r.jsx)(`span`, { className: `ui-nt__track`, "aria-hidden": `true`, children: h.map((e2) => `digit` in e2 ? (0, r.jsx)(`span`, { className: `ui-nt__col`, "data-enter": S.current.has(e2.key) || void 0, children: (0, r.jsx)(`span`, { className: `ui-nt__stack`, ref: (t2) => {
    if (t2) return v.current.set(e2.key, t2), s(t2, _.current.get(e2.key)?.pos ?? 0), () => {
      v.current.get(e2.key) === t2 && v.current.delete(e2.key);
    };
  }, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e3, t2) => (0, r.jsx)(`span`, { className: `ui-nt__cell`, children: e3 }, t2)) }) }, e2.key) : (0, r.jsx)(`span`, { className: `ui-nt__static`, children: e2.char }, e2.key)) })] })] });
}
var l = `
.ui-nt {
  --ui-nt-lh: 1.15em;
  --ui-nt-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: inline-flex;
  line-height: var(--ui-nt-lh);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-nt__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.ui-nt__track {
  display: inline-flex;
  align-items: flex-start;
  height: var(--ui-nt-lh);
  line-height: var(--ui-nt-lh);
}
.ui-nt__col {
  display: inline-block;
  height: var(--ui-nt-lh);
  overflow: hidden;
  /* Soft top and bottom edges while digits pass through */
  -webkit-mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
  mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent);
}
.ui-nt__col[data-enter] { animation: ui-nt-in 450ms var(--ui-nt-ease) both; }
.ui-nt__stack {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.ui-nt__cell,
.ui-nt__static {
  display: block;
  height: var(--ui-nt-lh);
  text-align: center;
}
.ui-nt__static { white-space: pre; }

@keyframes ui-nt-in {
  from { opacity: 0; transform: translateY(-35%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-nt__col[data-enter] { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html>.
   The ticker inherits its color, so nothing needs to change here. */
:where(.dark, [data-theme="dark"]) .ui-nt {
  --ui-nt-lh: 1.15em;
}
`;
var u = { style: `currency`, currency: `USD`, maximumFractionDigits: 0 };
var d = { style: `percent`, minimumFractionDigits: 1, maximumFractionDigits: 1, signDisplay: `exceptZero` };
var f = (e, t) => Math.round(e + Math.random() * (t - e));
function p() {
  let [e, t] = (0, n3.useState)(48240), [i2, a2] = (0, n3.useState)(0.124), o2 = (e2) => {
    t((t2) => Math.max(0, t2 + e2 * f(600, 6400))), a2((t2) => Math.round((t2 + e2 * f(8, 46) / 1e3) * 1e3) / 1e3);
  };
  return (0, r.jsx)(`div`, { className: `number-ticker-demo`, children: (0, r.jsxs)(`div`, { className: `ntd-card`, children: [(0, r.jsxs)(`div`, { className: `ntd-head`, children: [(0, r.jsx)(`span`, { className: `ntd-label`, children: `Revenue` }), (0, r.jsx)(`span`, { className: `ntd-period`, children: `This month` })] }), (0, r.jsx)(`div`, { className: `ntd-value`, children: (0, r.jsx)(c, { value: e, format: u, locale: `en-US` }) }), (0, r.jsxs)(`div`, { className: `ntd-meta`, children: [(0, r.jsxs)(`span`, { className: `ntd-delta`, "data-down": i2 < 0 || void 0, children: [(0, r.jsx)(`svg`, { viewBox: `0 0 12 12`, width: `10`, height: `10`, "aria-hidden": `true`, children: (0, r.jsx)(`path`, { d: `M6 2.5v7M2.75 5.75 6 2.5l3.25 3.25`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.6`, strokeLinecap: `round`, strokeLinejoin: `round` }) }), (0, r.jsx)(c, { value: i2, format: d, locale: `en-US`, duration: 700, delay: 150 })] }), (0, r.jsx)(`span`, { className: `ntd-vs`, children: `vs last month` })] }), (0, r.jsxs)(`div`, { className: `ntd-actions`, children: [(0, r.jsx)(`button`, { type: `button`, className: `ntd-btn`, "aria-label": `Decrease revenue`, onClick: () => o2(-1), children: `\u2212` }), (0, r.jsx)(`button`, { type: `button`, className: `ntd-btn`, "aria-label": `Increase revenue`, onClick: () => o2(1), children: `+` })] })] }) });
}
export {
  p as default
};
